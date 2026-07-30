"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Stefan Gustavson's Simplex 3D Noise GLSL shader implementation
const vertexShaderCode = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uNoiseStrength;
  uniform float uNoiseDensity;
  uniform float uNoiseSpeed;

  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vViewPosition;

  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
  }

  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289(i);
    vec4 p = permute(permute(permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1),
                                  dot(p2, x2), dot(p3, x3)));
  }

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    
    // Wave movement depends on noise coordinates + time + slight mouse offset
    vec3 noiseInput = position * uNoiseDensity + vec3(uMouse.x * 0.3, uMouse.y * 0.3, uTime * uNoiseSpeed);
    float displacement = snoise(noiseInput) * uNoiseStrength;
    
    vec3 displacedPosition = position + normal * displacement;
    
    vec4 modelViewPosition = modelViewMatrix * vec4(displacedPosition, 1.0);
    vViewPosition = -modelViewPosition.xyz;
    
    gl_Position = projectionMatrix * modelViewPosition;
  }
`;

const fragmentShaderCode = `
  uniform float uTime;
  uniform vec2 uMouse;

  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vViewPosition;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(vViewPosition);
    
    // Fresnel glass reflection factor
    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
    
    // Color palettes matching Moshi Moshi
    vec3 purpleColor = vec3(0.616, 0.314, 0.733);  // #9d50bb
    vec3 cyanColor = vec3(0.0, 0.863, 0.902);      // #00dce6
    vec3 pinkColor = vec3(0.929, 0.694, 1.0);      // #edb1ff
    
    // Base gradient shifts slightly with mouse inputs
    vec3 baseColor = mix(purpleColor, cyanColor, fresnel + uMouse.x * 0.15);
    
    // Edge highlights
    vec3 finalColor = mix(baseColor, pinkColor, fresnel * 0.8);
    
    // Specular light highlights
    vec3 lightDir = normalize(vec3(4.0, 4.0, 3.0));
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normal, halfDir), 0.0), 48.0);
    
    // Glow core refraction
    float innerGlow = max(dot(normal, viewDir), 0.0);
    innerGlow = pow(1.0 - innerGlow, 5.0) * 0.4;
    
    finalColor += vec3(1.0) * spec * 0.75;
    finalColor += pinkColor * innerGlow;
    
    // Clearer glass center with bright rim glow and specular opacity boost
    float alpha = mix(0.02, 0.82, fresnel) + spec * 0.45;
    
    gl_FragColor = vec4(finalColor, alpha);
  }
`;

function SceneElements({ mouse, scrollProgress, velocity }) {
  const torusRef = useRef();
  const coreRef = useRef();
  const particlesRef = useRef();
  const materialRef = useRef();
  const lerpedMouse = useRef({ x: 0, y: 0 });

  // Generate 800 static coordinates for our starfield dust particles
  const particleCount = 800;
  const positions = useMemo(() => {
    const coords = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      // Radial layout around center core
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const radius = 2.2 + Math.random() * 3.8; // Space radius bounds

      coords[i] = radius * Math.sin(phi) * Math.cos(theta);
      coords[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      coords[i + 2] = radius * Math.cos(phi);
    }
    return coords;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Mouse hover coordinates smooth lerping
    lerpedMouse.current.x += (mouse.x - lerpedMouse.current.x) * 0.08;
    lerpedMouse.current.y += (mouse.y - lerpedMouse.current.y) * 0.08;

    // --- Dynamic camera path flight ---
    // 0.0 -> Centered, Z = 5.0
    // 0.5 -> Zoomed deep inside hollow Torus ring, Z = 1.8
    // 1.0 -> Pulled back & shifted, Z = 5.8
    let targetZ = 5.0;
    let targetY = 0.0;
    let targetX = 0.0;

    if (scrollProgress < 0.5) {
      const t = scrollProgress / 0.5; // 0 to 1
      targetZ = THREE.MathUtils.lerp(5.0, 1.8, t);
      targetY = THREE.MathUtils.lerp(0.0, 0.15, t);
    } else {
      const t = (scrollProgress - 0.5) / 0.5; // 0 to 1
      targetZ = THREE.MathUtils.lerp(1.8, 5.8, t);
      targetX = THREE.MathUtils.lerp(0.0, -0.6, t);
      targetY = THREE.MathUtils.lerp(0.15, -0.3, t);
    }

    state.camera.position.z += (targetZ - state.camera.position.z) * 0.08;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.08;
    state.camera.position.x += (targetX - state.camera.position.x) * 0.08;
    
    state.camera.lookAt(
      lerpedMouse.current.x * 0.3,
      lerpedMouse.current.y * 0.3,
      0
    );

    // Update glass material uniforms (morphing factor based on scroll velocity)
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = time;
      materialRef.current.uniforms.uMouse.value.set(
        lerpedMouse.current.x,
        lerpedMouse.current.y
      );

      const scrollFactor = Math.min(Math.abs(velocity) * 0.5, 1.5);
      const targetStrength = 0.16 + scrollFactor * 0.28;
      const targetSpeed = 0.45 + scrollFactor * 1.8;

      materialRef.current.uniforms.uNoiseStrength.value += 
        (targetStrength - materialRef.current.uniforms.uNoiseStrength.value) * 0.15;
      materialRef.current.uniforms.uNoiseSpeed.value += 
        (targetSpeed - materialRef.current.uniforms.uNoiseSpeed.value) * 0.15;
    }

    // Spin Torus Knot mesh
    if (torusRef.current) {
      torusRef.current.rotation.y = time * 0.06 + scrollProgress * Math.PI * 1.2;
      torusRef.current.rotation.x = time * 0.04 + scrollProgress * Math.PI * 0.6;
      
      // Slightly scale up in final stage
      const scaleVal = 1.0 + Math.max(0, scrollProgress - 0.5) * 0.4;
      torusRef.current.scale.setScalar(scaleVal);
    }

    // Spin and pulse core sphere
    if (coreRef.current) {
      coreRef.current.rotation.y = -time * 0.15;
      const corePulse = 1.0 + Math.sin(time * 3.5) * 0.06;
      coreRef.current.scale.setScalar(corePulse);
    }

    // Swirl particles based on time + scroll progress
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.02 + scrollProgress * 0.8;
      particlesRef.current.rotation.x = time * 0.01;
    }
  });

  const uniforms = useRef({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uNoiseStrength: { value: 0.16 },
    uNoiseDensity: { value: 1.6 },
    uNoiseSpeed: { value: 0.45 },
  });

  return (
    <group>
      {/* 1. Main Morphed Torus Knot */}
      <mesh ref={torusRef}>
        <torusKnotGeometry args={[1.1, 0.28, 160, 16, 2, 3]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShaderCode}
          fragmentShader={fragmentShaderCode}
          uniforms={uniforms.current}
          transparent={true}
          depthWrite={false}
        />
      </mesh>

      {/* 2. Inner Glowing Core Sphere */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial
          color="#edb1ff"
          transparent={true}
          opacity={0.65}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* 3. Floating Space Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#00dce6"
          transparent={true}
          opacity={0.5}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function ThreeDOrb({ scrollProgress = 0, velocity = 0 }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [webglSupported, setWebglSupported] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const support = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
      setWebglSupported(support);
    } catch (e) {
      setWebglSupported(false);
    }

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[320px] h-[320px] md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-[80px]" />
      </div>
    );
  }

  if (!webglSupported) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[320px] h-[320px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-primary/30 to-tertiary/20 rounded-full blur-[80px] animate-pulse-slow" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-visible select-none">
      <div className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] bg-[#9d50bb]/15 rounded-full blur-[95px] pointer-events-none" />
      
      <div className="w-full h-full absolute inset-0 pointer-events-none">
        <Canvas
          gl={{ alpha: true, antialias: true }}
          style={{ background: "transparent", pointerEvents: "none" }}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[-4, 3, 3]} color="#9d50bb" intensity={3} />
          <pointLight position={[4, -3, 3]} color="#00dce6" intensity={3} />
          <pointLight position={[0, 4, -2]} color="#edb1ff" intensity={2} />
          
          <SceneElements mouse={mouse} scrollProgress={scrollProgress} velocity={velocity} />
        </Canvas>
      </div>
    </div>
  );
}
