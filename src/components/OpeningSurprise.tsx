import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CoquetteBow, TeddyBearWithHeart, ExpectantMotherIllustration, BabyFootprints } from './Decorations';
import { Sparkles, ChevronDown } from 'lucide-react';

interface OpeningSurpriseProps {
  onOpen: () => void;
}

export const OpeningSurprise: React.FC<OpeningSurpriseProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);

    // Multi-stage confetti celebration
    const end = Date.now() + 2.5 * 1000;
    const colors = ['#ff758f', '#ffb3c6', '#fed7e2', '#fde047', '#ffffff', '#c084fc'];

    (function frame() {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 65,
        origin: { x: 0, y: 0.7 },
        colors: colors,
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 65,
        origin: { x: 1, y: 0.7 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    // Extra center burst
    setTimeout(() => {
      confetti({
        particleCount: 90,
        spread: 100,
        origin: { y: 0.6 },
        colors: colors,
      });
    }, 350);

    // Smoothly scroll down after box opens
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <section id="opening-surprise" className="min-h-screen relative flex flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-b from-[#fff0f3] via-[#ffe4e8] to-[#fff6f8] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-8 left-8 opacity-70 animate-float-slow hidden sm:block">
        <CoquetteBow size={64} />
      </div>
      <div className="absolute top-12 right-12 opacity-70 animate-float-reverse hidden sm:block">
        <CoquetteBow size={56} />
      </div>
      <div className="absolute bottom-10 left-10 opacity-60 animate-sway hidden md:block">
        <BabyFootprints size={60} />
      </div>
      <div className="absolute bottom-12 right-12 opacity-60 hidden md:block">
        <TeddyBearWithHeart size={100} />
      </div>

      {/* Main Container Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-2xl w-full coquette-glass rounded-3xl p-6 sm:p-10 md:p-12 text-center shadow-coquette relative border-2 border-pink-200/80 my-8"
      >
        {/* Floating top bow */}
        <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <CoquetteBow size={68} className="animate-bounce" />
            <span className="absolute -top-1 -right-2 text-xs">✨</span>
          </div>
        </div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-800 tracking-tight leading-tight mb-4 pt-2"
        >
          Happie Birthdayyy, <br />
          <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">
            My Sweetest Vadinaaa!! 💗
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-gray-600 font-sans max-w-lg mx-auto leading-relaxed mb-6"
        >
          Today is not just about celebrating another beautiful year of you... it's also about celebrating the sweetest little miracle growing inside you!
        </motion.p>

        {/* Visuals: Expectant Mother Illustration & Teddy Bear */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="relative flex items-center justify-center my-4"
        >
          <div className="relative p-2 rounded-full bg-white/60 shadow-inner">
            <ExpectantMotherIllustration size={190} className="transform hover:scale-105 transition-transform duration-500" />
          </div>

          <div className="absolute -bottom-2 -left-2 sm:left-4 animate-float-medium">
            <TeddyBearWithHeart size={85} />
          </div>
          <div className="absolute top-2 right-2 sm:right-6 animate-float-reverse">
            <div className="bg-white/90 p-2 rounded-2xl shadow-sm border border-pink-100 flex items-center gap-1.5 text-xs text-pink-600 font-script font-bold">
              <span>Little Princess 👑</span>
            </div>
          </div>
        </motion.div>

        {/* Interactive Gift Box */}
        <div className="relative my-6 flex flex-col items-center justify-center">
          <motion.div
            animate={
              isOpening
                ? {
                    scale: [1, 1.25, 0.9, 1.3],
                    rotate: [0, -10, 10, -5, 0],
                  }
                : {
                    y: [0, -6, 0],
                  }
            }
            transition={
              isOpening
                ? { duration: 1.2, ease: 'easeInOut' }
                : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
            }
            className="cursor-pointer relative group"
            onClick={!isOpening ? handleOpenClick : undefined}
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
              {/* Gift Box Lid */}
              <motion.div
                animate={
                  isOpening
                    ? { y: -80, opacity: 0, rotate: -25 }
                    : { y: 0, opacity: 1 }
                }
                transition={{ duration: 0.8 }}
                className="absolute top-3 z-20 w-30 sm:w-38 h-9 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 rounded-t-lg shadow-md border-b-2 border-pink-600/20 flex items-center justify-center"
              >
                <div className="absolute -top-7">
                  <CoquetteBow size={50} className="filter drop-shadow-md" />
                </div>
                <div className="w-5 h-full bg-champagne-gold/90 shadow-inner"></div>
              </motion.div>

              {/* Gift Box Body */}
              <motion.div
                animate={
                  isOpening
                    ? { scaleY: 0.8, opacity: 0.9 }
                    : { scaleY: 1 }
                }
                className="w-26 sm:w-34 h-26 sm:h-34 bg-gradient-to-br from-pink-300 via-pink-400 to-rose-400 rounded-b-xl shadow-xl relative overflow-hidden flex items-center justify-center border-t border-pink-300"
              >
                <div className="w-5 h-full bg-champagne-gold/90 shadow-sm"></div>
                <div className="h-5 w-full absolute bg-champagne-gold/90 shadow-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none"></div>
              </motion.div>

              {isOpening && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 2.5, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 rounded-full bg-pink-200/50 filter blur-xl -z-10"
                />
              )}
            </div>

            <p className="text-xs text-pink-600/80 mt-2 font-medium">
              {!isOpening ? '✨ Tap box or button below ✨' : 'Opening your surprise... 🎀'}
            </p>
          </motion.div>
        </div>

        {/* Action Button */}
        <div className="mt-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            disabled={isOpening}
            onClick={handleOpenClick}
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white font-medium text-base sm:text-lg shadow-soft-pink hover:shadow-glow-pink transition-all duration-300 border border-pink-300 relative group overflow-hidden cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Open Your Birthday Surprise 🎀</span>
              <Sparkles size={18} className="animate-pulse" />
            </span>
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </motion.button>
        </div>
      </motion.div>

      {/* Gentle Scroll Down Prompt */}
      <motion.button
        onClick={onOpen}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="mt-4 flex flex-col items-center gap-1 text-pink-500/80 hover:text-pink-600 cursor-pointer text-xs font-medium"
      >
        <span>Or scroll down to read wishes</span>
        <ChevronDown size={18} />
      </motion.button>
    </section>
  );
};
