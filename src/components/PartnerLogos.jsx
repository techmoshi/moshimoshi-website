"use client";

export default function PartnerLogos() {
  return (
    <>
      <div className="flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity duration-300 h-8 min-w-[120px]">
        <svg viewBox="0 0 100 30" className="h-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="22" fontSize="22" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="-0.02em">Uber</text>
        </svg>
      </div>
      <div className="flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity duration-300 h-8 min-w-[120px]">
        <svg viewBox="0 0 120 30" className="h-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="9" stroke="currentColor" strokeWidth="2.5" fill="none"/>
          <path d="M15 9V15H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <text x="36" y="22" fontSize="18" fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing="0.12em">TITAN</text>
        </svg>
      </div>
      <div className="flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity duration-300 h-8 min-w-[120px]">
        <svg viewBox="0 0 120 30" className="h-7 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="22" fontSize="22" fontWeight="bold" fontStyle="italic" fontFamily="Georgia, serif">Godrej</text>
        </svg>
      </div>
      <div className="flex items-center justify-center text-white/30 font-black text-xl hover:text-white transition-colors h-8 min-w-[120px] text-center font-body-md select-none">
        RAPIDO
      </div>
      <div className="flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity duration-300 h-8 min-w-[120px]">
        <svg viewBox="0 0 100 30" className="h-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="22" fontSize="24" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="-0.05em">VRL</text>
        </svg>
      </div>
    </>
  );
}
