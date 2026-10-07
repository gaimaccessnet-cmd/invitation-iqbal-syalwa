import React from 'react';
import { Heart, Sparkles, Gem, Church } from 'lucide-react';
import { SongketDivider } from './SongketDivider';

export const StorySection: React.FC = () => {
  const stories = [
    {
      period: 'Juli 2024',
      title: 'Awal Perkenalan',
      description:
        'Takdir mempertemukan kami untuk pertama kali. Berawal dari komunikasi yang hangat dan saling mengenal pribadi masing-masing, benih kasih dan kesamaan visi mulai tumbuh dengan indah.',
      icon: Sparkles,
    },
    {
      period: 'Oktober 2026',
      title: 'Pertunangan (Maminang)',
      description:
        'Dengan niat tulus dan restu hangat kedua keluarga besar, kami mengikrarkan janji suci pertunangan. Langkah awal mempertemukan dua keluarga dalam ikatan tali silaturahmi yang kokoh.',
      icon: Gem,
    },
    {
      period: 'November 2026',
      title: 'Menuju Mahligai Pernikahan',
      description:
        'Insya Allah, ikatan suci pernikahan kami disahkan di hadapan Allah SWT dan para saksi. Memulai lembaran hidup baru membangun keluarga yang Sakinah, Mawaddah, Warahmah.',
      icon: Heart,
    },
  ];

  return (
    <section id="kisah" className="py-16 px-4 relative text-center">
      <div className="max-w-md mx-auto">
        <div className="space-y-2 mb-10">
          <p className="text-xs tracking-[0.25em] text-[#ECC265] uppercase font-cinzel">
            Perjalanan Kasih
          </p>
          <h2 className="font-playfair text-3xl font-bold text-amber-100">
            Our Story
          </h2>
          <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed font-light">
            Setiap cerita cinta itu indah, namun kisah yang Allah takdirkan untuk kami adalah yang paling kami syukuri.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-[#ECC265]/40 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8 text-left">
          {stories.map((story, idx) => {
            const Icon = story.icon;
            return (
              <div key={idx} className="relative group">
                {/* Node icon */}
                <div className="absolute -left-[37px] sm:-left-[45px] top-1.5 w-8 h-8 rounded-full bg-[#520E19] border-2 border-[#ECC265] flex items-center justify-center text-[#FDE68A] shadow-md shadow-black/50">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Content Box */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#30070F] to-[#1A0307] border border-[#ECC265]/30 shadow-lg group-hover:border-[#ECC265]/60 transition-all">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#5C101C] border border-[#ECC265]/40 text-[#FDE68A] text-xs font-cinzel font-semibold tracking-wider mb-2">
                    {story.period}
                  </span>
                  <h3 className="font-playfair text-lg font-bold text-[#FFF2D6] mb-1.5">
                    {story.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed font-light">
                    {story.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <SongketDivider variant="elaborate" className="mt-12" />
      </div>
    </section>
  );
};
