import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AudioPlayer } from './components/AudioPlayer';
import { FloatingParticles } from './components/FloatingParticles';
import { OpeningSurprise } from './components/OpeningSurprise';
import { BirthdayWishes } from './components/BirthdayWishes';
import { MommyToBe } from './components/MommyToBe';
import { LetterEnvelope } from './components/LetterEnvelope';
import { LittlePrincessScene } from './components/LittlePrincessScene';
import { SpecialCards } from './components/SpecialCards';
import { BirthdayGift } from './components/BirthdayGift';
import { FinalScreen } from './components/FinalScreen';
import { ScrollIndicator } from './components/ScrollIndicator';
import { CoquetteBow } from './components/Decorations';
import { Sparkles, Heart } from 'lucide-react';

export const App: React.FC = () => {
  const [hasOpened, setHasOpened] = useState<boolean>(false);

  const handleOpenSurprise = () => {
    setHasOpened(true);
    // Smoothly scroll down slightly to start exploration
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#fff5f7] text-gray-800 relative selection:bg-pink-200 selection:text-pink-900">
      {/* Background ambient drifting sparkles, hearts & click bursts */}
      <FloatingParticles />

      {/* Floating Audio Player (OFF by default, royalty-free vintage music box) */}
      <AudioPlayer />

      {/* Floating Scroll Indicator & Navigation Pill */}
      <ScrollIndicator hasOpened={hasOpened} />

      {!hasOpened ? (
        /* Opening Screen Experience */
        <OpeningSurprise onOpen={handleOpenSurprise} />
      ) : (
        /* Unlocked Full Birthday Celebration Journey */
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {/* Welcome Floating Banner */}
          <header className="py-6 px-4 text-center bg-white/70 backdrop-blur-md border-b border-pink-200 sticky top-0 z-30 shadow-xs">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CoquetteBow size={28} />
                <span className="font-serif font-bold text-gray-800 text-sm sm:text-base">
                  Vadina's Special Day 🎀
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-pink-600 font-medium">
                <Sparkles size={14} className="text-pink-500" />
                <span className="hidden sm:inline">Double Celebration • Birthday & Princess On The Way</span>
                <Heart size={14} className="text-rose-500 fill-rose-500" />
              </div>
            </div>
          </header>

          {/* Section 3: Birthday Wishes */}
          <BirthdayWishes />

          {/* Section 4: A Special Congratulations, Mommy-to-be! */}
          <MommyToBe />

          {/* Section 5: A Little Letter From Me */}
          <LetterEnvelope />

          {/* Section 6: Our Little Princess */}
          <LittlePrincessScene />

          {/* Section 7: Little Things That Make You Special */}
          <SpecialCards />

          {/* Section 8: A Little Birthday Gift */}
          <BirthdayGift />

          {/* Section 9: Final Birthday Screen */}
          <FinalScreen />
        </motion.main>
      )}
    </div>
  );
};

export default App;
