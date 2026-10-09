import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';
import { 
  Sparkles, Download, CheckCircle2, XCircle, 
  ShieldCheck, ShieldAlert, Ban, Frown
} from 'lucide-react';

export default function ResultsScreen({ resultData, onCreateOwnQuiz }) {
  const {
    playerName,
    playerGender,
    creatorName,
    correctCount = 0,
    wrongCount = 0,
    finalPoints = 0,
    totalQuestions = 10,
    questions,
    creatorAnswers,
    playerAnswers
  } = resultData;

  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    if (correctCount >= 8) {
      soundFx.playFanfare();
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
      });
    } else if (correctCount >= 5) {
      soundFx.playPop();
    } else {
      soundFx.playWrong();
    }
  }, [correctCount]);

  let rankBadge = {};

  if (correctCount === 10) {
    rankBadge = {
      title: 'PERFECT 10/10 SOULMATE! 🍭👑',
      subtitle: `WOW! You get a sweet LOLLIPOP reward! 100 Points! 🍭💖`,
      bg: 'bg-gradient-to-r from-pink-500 to-emerald-500 text-white',
      icon: <span className="text-4xl animate-bounce">🍭</span>,
      showLollipop: true
    };
  } else if (correctCount >= 8) { // 8 or 9
    rankBadge = {
      title: `8-9/10: OK OK! 🤝✨`,
      subtitle: `Pretty good! ${finalPoints} Points achieved! No blocking!`,
      bg: 'bg-emerald-500 text-slate-950',
      icon: <ShieldCheck className="w-8 h-8 text-slate-950" />
    };
  } else if (correctCount >= 5) { // 5 to 7
    rankBadge = {
      title: `5-7/10: UPSET (BUT NO BLOCK YET) 🧐`,
      subtitle: `${creatorName} is slightly upset... but won't block you yet! (${finalPoints} Points)`,
      bg: 'bg-amber-400 text-slate-950',
      icon: <ShieldAlert className="w-8 h-8 text-slate-950" />
    };
  } else if (correctCount === 4) { // 4
    rankBadge = {
      title: `4/10: UPSET & ANNOYED! 😤🔥`,
      subtitle: `Very upset! You are 1 strike away from getting BLOCKED! (${finalPoints} Points)`,
      bg: 'bg-orange-500 text-white',
      icon: <Frown className="w-8 h-8 text-orange-100" />
    };
  } else { // 0 to 3
    rankBadge = {
      title: `SERIOUSLY BLOCKED! 🚫💀`,
      subtitle: `Score under 4! (-5 MINUS POINTS APPLIED) Instant permanent block! 💥`,
      bg: 'bg-rose-600 text-white',
      icon: <Ban className="w-8 h-8 text-rose-200" />
    };
  }

  // Generate Story Thumbnail Card with BOTH Boy & Girl Characters
  const handleDownloadStoryCard = () => {
    soundFx.playPop();
    setDownloading(true);

    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext('2d');

    // 3D Jungle Background
    const grad = ctx.createLinearGradient(0, 0, 0, 1920);
    grad.addColorStop(0, '#1e3a1e');
    grad.addColorStop(0.5, '#3d2314');
    grad.addColorStop(1, '#1c0f08');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1080, 1920);

    // Inner wooden card container
    ctx.fillStyle = '#5c3a21';
    ctx.strokeStyle = '#28160c';
    ctx.lineWidth = 16;
    ctx.beginPath();
    ctx.roundRect(80, 140, 920, 1640, 40);
    ctx.fill();
    ctx.stroke();

    // Big Fancy Title
    ctx.fillStyle = '#fef08a';
    ctx.font = '900 76px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText("DON'T BLOCK ME! 🌴", 540, 240);

    // Creator Asking Title
    ctx.fillStyle = '#f59e0b';
    ctx.font = '800 48px sans-serif';
    ctx.fillText(`${creatorName} asks:`, 540, 310);

    ctx.fillStyle = '#ffffff';
    ctx.font = '800 38px sans-serif';
    ctx.fillText('"Will you pass my 10 questions or get BLOCKED?" 🚫', 540, 370);

    // Player vs Creator title
    ctx.fillStyle = '#fde047';
    ctx.font = '900 52px sans-serif';
    ctx.fillText(`${playerName}  VS  ${creatorName}`, 540, 460);

    // Score Circle Background
    ctx.beginPath();
    ctx.arc(540, 720, 180, 0, Math.PI * 2);
    ctx.fillStyle = correctCount >= 5 ? '#10b981' : '#ef4444';
    ctx.fill();
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#28160c';
    ctx.stroke();

    // Score text
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 96px sans-serif';
    ctx.fillText(`${correctCount}/10`, 540, 755);

    // Trust Rank Badge
    ctx.fillStyle = '#fef08a';
    ctx.font = '900 48px sans-serif';
    ctx.fillText(rankBadge.title, 540, 1010);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '600 34px sans-serif';
    ctx.fillText(rankBadge.subtitle, 540, 1070);

    // Load Boy and Girl Images for canvas
    const boyImg = new Image();
    const girlImg = new Image();

    let loadedCount = 0;
    const checkDraw = () => {
      loadedCount++;
      if (loadedCount === 2) {
        // Draw Boy Character on Left side
        ctx.drawImage(boyImg, 120, 1140, 260, 300);
        // Draw Girl Character on Right side
        ctx.drawImage(girlImg, 700, 1140, 260, 300);

        // Score summary box
        ctx.fillStyle = '#3d2314';
        ctx.beginPath();
        ctx.roundRect(140, 1460, 800, 220, 30);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#fef08a';
        ctx.font = '700 42px sans-serif';
        ctx.fillText(`Points: ${finalPoints} pts (${correctCount} Correct, ${wrongCount} Wrong)`, 540, 1530);

        ctx.fillStyle = correctCount <= 3 ? '#f43f5e' : '#10b981';
        ctx.font = '800 46px sans-serif';
        ctx.fillText(correctCount <= 3 ? "SERIOUSLY BLOCKED! 🚫💀" : correctCount === 10 ? "GOT A LOLLIPOP REWARD! 🍭" : "SAFE FROM BLOCK! 🎉", 540, 1620);

        // Footer Watermark
        ctx.fillStyle = '#ffffff';
        ctx.font = '800 36px sans-serif';
        ctx.fillText("Create your own quiz at Don't Block Me! ✨", 540, 1840);

        const link = document.createElement('a');
        link.download = `DontBlockMe_Story_${playerName}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();

        setDownloading(false);
      }
    };

    boyImg.onload = checkDraw;
    girlImg.onload = checkDraw;

    boyImg.src = '/123/BOY/Happy.png';
    girlImg.src = '/123/Girl/happy.png';
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {/* Score Header Card */}
      <div className="mockup-main-board p-6 sm:p-8 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <span className="px-3.5 py-1 bg-amber-950 border border-amber-700 text-yellow-300 font-extrabold text-xs uppercase tracking-wider rounded-full shadow">
          Quiz Results 🌴
        </span>

        {/* Both Characters Facing Each Other */}
        <div className="flex items-center justify-between gap-2 pt-2 px-2">
          {/* Boy Character */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-b from-indigo-500 to-cyan-700 p-1 border-2 border-amber-950 shadow-lg">
              <img src="/123/BOY/Happy.png" alt="Boy Character" className="w-full h-full object-contain filter drop-shadow" />
            </div>
            <span className="font-black text-sm text-yellow-300 mt-2">Boy</span>
          </div>

          <div className="text-center space-y-0.5">
            <div className="text-xl font-black text-amber-400">VS</div>
            <span className="text-[11px] font-black text-amber-200 block uppercase">
              {creatorName} asks:
            </span>
          </div>

          {/* Girl Character */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-b from-pink-500 to-rose-700 p-1 border-2 border-amber-950 shadow-lg">
              <img src="/123/Girl/happy.png" alt="Girl Character" className="w-full h-full object-contain filter drop-shadow" />
            </div>
            <span className="font-black text-sm text-yellow-300 mt-2">Girl</span>
          </div>
        </div>

        {/* Big Score Counter */}
        <div className="space-y-2">
          <div className="inline-flex flex-col items-center justify-center w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#231208] text-white border-4 border-amber-700 shadow-2xl p-2 mx-auto relative">
            {correctCount === 10 && (
              <div className="absolute -top-4 -right-4 text-4xl animate-bounce">
                🍭
              </div>
            )}
            <span className="text-3xl sm:text-4xl font-black text-yellow-300">
              {finalPoints} <span className="text-xs text-amber-300">PTS</span>
            </span>
            <span className="text-[11px] font-bold text-amber-200/90 mt-1">
              {correctCount} Correct • {wrongCount} Wrong
            </span>
          </div>

          <p className="text-xs font-extrabold text-amber-200">
            <span className="text-emerald-400 font-black">+{correctCount * 10} pts</span> for correct matches • <span className="text-rose-400 font-black">-{wrongCount * 5} pts</span> minus penalty!
          </p>
        </div>

        {/* Lollipop Reward Banner for 10/10 */}
        {correctCount === 10 && (
          <div className="p-4 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 border-2 border-yellow-300 rounded-2xl text-white shadow-xl space-y-1 animate-pulse">
            <div className="text-3xl">🍭 👑 🍭</div>
            <h3 className="text-xl font-black">LOYALTY LOLLIPOP REWARD UNLOCKED!</h3>
            <p className="text-xs font-bold text-yellow-100">
              {creatorName} gives {playerName} a giant sweet lollipop for a PERFECT 10/10 score!
            </p>
          </div>
        )}

        {/* Rank Badge Card */}
        <div className={`p-4 rounded-2xl ${rankBadge.bg} border-2 border-[#231208] space-y-1 text-center shadow-lg`}>
          <div className="flex items-center justify-center gap-2">
            {rankBadge.icon}
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              {rankBadge.title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm font-bold opacity-90">
            {rankBadge.subtitle}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            onClick={onCreateOwnQuiz}
            className="py-3.5 px-4 red-jungle-btn font-black text-sm flex items-center justify-center gap-2 shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span>Create My Own Quiz</span>
          </button>

          <button
            onClick={handleDownloadStoryCard}
            disabled={downloading}
            className="py-3.5 px-4 glossy-gold-pill font-black text-sm flex items-center justify-center gap-2 shadow-lg"
          >
            <Download className="w-5 h-5 text-amber-950" />
            <span>{downloading ? 'Generating...' : 'Save Thumbnail 📸'}</span>
          </button>
        </div>
      </div>

      {/* Answer Breakdown */}
      <div className="mockup-main-board p-5 space-y-4 shadow-xl">
        <h3 className="font-black text-lg text-yellow-300 flex items-center gap-2">
          <span>Question Answer Breakdown</span>
        </h3>

        <div className="space-y-3">
          {questions.map((q, idx) => {
            const creatorOptIdx = creatorAnswers[idx];
            const playerOptIdx = playerAnswers[idx];
            const isMatch = creatorOptIdx === playerOptIdx;

            const creatorOpt = q.options[creatorOptIdx] || {};
            const playerOpt = q.options[playerOptIdx] || {};

            return (
              <div
                key={idx}
                className={`p-3.5 rounded-2xl border-2 ${
                  isMatch ? 'bg-emerald-950/70 border-emerald-700' : 'bg-rose-950/70 border-rose-800'
                } space-y-2`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-extrabold text-xs text-yellow-200">
                    Q{idx + 1}. {q.title}
                  </span>
                  {isMatch ? (
                    <span className="px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-black text-[10px] rounded-full flex items-center gap-1 shrink-0">
                      <CheckCircle2 className="w-3 h-3" /> MATCH (+10 pts)
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 bg-rose-600 text-white font-black text-[10px] rounded-full flex items-center gap-1 shrink-0">
                      <XCircle className="w-3 h-3" /> WRONG (-5 MINUS PTS)
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-amber-950/60">
                  <div className="bg-[#231208] p-2 rounded-xl border border-amber-900">
                    <span className="font-black text-amber-400 text-[10px] block uppercase">
                      Creator Chose (ONLY RIGHT ANSWER):
                    </span>
                    <span className="font-bold text-yellow-100 flex items-center gap-1 mt-0.5">
                      <span>{creatorOpt.icon}</span>
                      <span>{creatorOpt.label}</span>
                    </span>
                  </div>

                  <div className="bg-[#231208] p-2 rounded-xl border border-amber-900">
                    <span className="font-black text-amber-400 text-[10px] block uppercase">
                      Your Answer:
                    </span>
                    <span className={`font-bold flex items-center gap-1 mt-0.5 ${isMatch ? 'text-emerald-300' : 'text-rose-400 font-extrabold'}`}>
                      <span>{playerOpt.icon}</span>
                      <span>{playerOpt.label} {isMatch ? '' : '(WRONG!)'}</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
