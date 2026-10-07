import React from 'react';
import { RumahGadangSvg } from './RumahGadangSvg';
import { SongketDivider } from './SongketDivider';

export const ClosingSection: React.FC = () => {
  return (
    <section className="py-20 px-4 relative text-center">
      <div className="max-w-md mx-auto">
        {/* Minang Pantun Box */}
        <div className="p-6 rounded-3xl bg-[#2A070F]/80 border border-[#ECC265]/30 shadow-xl backdrop-blur-sm mb-12">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#ECC265] font-cinzel mb-3">
            Pepatah Minangkabau
          </p>
          <div className="font-playfair text-xs sm:text-sm text-amber-100/90 italic space-y-1 leading-relaxed">
            <p>“Anak daro jo marapulai,</p>
            <p>Lah duduak basandiang duo.</p>
            <p>Saciok bak ayam, sadanciang bak basi,</p>
            <p>Samo manjago cinto nan suci.”</p>
          </div>
        </div>

        {/* Closing words */}
        <div className="space-y-4 mb-10">
          <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed font-light px-2">
            Ungkapan terima kasih yang tulus dan mendalam dari kami atas segala doa restu serta keikhlasan Bapak/Ibu/Saudara/i yang telah meluangkan waktu untuk hadir.
          </p>

          <p className="text-xs uppercase tracking-widest text-[#ECC265] font-cinzel pt-2">
            Wassalamu’alaikum Warahmatullahi Wabarakatuh
          </p>
        </div>

        {/* Keluarga Besar */}
        <div className="p-6 rounded-3xl bg-gradient-to-b from-[#330811] to-[#1C0408] border border-[#ECC265]/30 shadow-lg mb-10 text-center">
          <p className="text-[11px] uppercase tracking-widest text-[#ECC265] font-cinzel mb-3">
            Kami yang Berbahagia:
          </p>
          
          <div className="space-y-3 font-serif">
            <div>
              <p className="text-sm font-semibold text-[#FEF3C7]">
                Keluarga Bpk. H. Kana &amp; Ibu Hj. Ermi Deti (almh)
              </p>
              <p className="text-xs text-amber-300/70">
                (Keluarga Mempelai Pria)
              </p>
            </div>

            <div className="w-8 h-[1px] bg-[#ECC265]/30 mx-auto" />

            <div>
              <p className="text-sm font-semibold text-[#FEF3C7]">
                Keluarga Bpk. Isrofil Zaelani (alm) &amp; Ibu Rohati
              </p>
              <p className="text-xs text-amber-300/70">
                (Keluarga Mempelai Wanita)
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#ECC265]/20">
            <h3 className="font-playfair text-2xl font-bold text-gold-gradient">
              Iqbal &amp; Syalwa
            </h3>
          </div>
        </div>

        {/* Rumah Gadang Siluet Closing */}
        <div className="w-full max-w-xs mx-auto mb-6 opacity-75">
          <RumahGadangSvg glow={false} className="w-full max-h-32 mx-auto" />
        </div>

        <p className="text-[10px] text-amber-200/40 font-mono tracking-widest uppercase">
          The Wedding of Iqbal &amp; Syalwa &bull; 22.11.2026
        </p>
      </div>
    </section>
  );
};
