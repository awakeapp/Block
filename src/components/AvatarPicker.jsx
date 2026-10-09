import React from 'react';
import { MALE_AVATARS, FEMALE_AVATARS } from '../data/avatars';
import { soundFx } from '../utils/audio';
import { Check } from 'lucide-react';

export default function AvatarPicker({ selectedAvatar, onSelectAvatar, gender, onGenderChange }) {
  const avatars = gender === 'female' ? FEMALE_AVATARS : MALE_AVATARS;

  return (
    <div className="space-y-4">
      {/* Gender Mode Selector Tabs */}
      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
        <button
          type="button"
          onClick={() => {
            soundFx.playPop();
            onGenderChange('male');
            onSelectAvatar(MALE_AVATARS[0]);
          }}
          className={`py-3 px-4 flex items-center justify-center gap-2 transition-all ${
            gender === 'male' ? 'glossy-gold-pill scale-105' : 'glossy-wood-pill opacity-90'
          }`}
        >
          <span className="text-xl">👦</span>
          <span className="text-xs sm:text-sm font-black">Male</span>
        </button>

        <button
          type="button"
          onClick={() => {
            soundFx.playPop();
            onGenderChange('female');
            onSelectAvatar(FEMALE_AVATARS[0]);
          }}
          className={`py-3 px-4 flex items-center justify-center gap-2 transition-all ${
            gender === 'female' ? 'glossy-gold-pill scale-105' : 'glossy-wood-pill opacity-90'
          }`}
        >
          <span className="text-xl">👧</span>
          <span className="text-xs sm:text-sm font-black">Female</span>
        </button>
      </div>

      {/* Avatars Grid - Neat & Clean (No Subtitle Descriptions) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {avatars.map((av) => {
          const isSelected = selectedAvatar?.id === av.id;
          return (
            <div
              key={av.id}
              onClick={() => {
                soundFx.playSelect();
                onSelectAvatar(av);
              }}
              className={`relative mockup-avatar-card p-3 cursor-pointer text-center flex flex-col items-center justify-center space-y-2.5 ${
                isSelected ? 'mockup-avatar-card-selected' : ''
              }`}
            >
              {/* Green Checkmark Badge */}
              {isSelected && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-[#22c55e] border-2 border-[#120803] rounded-full flex items-center justify-center text-white z-10 animate-pop shadow-md">
                  <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                </div>
              )}

              {/* Cartoon Character Avatar Vector */}
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-1 border-2 border-[#1c0d05] ${av.bg} shadow-md overflow-hidden flex items-center justify-center shrink-0`}>
                {av.avatarSvg}
              </div>

              {/* Clean Title Only - No Description */}
              <h4 className="font-black text-sm text-yellow-300 leading-tight">
                {av.name}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
