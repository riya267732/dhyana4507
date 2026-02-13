
import React from 'react';

export const Logo: React.FC<{ className?: string; color?: string }> = ({ className = "h-8", color = "currentColor" }) => {
  return (
    <div className={`flex items-center gap-2 font-black tracking-tighter uppercase ${className}`}>
      <span className="text-2xl md:text-3xl">HOOP</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2.5"/>
        <path d="M12 21V12M12 12L18.5 15.5M12 12L5.5 15.5M12 12V3M12 12L18.5 8.5M12 12L5.5 8.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
};
