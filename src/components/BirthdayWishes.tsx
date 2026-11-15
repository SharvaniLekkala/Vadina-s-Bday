import React from 'react';
import { motion } from 'framer-motion';
import { CoquetteBow, TeddyBearWithHeart } from './Decorations';
import { Cake, Sparkles, Heart, Baby } from 'lucide-react';

export const BirthdayWishes: React.FC = () => {
  const scrollToBabyLetter = () => {
    const el = document.getElementById('mommy-to-be');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="birthday-wishes" className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-10 left-5 opacity-40 animate-float-slow hidden md:block">
        <CoquetteBow size={52} />
      </div>
      <div className="absolute bottom-10 right-8 opacity-50 animate-float-reverse hidden md:block">
        <TeddyBearWithHeart size={95} />
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-pink-100/80 text-pink-700 text-xs sm:text-sm font-medium mb-3 border border-pink-200">
            <Cake size={16} className="text-pink-500" />
            <span>Birthday Love & Warmth</span>
            <Sparkles size={14} className="text-pink-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-800 tracking-tight">
            To My Most Favourite Vadinaaa! 🎂
          </h2>
        </motion.div>

        {/* Elegant Birthday Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative coquette-glass rounded-3xl p-6 sm:p-10 md:p-12 shadow-coquette border-2 border-pink-200/90"
        >
          {/* Top Bow Decoration */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <CoquetteBow size={56} className="filter drop-shadow-sm" />
          </div>

          {/* Scalloped / Vintage Lace Border Accent */}
          <div className="absolute inset-2 sm:inset-3 border border-dashed border-pink-300/70 rounded-2xl pointer-events-none"></div>

          {/* Corner Ribbon Accents */}
          <div className="absolute top-4 left-4 text-pink-300 text-xs">🌸</div>
          <div className="absolute top-4 right-4 text-pink-300 text-xs">🌸</div>
          <div className="absolute bottom-4 left-4 text-pink-300 text-xs">🌸</div>
          <div className="absolute bottom-4 right-4 text-pink-300 text-xs">🌸</div>

          {/* Card Content */}
          <div className="relative z-10 pt-4 sm:pt-6 space-y-5 text-gray-700 font-sans leading-relaxed text-base sm:text-lg">
            <p className="font-serif font-semibold text-xl sm:text-2xl text-pink-800">
              Happie birthdayy to my sweetest Vadinaaa, Reethika!! ✨
            </p>

            <p>
              I genuinely feel so lucky to have you in my life. Thank you for always supporting me in all my decisions, listening to all my endless rantsss, understanding me and being there for me.
            </p>

            <p className="bg-pink-50/70 p-4 rounded-xl border-l-4 border-pink-400 italic font-serif text-pink-900">
              "I love how I can talk to you about literally anything and you patiently listen to all of it. You have no idea how much that means to me."
            </p>

            <p>
              I hope this year brings you all the happiness, love, laughter and beautiful moments you deserve. You deserve nothing less than the absolute best!
            </p>

            <div className="pt-4 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-pink-600 font-serif font-bold text-lg sm:text-xl">
                <span>Love you loads, Vadinaaa! Have the happiest birthday everrr!</span>
                <Heart size={20} className="text-rose-500 fill-rose-500 inline-block animate-heartbeat flex-shrink-0" />
              </div>

              <div className="flex items-center gap-1.5 text-xs text-pink-500 font-script text-base">
                <Sparkles size={14} />
                <span>Happy Birthday Reethika Vadina 🎀</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small Bubble below the birthday card that tells that the baby letter is there */}
        <div className="mt-8 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToBabyLetter}
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-rose-600 text-sm sm:text-base font-medium shadow-md border-2 border-pink-300 hover:bg-pink-50 hover:border-pink-400 transition-all cursor-pointer group"
          >
            <Baby size={18} className="text-pink-500 group-hover:scale-110 transition-transform" />
            <span>P.S. There is a special baby letter for the little princess below... tap to see! 👶🏻💗 ↓</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
