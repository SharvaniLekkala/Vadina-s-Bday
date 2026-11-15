import React from 'react';
import { motion } from 'framer-motion';
import { CoquetteBow, TeddyBearWithHeart, BabyFootprints } from './Decorations';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';

export const FinalScreen: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-[#fff5f7] via-[#ffdce5] to-[#ffeef2] text-center border-t-2 border-pink-200">
      {/* Decorative ambient corner elements */}
      <div className="absolute top-8 left-8 opacity-60 animate-float-slow hidden md:block">
        <CoquetteBow size={56} />
      </div>
      <div className="absolute top-8 right-8 opacity-60 animate-float-reverse hidden md:block">
        <CoquetteBow size={56} />
      </div>
      <div className="absolute bottom-12 left-10 opacity-50 animate-sway hidden lg:block">
        <BabyFootprints size={60} />
      </div>
      <div className="absolute bottom-12 right-10 opacity-60 hidden lg:block">
        <TeddyBearWithHeart size={90} className="animate-float-medium" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Top Floating Bow */}
        <div className="flex justify-center mb-6">
          <CoquetteBow size={72} className="animate-bounce" />
        </div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-gray-800 tracking-tight leading-snug mb-4"
        >
          Happiest Birthdayyy Once Again, <br />
          <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">
            My Sweetest Vadinaaa!! 💗
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl font-serif font-medium text-pink-900 max-w-xl mx-auto leading-relaxed mb-6"
        >
          Happy Birthday to YOU and a big congratulations to the little princess who's already stealing all our hearts! 🎀
        </motion.p>

        {/* Additional Message Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="coquette-glass rounded-3xl p-6 sm:p-8 max-w-lg mx-auto shadow-coquette border-2 border-pink-200/90 my-8"
        >
          <div className="flex items-center justify-center gap-1.5 text-pink-500 mb-3">
            <Sparkles size={16} />
            <Heart size={16} fill="currentColor" className="animate-heartbeat text-rose-500" />
            <Sparkles size={16} />
          </div>

          <p className="text-gray-700 font-sans text-base sm:text-lg leading-relaxed">
            "Here's to more memories, more laughter, more happiness and a lifetime of love!"
          </p>

          <div className="mt-6 pt-5 border-t border-pink-200">
            <p className="font-handwriting text-2xl sm:text-3xl text-pink-700">
              Made with all my love, just for you.
            </p>
            <p className="font-handwriting text-3xl sm:text-4xl text-pink-800 font-bold mt-1">
              — Sharvani 💗
            </p>
          </div>
        </motion.div>

        {/* Scroll back to top button */}
        <div className="mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 hover:bg-white text-pink-600 text-sm font-medium border border-pink-200 shadow-sm transition-all cursor-pointer"
          >
            <ArrowUp size={16} />
            <span>Scroll Back to Top</span>
            <CoquetteBow size={20} className="-mr-1" />
          </motion.button>
        </div>

        <p className="text-xs text-pink-400 mt-8 font-sans">
          A Double Celebration of Vadina's Birthday & Baby Girl's Arrival • Crafted with 🎀
        </p>
      </div>
    </footer>
  );
};
