import React, { useState, useEffect } from 'react';
import { Send, MessageSquareHeart, CheckCircle2, XCircle, HelpCircle, User } from 'lucide-react';
import { SongketDivider } from './SongketDivider';
import confetti from 'canvas-confetti';

interface Wish {
  id: string;
  name: string;
  status: 'hadir' | 'tidak' | 'ragu';
  message: string;
  timeAgo: string;
}

const INITIAL_WISHES: Wish[] = [
  {
    id: '1',
    name: 'Samsul & Partner',
    status: 'hadir',
    message: 'Barakallahu lakuma wa baraka ‘alaikuma wa jama’a bainakuma fii khoir. Selamat menempuh hidup baru Iqbal & Syalwa! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah sampai kakek nenek.',
    timeAgo: 'Baru saja',
  },
  {
    id: '2',
    name: 'Keluarga Besar Rang Minang',
    status: 'hadir',
    message: 'Salamaik baralek gadang untuak kamanakan kami Iqbal Jayadi jo Syalwa. Kok jauah bahimbauan, kok dakek baulangan. Tarimakasih undangannyo, kami sekeluarga insya Allah hadir di Gedung IKRARS.',
    timeAgo: '2 jam lalu',
  },
  {
    id: '3',
    name: 'Rian & Dita',
    status: 'hadir',
    message: 'Happy wedding brother Iqbal S.Kom & Syalwa! Lancar sampai hari H yaa bro. Doa terbaik buat kalian berdua!',
    timeAgo: '5 jam lalu',
  },
  {
    id: '4',
    name: 'Fauzan Fadilah',
    status: 'ragu',
    message: 'Selamat Iqbal & Syalwa! Insya Allah diusahakan hadir ya bal, semoga dilancarkan segala persiapan acaranya.',
    timeAgo: '1 hari lalu',
  },
];

interface WishesSectionProps {
  guestName?: string;
}

export const WishesSection: React.FC<WishesSectionProps> = ({ guestName }) => {
  const [wishes, setWishes] = useState<Wish[]>(INITIAL_WISHES);
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'hadir' | 'tidak' | 'ragu'>('hadir');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (guestName) {
      // Clean single line name from formatted lines (e.g. Samsul & Partner)
      const cleanName = guestName.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
      setName(cleanName);
    }
  }, [guestName]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('wedding_wishes_iqbal_syalwa');
      if (stored) {
        setWishes(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      status,
      message: message.trim(),
      timeAgo: 'Baru saja',
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    try {
      localStorage.setItem('wedding_wishes_iqbal_syalwa', JSON.stringify(updated));
    } catch {
      // ignore
    }

    setName('');
    setMessage('');
    setSubmitted(true);

    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#D4AF37', '#ECC265', '#B45309'],
      });
    } catch {
      // ignore
    }

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="ucapan" className="py-16 px-4 relative text-center">
      <div className="max-w-md mx-auto">
        <div className="space-y-2 mb-10">
          <p className="text-xs tracking-[0.25em] text-[#ECC265] uppercase font-cinzel">
            Untaian Doa &amp; Kehadiran
          </p>
          <h2 className="font-playfair text-3xl font-bold text-amber-100">
            Ucapan &amp; Doa Restu
          </h2>
          <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed font-light">
            Tinggalkan pesan cinta, doa restu, serta konfirmasi kehadiran Anda untuk kedua mempelai.
          </p>
        </div>

        {/* Form Box */}
        <div className="p-6 rounded-3xl bg-gradient-to-b from-[#2E070F] to-[#180306] border-2 border-[#ECC265]/40 shadow-xl text-left mb-10">
          {submitted && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-900/60 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>Terima kasih! Doa dan konfirmasi Anda telah tersimpan.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-amber-200/90 uppercase tracking-wider mb-1 font-cinzel">
                Nama Anda
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Samsul & Partner"
                className="w-full px-4 py-2.5 rounded-xl bg-[#400B15]/80 border border-[#ECC265]/30 text-amber-100 placeholder-amber-300/30 text-sm focus:outline-none focus:border-[#ECC265] focus:ring-1 focus:ring-[#ECC265]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-200/90 uppercase tracking-wider mb-1 font-cinzel">
                Konfirmasi Kehadiran
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setStatus('hadir')}
                  className={`py-2 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    status === 'hadir'
                      ? 'bg-emerald-700 text-emerald-100 border border-emerald-400'
                      : 'bg-[#400B15] text-amber-200/70 border border-[#ECC265]/20 hover:bg-[#520E19]'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Hadir</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStatus('tidak')}
                  className={`py-2 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    status === 'tidak'
                      ? 'bg-rose-900 text-rose-100 border border-rose-400'
                      : 'bg-[#400B15] text-amber-200/70 border border-[#ECC265]/20 hover:bg-[#520E19]'
                  }`}
                >
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Tidak Hadir</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStatus('ragu')}
                  className={`py-2 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    status === 'ragu'
                      ? 'bg-amber-700 text-amber-100 border border-amber-400'
                      : 'bg-[#400B15] text-amber-200/70 border border-[#ECC265]/20 hover:bg-[#520E19]'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Masih Ragu</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-200/90 uppercase tracking-wider mb-1 font-cinzel">
                Pesan &amp; Doa Restu
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan ucapan dan doa untuk kedua mempelai..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#400B15]/80 border border-[#ECC265]/30 text-amber-100 placeholder-amber-300/30 text-sm focus:outline-none focus:border-[#ECC265] focus:ring-1 focus:ring-[#ECC265] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#ECC265] via-[#D4AF37] to-[#B45309] text-[#1E0408] font-bold text-sm shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 active:scale-95 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Ucapan &amp; Konfirmasi</span>
            </button>
          </form>
        </div>

        {/* Wishes List */}
        <div className="space-y-4 text-left max-h-[460px] overflow-y-auto pr-1">
          {wishes.map((w) => (
            <div
              key={w.id}
              className="p-4 rounded-2xl bg-[#26050C]/90 border border-[#ECC265]/25 shadow-md relative"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#520E19] border border-[#ECC265]/50 flex items-center justify-center text-[#FDE68A] text-xs">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xs font-bold text-[#FFF5E1]">
                      {w.name}
                    </h4>
                    <span className="text-[10px] text-amber-300/50 block -mt-0.5">
                      {w.timeAgo}
                    </span>
                  </div>
                </div>

                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    w.status === 'hadir'
                      ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                      : w.status === 'tidak'
                      ? 'bg-rose-950/80 text-rose-300 border border-rose-500/40'
                      : 'bg-amber-950/80 text-amber-300 border border-amber-500/40'
                  }`}
                >
                  {w.status === 'hadir' ? 'Hadir' : w.status === 'tidak' ? 'Tidak Hadir' : 'Ragu'}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-light pl-9">
                {w.message}
              </p>
            </div>
          ))}
        </div>

        <SongketDivider variant="elaborate" className="mt-12" />
      </div>
    </section>
  );
};
