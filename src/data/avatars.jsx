import React from 'react';

// 16 Rich 3D Cartoon Avatars (8 Male, 8 Female) matching the mockup style

export const MALE_AVATARS = [
  {
    id: 'm1',
    name: 'Gamer Bro',
    gender: 'male',
    bg: 'bg-gradient-to-b from-indigo-500 to-indigo-800',
    avatarSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
        <defs>
          <linearGradient id="skin1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffedd5" />
            <stop offset="100%" stopColor="#fed7aa" />
          </linearGradient>
          <linearGradient id="hair1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#78350f" />
            <stop offset="100%" stopColor="#451a03" />
          </linearGradient>
          <linearGradient id="headset1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#skin1)" />
        {/* 3D Layered Hair */}
        <path d="M22 38 Q50 12 78 38 Q70 20 50 22 Q30 20 22 38 Z" fill="url(#hair1)" />
        <path d="M26 30 Q50 16 74 30 Q60 24 50 26 Q40 24 26 30 Z" fill="#9a3412" />
        {/* Headset arc */}
        <path d="M18 42 A 32 32 0 0 1 82 42" stroke="#1e293b" strokeWidth="7" fill="none" strokeLinecap="round" />
        <rect x="14" y="34" width="12" height="20" rx="5" fill="url(#headset1)" stroke="#1e293b" strokeWidth="2" />
        <rect x="74" y="34" width="12" height="20" rx="5" fill="url(#headset1)" stroke="#1e293b" strokeWidth="2" />
        {/* Eyes with 3D highlights */}
        <ellipse cx="40" cy="44" rx="4" ry="5" fill="#0f172a" />
        <ellipse cx="60" cy="44" rx="4" ry="5" fill="#0f172a" />
        <circle cx="38.5" cy="42.5" r="1.5" fill="#ffffff" />
        <circle cx="58.5" cy="42.5" r="1.5" fill="#ffffff" />
        {/* Big Happy Smile */}
        <path d="M38 54 Q50 63 62 54 Z" fill="#dc2626" stroke="#0f172a" strokeWidth="2" />
        <path d="M42 55 Q50 58 58 55" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        {/* 3D Hoodie */}
        <path d="M22 85 Q50 66 78 85 L78 95 L22 95 Z" fill="#3b82f6" />
        <path d="M42 74 L50 82 L58 74" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Game Controller in hand */}
        <rect x="36" y="80" width="28" height="15" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="42" cy="87" r="2.5" fill="#ef4444" />
        <circle cx="58" cy="87" r="2.5" fill="#3b82f6" />
      </svg>
    )
  },
  {
    id: 'm2',
    name: 'Chill Guy',
    gender: 'male',
    bg: 'bg-gradient-to-b from-emerald-500 to-teal-800',
    avatarSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="#fde047" />
        {/* Cool Cap backwards */}
        <path d="M24 36 C24 22, 76 22, 76 36 Z" fill="#16a34a" />
        <path d="M18 36 L82 36 L76 40 L24 40 Z" fill="#15803d" />
        <circle cx="50" cy="22" r="3" fill="#f59e0b" />
        {/* Cool Black Sunglasses */}
        <path d="M28 40 L48 40 L46 50 L30 50 Z" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
        <path d="M52 40 L72 40 L70 50 L54 50 Z" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
        <line x1="48" y1="42" x2="52" y2="42" stroke="#0f172a" strokeWidth="4" />
        {/* Lens reflex reflection */}
        <line x1="32" y1="42" x2="42" y2="48" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
        <line x1="56" y1="42" x2="66" y2="48" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
        {/* Chill Smirk */}
        <path d="M40 58 Q52 64 62 55" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* Hawaiian Shirt */}
        <path d="M22 85 Q50 68 78 85 L78 95 L22 95 Z" fill="#0284c7" />
        <circle cx="36" cy="80" r="2" fill="#ffffff" />
        <circle cx="64" cy="80" r="2" fill="#ffffff" />
      </svg>
    )
  },
  {
    id: 'm3',
    name: 'Gym Bro',
    gender: 'male',
    bg: 'bg-gradient-to-b from-amber-500 to-orange-800',
    avatarSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
        <circle cx="50" cy="46" r="23" fill="#fcd34d" />
        {/* Red Headband */}
        <rect x="24" y="30" width="52" height="8" rx="4" fill="#ef4444" stroke="#991b1b" strokeWidth="1.5" />
        {/* Undercut hair */}
        <path d="M28 30 Q50 16 72 30 Z" fill="#451a03" />
        {/* Determined Eyebrows & Eyes */}
        <path d="M36 40 L46 43" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
        <path d="M64 40 L54 43" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
        <circle cx="42" cy="46" r="3" fill="#0f172a" />
        <circle cx="58" cy="46" r="3" fill="#0f172a" />
        {/* Grit teeth smile */}
        <rect x="42" y="55" width="16" height="7" rx="3" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
        <line x1="50" y1="55" x2="50" y2="62" stroke="#0f172a" strokeWidth="1.5" />
        {/* Red Tank top */}
        <path d="M28 85 Q50 70 72 85 L72 95 L28 95 Z" fill="#dc2626" />
        {/* Dumbbell Icon on shoulder */}
        <rect x="18" y="70" width="6" height="16" rx="2" fill="#1e293b" />
        <rect x="14" y="73" width="14" height="4" rx="1" fill="#475569" />
        <rect x="14" y="79" width="14" height="4" rx="1" fill="#475569" />
      </svg>
    )
  },
  {
    id: 'm4',
    name: 'Chaos Energy',
    gender: 'male',
    bg: 'bg-gradient-to-b from-rose-500 to-red-800',
    avatarSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="#f43f5e" />
        <circle cx="50" cy="45" r="22" fill="#ffedd5" />
        {/* Spiky Anime Hair */}
        <path d="M20 36 L28 20 L38 30 L50 14 L62 30 L72 20 L80 36 Z" fill="#eab308" stroke="#ca8a04" strokeWidth="2" />
        {/* Wild Big Eyes */}
        <circle cx="40" cy="44" r="6" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
        <circle cx="60" cy="44" r="6" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
        <circle cx="40" cy="44" r="2.5" fill="#0f172a" />
        <circle cx="60" cy="44" r="2.5" fill="#0f172a" />
        {/* Tongue sticking out */}
        <path d="M38 54 Q50 64 62 54 Z" fill="#0f172a" />
        <path d="M46 57 Q50 66 54 57 Z" fill="#f43f5e" stroke="#0f172a" strokeWidth="1.5" />
        {/* Bright Orange Hoodie */}
        <path d="M24 85 Q50 68 76 85 L76 95 L24 95 Z" fill="#f97316" />
      </svg>
    )
  },
  {
    id: 'm5',
    name: 'Meme King',
    gender: 'male',
    bg: 'bg-gradient-to-b from-cyan-500 to-blue-800',
    avatarSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="#06b6d4" />
        <circle cx="50" cy="45" r="22" fill="#fde047" />
        {/* Golden Crown */}
        <path d="M32 26 L38 34 L50 20 L62 34 L68 26 L68 37 L32 37 Z" fill="#f59e0b" stroke="#78350f" strokeWidth="2" />
        <circle cx="50" cy="20" r="3" fill="#ef4444" />
        {/* Cool Sunglasses */}
        <rect x="30" y="41" width="18" height="10" rx="3" fill="#0f172a" />
        <rect x="52" y="41" width="18" height="10" rx="3" fill="#0f172a" />
        <line x1="48" y1="44" x2="52" y2="44" stroke="#0f172a" strokeWidth="3" />
        {/* Big Smirk */}
        <path d="M40 57 Q50 64 60 55" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* Royal Blue Jacket */}
        <path d="M24 85 Q50 68 76 85 L76 95 L24 95 Z" fill="#2563eb" />
      </svg>
    )
  },
  {
    id: 'm6',
    name: 'Sleepyhead',
    gender: 'male',
    tagline: 'Runs on 2 hours sleep 😴',
    bg: 'bg-gradient-to-b from-purple-500 to-indigo-900',
    avatarSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="#a855f7" />
        {/* Pillow under head */}
        <rect x="18" y="52" width="64" height="24" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" />
        <circle cx="50" cy="44" r="21" fill="#fed7aa" />
        {/* Messy hair */}
        <path d="M26 38 C20 24, 40 18, 50 20 C60 18, 80 24, 74 38 Z" fill="#475569" />
        {/* Sleepy Closed Eyes ^ ^ */}
        <path d="M36 46 Q41 50 46 46" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M54 46 Q59 50 64 46" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Yawning mouth */}
        <ellipse cx="50" cy="55" rx="4" ry="5" fill="#0f172a" />
        {/* ZZZ text */}
        <text x="68" y="30" fontSize="14" fontWeight="900" fill="#fde047">Z</text>
        <text x="78" y="22" fontSize="10" fontWeight="900" fill="#fde047">z</text>
      </svg>
    )
  },
  {
    id: 'm7',
    name: 'Fancy Lad',
    gender: 'male',
    bg: 'bg-gradient-to-b from-teal-500 to-emerald-900',
    avatarSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="#14b8a6" />
        <circle cx="50" cy="44" r="21" fill="#fde047" />
        {/* Slick hair */}
        <path d="M28 35 C32 20, 68 20, 72 35 Z" fill="#1e293b" />
        {/* Round Glasses */}
        <circle cx="40" cy="44" r="7" fill="none" stroke="#0f172a" strokeWidth="2.5" />
        <circle cx="60" cy="44" r="7" fill="none" stroke="#0f172a" strokeWidth="2.5" />
        <line x1="47" y1="44" x2="53" y2="44" stroke="#0f172a" strokeWidth="2.5" />
        {/* Smug smile */}
        <path d="M42 55 Q50 58 58 53" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Suit & Bowtie */}
        <path d="M24 85 Q50 68 76 85 L76 95 L24 95 Z" fill="#0f172a" />
        <polygon points="45,74 55,74 50,78" fill="#ef4444" />
      </svg>
    )
  },
  {
    id: 'm8',
    name: 'Skater Kid',
    gender: 'male',
    bg: 'bg-gradient-to-b from-orange-500 to-red-800',
    avatarSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="#f97316" />
        <circle cx="50" cy="45" r="22" fill="#ffedd5" />
        {/* Beanie */}
        <path d="M26 36 C26 24, 74 24, 74 36 Z" fill="#0284c7" />
        <rect x="24" y="34" width="52" height="6" rx="2" fill="#0369a1" />
        {/* Eyes */}
        <circle cx="41" cy="45" r="3.5" fill="#0f172a" />
        <circle cx="59" cy="45" r="3.5" fill="#0f172a" />
        {/* Big Grin */}
        <path d="M40 54 Q50 62 60 54" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* Overalls */}
        <path d="M24 85 Q50 68 76 85 L76 95 L24 95 Z" fill="#e11d48" />
      </svg>
    )
  }
];

export const FEMALE_AVATARS = [
  {
    id: 'f1',
    name: 'Queen Bee',
    gender: 'female',
    bg: 'bg-gradient-to-b from-pink-500 to-rose-800',
    avatarSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="#ec4899" />
        {/* Long hair background */}
        <path d="M18 40 Q50 16 82 40 L88 85 Q50 92 12 85 Z" fill="#7c2d12" />
        <circle cx="50" cy="44" r="21" fill="#fed7aa" />
        {/* Crown / Tiara */}
        <path d="M34 25 L40 33 L50 20 L60 33 L66 25 L66 35 L34 35 Z" fill="#eab308" stroke="#78350f" strokeWidth="1.5" />
        <circle cx="50" cy="20" r="2.5" fill="#ef4444" />
        {/* Glam Eyes */}
        <ellipse cx="41" cy="44" rx="3.5" ry="4.5" fill="#0f172a" />
        <ellipse cx="59" cy="44" rx="3.5" ry="4.5" fill="#0f172a" />
        <circle cx="39.5" cy="42.5" r="1.5" fill="#ffffff" />
        <circle cx="57.5" cy="42.5" r="1.5" fill="#ffffff" />
        {/* Red Lipstick Smile */}
        <path d="M41 54 Q50 62 59 54" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" fill="none" />
        {/* Pink Top */}
        <path d="M26 85 Q50 70 74 85 L74 95 L26 95 Z" fill="#db2777" />
      </svg>
    )
  },
  {
    id: 'f2',
    name: 'Matcha Girl',
    gender: 'female',
    bg: 'bg-gradient-to-b from-lime-500 to-emerald-800',
    avatarSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="#84cc16" />
        {/* Cute Bob Hair */}
        <path d="M20 36 Q50 18 80 36 L82 66 Q50 60 18 66 Z" fill="#451a03" />
        <circle cx="50" cy="44" r="21" fill="#fde047" />
        {/* Glasses */}
        <circle cx="41" cy="44" r="7" fill="none" stroke="#0f172a" strokeWidth="2.5" />
        <circle cx="59" cy="44" r="7" fill="none" stroke="#0f172a" strokeWidth="2.5" />
        <line x1="48" y1="44" x2="52" y2="44" stroke="#0f172a" strokeWidth="2.5" />
        {/* Sweet Smile */}
        <path d="M43 55 Q50 60 57 55" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Green Sweater */}
        <path d="M26 85 Q50 70 74 85 L74 95 L26 95 Z" fill="#65a30d" />
      </svg>
    )
  },
  {
    id: 'f3',
    name: 'Gossip Queen',
    gender: 'female',
    bg: 'bg-gradient-to-b from-purple-500 to-indigo-900',
    avatarSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="#a855f7" />
        {/* High Ponytail */}
        <circle cx="76" cy="28" r="14" fill="#1e1b4b" />
        <path d="M22 40 Q50 18 78 40 L72 72 Q50 66 28 72 Z" fill="#1e1b4b" />
        <circle cx="50" cy="44" r="21" fill="#ffedd5" />
        {/* Winking Eye */}
        <path d="M36 44 Q41 39 46 44" stroke="#0f172a" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <circle cx="58" cy="44" r="3.5" fill="#0f172a" />
        {/* Gasp Mouth */}
        <ellipse cx="50" cy="56" rx="4.5" ry="5.5" fill="#e11d48" />
        {/* Purple Top */}
        <path d="M26 85 Q50 70 74 85 L74 95 L26 95 Z" fill="#9333ea" />
      </svg>
    )
  },
  {
    id: 'f4',
    name: 'Cozy Girl',
    gender: 'female',
    bg: 'bg-gradient-to-b from-rose-400 to-pink-700',
    avatarSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="#fb7185" />
        {/* Hair Bun */}
        <circle cx="50" cy="20" r="13" fill="#78350f" />
        <circle cx="50" cy="45" r="21" fill="#fed7aa" />
        <path d="M26 38 C30 28, 70 28, 74 38 Z" fill="#78350f" />
        {/* Rosy Blush Cheeks */}
        <circle cx="36" cy="48" r="4.5" fill="#f43f5e" opacity="0.7" />
        <circle cx="64" cy="48" r="4.5" fill="#f43f5e" opacity="0.7" />
        {/* Eyes */}
        <circle cx="41" cy="44" r="3.5" fill="#0f172a" />
        <circle cx="59" cy="44" r="3.5" fill="#0f172a" />
        {/* Smile */}
        <path d="M43 54 Q50 59 57 54" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Oversized Hoodie */}
        <path d="M24 85 Q50 68 76 85 L76 95 L24 95 Z" fill="#fda4af" />
      </svg>
    )
  },
  {
    id: 'f5',
    name: 'Drama Queen',
    gender: 'female',
    bg: 'bg-gradient-to-b from-violet-600 to-purple-950',
    avatarSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="#7c3aed" />
        {/* Voluminous Hair */}
        <path d="M16 42 Q50 12 84 42 L90 85 Q50 94 10 85 Z" fill="#1e1b4b" />
        <circle cx="50" cy="43" r="21" fill="#fde047" />
        {/* Shocked Drama Eyes */}
        <circle cx="40" cy="43" r="5.5" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
        <circle cx="60" cy="43" r="5.5" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
        <circle cx="40" cy="43" r="2.5" fill="#0f172a" />
        <circle cx="60" cy="43" r="2.5" fill="#0f172a" />
        {/* Shocked Mouth */}
        <ellipse cx="50" cy="56" rx="5" ry="6.5" fill="#be123c" />
        {/* Top */}
        <path d="M26 85 Q50 70 74 85 L74 95 L26 95 Z" fill="#4c1d95" />
      </svg>
    )
  },
  {
    id: 'f6',
    name: 'Gamer Girl',
    gender: 'female',
    bg: 'bg-gradient-to-b from-fuchsia-500 to-pink-900',
    avatarSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="#d946ef" />
        {/* Pink Hair */}
        <path d="M20 38 Q50 16 80 38 L82 76 Q50 70 18 76 Z" fill="#a21caf" />
        <circle cx="50" cy="44" r="21" fill="#ffedd5" />
        {/* Kitty Ear Headset */}
        <path d="M20 42 A 30 30 0 0 1 80 42" stroke="#0f172a" strokeWidth="5" fill="none" />
        <path d="M24 22 L34 34 L20 34 Z" fill="#f43f5e" stroke="#0f172a" strokeWidth="2" />
        <path d="M76 22 L80 34 L66 34 Z" fill="#f43f5e" stroke="#0f172a" strokeWidth="2" />
        {/* Eyes */}
        <circle cx="41" cy="44" r="3.5" fill="#0f172a" />
        <circle cx="59" cy="44" r="3.5" fill="#0f172a" />
        {/* Smirk */}
        <path d="M42 54 Q50 60 58 53" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Jersey */}
        <path d="M26 85 Q50 70 74 85 L74 95 L26 95 Z" fill="#701a75" />
      </svg>
    )
  },
  {
    id: 'f7',
    name: 'Pop Star',
    gender: 'female',
    bg: 'bg-gradient-to-b from-amber-400 to-orange-700',
    avatarSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="#fbbf24" />
        {/* Hair */}
        <path d="M18 42 Q50 15 82 42 L88 85 Q50 90 12 85 Z" fill="#b45309" />
        <circle cx="50" cy="44" r="21" fill="#fed7aa" />
        {/* Star Sticker */}
        <polygon points="65,38 66,41 69,41 67,43 68,46 65,44 62,46 63,43 61,41 64,41" fill="#ef4444" />
        {/* Eyes */}
        <ellipse cx="40" cy="44" rx="3.5" ry="4.5" fill="#0f172a" />
        <ellipse cx="60" cy="44" rx="3.5" ry="4.5" fill="#0f172a" />
        {/* Lipstick */}
        <path d="M41 54 Q50 61 59 54" stroke="#e11d48" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* Sparkly Top */}
        <path d="M26 85 Q50 70 74 85 L74 95 L26 95 Z" fill="#d97706" />
      </svg>
    )
  },
  {
    id: 'f8',
    name: 'Detective Girl',
    gender: 'female',
    bg: 'bg-gradient-to-b from-sky-500 to-blue-900',
    avatarSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="#0ea5e9" />
        {/* Beret Hat */}
        <path d="M22 36 C22 20, 78 20, 78 36 Z" fill="#0f172a" />
        <circle cx="50" cy="44" r="21" fill="#ffedd5" />
        {/* Eyebrows & Eyes */}
        <path d="M35 39 L45 41" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
        <circle cx="41" cy="45" r="3.5" fill="#0f172a" />
        <circle cx="59" cy="45" r="3.5" fill="#0f172a" />
        {/* Smirk */}
        <path d="M42 54 Q50 58 58 53" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Trench Coat */}
        <path d="M26 85 Q50 70 74 85 L74 95 L26 95 Z" fill="#0369a1" />
      </svg>
    )
  }
];

export const ALL_AVATARS = [...MALE_AVATARS, ...FEMALE_AVATARS];

export function getAvatarById(id) {
  return ALL_AVATARS.find(a => a.id === id) || MALE_AVATARS[0];
}
