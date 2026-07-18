"use client";

export default function MoshiMoshiLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 28V12L18 22L26 12V28" stroke="url(#logo-grad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28 28V12L35 22L42 12V28" stroke="url(#logo-grad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="22" r="3" fill="#00dce6" />
      <circle cx="35" cy="22" r="3" fill="#edb1ff" />
      <defs>
        <linearGradient id="logo-grad" x1="10" y1="12" x2="42" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#edb1ff"/>
          <stop offset="0.5" stopColor="#9d50bb"/>
          <stop offset="1" stopColor="#00dce6"/>
        </linearGradient>
      </defs>
      <text x="56" y="27" fill="white" fontSize="19" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="0.05em">MOSHI MOSHI</text>
    </svg>
  );
}
