import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { SongketDivider } from './SongketDivider';
import confetti from 'canvas-confetti';

export const GiftSection: React.FC = () => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const bankAccounts = [
    {
      bank: 'BCA',
      accountNumber: '4760216866',
      accountName: 'Iqbal Jayadi',
      gradient: 'from-[#1E3A8A] to-[#172554]',
      badgeColor: 'bg-[#2563EB]',
    },
    {
      bank: 'BCA',
      accountNumber: '4760617143',
      accountName: 'Syalwa Al Adawiyah',
      gradient: 'from-[#1E3A8A] to-[#172554]',
      badgeColor: 'bg-[#2563EB]',
    },
  ];

  const handleCopy = (accNumber: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(accNumber);
      setCopiedAccount(accNumber);

      try {
        confetti({
          particleCount: 35,
          spread: 45,
          origin: { y: 0.8 },
          colors: ['#D4AF37', '#60A5FA', '#FFFFFF'],
        });
      } catch {
        // ignore
      }

      setTimeout(() => setCopiedAccount(null), 2500);
    }
  };

  return (
    <section id="hadiah" className="py-16 px-4 relative text-center">
      <div className="max-w-md mx-auto">
        <div className="space-y-2 mb-10">
          <p className="text-xs tracking-[0.25em] text-[#ECC265] uppercase font-cinzel">
            Tanda Kasih
          </p>
          <h2 className="font-playfair text-3xl font-bold text-amber-100">
            Wedding Gift
          </h2>
          <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed font-light px-2">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih, Anda dapat memberikan kado secara cashless melalui rekening berikut:
          </p>
        </div>

        {/* Bank Account Cards */}
        <div className="space-y-5">
          {bankAccounts.map((account, index) => {
            const isCopied = copiedAccount === account.accountNumber;
            return (
              <div
                key={index}
                className="relative p-6 rounded-3xl bg-gradient-to-br from-[#2D070F] to-[#170306] border-2 border-[#ECC265]/40 shadow-xl overflow-hidden text-left"
              >
                {/* Subtle metallic chip effect */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-md bg-[#00529C] text-white font-bold text-xs tracking-wider shadow">
                      {account.bank}
                    </span>
                    <span className="text-[10px] text-amber-200/60 uppercase tracking-widest font-mono">
                      Transfer Bank
                    </span>
                  </div>

                  {/* Golden Card Chip icon */}
                  <div className="w-8 h-6 rounded bg-gradient-to-tr from-[#C59B27] to-[#FEF08A] border border-[#78350F] flex items-center justify-center opacity-85 shadow-sm">
                    <div className="w-6 h-4 border border-[#78350F]/40 rounded-sm" />
                  </div>
                </div>

                <div className="my-3">
                  <p className="text-[11px] text-amber-200/60 uppercase tracking-wider mb-1">
                    Nomor Rekening
                  </p>
                  <p className="font-mono text-xl sm:text-2xl font-bold text-[#FDE68A] tracking-wider">
                    {account.accountNumber}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-[11px] text-amber-200/60 uppercase tracking-wider">
                    Atas Nama
                  </p>
                  <p className="font-cinzel text-base font-semibold text-[#FFF5E1]">
                    {account.accountName}
                  </p>
                </div>

                <button
                  onClick={() => handleCopy(account.accountNumber)}
                  type="button"
                  className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-95 ${
                    isCopied
                      ? 'bg-emerald-700 text-emerald-100 shadow-emerald-900/40'
                      : 'bg-gradient-to-r from-[#ECC265] via-[#D4AF37] to-[#B45309] text-[#1E0408] hover:brightness-110 shadow-md shadow-[#D4AF37]/20'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-200" />
                      <span>Nomor Rekening Berhasil Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Salin Nomor Rekening</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        <SongketDivider variant="simple" className="mt-8" />
      </div>
    </section>
  );
};
