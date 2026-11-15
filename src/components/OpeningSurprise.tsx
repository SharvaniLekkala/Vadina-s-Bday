import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CoquetteBow } from './Decorations';

interface OpeningSurpriseProps {
  onOpen: () => void;
}

export const OpeningSurprise: React.FC<OpeningSurpriseProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Multi-stage confetti celebration
    const end = Date.now() + 2 * 1000;
    const colors = ['#ff758f', '#ffb3c6', '#fed7e2', '#fde047', '#ffffff', '#c084fc'];

    (function frame() {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 65,
        origin: { x: 0, y: 0.7 },
        colors: colors,
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 65,
        origin: { x: 1, y: 0.7 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.55 },
        colors: colors,
      });
    }, 300);

    // Smoothly scroll down to the bday letter
    setTimeout(() => {
      onOpen();
    }, 1000);
  };

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#fff0f3] via-[#ffeef2] to-[#fff6f8] overflow-hidden">
      {/* Decorative floating bows in corners */}
      <div className="absolute top-8 left-8 opacity-40 animate-float-slow hidden sm:block">
        <CoquetteBow size={56} />
      </div>
      <div className="absolute top-8 right-8 opacity-40 animate-float-reverse hidden sm:block">
        <CoquetteBow size={56} />
      </div>

      {/* Clean, minimalist gift box focus */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex flex-col items-center cursor-pointer select-none"
        onClick={handleOpenClick}
      >
        {/* Animated Gift Box */}
        <motion.div
          animate={
            isOpening
              ? {
                  scale: [1, 1.2, 0.95, 1.25],
                  rotate: [0, -8, 8, -4, 0],
                }
              : {
                  y: [0, -10, 0],
                }
          }
          transition={
            isOpening
              ? { duration: 0.9, ease: 'easeInOut' }
              : { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }
          }
          className="relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center group"
        >
          {/* Box Lid */}
          <motion.div
            animate={
              isOpening
                ? { y: -100, opacity: 0, rotate: -25 }
                : { y: 0, opacity: 1 }
            }
            transition={{ duration: 0.7 }}
            className="absolute top-3 z-20 w-44 sm:w-56 h-12 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 rounded-t-2xl shadow-lg border-b-2 border-pink-600/20 flex items-center justify-center"
          >
            <div className="absolute -top-10">
              <CoquetteBow size={68} className="filter drop-shadow-md group-hover:scale-105 transition-transform" />
            </div>
            {/* Gold Ribbon band on lid */}
            <div className="w-8 h-full bg-champagne-gold/90 shadow-inner"></div>
          </motion.div>

          {/* Box Body */}
          <motion.div
            animate={
              isOpening
                ? { scaleY: 0.8, opacity: 0.85 }
                : { scaleY: 1 }
            }
            className="w-38 sm:w-48 h-38 sm:h-48 bg-gradient-to-br from-pink-300 via-pink-400 to-rose-400 rounded-b-2xl shadow-2xl relative overflow-hidden flex items-center justify-center border-t border-pink-300 group-hover:shadow-glow-pink transition-shadow duration-300"
          >
            {/* Gold ribbons */}
            <div className="w-8 h-full bg-champagne-gold/90 shadow-sm"></div>
            <div className="h-8 w-full absolute bg-champagne-gold/90 shadow-sm"></div>
            {/* Subtle glow highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none"></div>
          </motion.div>

          {/* Opening burst glow */}
          {isOpening && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2.5, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 rounded-full bg-pink-200/50 filter blur-xl -z-10"
            />
          )}
        </motion.div>

        {/* Sweet instruction pill */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-6 px-5 py-2 rounded-full bg-white/90 text-pink-600 text-sm sm:text-base font-medium shadow-sm border border-pink-200 flex items-center gap-2"
        >
          <span>Tap to open 🎀</span>
        </motion.div>
      </motion.div>
    </section>
  );
};
