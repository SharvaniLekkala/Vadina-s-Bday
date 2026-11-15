import React from 'react';
import { FloatingParticles } from './components/FloatingParticles';
import { OpeningSurprise } from './components/OpeningSurprise';
import { BirthdayWishes } from './components/BirthdayWishes';
import { MommyToBe } from './components/MommyToBe';
import { FinalScreen } from './components/FinalScreen';
import { CoquetteBow } from './components/Decorations';
import { Cake, Baby } from 'lucide-react';

export const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fff5f7] text-gray-800 relative selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden">
      {/* Background ambient drifting sparkles, hearts & tap bursts */}
      <FloatingParticles />

      {/* Top Header with Quick Smooth Scroll Options */}
      <header className="py-4 px-4 sm:px-8 bg-white/75 backdrop-blur-md border-b border-pink-200/80 sticky top-0 z-40 shadow-xs">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CoquetteBow size={28} />
            <span className="font-serif font-bold text-gray-800 text-sm sm:text-base">
              Vadina's Special Day 🎀
            </span>
          </div>

          {/* Quick jump scroll options */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection('birthday-wishes')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-medium border border-pink-200 transition-colors cursor-pointer"
            >
              <Cake size={13} className="text-pink-500" />
              <span>Wishes</span>
            </button>
            <button
              onClick={() => scrollToSection('mommy-to-be')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-xs font-medium shadow-xs transition-colors cursor-pointer"
            >
              <Baby size={13} />
              <span>Mommy-to-be</span>
            </button>
          </div>
        </div>
      </header>

      {/* One Continuous Seamless Scroll Experience */}
      <main className="relative z-10">
        {/* 1. Opening Surprise Hero */}
        <OpeningSurprise onOpen={() => scrollToSection('birthday-wishes')} />

        {/* 2. Birthday Wishes Section */}
        <BirthdayWishes />

        {/* 3. Mommy-to-be & Little Princess Section */}
        <MommyToBe />

        {/* 4. Final Screen & Signature */}
        <FinalScreen />
      </main>
    </div>
  );
};

export default App;
