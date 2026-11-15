import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CoquetteBow } from './Decorations';
import { Cake, Baby, Mail, Sparkles, Heart, Gift } from 'lucide-react';

interface ScrollIndicatorProps {
  hasOpened: boolean;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ hasOpened }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('birthday-wishes');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setScrollProgress(progress);

      // Determine active section
      const sections = ['birthday-wishes', 'mommy-to-be', 'personal-letter', 'little-princess', 'special-things', 'birthday-gift'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!hasOpened) return null;

  const navItems = [
    { id: 'birthday-wishes', label: 'Wishes', icon: <Cake size={13} /> },
    { id: 'mommy-to-be', label: 'Mommy', icon: <Baby size={13} /> },
    { id: 'personal-letter', label: 'Letter', icon: <Mail size={13} /> },
    { id: 'little-princess', label: 'Princess', icon: <Heart size={13} /> },
    { id: 'special-things', label: 'Special', icon: <Sparkles size={13} /> },
    { id: 'birthday-gift', label: 'Gift', icon: <Gift size={13} /> },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Reading Progress Bar with cute pink gradient */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-50 bg-pink-100/60">
        <div
          className="h-full bg-gradient-to-r from-pink-400 via-rose-500 to-pink-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Bottom Navigation Pill on Mobile/Desktop */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/85 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-pink-200/90 shadow-lg shadow-pink-200/40 flex items-center gap-1.5 sm:gap-2"
        >
          <CoquetteBow size={20} className="hidden sm:inline-block -ml-1 text-pink-500" />

          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-pink-500 text-white shadow-sm scale-105'
                    : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                }`}
                title={item.label}
              >
                <span>{item.icon}</span>
                <span className="hidden md:inline">{item.label}</span>
              </button>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};
