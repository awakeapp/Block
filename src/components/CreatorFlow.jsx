import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import { ALL_QUESTIONS, getRandom10Questions } from '../data/questions';
import { encodeQuizData } from '../utils/quizEncoder';
import { soundFx } from '../utils/audio';
import { Dices, ArrowRight, ArrowLeft, CheckCircle, SkipForward } from 'lucide-react';

export default function CreatorFlow({ onQuizCreated }) {
  const [step, setStep] = useState(1); // 1: Profile setup, 2: Answering 10 Questions
  const [creatorName, setCreatorName] = useState('');
  const [gender, setGender] = useState('male'); // 'male' | 'female'

  // 10 Random questions selected from the 100-question pool
  const [questions, setQuestions] = useState(() => getRandom10Questions());
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleShuffleQuestions = () => {
    soundFx.playPop();
    setQuestions(getRandom10Questions());
    setAnswers({});
    setCurrentQIndex(0);
  };

  const handleSkipQuestion = () => {
    soundFx.playPop();
    const currentIds = questions.map(q => q.id);
    const available = ALL_QUESTIONS.filter(q => !currentIds.includes(q.id));
    if (available.length === 0) return;

    const randomNewQ = available[Math.floor(Math.random() * available.length)];
    const newQuestions = [...questions];
    newQuestions[currentQIndex] = randomNewQ;
    setQuestions(newQuestions);

    const newAnswers = { ...answers };
    delete newAnswers[currentQIndex];
    setAnswers(newAnswers);
  };

  const handleSelectOption = (optionIdx) => {
    const newAns = { ...answers, [currentQIndex]: optionIdx };
    setAnswers(newAns);

    // Auto advance after short delay
    setTimeout(() => {
      if (currentQIndex < questions.length - 1) {
        setCurrentQIndex(prev => prev + 1);
      }
    }, 250);
  };

  const handleFinishQuiz = () => {
    soundFx.playFanfare();
    const quizPayload = {
      n: creatorName.trim() || 'Anonymous Explorer',
      g: gender,
      a: gender === 'male' ? 'm1' : 'f1',
      q: questions.map(q => q.id),
      ans: answers
    };

    const encoded = encodeQuizData(quizPayload);
    onQuizCreated(encoded, quizPayload);
  };

  const isProfileValid = creatorName.trim().length >= 2;
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="max-w-xl mx-auto space-y-3 sm:space-y-5">
      {step === 1 ? (
        /* STEP 1: Name & Gender Setup */
        <div className="mockup-main-board p-4 sm:p-7 space-y-4 shadow-2xl">
          {/* Step Badge */}
          <div className="text-center">
            <span className="px-3 py-0.5 bg-[#231208] border-2 border-[#5c341b] text-yellow-300 font-extrabold text-[11px] sm:text-xs uppercase tracking-wider rounded-full shadow">
              STEP 1 OF 2
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-3xl font-black text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              Create Your Friendship Quiz 🌴
            </h2>
            <p className="text-xs font-bold text-amber-200/80 max-w-sm mx-auto">
              Enter your name & select your gender to start your 10-question quiz!
            </p>
          </div>

          {/* Name Input Box */}
          <div className="space-y-2">
            <label className="block text-xs font-black text-amber-300 uppercase tracking-widest">
              YOUR NAME / NICKNAME:
            </label>
            <input
              type="text"
              value={creatorName}
              onChange={(e) => setCreatorName(e.target.value)}
              placeholder="e.g. Alex, Sam, Bro123..."
              maxLength={24}
              className="w-full px-4 py-3.5 dark-wood-input font-black text-lg text-yellow-300 placeholder:text-amber-800/80"
            />
          </div>

          {/* Gender Selector (Male / Female) */}
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

          {/* Submit Step 1 Button */}
          <button
            type="button"
            disabled={!isProfileValid}
            onClick={() => {
              soundFx.playPop();
              setStep(2);
            }}
            className={`w-full py-4 font-black text-lg flex items-center justify-center gap-2 transition-all ${
              isProfileValid
                ? 'glossy-gold-pill shadow-xl cursor-pointer'
                : 'bg-[#231208] text-amber-800 border-2 border-[#120803] cursor-not-allowed rounded-2xl'
            }`}
          >
            <span>Start Answering Questions (10)</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      ) : (
        /* STEP 2: Answering 10 Questions */
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => {
                soundFx.playPop();
                setStep(1);
              }}
              className="px-3 py-1.5 glossy-wood-pill text-xs font-black flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleSkipQuestion}
                className="px-3 py-1.5 glossy-wood-pill text-xs font-black flex items-center gap-1 hover:scale-105 active:scale-95 transition-all text-amber-200"
                title="Swap this question with another random habit question"
              >
                <SkipForward className="w-3.5 h-3.5 text-yellow-400" />
                <span>Skip ⏭️</span>
              </button>

              <button
                onClick={handleShuffleQuestions}
                className="px-3 py-1.5 glossy-gold-pill text-xs font-black flex items-center gap-1 hover:scale-105 active:scale-95 transition-all"
              >
                <Dices className="w-3.5 h-3.5" />
                <span>Shuffle All 🎲</span>
              </button>
            </div>
          </div>

          {/* Question Card View with Companion Host */}
          <QuestionCard
            question={questions[currentQIndex]}
            currentIndex={currentQIndex}
            totalQuestions={10}
            selectedOptionIndex={answers[currentQIndex]}
            onSelectOption={handleSelectOption}
            mode="creator"
            playerGender={gender}
          />

          {/* Nav Controls */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              disabled={currentQIndex === 0}
              onClick={() => {
                soundFx.playPop();
                setCurrentQIndex(prev => prev - 1);
              }}
              className={`px-4 py-2.5 glossy-wood-pill text-sm font-black flex items-center gap-1 ${
                currentQIndex === 0 ? 'opacity-40 pointer-events-none' : ''
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Prev</span>
            </button>

            <span className="text-xs font-black text-amber-950 bg-yellow-300 px-3.5 py-1.5 rounded-full border border-amber-900 shadow">
              Answered: {answeredCount} / 10
            </span>

            {currentQIndex < questions.length - 1 ? (
              <button
                disabled={answers[currentQIndex] === undefined}
                onClick={() => {
                  soundFx.playPop();
                  setCurrentQIndex(prev => prev + 1);
                }}
                className={`px-4 py-2.5 glossy-gold-pill text-sm font-black flex items-center gap-1 ${
                  answers[currentQIndex] === undefined ? 'opacity-40 pointer-events-none' : ''
                }`}
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                disabled={answeredCount < 10}
                onClick={handleFinishQuiz}
                className={`px-5 py-2.5 glossy-gold-pill text-sm font-black flex items-center gap-1.5 ${
                  answeredCount < 10 ? 'opacity-40 pointer-events-none' : 'animate-bounce'
                }`}
              >
                <CheckCircle className="w-4 h-4 text-emerald-800" />
                <span>Finish Quiz & Share 🚀</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
