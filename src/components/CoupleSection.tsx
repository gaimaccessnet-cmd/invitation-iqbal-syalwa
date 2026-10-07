import React from 'react';
import { Heart } from 'lucide-react';
import { SongketDivider } from './SongketDivider';

export const CoupleSection: React.FC = () => {
  return (
    <section id="pasangan" className="py-16 px-4 relative text-center">
      <div className="max-w-md mx-auto">
        {/* Ayat Suci & Bismillah */}
        <div className="mb-12 p-6 rounded-3xl bg-[#2A070F]/80 border border-[#ECC265]/30 shadow-xl backdrop-blur-sm relative">
          <p className="font-playfair text-xl sm:text-2xl text-gold-gradient font-bold mb-3 tracking-wide">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="text-xs sm:text-sm text-amber-100/90 italic font-playfair leading-relaxed mb-4">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
          </p>
          <p className="text-xs font-cinzel text-[#ECC265] font-semibold tracking-wider">
            (QS. Ar-Rum : 21)
          </p>
        </div>

        {/* Minang Greeting Heading */}
        <div className="space-y-2 mb-10">
          <p className="text-xs tracking-[0.25em] text-[#ECC265] uppercase font-cinzel">
            Mempelai Pernikahan
          </p>
          <h2 className="font-playfair text-3xl font-bold text-amber-100">
            Assalamu’alaikum Wr. Wb.
          </h2>
          <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed font-light px-2">
            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, serta restu dari kedua orang tua kami, kami bermaksud menyelenggarakan syukuran pernikahan putra-putri kami:
          </p>
        </div>

        {/* Groom Card */}
        <div className="mb-10 p-6 rounded-3xl bg-gradient-to-b from-[#330811] to-[#1C0408] border-2 border-[#ECC265]/40 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#ECC265]/5 rounded-bl-full pointer-events-none" />

          {/* Icon / Headdress Silhouette (Deta / Saluk Pria Minang) */}
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#5C101C] to-[#2B060D] border-2 border-[#ECC265] flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
            <svg viewBox="0 0 64 64" className="w-12 h-12 text-[#ECC265]" fill="currentColor">
              {/* Stylized Saluk / Deta Minangkabau */}
              <path d="M12 40 C14 26, 26 22, 32 18 C38 22, 50 26, 52 40 C44 46, 20 46, 12 40 Z" opacity="0.9" />
              <polygon points="32,8 37,18 27,18" fill="#FDE68A" />
              <path d="M10 40 L54 40 L50 48 L14 48 Z" fill="#D4AF37" />
              <circle cx="32" cy="52" r="3" fill="#FCD34D" />
            </svg>
          </div>

          <p className="text-[11px] uppercase tracking-[0.2em] text-[#ECC265] font-cinzel mb-1">
            Mempelai Pria
          </p>
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-gold-gradient mb-2">
            Iqbal Jayadi, S.Kom
          </h3>

          <div className="w-12 h-[1px] bg-[#ECC265]/40 mx-auto my-3" />

          <p className="text-xs text-amber-200/80 mb-1">
            Putra ke-enam dari:
          </p>
          <p className="text-sm font-semibold text-amber-100 font-serif">
            Bpk. H. Kana
          </p>
          <p className="text-sm font-semibold text-amber-100 font-serif">
            &amp; Ibu Hj. Ermi Deti <span className="text-xs font-normal text-amber-300/70">(almh)</span>
          </p>
        </div>

        {/* Ampersand Divider */}
        <div className="flex items-center justify-center my-6">
          <div className="w-12 h-12 rounded-full bg-[#520E19] border-2 border-[#ECC265] flex items-center justify-center shadow-md">
            <span className="font-vibes text-3xl text-gold-gradient font-bold -mt-1">&amp;</span>
          </div>
        </div>

        {/* Bride Card */}
        <div className="mb-10 p-6 rounded-3xl bg-gradient-to-b from-[#330811] to-[#1C0408] border-2 border-[#ECC265]/40 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-24 h-24 bg-[#ECC265]/5 rounded-br-full pointer-events-none" />

          {/* Icon / Headdress Silhouette (Suntiang Minangkabau) */}
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#5C101C] to-[#2B060D] border-2 border-[#ECC265] flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
            <svg viewBox="0 0 64 64" className="w-12 h-12 text-[#ECC265]" fill="currentColor">
              {/* Stylized Suntiang Minangkabau crown */}
              <path d="M12 38 C14 20, 24 14, 32 10 C40 14, 50 20, 52 38 Z" opacity="0.85" />
              <polygon points="32,6 35,12 29,12" fill="#FEF08A" />
              <polygon points="24,10 27,16 21,16" fill="#FDE68A" />
              <polygon points="40,10 43,16 37,16" fill="#FDE68A" />
              <polygon points="17,16 20,22 14,22" fill="#FCD34D" />
              <polygon points="47,16 50,22 44,22" fill="#FCD34D" />
              <path d="M10 40 L54 40 L48 46 L16 46 Z" fill="#D4AF37" />
              <circle cx="32" cy="50" r="3" fill="#FCD34D" />
            </svg>
          </div>

          <p className="text-[11px] uppercase tracking-[0.2em] text-[#ECC265] font-cinzel mb-1">
            Mempelai Wanita
          </p>
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-gold-gradient mb-2">
            Syalwa Al Adawiyah
          </h3>

          <div className="w-12 h-[1px] bg-[#ECC265]/40 mx-auto my-3" />

          <p className="text-xs text-amber-200/80 mb-1">
            Putri pertama dari:
          </p>
          <p className="text-sm font-semibold text-amber-100 font-serif">
            Bpk. Isrofil Zaelani <span className="text-xs font-normal text-amber-300/70">(alm)</span>
          </p>
          <p className="text-sm font-semibold text-amber-100 font-serif">
            &amp; Ibu Rohati
          </p>
        </div>

        <SongketDivider variant="pucuk-rebung" />
      </div>
    </section>
  );
};
