import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BabyClothesline,
  TeddyBearWithHeart,
  BabyFootprints,
  SleepingMoonAndStars,
  PinkBalloons,
  CoquetteBow,
} from './Decorations';
import { Heart, Sparkles, Cloud, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

export const LittlePrincessScene: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleHeartClick = () => {
    setIsRevealed(true);
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ff758f', '#ffb3c6', '#ffd1dc', '#fed7aa'],
    });
  };

  return (
    <section id="little-princess" className="py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-[#fff0f4] via-[#fdf2f8] to-[#fff6f8]">
      {/* Dreamy clouds and stars in background */}
      <div className="absolute top-10 left-10 text-pink-200/50 hidden md:block">
        <Cloud size={80} fill="#fdf2f8" />
      </div>
      <div className="absolute top-20 right-16 text-pink-200/50 hidden md:block">
        <Cloud size={96} fill="#fdf2f8" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs sm:text-sm font-medium mb-3 border border-pink-200 shadow-sm">
            <Sparkles size={14} className="text-pink-500" />
            <span>Our Sweetest Angel 👑</span>
            <Sparkles size={14} className="text-pink-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-800 tracking-tight">
            Someone Tiny Is Already Sooo Loved! 👶🏻🎀
          </h2>
          <p className="text-base sm:text-xl text-gray-600 font-sans max-w-xl mx-auto mt-3">
            "A tiny pair of feet, a whole lot of love, and a lifetime of beautiful memories waiting to happen."
          </p>
        </motion.div>

        {/* Baby Clothesline Interactive Hanging Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="my-8 relative"
        >
          <div className="animate-sway">
            <BabyClothesline />
          </div>
        </motion.div>

        {/* Cute Baby Motifs Interactive Playground Card */}
        <div className="coquette-glass rounded-3xl p-6 sm:p-10 shadow-coquette border-2 border-pink-200/90 relative my-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            {/* Left element: Sleeping moon & stars */}
            <div className="flex flex-col items-center">
              <SleepingMoonAndStars size={100} className="animate-float-slow" />
              <p className="text-xs font-serif text-pink-700 font-semibold mt-2">
                Sweet dreams & nursery rhymes ✨
              </p>
            </div>

            {/* Center element: Interactive Clickable Pulsing Heart */}
            <div className="flex flex-col items-center">
              <motion.button
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
                onClick={handleHeartClick}
                className="relative group p-4 rounded-full bg-gradient-to-tr from-pink-400 to-rose-400 shadow-glow-pink text-white flex items-center justify-center cursor-pointer"
                aria-label="Reveal secret note for the princess"
              >
                <Heart size={44} fill="currentColor" className="animate-heartbeat" />
                <span className="absolute -top-1 -right-1 text-xs">✨</span>
              </motion.button>

              <span className="text-xs sm:text-sm font-medium text-pink-600 mt-3 animate-pulse">
                {isRevealed ? '💖 Secret note unlocked! 💖' : '👇 Tap the heart for a sweet note! 👇'}
              </span>
            </div>

            {/* Right element: Teddy Bear & Balloons */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <PinkBalloons size={70} className="absolute -top-6 -right-6 animate-float-reverse opacity-80" />
                <TeddyBearWithHeart size={95} className="animate-float-medium" />
              </div>
              <p className="text-xs font-serif text-pink-700 font-semibold mt-2">
                Waiting to hug our niece! 🧸
              </p>
            </div>
          </div>

          {/* Reveal Message on Heart Click */}
          <AnimatePresence>
            {isRevealed && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-pink-100 via-rose-50 to-pink-100 border-2 border-pink-300 shadow-md text-center"
              >
                <div className="inline-block mb-2">
                  <CoquetteBow size={36} />
                </div>
                <p className="font-serif italic font-semibold text-lg sm:text-xl text-pink-900 leading-relaxed max-w-2xl mx-auto">
                  "Dear little princess, you haven't even arrived yet, but you already have so many people waiting to shower you with love. Can't wait to meet you! 💗"
                </p>
                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-rose-500 font-bold uppercase tracking-wider">
                  <Sparkles size={14} />
                  <span>Your favourite auntie is ready for you</span>
                  <Sparkles size={14} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
