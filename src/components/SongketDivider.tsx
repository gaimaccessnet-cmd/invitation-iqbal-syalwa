import React from 'react';

interface SongketDividerProps {
  className?: string;
  variant?: 'simple' | 'elaborate' | 'pucuk-rebung';
}

export const SongketDivider: React.FC<SongketDividerProps> = ({
  className = '',
  variant = 'elaborate',
}) => {
  if (variant === 'simple') {
    return (
      <div className={`flex items-center justify-center gap-2 select-none py-3 ${className}`}>
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />
        <div className="w-2 h-2 rotate-45 border border-[#ECC265] bg-[#781424]" />
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]" />
      </div>
    );
  }

  if (variant === 'pucuk-rebung') {
    return (
      <div className={`flex items-center justify-center gap-1 select-none py-2 text-[#D4AF37] ${className}`}>
        {Array.from({ length: 9 }).map((_, i) => (
          <svg key={i} className="w-4 h-4 opacity-75" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,2 22,22 12,17 2,22" />
          </svg>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center gap-3 select-none py-4 ${className}`}>
      <div className="h-[1px] flex-1 max-w-[90px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
      
      <div className="flex items-center gap-1.5 text-[#ECC265]">
        <svg className="w-3.5 h-3.5 opacity-70" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,3 21,12 12,21 3,12" />
        </svg>
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15 8L22 12L15 16L12 22L9 16L2 12L9 8L12 2Z" />
        </svg>
        <svg className="w-3.5 h-3.5 opacity-70" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,3 21,12 12,21 3,12" />
        </svg>
      </div>

      <div className="h-[1px] flex-1 max-w-[90px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
    </div>
  );
};
