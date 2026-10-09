import React from 'react';
import { soundFx } from '../utils/audio';
import { Trophy, Trash2, ArrowLeft } from 'lucide-react';

export default function Leaderboard({ leaderboardEntries, onClearLeaderboard, onClose }) {
  // Sort by finalPoints descending, then by correctCount descending
  const sorted = [...leaderboardEntries].sort((a, b) => {
    const ptsA = a.finalPoints !== undefined ? a.finalPoints : (a.scorePercentage || 0);
    const ptsB = b.finalPoints !== undefined ? b.finalPoints : (b.scorePercentage || 0);
    if (ptsB !== ptsA) return ptsB - ptsA;
    return (b.correctCount || 0) - (a.correctCount || 0);
  });

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
                Rankings based on points (+10 pts correct, -5 pts wrong)
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playPop();
              onClose();
            }}
            className="px-3.5 py-1.5 glossy-gold-pill text-xs font-black flex items-center gap-1"
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

              return (
                <div
                  key={idx}
                  className="p-3.5 bg-[#231208] border-2 border-amber-900 rounded-2xl flex items-center justify-between gap-3 shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-black text-sm text-yellow-300 min-w-[50px]">
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

                  <div className="text-right">
                    <span className={`px-3 py-1 font-black text-xs rounded-full border border-[#120803] ${
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
                  </div>
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
              className="text-xs font-black text-rose-400 hover:text-rose-300 flex items-center gap-1"
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
