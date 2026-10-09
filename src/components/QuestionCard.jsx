import React, { useState } from 'react';
import CompanionHost from './CompanionHost';
import { soundFx } from '../utils/audio';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

export default function QuestionCard({ 
  question, 
  currentIndex, 
  totalQuestions = 10, 
  selectedOptionIndex, 
  onSelectOption,
  mode = 'creator', // 'creator' | 'player'
  creatorName = '',
  playerGender = 'male',
  creatorAnswerIndex = null,
  overrideReaction = null
}) {
  const [hoveredOption, setHoveredOption] = useState(null);

  // Dynamic companion reaction mapping
  let companionReaction = 'idle';

  if (hoveredOption !== null) {
    companionReaction = 'hover';
  }

  if (selectedOptionIndex !== undefined) {
    if (mode === 'player' && creatorAnswerIndex !== null) {
      if (overrideReaction) {
        companionReaction = overrideReaction;
      } else if (selectedOptionIndex === creatorAnswerIndex) {
        companionReaction = 'correct';
      } else {
        companionReaction = 'wrong';
      }
    } else {
      companionReaction = 'correct';
    }
  }

  return (
    <div className="wooden-card p-3 sm:p-5 space-y-3 shadow-2xl relative overflow-hidden">
      {/* Top Header / Progress */}
      <div className="flex flex-wrap items-center justify-between gap-1.5 border-b-2 border-amber-950/40 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="px-2.5 py-0.5 bg-amber-950 border border-amber-800 text-yellow-300 font-black text-[11px] sm:text-xs rounded-full shadow">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span className="px-2.5 py-0.5 bg-amber-900/80 border border-amber-700 text-amber-200 font-extrabold text-[11px] sm:text-xs rounded-full">
            {question.category}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-20 sm:w-36 h-2.5 bg-amber-950 rounded-full border-2 border-amber-900 overflow-hidden p-0.5 shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Body: Companion Host + Question & Clean Options */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-3 pt-0.5">
        {/* Animated Companion Host */}
        <div className="shrink-0 w-full md:w-auto flex justify-center">
          <CompanionHost
            playerGender={playerGender}
            reaction={companionReaction}
          />
        </div>

        {/* Question Title & Option Cards */}
        <div className="flex-1 space-y-2.5 w-full">
          <div className="space-y-0.5 text-center md:text-left">
            {mode === 'player' && creatorName && (
              <p className="text-[11px] font-bold text-amber-300 uppercase tracking-widest flex items-center justify-center md:justify-start gap-1">
                <HelpCircle className="w-3 h-3" /> What would {creatorName} answer?
              </p>
            )}
            <h2 className="text-base sm:text-2xl font-black text-yellow-200 leading-tight drop-shadow">
              {question.title}
            </h2>
          </div>

          {/* 4 Bamboo Option Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
            {question.options.map((opt, idx) => {
              const isSelected = selectedOptionIndex === idx;
              const isPlayerMode = mode === 'player' && creatorAnswerIndex !== null;
              const isCorrectMatch = isPlayerMode && isSelected && idx === creatorAnswerIndex;
              const isWrongMatch = isPlayerMode && isSelected && idx !== creatorAnswerIndex;
              const isRevealedRight = isPlayerMode && selectedOptionIndex !== undefined && !isCorrectMatch && idx === creatorAnswerIndex;

              let cardClass = 'bamboo-card';
              if (isSelected) {
                if (isPlayerMode) {
                  cardClass = isCorrectMatch ? 'bamboo-card-correct' : 'bamboo-card-wrong';
                } else {
                  cardClass = 'bamboo-card-correct';
                }
              } else if (isRevealedRight) {
                cardClass = 'bamboo-card-correct opacity-90';
              }

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredOption(idx)}
                  onMouseLeave={() => setHoveredOption(null)}
                  onClick={() => {
                    soundFx.playSelect();
                    onSelectOption(idx);
                  }}
                  className={`${cardClass} p-2.5 sm:p-3.5 cursor-pointer flex items-center gap-2.5 relative`}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white border-2 border-amber-900 shadow flex items-center justify-center text-xl sm:text-2xl shrink-0">
                    {opt.icon}
                  </div>

                  <div className="flex-1 min-w-0 pr-4">
                    <h3 className={`font-extrabold text-xs sm:text-base leading-snug ${
                      isSelected ? (isWrongMatch ? 'text-white' : 'text-white') : 'text-amber-950'
                    }`}>
                      {opt.label}
                    </h3>
                  </div>

                  {/* Right or Wrong Badge Icon */}
                  {isSelected && (
                    <div className="absolute top-3 right-3 animate-pop">
                      {isWrongMatch ? (
                        <XCircle className="w-6 h-6 text-white fill-rose-600 stroke-white stroke-[2.5]" />
                      ) : (
                        <CheckCircle2 className="w-6 h-6 text-white fill-emerald-600 stroke-white stroke-[2.5]" />
                      )}
                    </div>
                  )}

                  {/* Highlight creator's right answer if player picked wrong */}
                  {isRevealedRight && (
                    <div className="absolute top-3 right-3 animate-pop">
                      <CheckCircle2 className="w-6 h-6 text-white fill-emerald-600 stroke-white stroke-[2.5]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
