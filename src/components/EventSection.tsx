import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { SongketDivider } from './SongketDivider';

export const EventSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const mapsUrl = 'https://maps.google.com/maps/search/Gedung%20IKRARS/@-6.24904366,106.73454095,17z?hl=id';
  const fullAddress = 'Gedung IKRARS, Jl. Nuri No. 16 Rt 04 Rw 03 Komp. Pajak Cipadu Jaya, Jl. KH. Wahid Hasyim Cipadu, Larangan - Kota Tangerang';

  const handleCopyAddress = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(fullAddress);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  return (
    <section id="acara" className="py-16 px-4 relative text-center">
      <div className="max-w-md mx-auto">
        <div className="space-y-2 mb-10">
          <p className="text-xs tracking-[0.25em] text-[#ECC265] uppercase font-cinzel">
            Waktu &amp; Lokasi
          </p>
          <h2 className="font-playfair text-3xl font-bold text-amber-100">
            Agenda Acara
          </h2>
          <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed font-light">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
          </p>
        </div>

        {/* Resepsi Event Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#330811] via-[#22050B] to-[#160205] border-2 border-[#ECC265]/40 shadow-2xl relative overflow-hidden text-center">
          {/* Top traditional crown accent */}
          <div className="flex justify-center mb-4 text-[#ECC265]">
            <svg viewBox="0 0 64 24" className="w-16 h-6" fill="currentColor">
              <path d="M0 24 C20 20, 24 4, 32 0 C40 4, 44 20, 64 24 Z" />
            </svg>
          </div>

          <p className="text-xs uppercase tracking-[0.2em] text-[#ECC265] font-cinzel mb-1">
            Walimatul 'Ursy
          </p>
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-gold-gradient mb-6">
            Resepsi Pernikahan
          </h3>

          {/* Date & Time Grid */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#450C16]/80 border border-[#ECC265]/20 text-left">
              <div className="p-2.5 rounded-lg bg-[#5A101C] text-[#ECC265] shrink-0 border border-[#ECC265]/30">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-amber-200/70 uppercase tracking-wider font-cinzel">
                  Hari &amp; Tanggal
                </p>
                <p className="text-sm sm:text-base font-semibold text-[#FEF3C7] font-serif">
                  Minggu, 22 November 2026
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#450C16]/80 border border-[#ECC265]/20 text-left">
              <div className="p-2.5 rounded-lg bg-[#5A101C] text-[#ECC265] shrink-0 border border-[#ECC265]/30">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-amber-200/70 uppercase tracking-wider font-cinzel">
                  Waktu Resepsi
                </p>
                <p className="text-sm sm:text-base font-semibold text-[#FEF3C7] font-serif">
                  11:00 WIB s/d 18:00 WIB
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#450C16]/80 border border-[#ECC265]/20 text-left">
              <div className="p-2.5 rounded-lg bg-[#5A101C] text-[#ECC265] shrink-0 border border-[#ECC265]/30 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-amber-200/70 uppercase tracking-wider font-cinzel">
                  Bertempat di
                </p>
                <p className="text-base font-bold text-[#FDE68A] font-serif">
                  Gedung IKRARS
                </p>
                <p className="text-xs text-amber-100/80 leading-relaxed mt-1">
                  Jl. Nuri No. 16 Rt 04 Rw 03 Komp. Pajak Cipadu Jaya,
                  <br />
                  Jl. KH. Wahid Hasyim Cipadu, Larangan - Kota Tangerang
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#ECC265] via-[#D4AF37] to-[#B45309] text-[#1F0409] font-bold text-sm shadow-lg shadow-[#D4AF37]/25 hover:brightness-110 active:scale-95 transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>Buka Petunjuk Arah (Google Maps)</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
            </a>

            <button
              onClick={handleCopyAddress}
              type="button"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#3D0A14] hover:bg-[#4E0D1A] text-amber-200 text-xs font-medium border border-[#ECC265]/30 transition-all active:scale-95"
            >
              {copiedAddress ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-300">Alamat Berhasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#ECC265]" />
                  <span>Salin Alamat Lengkap</span>
                </>
              )}
            </button>
          </div>

          {/* Embedded Google Maps View */}
          <div className="mt-6 rounded-2xl overflow-hidden border border-[#ECC265]/30 shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1950711927906!2d106.73454095!3d-6.24904366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0e15bbd5641%3A0xe54d6fa7c20ad763!2sGedung%20IKRARS!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
              width="100%"
              height="230"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Gedung IKRARS"
              className="w-full grayscale-[20%] contrast-110"
            />
          </div>
        </div>

        <SongketDivider variant="simple" />
      </div>
    </section>
  );
};
