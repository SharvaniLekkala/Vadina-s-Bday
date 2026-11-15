import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CoquetteBow } from './Decorations';
import { Mail, MailOpen, Heart, Sparkles, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export const LetterEnvelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => {
    if (!isOpen) {
      // Trigger delicate mini heart confetti when opened
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ff758f', '#ffccd5', '#f472b6'],
      });
    }
    setIsOpen(!isOpen);
  };

  return (
    <section id="personal-letter" className="py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden bg-[#fff6f8]">
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-xs sm:text-sm font-medium mb-3 border border-pink-200">
            <Mail size={16} className="text-pink-500" />
            <span>From My Heart to Yours</span>
            <Sparkles size={14} className="text-pink-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-800 tracking-tight">
            A Little Letter, Just for You... 💌
          </h2>
          <p className="text-pink-600 font-script text-xl sm:text-2xl mt-1">
            ~ Sealed with infinite love & a tiny pink bow ~
          </p>
        </motion.div>

        {/* Interactive Envelope Container */}
        <div className="relative flex flex-col items-center justify-center min-h-[380px]">
          {/* Instructions Pill */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={toggleEnvelope}
            className="mb-6 px-4 py-1.5 rounded-full bg-white shadow-sm border border-pink-200 text-pink-600 text-xs sm:text-sm font-medium flex items-center gap-2 cursor-pointer hover:bg-pink-50 transition-colors"
          >
            {isOpen ? (
              <>
                <X size={14} />
                <span>Click to fold letter back</span>
              </>
            ) : (
              <>
                <MailOpen size={14} />
                <span>Click the envelope or wax seal to open 🎀</span>
              </>
            )}
          </motion.button>

          {/* Envelope Graphic */}
          <div className="relative w-full max-w-lg cursor-pointer" onClick={!isOpen ? toggleEnvelope : undefined}>
            {/* The Envelope Body */}
            <motion.div
              className="relative w-full h-64 sm:h-72 bg-gradient-to-b from-[#ffdbe4] to-[#fca5b8] rounded-2xl shadow-envelope border-2 border-pink-300 overflow-hidden"
              animate={isOpen ? { height: '140px' } : { height: '280px' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {/* Envelope flap folds (triangle patterns) */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Left diagonal shadow fold */}
                <div className="absolute top-0 left-0 w-1/2 h-full bg-pink-400/20 [clip-path:polygon(0_0,100%_100%,0_100%)]"></div>
                {/* Right diagonal shadow fold */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-pink-400/30 [clip-path:polygon(100%_0,0_100%,100%_100%)]"></div>
              </div>

              {/* Envelope Flap Top */}
              {!isOpen && (
                <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-b from-pink-200 to-pink-300 [clip-path:polygon(0_0,50%_100%,100%_0)] shadow-md flex items-center justify-center">
                  {/* Cute Wax Seal & Bow on Flap */}
                  <div className="absolute bottom-1 transform translate-y-1/2 flex flex-col items-center">
                    <CoquetteBow size={48} className="-mb-2 z-20" />
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleEnvelope();
                      }}
                      className="wax-seal w-12 h-12 rounded-full flex items-center justify-center text-white cursor-pointer relative z-10 border-2 border-rose-300"
                    >
                      <Heart size={20} fill="white" className="animate-pulse" />
                    </motion.div>
                    <span className="text-[10px] text-pink-900 font-bold tracking-wider uppercase mt-1 bg-white/70 px-2 py-0.5 rounded-full">
                      Open Me
                    </span>
                  </div>
                </div>
              )}
            </motion.div>

            {/* The Letter (Slides out smoothly) */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.92 }}
                  animate={{ opacity: 1, y: -40, scale: 1 }}
                  exit={{ opacity: 0, y: 50, scale: 0.92 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="relative -mt-20 w-full bg-[#fffcfd] rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl border-2 border-pink-200 lined-paper text-gray-800"
                >
                  {/* Close button inside letter */}
                  <button
                    onClick={toggleEnvelope}
                    title="Close letter"
                    className="absolute top-4 right-4 p-1.5 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-700 transition-colors"
                  >
                    <X size={18} />
                  </button>

                  {/* Header decoration inside letter */}
                  <div className="flex items-center justify-center mb-6">
                    <CoquetteBow size={52} />
                  </div>

                  {/* Letter Content */}
                  <div className="space-y-4 font-sans text-base sm:text-lg leading-relaxed text-gray-700">
                    <p className="font-serif font-bold text-2xl text-pink-800 tracking-wide">
                      Dear Vadinaaa,
                    </p>

                    <p>
                      I genuinely don't know how to explain how much I appreciate having you in my life.
                    </p>

                    <p>
                      Thank you for supporting me in all my decisions, listening to all my rantsss, putting up with my endless talking and always being someone I can count on.
                    </p>

                    <p>
                      You make even the smallest things feel special, and I'm so grateful for the bond we share.
                    </p>

                    <p className="bg-pink-50/80 p-4 rounded-xl border-l-4 border-pink-400 font-medium text-pink-900">
                      And now there's a little princess joining our family! I can't wait to annoy her, spoil her and be her favourite person (obviously)! 👶🏻🎀
                    </p>

                    <p>
                      I wish you endless happiness, love and the most beautiful moments ahead.
                    </p>

                    <p className="font-medium text-pink-800">
                      Happy birthday once again, my sweetest Vadinaaa. And congratulations on this beautiful new journey!
                    </p>

                    <p className="font-serif font-semibold text-xl text-rose-600">
                      Love youuu loads and loads! 💗
                    </p>

                    {/* Signature */}
                    <div className="pt-6 border-t border-pink-200 text-right">
                      <p className="font-handwriting text-2xl sm:text-3xl text-pink-700">
                        With lots and lots of love,
                      </p>
                      <p className="font-handwriting text-2xl sm:text-3xl text-pink-800 font-bold">
                        Your favourite little troublemaker 🎀
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
