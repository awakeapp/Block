import React, { useState } from 'react';
import { soundFx } from '../utils/audio';
import { Trophy, Trash2, ArrowLeft, Eye, EyeOff, CheckCircle2, XCircle } from 'lucide-react';
import { ALL_QUESTIONS } from '../data/questions';

export default function Leaderboard({ leaderboardEntries, onClearLeaderboard, onClose }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Sort by finalPoints descending, then by correctCount descending
  const sorted = [...leaderboardEntries].sort((a, b) => {
    const ptsA = a.finalPoints !== undefined ? a.finalPoints : (a.scorePercentage || 0);
    const ptsB = b.finalPoints !== undefined ? b.finalPoints : (b.scorePercentage || 0);
    if (ptsB !== ptsA) return ptsB - ptsA;
    return (b.correctCount || 0) - (a.correctCount || 0);
  });

  const toggleExpand = (idx) => {
    soundFx.playPop();
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-xl mx-auto space-y-5">
      <div className="wooden-card p-5 sm:p-7 space-y-5 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b-2 border-amber-950">
          <div className="flex items-center gap-2">
            <Trophy className="w-7 h-7 text-yellow-300 fill-amber-400" />
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-yellow-200 leading-tight">
                Friendship Scoreboard 🌴
              </h2>
              <p className="text-xs font-bold text-amber-200/80">
                Click any friend to inspect their exact answers & points!
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playPop();
              onClose();
            }}
            className="px-3.5 py-1.5 glossy-gold-pill text-xs font-black flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-950" />
            <span>Back</span>
          </button>
        </div>

        {/* Entries list */}
        {sorted.length === 0 ? (
          <div className="text-center py-10 space-y-3">
            <div className="text-5xl">🏆</div>
            <h3 className="font-extrabold text-yellow-200">No attempts recorded yet!</h3>
            <p className="text-xs text-amber-200/70 max-w-xs mx-auto">
              Share your quiz link with friends to populate your leaderboard rankings!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {sorted.map((entry, idx) => {
              let rankMedal = `#${idx + 1}`;
              if (idx === 0) rankMedal = '🥇 1st';
              if (idx === 1) rankMedal = '🥈 2nd';
              if (idx === 2) rankMedal = '🥉 3rd';

              const pts = entry.finalPoints !== undefined ? entry.finalPoints : (entry.scorePercentage || 0);
              const correct = entry.correctCount !== undefined ? entry.correctCount : 0;
              const isExpanded = expandedIndex === idx;

              // Ensure questions list is resolved
              const qList = entry.questions && entry.questions.length > 0 
                ? entry.questions 
                : ALL_QUESTIONS.slice(0, 10);

              const creatorAnswers = entry.creatorAnswers || {};
              const playerAnswers = entry.playerAnswers || {};

              return (
                <div
                  key={idx}
                  className="bg-[#231208] border-2 border-amber-900 rounded-2xl overflow-hidden shadow-md transition-all"
                >
                  {/* Summary Bar */}
                  <div
                    onClick={() => toggleExpand(idx)}
                    className="p-3.5 flex items-center justify-between gap-3 cursor-pointer hover:bg-amber-950/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-black text-sm text-yellow-300 min-w-[45px]">
                        {rankMedal}
                      </span>

                      <div className="w-10 h-10 rounded-xl bg-amber-500 border-2 border-[#120803] flex items-center justify-center text-xl shrink-0">
                        {entry.playerGender === 'female' ? '👧' : '👦'}
                      </div>

                      <div>
                        <h4 className="font-black text-sm text-yellow-200 leading-tight">
                          {entry.playerName}
                        </h4>
                        <p className="text-[10px] font-bold text-amber-200/60">
                          {entry.date || 'Recent'} • {correct}/10 Correct
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 font-black text-xs rounded-full border border-[#120803] ${
                        correct === 10
                          ? 'bg-gradient-to-r from-pink-500 to-amber-400 text-white'
                          : correct >= 8
                          ? 'bg-emerald-400 text-slate-950'
                          : correct >= 5
                          ? 'bg-yellow-400 text-slate-950'
                          : 'bg-rose-500 text-white'
                      }`}>
                        {correct === 10 ? '🍭 100 PTS' : `${pts} PTS`}
                      </span>

                      <button
                        type="button"
                        className="p-1.5 rounded-lg bg-amber-900/60 text-amber-200 hover:text-yellow-300"
                        title={isExpanded ? "Hide Details" : "Inspect Answers"}
                      >
                        {isExpanded ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Friend Answers Detail */}
                  {isExpanded && (
                    <div className="p-4 bg-[#140a04] border-t-2 border-amber-950 space-y-3">
                      <div className="flex items-center justify-between text-xs font-black text-amber-300 border-b border-amber-900/60 pb-2">
                        <span>DETAILED ANSWER BREAKDOWN</span>
                        <span>SCORE: {pts} PTS</span>
                      </div>

                      <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                        {qList.map((q, qIdx) => {
                          const playerOptionIdx = playerAnswers[qIdx];
                          const creatorOptionIdx = creatorAnswers[qIdx];

                          const isAnswered = playerOptionIdx !== undefined;
                          const isCorrect = playerOptionIdx === creatorOptionIdx;

                          const playerChoiceObj = q.options?.[playerOptionIdx];
                          const creatorChoiceObj = q.options?.[creatorOptionIdx];

                          return (
                            <div
                              key={qIdx}
                              className={`p-3 rounded-xl border text-xs font-bold ${
                                isCorrect
                                  ? 'bg-emerald-950/40 border-emerald-800 text-emerald-200'
                                  : 'bg-rose-950/40 border-rose-800 text-rose-200'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-2 mb-1">
                                <span className="font-extrabold text-yellow-300 text-xs">
                                  Q{qIdx + 1}: {q.title}
                                </span>
                                {isCorrect ? (
                                  <span className="px-2 py-0.5 bg-emerald-500 text-slate-950 font-black text-[10px] rounded-full flex items-center gap-1 shrink-0">
                                    <CheckCircle2 className="w-3 h-3" />
                                    +10 PTS
                                  </span>
                                ) : (
                                  <span className="px-2 py-0.5 bg-rose-500 text-white font-black text-[10px] rounded-full flex items-center gap-1 shrink-0">
                                    <XCircle className="w-3 h-3" />
                                    -5 PTS
                                  </span>
                                )}
                              </div>

                              <div className="space-y-0.5 pl-1">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[11px] text-amber-200/70">
                                    {entry.playerName} picked:
                                  </span>
                                  <span className={`font-black ${isCorrect ? 'text-emerald-300' : 'text-rose-300'}`}>
                                    {playerChoiceObj ? playerChoiceObj.label : 'No answer'}
                                  </span>
                                </div>

                                {!isCorrect && creatorChoiceObj && (
                                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                                    <span>Your choice was:</span>
                                    <span className="font-black underline">{creatorChoiceObj.label}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Clear entries button */}
        {sorted.length > 0 && (
          <div className="pt-2 flex justify-end">
            <button
              onClick={() => {
                if (window.confirm("Clear all leaderboard scores?")) {
                  soundFx.playPop();
                  onClearLeaderboard();
                }
              }}
              className="text-xs font-black text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Scoreboard</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
