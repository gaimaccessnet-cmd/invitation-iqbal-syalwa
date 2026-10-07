import React, { useState } from 'react';
import { Mail, Sparkles } from 'lucide-react';
import { RumahGadangSvg } from './RumahGadangSvg';
import confetti from 'canvas-confetti';

interface OpeningEnvelopeProps {
  onOpen: () => void;
  guestName: string;
}

export const OpeningEnvelope: React.FC<OpeningEnvelopeProps> = ({ onOpen, guestName }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);
    
    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 55,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#ECC265', '#B45309', '#FDFBF7'],
      });
    } catch {
      // Ignore if confetti not supported
    }

    setTimeout(() => {
      onOpen();
    }, 700);
  };

  // Format guest name lines if contains '&' or newlines
  const formattedNameLines = guestName.split(/\r?\n|(?=\s&\s)|\s(?=&)/).map(s => s.trim()).filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#170508] bg-songket-pattern overflow-y-auto px-4 py-8">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#33080F]/90 via-[#1C0408]/95 to-[#0E0204] pointer-events-none" />

      {/* Decorative Traditional Corner Accents */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37]/60 pointer-events-none" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#D4AF37]/60 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#D4AF37]/60 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]/60 pointer-events-none" />

      {/* Main Envelope Card */}
      <div
        className={`relative w-full max-w-md mx-auto my-auto rounded-3xl bg-gradient-to-b from-[#2B0810] to-[#190306] border-2 border-[#ECC265]/40 p-6 sm:p-8 text-center shadow-2xl shadow-black/80 transition-all duration-700 ${
          isOpening ? 'scale-95 opacity-0 blur-sm translate-y-4' : 'scale-100 opacity-100'
        }`}
      >
        {/* Subtle Songket Motif Top Header */}
        <div className="flex items-center justify-center gap-1.5 mb-2 text-[#ECC265]/70">
          <span className="text-xs tracking-[0.3em] uppercase font-cinzel">Walimatul 'Ursy</span>
        </div>

        {/* Rumah Gadang Siluet Motif */}
        <div className="my-2 px-6">
          <RumahGadangSvg glow={true} className="w-full max-h-36 mx-auto drop-shadow-[0_4px_16px_rgba(212,175,55,0.25)]" />
        </div>

        <p className="text-xs sm:text-sm font-light text-amber-200/80 tracking-widest uppercase mb-1 font-sans">
          The Wedding Celebration of
        </p>

        {/* Couple Names */}
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-gold-gradient tracking-wide mb-1">
          Iqbal &amp; Syalwa
        </h1>

        <div className="flex items-center justify-center gap-3 my-3">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="text-xs text-amber-300 font-cinzel tracking-wider">
            22 . 11 . 2026
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* Kepada Yth / Guest Card */}
        <div className="my-5 rounded-2xl bg-[#3D0A14]/80 border border-[#D4AF37]/40 p-4 sm:p-5 shadow-inner backdrop-blur-sm relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 w-16 h-16 border border-[#ECC265]/10 rounded-full pointer-events-none" />
          
          <p className="text-xs text-amber-200/75 tracking-wider uppercase font-medium mb-2">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>

          {/* Guest Name Presentation (e.g. Samsul & Partner) */}
          <div className="space-y-0.5 py-1">
            {formattedNameLines.map((line, index) => (
              <div
                key={index}
                className={`${
                  line === '&'
                    ? 'font-vibes text-2xl text-[#FCD34D] py-0.5'
                    : 'font-cinzel text-lg sm:text-xl font-bold text-[#FFF5E1] tracking-wide'
                }`}
              >
                {line}
              </div>
            ))}
          </div>

          <p className="text-[11px] text-amber-200/60 mt-3 italic font-sans">
            *Mohon maaf apabila ada kesalahan penulisan nama dan gelar
          </p>
        </div>

        {/* Open Invitation Button */}
        <button
          onClick={handleOpenClick}
          className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#ECC265] via-[#D4AF37] to-[#B45309] p-[1.5px] font-medium shadow-lg shadow-[#D4AF37]/20 transition-all hover:shadow-[#D4AF37]/40 active:scale-95"
        >
          <div className="flex items-center justify-center gap-2.5 rounded-[10px] bg-gradient-to-r from-[#6B1220] via-[#520D17] to-[#6B1220] px-6 py-3.5 text-sm sm:text-base font-semibold text-[#FEF3C7] transition-all group-hover:bg-opacity-90">
            <Mail className="w-4 h-4 text-[#FDE68A] transition-transform group-hover:rotate-6" />
            <span className="tracking-wide">Buka Undangan</span>
            <Sparkles className="w-4 h-4 text-[#FDE68A] animate-pulse" />
          </div>
        </button>
      </div>
    </div>
  );
};
