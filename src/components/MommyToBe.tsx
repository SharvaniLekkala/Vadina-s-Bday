import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CoquetteBow,
  TeddyBearWithHeart,
  BabyFootprints,
  SleepingMoonAndStars,
  PinkBalloons,
  ExpectantMotherIllustration,
} from './Decorations';
import { Heart, Sparkles, Baby, Star } from 'lucide-react';

export const MommyToBe: React.FC = () => {
  const [pulseSpeed, setPulseSpeed] = useState<'normal' | 'fast'>('normal');

  return (
    <section id="mommy-to-be" className="py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-[#fff6f8] via-[#ffe8ee] to-[#fff0f4]">
      {/* Background Motifs */}
      <div className="absolute top-8 right-6 opacity-60 animate-float-slow hidden md:block">
        <SleepingMoonAndStars size={110} />
      </div>
      <div className="absolute top-16 left-6 opacity-60 animate-float-reverse hidden md:block">
        <PinkBalloons size={90} />
      </div>
      <div className="absolute bottom-6 left-12 opacity-50 animate-sway hidden lg:block">
        <BabyFootprints size={70} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Little Princess Coming Soon Ribbon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="relative inline-flex items-center">
            {/* Left ribbon tail */}
            <div className="w-8 h-10 bg-pink-400 clip-path-ribbon-left transform -translate-x-1 -rotate-6 hidden sm:block"></div>
            {/* Center banner */}
            <div className="px-6 sm:px-8 py-2.5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white font-serif font-bold text-sm sm:text-base md:text-lg tracking-wider uppercase rounded-full shadow-lg border border-pink-300 flex items-center gap-2.5">
              <Sparkles size={18} className="animate-spin text-yellow-200" />
              <span>🎀 Little Princess Coming Soon 🎀</span>
              <Sparkles size={18} className="animate-spin text-yellow-200" />
            </div>
            {/* Right ribbon tail */}
            <div className="w-8 h-10 bg-pink-400 clip-path-ribbon-right transform translate-x-1 rotate-6 hidden sm:block"></div>
          </div>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-extrabold text-gray-800 tracking-tight leading-snug">
            ANDDD... CONGRATULATIONS ON YOUR <br />
            <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">
              LITTLE MIRACLE!! 🥹💗
            </span>
          </h2>
          <p className="text-lg sm:text-2xl text-pink-700 font-script mt-2 font-semibold flex items-center justify-center gap-2">
            <span>Your sweetest little princess is on her way!</span>
            <Baby size={22} className="inline text-pink-500 animate-bounce" />
          </p>
        </motion.div>

        {/* Dedicated Mommy-to-be Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="coquette-glass rounded-3xl p-6 sm:p-10 md:p-12 shadow-coquette border-2 border-pink-200/90 relative"
        >
          {/* Subtle animated heartbeat badge */}
          <div className="flex justify-center -mt-12 sm:-mt-16 mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setPulseSpeed(pulseSpeed === 'normal' ? 'fast' : 'normal')}
              title="Click to feel baby's heartbeat!"
              className="bg-white px-5 py-2.5 rounded-full shadow-md border-2 border-pink-300 flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={`w-7 h-7 rounded-full bg-rose-500 flex items-center justify-center text-white ${
                  pulseSpeed === 'fast' ? 'animate-[ping_0.8s_cubic-bezier(0,0,0.2,1)_infinite]' : 'animate-heartbeat'
                }`}
              >
                <Heart size={16} fill="white" />
              </div>
              <div className="text-left">
                <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider block">
                  Baby's Heartbeat
                </span>
                <span className="text-[11px] text-gray-500">
                  {pulseSpeed === 'fast' ? 'Fluttering with excitement! 💓' : 'Soft & steady rhythm 💕'}
                </span>
              </div>
            </motion.button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visuals Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center relative">
              <div className="relative p-3 rounded-full bg-gradient-to-tr from-pink-100 to-white shadow-inner border border-pink-200">
                <ExpectantMotherIllustration size={220} />
              </div>

              {/* Teddy Bear holding pink heart */}
              <div className="mt-4 flex items-center justify-center gap-3">
                <TeddyBearWithHeart size={90} className="animate-float-slow" />
                <div className="text-left bg-white/80 p-2.5 rounded-2xl border border-pink-200 shadow-sm">
                  <p className="text-xs font-serif font-bold text-pink-700">Can't wait to meet you!</p>
                  <p className="text-[11px] text-gray-500 font-sans">Auntie is ready to spoil you 🎀</p>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs text-pink-600">
                <BabyFootprints size={24} />
                <span className="font-script text-base">Tiny little footprints in our hearts</span>
              </div>
            </div>

            {/* Touching Message Column */}
            <div className="lg:col-span-7 space-y-4 font-sans text-gray-700 text-base sm:text-lg leading-relaxed">
              <div className="p-4 rounded-2xl bg-white/70 border border-pink-200 shadow-sm">
                <p className="font-serif font-bold text-xl text-pink-800 flex items-center gap-2">
                  <span>Okayyy, this makes this birthday SO MUCH MORE SPECIAL!!</span>
                  <Sparkles size={20} className="text-pink-500" />
                </p>
              </div>

              <p className="text-pink-900 font-medium">
                A hugeee congratulations on this beautiful new chapter of your life, Vadinaaa! 🥹💗
              </p>

              <p>
                I am sooo happy for you! There's a tiny little princess on her way, and I honestly cannot wait for the day we finally get to meet her.
              </p>

              <p className="bg-pink-100/50 p-4 rounded-2xl border-l-4 border-rose-400 italic font-serif text-pink-950">
                "I already know she's going to be surrounded by so much love, warmth and happiness. She's already so lucky to have you as her mommy!"
              </p>

              <p>
                Wishing you the most beautiful journey into motherhood, filled with countless precious moments, little kicks, tiny smiles and memories you'll cherish forever.
              </p>

              <p className="font-semibold text-pink-800">
                Sending you and our little princess the biggest hugs and all the love in the world!
              </p>

              <div className="pt-4 flex items-center justify-between border-t border-pink-200">
                <div className="flex items-center gap-2 text-rose-600 font-serif font-bold text-lg sm:text-xl">
                  <span>Can't wait to meet our little girl!! 🎀👶🏻</span>
                </div>
                <div className="flex items-center gap-1 text-pink-400">
                  <Star size={16} fill="#fbcfe8" />
                  <Star size={18} fill="#fbcfe8" />
                  <Star size={16} fill="#fbcfe8" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
