import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onToggle }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeReady, setIframeReady] = useState(false);

  // Send play/pause commands to YouTube iframe via postMessage
  useEffect(() => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;

    const sendCommand = (func: string, args = '') => {
      try {
        iframeRef.current?.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func, args }),
          '*'
        );
      } catch {
        // Ignore cross-origin error
      }
    };

    if (isPlaying) {
      sendCommand('playVideo');
      sendCommand('unMute');
      sendCommand('setVolume', '100');

      // Retry after short delays to ensure iframe caught the command
      const timer1 = setTimeout(() => {
        sendCommand('playVideo');
      }, 500);

      const timer2 = setTimeout(() => {
        sendCommand('playVideo');
      }, 1500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      sendCommand('pauseVideo');
    }
  }, [isPlaying, iframeReady]);

  return (
    <>
      {/* Hidden YouTube Iframe for Background Audio */}
      <div className="fixed -top-[9999px] -left-[9999px] w-1 h-1 pointer-events-none opacity-0 overflow-hidden" aria-hidden="true">
        <iframe
          ref={iframeRef}
          id="yt-bgm-player"
          width="200"
          height="200"
          src="https://www.youtube.com/embed/mpL4Ap0FOaM?enablejsapi=1&autoplay=0&loop=1&playlist=mpL4Ap0FOaM&controls=0&playsinline=1"
          title="Backsound Undangan"
          allow="autoplay; encrypted-media"
          onLoad={() => setIframeReady(true)}
        />
      </div>

      {/* Floating Audio Control Button */}
      <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={onToggle}
          type="button"
          title={isPlaying ? 'Jeda Musik' : 'Putar Musik'}
          aria-label={isPlaying ? 'Jeda Musik' : 'Putar Musik'}
          className={`relative group flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full border-2 border-[#D4AF37] shadow-xl transition-all duration-300 transform active:scale-95 ${
            isPlaying
              ? 'bg-gradient-to-br from-[#781424] to-[#450A0A] text-[#FDE68A] shadow-[#D4AF37]/30 ring-2 ring-[#ECC265]/40'
              : 'bg-[#1C060B]/90 text-amber-200/60 shadow-black/60'
          }`}
        >
          {/* Animated vinyl / sound rings */}
          {isPlaying && (
            <span className="absolute -inset-1 rounded-full border border-[#D4AF37]/40 animate-ping pointer-events-none" />
          )}

          <div className={`relative flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}>
            {isPlaying ? (
              <Music className="w-5 h-5 text-[#FDE68A]" />
            ) : (
              <VolumeX className="w-5 h-5 text-amber-200/60" />
            )}
          </div>

          {/* Tooltip / Status hint */}
          <span className="absolute right-full mr-3 px-2.5 py-1 text-xs font-medium text-amber-100 bg-[#3B0A11]/90 border border-[#D4AF37]/30 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            {isPlaying ? 'Musik Nyala' : 'Musik Mati'}
          </span>
        </button>
      </div>
    </>
  );
};
