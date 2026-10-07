import React from 'react';
import { Home, Users, Calendar, BookOpen, Gift, MessageSquare } from 'lucide-react';

interface BottomNavProps {
  activeSection: string;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'hero', label: 'Cover', icon: Home },
    { id: 'pasangan', label: 'Mempelai', icon: Users },
    { id: 'acara', label: 'Acara', icon: Calendar },
    { id: 'kisah', label: 'Kisah', icon: BookOpen },
    { id: 'hadiah', label: 'Hadiah', icon: Gift },
    { id: 'ucapan', label: 'Ucapan', icon: MessageSquare },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-sm rounded-full bg-[#26050C]/90 backdrop-blur-md border border-[#ECC265]/40 p-1.5 shadow-2xl shadow-black/80">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-t from-[#6E1221] to-[#450A13] text-[#FDE68A] scale-105 border border-[#ECC265]/50 shadow'
                  : 'text-amber-200/60 hover:text-amber-100 hover:scale-105'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[9px] font-medium tracking-tight mt-0.5">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
