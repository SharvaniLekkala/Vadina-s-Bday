import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'heart' | 'sparkle' | 'petal' | 'star';
  duration: number;
  delay: number;
}

export const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [clickBursts, setClickBursts] = useState<{ id: number; x: number; y: number; emoji: string }[]>([]);

  useEffect(() => {
    // Generate initial gentle ambient floating items
    const items: Particle[] = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 14 + 10,
      type: (['heart', 'sparkle', 'petal', 'star'] as const)[i % 4],
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(items);

    // Global click listener to create cute micro bursts of hearts
    const handleClick = (e: MouseEvent) => {
      // Don't trigger if clicking interactive buttons (they have their own feedback)
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a')) return;

      const emojis = ['💗', '✨', '🎀', '🌸', '💫'];
      const newBurst = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      };

      setClickBursts((prev) => [...prev.slice(-15), newBurst]);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient floating items */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute select-none opacity-40 text-pink-300"
          style={{
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            fontSize: `${p.size}px`,
          }}
          animate={{
            y: ['0vh', '-20vh', '0vh'],
            x: ['0vw', `${(p.id % 2 === 0 ? 1 : -1) * 3}vw`, '0vw'],
            rotate: [0, 20, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        >
          {p.type === 'heart' && '💗'}
          {p.type === 'sparkle' && '✨'}
          {p.type === 'petal' && '🌸'}
          {p.type === 'star' && '⭐'}
        </motion.div>
      ))}

      {/* Click tap micro-bursts */}
      <AnimatePresence>
        {clickBursts.map((b) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 1, scale: 0.5, x: b.x, y: b.y }}
            animate={{
              opacity: 0,
              scale: 1.6,
              y: b.y - 60,
              x: b.x + (Math.random() * 40 - 20),
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="fixed text-xl pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
            onAnimationComplete={() => {
              setClickBursts((prev) => prev.filter((item) => item.id !== b.id));
            }}
          >
            {b.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
