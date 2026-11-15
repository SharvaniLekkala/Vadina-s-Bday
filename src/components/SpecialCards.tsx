import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CoquetteBow, TeddyBearWithHeart, BabyFootprints } from './Decorations';
import { Sparkles, Heart, MessageCircleHeart, HeartHandshake, Baby } from 'lucide-react';

interface CardData {
  id: number;
  title: string;
  subtitle: string;
  message: string;
  icon: React.ReactNode;
  illustration: React.ReactNode;
  tag: string;
}

export const SpecialCards: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards: CardData[] = [
    {
      id: 1,
      title: 'My Forever Support System 🥹',
      subtitle: 'Always by my side through everything',
      message: 'Thank you for always supporting me, believing in me and listening to all my endless rantsss!',
      icon: <HeartHandshake className="text-pink-500" size={24} />,
      illustration: <TeddyBearWithHeart size={75} className="animate-float-slow" />,
      tag: 'My Rock & Confidante',
    },
    {
      id: 2,
      title: 'My Favourite Listener 🎀',
      subtitle: 'Patient, understanding & warm',
      message: 'From random conversations to my biggest rants, you always make me feel heard. Love you for that!',
      icon: <MessageCircleHeart className="text-rose-500" size={24} />,
      illustration: <CoquetteBow size={60} className="animate-float-reverse" />,
      tag: 'Endless Late-Night Talks',
    },
    {
      id: 3,
      title: 'Our Little Princess 👶🏻',
      subtitle: 'The greatest chapter about to begin',
      message: "Can't wait for all the fun, laughter and memories we're going to make with our newest little family member!",
      icon: <Baby className="text-pink-600" size={24} />,
      illustration: <BabyFootprints size={60} className="animate-sway" />,
      tag: 'Auntie-in-Crime',
    },
  ];

  return (
    <section id="special-things" className="py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden bg-[#fffafb]">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs sm:text-sm font-medium mb-3 border border-pink-200">
            <Heart size={14} className="text-rose-500 fill-rose-500" />
            <span>Cherished Reasons</span>
            <Sparkles size={14} className="text-pink-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-800 tracking-tight">
            Little Things That Make You Special! 💗
          </h2>
          <p className="text-base sm:text-xl text-gray-600 font-sans max-w-lg mx-auto mt-2">
            Click each card below to unfold what makes you so irreplaceable to me!
          </p>
        </motion.div>

        {/* 3 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const isSelected = activeCard === card.id;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                onClick={() => setActiveCard(isSelected ? null : card.id)}
                className={`relative rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-300 border-2 select-none ${
                  isSelected
                    ? 'bg-gradient-to-b from-white via-pink-50/70 to-pink-100/80 border-pink-400 shadow-glow-pink scale-[1.02]'
                    : 'coquette-glass border-pink-200/80 shadow-soft-pink hover:border-pink-300'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-pink-100/90 text-pink-700 text-xs font-semibold">
                    {card.tag}
                  </span>
                  <div className="p-2 rounded-full bg-white shadow-sm border border-pink-100">
                    {card.icon}
                  </div>
                </div>

                {/* Illustration */}
                <div className="h-28 flex items-center justify-center my-3">
                  {card.illustration}
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-pink-600 font-medium mb-4">
                  {card.subtitle}
                </p>

                {/* Interactive Indicator / Expand Note */}
                <div className="pt-3 border-t border-pink-100/90 flex items-center justify-between text-xs text-gray-500">
                  <span className="font-medium text-pink-500">
                    {isSelected ? 'Tap to minimize' : 'Tap to reveal note ✨'}
                  </span>
                  <Sparkles size={14} className={isSelected ? 'text-pink-500 animate-spin' : 'text-gray-400'} />
                </div>

                {/* Message Reveal */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-4 pt-4 border-t-2 border-dashed border-pink-300"
                    >
                      <p className="font-serif italic text-base text-pink-900 leading-relaxed bg-white/80 p-3.5 rounded-xl border border-pink-200 shadow-inner">
                        "{card.message}"
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
