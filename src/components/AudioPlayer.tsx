import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';
import { CoquetteBow } from './Decorations';

// Sweet Music Box Synthesizer using Web Audio API
// Synthesizes a vintage chime/celesta music box playing a gentle birthday lullaby
export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef<boolean>(false);
  const timerRef = useRef<number | null>(null);

  // Notes frequencies in Hz
  // Happy Birthday melody in G major
  const melody = [
    { note: 392.00, dur: 0.35, pause: 0.1 }, // G4
    { note: 392.00, dur: 0.35, pause: 0.1 }, // G4
    { note: 440.00, dur: 0.7, pause: 0.15 }, // A4
    { note: 392.00, dur: 0.7, pause: 0.15 }, // G4
    { note: 523.25, dur: 0.7, pause: 0.15 }, // C5
    { note: 493.88, dur: 1.2, pause: 0.3 },  // B4

    { note: 392.00, dur: 0.35, pause: 0.1 }, // G4
    { note: 392.00, dur: 0.35, pause: 0.1 }, // G4
    { note: 440.00, dur: 0.7, pause: 0.15 }, // A4
    { note: 392.00, dur: 0.7, pause: 0.15 }, // G4
    { note: 587.33, dur: 0.7, pause: 0.15 }, // D5
    { note: 523.25, dur: 1.2, pause: 0.3 },  // C5

    { note: 392.00, dur: 0.35, pause: 0.1 }, // G4
    { note: 392.00, dur: 0.35, pause: 0.1 }, // G4
    { note: 783.99, dur: 0.7, pause: 0.15 }, // G5
    { note: 659.25, dur: 0.7, pause: 0.15 }, // E5
    { note: 523.25, dur: 0.7, pause: 0.15 }, // C5
    { note: 493.88, dur: 0.7, pause: 0.15 }, // B4
    { note: 440.00, dur: 0.9, pause: 0.2 },  // A4

    { note: 698.46, dur: 0.35, pause: 0.1 }, // F5
    { note: 698.46, dur: 0.35, pause: 0.1 }, // F5
    { note: 659.25, dur: 0.7, pause: 0.15 }, // E5
    { note: 523.25, dur: 0.7, pause: 0.15 }, // C5
    { note: 587.33, dur: 0.7, pause: 0.15 }, // D5
    { note: 523.25, dur: 1.5, pause: 0.6 },  // C5 (long hold)

    // Sweet Brahms Lullaby baby chime transition
    { note: 523.25, dur: 0.5, pause: 0.2 }, // C5
    { note: 523.25, dur: 0.5, pause: 0.2 }, // C5
    { note: 659.25, dur: 0.9, pause: 0.2 }, // E5
    { note: 523.25, dur: 0.5, pause: 0.2 }, // C5
    { note: 523.25, dur: 0.5, pause: 0.2 }, // C5
    { note: 659.25, dur: 0.9, pause: 0.3 }, // E5
    { note: 523.25, dur: 0.4, pause: 0.1 }, // C5
    { note: 659.25, dur: 0.4, pause: 0.1 }, // E5
    { note: 783.99, dur: 0.8, pause: 0.2 }, // G5
    { note: 698.46, dur: 0.6, pause: 0.15 }, // F5
    { note: 587.33, dur: 1.4, pause: 0.6 }, // D5
  ];

  // Play a single music box bell note with crystalline harmonic overtone
  const playBellNote = (ctx: AudioContext, freq: number, duration: number) => {
    const now = ctx.currentTime;

    // Fundamental tone
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, now);

    // Sweet celestial harmonic overtone (like a genuine music box tines)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2.01, now);

    // Sparkle harmonic
    const osc3 = ctx.createOscillator();
    const gain3 = ctx.createGain();
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(freq * 3.02, now);

    // Envelopes
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.001, now);
    masterGain.gain.exponentialRampToValueAtTime(0.35, now + 0.02);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration * 1.8);

    gain1.gain.setValueAtTime(0.6, now);
    gain2.gain.setValueAtTime(0.25, now);
    gain3.gain.setValueAtTime(0.12, now);

    osc1.connect(gain1);
    osc2.connect(gain2);
    osc3.connect(gain3);

    gain1.connect(masterGain);
    gain2.connect(masterGain);
    gain3.connect(masterGain);

    masterGain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc3.start(now);

    osc1.stop(now + duration * 2);
    osc2.stop(now + duration * 2);
    osc3.stop(now + duration * 2);
  };

  const startMelodyLoop = (ctx: AudioContext) => {
    let noteIndex = 0;

    const playNextNote = () => {
      if (!isPlayingRef.current) return;

      const item = melody[noteIndex];
      playBellNote(ctx, item.note, item.dur);

      const delayMs = (item.dur + item.pause) * 1000;
      noteIndex = (noteIndex + 1) % melody.length;

      timerRef.current = window.setTimeout(playNextNote, delayMs);
    };

    playNextNote();
  };

  const toggleMusic = async () => {
    if (isPlaying) {
      isPlayingRef.current = false;
      setIsPlaying(false);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
    } else {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === 'suspended') {
        await audioCtxRef.current.resume();
      }

      isPlayingRef.current = true;
      setIsPlaying(true);
      startMelodyLoop(audioCtxRef.current);
    }
  };

  useEffect(() => {
    return () => {
      isPlayingRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleMusic}
        title={isPlaying ? 'Mute Music' : 'Play Birthday Music Box 🎀'}
        className={`flex items-center gap-2 px-3.5 py-2 rounded-full backdrop-blur-md border transition-all duration-300 shadow-md ${
          isPlaying
            ? 'bg-pink-500/90 text-white border-pink-300 shadow-pink-300/50 scale-105 ring-2 ring-pink-200'
            : 'bg-white/85 text-pink-600 border-pink-200 hover:bg-pink-50 hover:scale-105'
        }`}
        aria-label="Toggle birthday music"
      >
        <CoquetteBow size={20} className="-mr-1 animate-pulse-subtle" />
        {isPlaying ? (
          <>
            <Volume2 size={16} className="animate-bounce" />
            <span className="text-xs font-medium tracking-wide">Playing Lullaby 🎵</span>
            {/* Cute equalizer bars */}
            <span className="flex items-end gap-0.5 h-3 ml-0.5">
              <span className="w-1 bg-white rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-2"></span>
              <span className="w-1 bg-white rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3"></span>
              <span className="w-1 bg-white rounded-full animate-[pulse_0.5s_ease-in-out_infinite] h-1.5"></span>
            </span>
          </>
        ) : (
          <>
            <Music size={16} />
            <span className="text-xs font-medium tracking-wide">Music Box</span>
            <Sparkles size={12} className="text-pink-400" />
          </>
        )}
      </button>
    </div>
  );
};
