import React from 'react';

export default function CompanionHost({ playerGender = 'male', reaction = 'idle', customMessage = '' }) {
  // If player is male -> companion is Girl character.
  // If player is female -> companion is BOY character.
  const isFemaleHost = playerGender === 'male';

  // Determine image path and speech text based on reaction states:
  // - 'correct': happy.png
  // - 'wrong': angry.png
  // - 'amazed': amazed.png (multiple right in a row)
  // - 'sad': sad.png (multiple wrong in a row)
  let imgPath = '';
  let speechText = customMessage;

  if (isFemaleHost) {
    // Girl Character Images
    switch (reaction) {
      case 'amazed':
        imgPath = '/123/Girl/amazed.png';
        speechText = speechText || "WOW! MULTIPLE RIGHT IN A ROW! AMAZED! 🌟✨";
        break;
      case 'sad':
        imgPath = '/123/Girl/sad.png';
        speechText = speechText || "NOOO! MULTIPLE WRONG IN A ROW! SO SAD... 😭💔";
        break;
      case 'correct':
      case 'match':
        imgPath = '/123/Girl/happy.png';
        speechText = speechText || "RIGHT ANSWER! HAPPY! 💖✨ (+10 PTS)";
        break;
      case 'wrong':
      case 'mismatch':
        imgPath = '/123/Girl/angry.png';
        speechText = speechText || "WRONG ANSWER! ANGRY! 😠💥 (-5 PTS)";
        break;
      case 'hover':
      case 'thinking':
        imgPath = '/123/Girl/amazed.png';
        speechText = speechText || "Oooh spicy choice... 👀";
        break;
      default:
        imgPath = '/123/Girl/happy.png';
        speechText = speechText || "Pick carefully! Choose wisely 🌴";
    }
  } else {
    // BOY Character Images
    switch (reaction) {
      case 'amazed':
        imgPath = '/123/BOY/amazed.png';
        speechText = speechText || "UNSTOPPABLE STREAK! AMAZED! 🔥🌟";
        break;
      case 'sad':
        imgPath = '/123/BOY/sad.png';
        speechText = speechText || "OH NO MAN... MULTIPLE WRONG! SO SAD! 😭";
        break;
      case 'correct':
      case 'match':
        imgPath = '/123/BOY/Happy.png';
        speechText = speechText || "RIGHT ANSWER! HAPPY! 🔥 (+10 PTS)";
        break;
      case 'wrong':
      case 'mismatch':
        imgPath = '/123/BOY/angry.png';
        speechText = speechText || "WRONG ANSWER! ANGRY! 💀 (-5 PTS)";
        break;
      case 'hover':
      case 'thinking':
        imgPath = '/123/BOY/amazed.png';
        speechText = speechText || "HMM, interesting pick... 🤔";
        break;
      default:
        imgPath = '/123/BOY/Happy.png';
        speechText = speechText || "Choose wisely, bestie! 🗿";
    }
  }

  const isShaking = reaction === 'wrong' || reaction === 'mismatch' || reaction === 'sad';

  return (
    <div className="flex flex-col items-center justify-center relative select-none">
      {/* Dynamic Speech Bubble */}
      <div className={`speech-bubble px-3.5 py-2 text-xs sm:text-sm text-center mb-2 shadow-xl max-w-[210px] transition-all duration-300 ${
        reaction === 'wrong' || reaction === 'mismatch'
          ? 'bg-rose-600 text-white border-amber-950 animate-angry'
          : reaction === 'sad'
          ? 'bg-indigo-600 text-white border-amber-950 animate-angry'
          : reaction === 'amazed'
          ? 'bg-yellow-300 text-amber-950 border-amber-950 animate-heart-pop font-black'
          : reaction === 'correct' || reaction === 'match'
          ? 'bg-emerald-400 text-slate-950 border-amber-950 animate-heart-pop'
          : 'bg-yellow-200 text-amber-950 border-amber-950'
      }`}>
        <span>{speechText}</span>
      </div>

      {/* Character Image Container */}
      <div className={`relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl border-4 border-amber-950 shadow-2xl p-1.5 bg-gradient-to-b ${
        isFemaleHost ? 'from-pink-500 to-rose-700' : 'from-indigo-500 to-cyan-700'
      } ${
        isShaking ? 'animate-angry ring-4 ring-rose-400' : reaction === 'amazed' ? 'animate-heart-pop ring-4 ring-yellow-300' : 'animate-bounce-gentle'
      }`}>
        {/* Render Character Image */}
        <img
          src={imgPath}
          alt={isFemaleHost ? 'Girl Host Companion' : 'Boy Host Companion'}
          className="w-full h-full object-contain filter drop-shadow-lg"
        />
      </div>

      <span className="text-[10px] font-black text-amber-200 uppercase tracking-widest mt-1.5 bg-amber-950/90 px-2.5 py-0.5 rounded-full border border-amber-800 shadow">
        {isFemaleHost ? 'Girl Host 👧' : 'Boy Host 👦'}
      </span>
    </div>
  );
}
