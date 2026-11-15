import React from 'react';
import { FloatingParticles } from './components/FloatingParticles';
import { OpeningSurprise } from './components/OpeningSurprise';
import { BirthdayWishes } from './components/BirthdayWishes';
import { MommyToBe } from './components/MommyToBe';
import { FinalScreen } from './components/FinalScreen';
import { CoquetteBow } from './components/Decorations';

export const App: React.FC = () => {
  const scrollToWishes = () => {
    const el = document.getElementById('birthday-wishes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fff5f7] text-gray-800 relative selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden">
      {/* Background ambient drifting sparkles, hearts & tap bursts */}
      <FloatingParticles />

      {/* Clean Top Header (No Section Buttons) */}
      <header className="py-3.5 px-4 bg-white/75 backdrop-blur-md border-b border-pink-200/80 sticky top-0 z-40 shadow-xs">
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-2">
            <CoquetteBow size={26} />
            <span className="font-serif font-bold text-gray-800 text-sm sm:text-base tracking-wide">
              For Reethika Vadina 🎀
            </span>
          </div>
        </div>
      </header>

      {/* One Continuous Seamless Scroll Experience */}
      <main className="relative z-10">
        {/* 1. Landing Page: Clean Centered Box */}
        <OpeningSurprise onOpen={scrollToWishes} />

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
