import React, { useState, useEffect } from 'react';
import { OpeningEnvelope } from './components/OpeningEnvelope';
import { HeroSection } from './components/HeroSection';
import { CoupleSection } from './components/CoupleSection';
import { EventSection } from './components/EventSection';
import { StorySection } from './components/StorySection';
import { GiftSection } from './components/GiftSection';
import { WishesSection } from './components/WishesSection';
import { ClosingSection } from './components/ClosingSection';
import { BottomNav } from './components/BottomNav';
import { MusicPlayer } from './components/MusicPlayer';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [guestName, setGuestName] = useState('Samsul\n&\nPartner');
  const [activeSection, setActiveSection] = useState('hero');

  // Read guest name from URL search parameter (?to=... or ?nama=... or ?u=...)
  useEffect(() => {
    try {
      const getParam = (paramName: string) => {
        const searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has(paramName)) return searchParams.get(paramName);
        if (window.location.hash.includes('?')) {
          const hashQuery = window.location.hash.substring(window.location.hash.indexOf('?') + 1);
          const hashParams = new URLSearchParams(hashQuery);
          if (hashParams.has(paramName)) return hashParams.get(paramName);
        }
        return null;
      };

      const toParam = getParam('to') || getParam('nama') || getParam('u');

      if (toParam && toParam.trim()) {
        const decoded = decodeURIComponent(toParam.replace(/\+/g, ' ').trim());
        // If string contains " & " or " and " or "\n", format into distinct lines
        if (decoded.includes('&') && !decoded.includes('\n')) {
          const parts = decoded.split('&').map((p) => p.trim());
          setGuestName(`${parts[0]}\n&\n${parts.slice(1).join(' & ')}`);
        } else {
          setGuestName(decoded);
        }
      } else {
        // Default sample requested by user:
        // Samsul
        // &
        // Partner
        setGuestName('Samsul\n&\nPartner');
      }
    } catch {
      setGuestName('Samsul\n&\nPartner');
    }
  }, []);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlayingMusic(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  // Observe active section on scroll
  useEffect(() => {
    if (!isOpen) return;

    const sections = ['hero', 'pasangan', 'acara', 'kisah', 'hadiah', 'ucapan'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <div className="min-h-screen bg-[#140306] text-[#FDFBF7] selection:bg-[#ECC265]/30 selection:text-[#FEF08A] relative">
      {/* Background Songket Traditional Texture Overlay */}
      <div className="fixed inset-0 bg-songket-pattern opacity-60 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-[#2B070F]/80 via-[#160205]/95 to-[#0D0103] pointer-events-none" />

      {/* Opening Envelope Screen (Modal view before opened) */}
      {!isOpen && (
        <OpeningEnvelope onOpen={handleOpenInvitation} guestName={guestName} />
      )}

      {/* Background YouTube Audio Player */}
      <MusicPlayer isPlaying={isPlayingMusic} onToggle={toggleMusic} />

      {/* Main Invitation Container (Max width for luxury mobile-first layout) */}
      <main className="relative max-w-lg mx-auto bg-gradient-to-b from-[#22050B] via-[#1A0307] to-[#120205] shadow-2xl shadow-black border-x border-[#ECC265]/20 pb-20 overflow-hidden">
        {/* Decorative Golden Top Ribbon */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#B45309] via-[#ECC265] to-[#B45309]" />

        {/* Hero / Cover Section */}
        <HeroSection />

        {/* Mempelai (The Couple) */}
        <CoupleSection />

        {/* Acara & Lokasi (Event Schedule & Google Maps) */}
        <EventSection />

        {/* Our Story (Perjalanan Cinta) */}
        <StorySection />

        {/* Wedding Gift (BCA Cashless only - no physical gift) */}
        <GiftSection />

        {/* Ucapan & Doa Restu (Buku Tamu / Wishes) */}
        <WishesSection guestName={guestName} />

        {/* Penutup & Keluarga Besar */}
        <ClosingSection />

        {/* Bottom Floating Navigation (Appears once invitation is opened) */}
        {isOpen && <BottomNav activeSection={activeSection} />}
      </main>
    </div>
  );
}
