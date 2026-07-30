"use client";

import { useEffect } from "react";

export default function ClientInteractions() {
  useEffect(() => {
    // 1. Mouse Glow for Glass Cards
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    const cards = document.querySelectorAll(".glass-card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
    });

    // 2. Smooth Header Scroll Hide/Show
    let lastScroll = 0;
    const nav = document.querySelector("nav");
    const handleScroll = () => {
      const currentScroll = window.scrollY || window.pageYOffset;
      if (!nav) return;
      
      if (currentScroll <= 0) {
        nav.classList.remove("-translate-y-full");
        nav.classList.remove("bg-surface/90");
      } else if (currentScroll > lastScroll && currentScroll > 100) {
        nav.classList.add("-translate-y-full");
      } else {
        nav.classList.remove("-translate-y-full");
        nav.classList.add("bg-surface/90");
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
