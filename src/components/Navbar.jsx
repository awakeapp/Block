import React, { useState } from 'react';
import { Volume2, VolumeX, RefreshCw } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function Navbar({ onReset }) {
  const [muted, setMuted] = useState(!soundFx.enabled);

  const handleToggleSound = () => {
    const isEnabled = soundFx.toggleSound();
    setMuted(!isEnabled);
    if (isEnabled) {
      soundFx.playPop();
    }
  };

  return (
    <header className="relative z-30 pt-3 pb-2 px-3">
      <div className="max-w-xl mx-auto flex items-start justify-between relative">
        {/* Hanging Ropes & Monkey on Vine (Left side decor) */}
        <div className="absolute -top-3 left-2 sm:-left-6 flex flex-col items-center z-10 animate-swing pointer-events-none">
          <div className="w-1.5 h-10 bg-amber-900 border-x border-amber-950" />
          <div className="text-3xl sm:text-4xl filter drop-shadow-lg">
            🐒
          </div>
        </div>

        {/* Center Hanging Wooden Signboard */}
        <div 
          onClick={onReset}
          className="hanging-wood-sign px-4 py-2.5 mx-auto cursor-pointer group text-center flex flex-col items-center justify-center relative max-w-[280px] sm:max-w-md w-full"
        >
          {/* Top Hanging Ropes decorative tabs */}
          <div className="absolute -top-4 left-6 w-1.5 h-4 bg-amber-900 border-x border-amber-950" />
          <div className="absolute -top-4 right-6 w-1.5 h-4 bg-amber-900 border-x border-amber-950" />

          <h1 className="text-2xl sm:text-3xl font-black text-yellow-300 tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] leading-none group-hover:scale-105 transition-transform flex items-center justify-center gap-1">
            <span>DON'T BLOCK ME</span>
            <span className="text-rose-500">!</span>
          </h1>

          <p className="text-[10px] sm:text-xs font-black text-amber-200 uppercase tracking-wider mt-1 opacity-90">
            3D JUNGLE ADVENTURE • ANIMATED COMPANION HOST • 10 QUESTIONS
          </p>
        </div>

        {/* Toucan Bird decor (Right side) */}
        <div className="absolute -top-2 right-12 sm:right-16 hidden sm:block text-3xl filter drop-shadow-md pointer-events-none">
          🦜
        </div>

        {/* Top Right Action Buttons (Round dark wood matching mockup) */}
        <div className="flex items-center gap-2 relative z-20 shrink-0">
          <button
            onClick={handleToggleSound}
            className="w-10 h-10 rounded-2xl bg-gradient-to-b from-[#5c341b] to-[#341c0c] border-2 border-[#1c0e06] shadow-md flex items-center justify-center text-amber-300 hover:scale-110 active:scale-95 transition-all"
            title={muted ? "Unmute Sound" : "Mute Sound"}
          >
            {muted ? <VolumeX className="w-5 h-5 text-rose-500" /> : <Volume2 className="w-5 h-5 text-amber-400" />}
          </button>

          <button
            onClick={() => {
              soundFx.playPop();
              onReset();
            }}
            className="w-10 h-10 rounded-2xl bg-gradient-to-b from-[#b91c1c] to-[#7f1d1d] border-2 border-[#1c0e06] shadow-md flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all"
            title="Reset Quiz"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
