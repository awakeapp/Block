import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import { ALL_QUESTIONS } from '../data/questions';
import { soundFx } from '../utils/audio';
import { ArrowRight } from 'lucide-react';

export default function PlayerFlow({ quizPayload, onFinishPlayerQuiz }) {
  const creatorName = quizPayload.n || 'Your Friend';

  // Retrieve the EXACT 10 unique questions chosen by creator
  const questions = (quizPayload.q || []).map(qId => 
    ALL_QUESTIONS.find(q => q.id === qId)
  ).filter(Boolean);

  const [step, setStep] = useState(1); // 1: Player info, 2: Answering questions
  const [playerName, setPlayerName] = useState('');
  const [gender, setGender] = useState('female');

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [playerAnswers, setPlayerAnswers] = useState({});

  // Streak tracking for dynamic character expressions
  const [correctStreak, setCorrectStreak] = useState(0);
  const [wrongStreak, setWrongStreak] = useState(0);
  const [lastReaction, setLastReaction] = useState('idle');

  const handleSelectOption = (optionIdx) => {
    // NO SECOND CHANCES: If already answered, ignore subsequent clicks
    if (playerAnswers[currentQIndex] !== undefined) return;

    const newAns = { ...playerAnswers, [currentQIndex]: optionIdx };
    setPlayerAnswers(newAns);

    const isCorrect = optionIdx === (quizPayload.ans?.[currentQIndex]);
    let reactionState = 'idle';

    if (isCorrect) {
      soundFx.playCorrect();
      const newCorrect = correctStreak + 1;
      setCorrectStreak(newCorrect);
      setWrongStreak(0);
      reactionState = newCorrect >= 2 ? 'amazed' : 'correct';
    } else {
      soundFx.playWrong();
      const newWrong = wrongStreak + 1;
      setWrongStreak(newWrong);
      setCorrectStreak(0);
      reactionState = newWrong >= 2 ? 'sad' : 'wrong';
    }

    setLastReaction(reactionState);

    // Auto-advance immediately to the next question
    setTimeout(() => {
      if (currentQIndex < questions.length - 1) {
        setCurrentQIndex(prev => prev + 1);
      } else {
        handleFinish(newAns);
      }
    }, 750);
  };

  const handleFinish = (finalAnswers = playerAnswers) => {
    soundFx.playFanfare();

    let correctCount = 0;
    let wrongCount = 0;
    const creatorAnswers = quizPayload.ans || {};
    
    questions.forEach((q, idx) => {
      if (finalAnswers[idx] === creatorAnswers[idx]) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });

    const rawPoints = (correctCount * 10) - (wrongCount * 5);
    const finalPoints = Math.max(0, rawPoints);

    const resultData = {
      playerName: playerName.trim() || 'Guest Explorer',
      playerGender: gender,
      creatorName,
      correctCount,
      wrongCount,
      finalPoints,
      totalQuestions: questions.length,
      questions,
      creatorAnswers,
      playerAnswers: finalAnswers,
      date: new Date().toLocaleDateString()
    };

    onFinishPlayerQuiz(resultData);
  };

  const isNameValid = playerName.trim().length >= 2;

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {step === 1 ? (
        /* STEP 1: Friend Name & Gender */
        <div className="mockup-main-board p-6 sm:p-8 space-y-6 shadow-2xl">
          {/* Creator Greeting Banner */}
          <div className="p-4 bg-amber-950/80 border-2 border-amber-800 rounded-2xl flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500 border-2 border-amber-950 flex items-center justify-center text-2xl shrink-0">
              {quizPayload.g === 'female' ? '👧' : '👦'}
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-amber-900 bg-yellow-300 px-2.5 py-0.5 rounded-full">
                Friendship Quiz Challenge
              </span>
              <h3 className="text-lg font-black text-yellow-200 leading-tight mt-0.5">
                {creatorName} invited you to take their quiz!
              </h3>
              <p className="text-xs font-bold text-amber-200/80">
                +10 pts for correct • <span className="text-rose-400 font-extrabold">-5 MINUS POINTS</span> for wrong answers! 🚫
              </p>
            </div>
          </div>

          <div className="text-center space-y-1">
            <h2 className="text-xl font-black text-yellow-200">
              Enter Your Info To Start
            </h2>
          </div>

          {/* Player Name Input */}
          <div className="space-y-2">
            <label className="block text-xs font-black text-amber-300 uppercase tracking-widest">
              YOUR NAME / NICKNAME:
            </label>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="e.g. Jordan, Sam, Bestie..."
              maxLength={24}
              className="w-full px-4 py-3.5 dark-wood-input font-black text-lg text-yellow-300 placeholder:text-amber-800/80"
            />
          </div>

          {/* Gender Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-black text-amber-300 uppercase tracking-widest">
              I AM A:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  soundFx.playPop();
                  setGender('male');
                }}
                className={`py-3.5 px-4 flex items-center justify-center gap-2 transition-all ${
                  gender === 'male' ? 'glossy-gold-pill scale-105' : 'glossy-wood-pill opacity-80'
                }`}
              >
                <span className="text-2xl">👦</span>
                <span className="font-black text-sm sm:text-base">Male</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundFx.playPop();
                  setGender('female');
                }}
                className={`py-3.5 px-4 flex items-center justify-center gap-2 transition-all ${
                  gender === 'female' ? 'glossy-gold-pill scale-105' : 'glossy-wood-pill opacity-80'
                }`}
              >
                <span className="text-2xl">👧</span>
                <span className="font-black text-sm sm:text-base">Female</span>
              </button>
            </div>
          </div>

          {/* Start Button */}
          <button
            type="button"
            disabled={!isNameValid}
            onClick={() => {
              soundFx.playPop();
              setStep(2);
            }}
            className={`w-full py-4 font-black text-lg flex items-center justify-center gap-2 transition-all ${
              isNameValid
                ? 'glossy-gold-pill shadow-xl cursor-pointer'
                : 'bg-[#231208] text-amber-800 border-2 border-[#120803] cursor-not-allowed rounded-2xl'
            }`}
          >
            <span>Take {creatorName}’s Quiz (10 Qs)</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      ) : (
        /* STEP 2: Answering Quiz Questions */
        <div className="space-y-4">
          <QuestionCard
            question={questions[currentQIndex]}
            currentIndex={currentQIndex}
            totalQuestions={10}
            selectedOptionIndex={playerAnswers[currentQIndex]}
            onSelectOption={handleSelectOption}
            mode="player"
            creatorName={creatorName}
            playerGender={gender}
            creatorAnswerIndex={quizPayload.ans?.[currentQIndex]}
            overrideReaction={lastReaction}
          />

          {/* Progress Indicator */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <span className="text-xs font-black text-amber-200 uppercase">
              No second chances! Choose carefully
            </span>

            <span className="text-xs font-black text-amber-950 bg-yellow-300 px-3.5 py-1.5 rounded-full border border-amber-900 shadow">
              Question {currentQIndex + 1} of 10
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
