import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CoquetteBow } from './Decorations';
import { Gift, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const BirthdayGift: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenGift = () => {
    setIsOpen(true);

    // Multi-shot celebration confetti
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: ['#ff758f', '#ffb3c6', '#fed7e2', '#fde047', '#fff'],
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: ['#ff758f', '#ffb3c6', '#fed7e2', '#fde047', '#fff'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    // Center starburst
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 120,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ff758f', '#ffd166', '#c084fc', '#ffffff'],
      });
    }, 400);
  };

  return (
    <section id="birthday-gift" className="py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-[#fffafb] via-[#ffeef2] to-[#fff5f7]">
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs sm:text-sm font-medium mb-3 border border-pink-200">
            <Gift size={16} className="text-pink-500" />
            <span>The Grand Finale</span>
            <Sparkles size={14} className="text-pink-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-800 tracking-tight">
            One Last Little Surprise... 🎁
          </h2>
          <p className="text-base sm:text-xl text-gray-600 font-sans max-w-md mx-auto mt-2">
            A special gift wrapped with all the warmth, wishes & adoration in my heart!
          </p>
        </motion.div>

        {/* Big Interactive Gift Box */}
        <div className="relative my-8 flex flex-col items-center justify-center">
          <motion.div
            animate={
              !isOpen
                ? { y: [0, -8, 0] }
                : {}
            }
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            className="relative cursor-pointer select-none"
            onClick={!isOpen ? handleOpenGift : undefined}
          >
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center">
              {/* Lid */}
              <motion.div
                animate={
                  isOpen
                    ? { y: -120, rotate: -25, opacity: 0 }
                    : { y: 0, rotate: 0, opacity: 1 }
                }
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="absolute top-2 z-20 w-44 sm:w-56 h-12 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 rounded-t-2xl shadow-lg border-b-2 border-pink-600/30 flex items-center justify-center"
              >
                <div className="absolute -top-10">
                  <CoquetteBow size={68} className="drop-shadow-md" />
                </div>
                {/* Golden horizontal band */}
                <div className="w-8 h-full bg-champagne-gold/90 shadow-inner"></div>
              </motion.div>

              {/* Box base */}
              <motion.div
                animate={
                  isOpen
                    ? { scale: 0.9, opacity: 0.95 }
                    : { scale: 1, opacity: 1 }
                }
                className="w-36 sm:w-48 h-36 sm:h-48 bg-gradient-to-br from-pink-300 via-rose-300 to-pink-400 rounded-b-2xl shadow-2xl relative overflow-hidden flex items-center justify-center border-t border-pink-300"
              >
                <div className="w-8 h-full bg-champagne-gold/90 shadow-sm"></div>
                <div className="h-8 w-full absolute bg-champagne-gold/90 shadow-sm"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Button if not open */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenGift}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white font-medium text-lg shadow-soft-pink hover:shadow-glow-pink transition-all duration-300 border border-pink-300 cursor-pointer"
              >
                <Gift size={20} />
                <span>Open Your Gift!</span>
                <Sparkles size={18} />
              </motion.button>
            </motion.div>
          )}

          {/* Revealed Heartfelt Final Gift Message */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="mt-8 w-full max-w-xl coquette-glass rounded-3xl p-6 sm:p-10 shadow-coquette border-2 border-pink-300 relative text-center"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="p-3 rounded-full bg-white shadow-md border border-pink-200">
                    <Heart size={28} className="text-rose-500 fill-rose-500 animate-heartbeat" />
                  </div>
                </div>

                <div className="pt-4 space-y-4">
                  <p className="font-serif italic font-semibold text-xl sm:text-2xl text-pink-900 leading-relaxed">
                    "To my sweetest Vadina, wishing you a lifetime of happiness, endless smiles, beautiful memories and the most magical journey into motherhood."
                  </p>

                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    You deserve all the love in the world. And our little princess is already so lucky to have you!
                  </p>

                  <div className="pt-4 border-t border-pink-200">
                    <p className="font-serif font-bold text-2xl text-rose-600">
                      Love you foreverrr! 💗
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
