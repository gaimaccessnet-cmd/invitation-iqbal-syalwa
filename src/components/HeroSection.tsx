import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Bell } from 'lucide-react';
import { RumahGadangSvg } from './RumahGadangSvg';
import { SongketDivider } from './SongketDivider';

export const HeroSection: React.FC = () => {
  // Target: 22 November 2026, 11:00:00 WIB (UTC+7)
  const targetDate = new Date('2026-11-22T11:00:00+07:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleAddToCalendar = () => {
    // Google Calendar Event Link
    const title = encodeURIComponent('Pernikahan Iqbal Jayadi & Syalwa Al Adawiyah');
    const details = encodeURIComponent(
      'Resepsi Pernikahan Iqbal Jayadi, S.Kom & Syalwa Al Adawiyah di Gedung IKRARS Tangerang.'
    );
    const location = encodeURIComponent('Gedung IKRARS, Jl. Nuri No. 16 Komp. Pajak Cipadu Jaya, Cipadu, Larangan, Kota Tangerang');
    // Start: 20261122T040000Z (11:00 WIB), End: 20261122T110000Z (18:00 WIB)
    const dates = '20261122T040000Z/20261122T110000Z';
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;

    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-10 pb-16 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#991B1B]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Traditional Minang Gonjong Emblem */}
      <div className="w-full max-w-sm mx-auto mb-4 px-2">
        <RumahGadangSvg glow={true} className="w-full max-h-44 mx-auto" />
      </div>

      <div className="space-y-2">
        <p className="text-xs tracking-[0.35em] text-[#ECC265] uppercase font-cinzel">
          Walimatul 'Ursy
        </p>
        <p className="font-brush text-2xl sm:text-3xl text-amber-200/90">
          The Wedding of
        </p>
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-gold-gradient tracking-wide py-2">
          Iqbal &amp; Syalwa
        </h1>
      </div>

      <SongketDivider variant="elaborate" className="w-full max-w-xs mx-auto" />

      {/* Date badge */}
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#3D0A14]/90 border border-[#ECC265]/40 text-amber-100 shadow-md my-2">
        <Calendar className="w-4 h-4 text-[#ECC265]" />
        <span className="font-cinzel text-sm sm:text-base font-semibold tracking-wider">
          Minggu, 22 November 2026
        </span>
      </div>

      <p className="text-xs sm:text-sm text-amber-200/80 max-w-xs mx-auto mt-2 font-light">
        Gedung IKRARS, Cipadu Jaya - Kota Tangerang
      </p>

      {/* Countdown Box */}
      <div className="w-full max-w-md mx-auto mt-8 p-5 rounded-2xl bg-gradient-to-b from-[#2E070F]/90 to-[#180306]/95 border border-[#ECC265]/30 shadow-xl backdrop-blur-sm">
        <p className="text-xs uppercase tracking-widest text-[#ECC265] font-cinzel mb-4">
          Menghitung Hari Menuju Hari Bahagia
        </p>

        <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
          <div className="p-2 sm:p-3 rounded-xl bg-[#450C16]/80 border border-[#D4AF37]/30">
            <span className="block font-playfair text-2xl sm:text-3xl font-bold text-[#FDE68A]">
              {timeLeft.days}
            </span>
            <span className="text-[10px] sm:text-xs text-amber-200/70 uppercase tracking-wider font-sans">
              Hari
            </span>
          </div>

          <div className="p-2 sm:p-3 rounded-xl bg-[#450C16]/80 border border-[#D4AF37]/30">
            <span className="block font-playfair text-2xl sm:text-3xl font-bold text-[#FDE68A]">
              {timeLeft.hours}
            </span>
            <span className="text-[10px] sm:text-xs text-amber-200/70 uppercase tracking-wider font-sans">
              Jam
            </span>
          </div>

          <div className="p-2 sm:p-3 rounded-xl bg-[#450C16]/80 border border-[#D4AF37]/30">
            <span className="block font-playfair text-2xl sm:text-3xl font-bold text-[#FDE68A]">
              {timeLeft.minutes}
            </span>
            <span className="text-[10px] sm:text-xs text-amber-200/70 uppercase tracking-wider font-sans">
              Menit
            </span>
          </div>

          <div className="p-2 sm:p-3 rounded-xl bg-[#450C16]/80 border border-[#D4AF37]/30">
            <span className="block font-playfair text-2xl sm:text-3xl font-bold text-[#FDE68A]">
              {timeLeft.seconds}
            </span>
            <span className="text-[10px] sm:text-xs text-amber-200/70 uppercase tracking-wider font-sans">
              Detik
            </span>
          </div>
        </div>

        <button
          onClick={handleAddToCalendar}
          type="button"
          className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B45309] text-[#1F0409] font-semibold text-xs sm:text-sm tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all w-full sm:w-auto"
        >
          <Bell className="w-4 h-4" />
          <span>Simpan ke Google Calendar</span>
        </button>
      </div>
    </section>
  );
};
