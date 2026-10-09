import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CreatorFlow from './components/CreatorFlow';
import PlayerFlow from './components/PlayerFlow';
import ResultsScreen from './components/ResultsScreen';
import Leaderboard from './components/Leaderboard';
import ShareModal from './components/ShareModal';
import { decodeQuizData } from './utils/quizEncoder';
import { soundFx } from './utils/audio';
import { Share2, Play } from 'lucide-react';

export default function App() {
  const [mode, setMode] = useState('CREATOR'); // 'CREATOR' | 'QUIZ_CREATED' | 'PLAYER' | 'RESULTS' | 'LEADERBOARD'
  const [activeQuizCode, setActiveQuizCode] = useState(null);
  const [quizPayload, setQuizPayload] = useState(null);
  const [resultData, setResultData] = useState(null);

  const [leaderboard, setLeaderboard] = useState(() => {
    try {
      const stored = localStorage.getItem('dont_block_me_leaderboard');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [showShareModal, setShowShareModal] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  // Native App feel: block pinch-to-zoom, double-tap zoom, Safari gesture zoom & ctrl+wheel zoom
  useEffect(() => {
    let lastTouchEnd = 0;

    const handleTouchStart = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };

    const handleGesture = (e) => {
      e.preventDefault();
    };

    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });
    document.addEventListener('gesturestart', handleGesture, { passive: false });
    document.addEventListener('gesturechange', handleGesture, { passive: false });
    document.addEventListener('gestureend', handleGesture, { passive: false });
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('gesturestart', handleGesture);
      document.removeEventListener('gesturechange', handleGesture);
      document.removeEventListener('gestureend', handleGesture);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const quizCode = params.get('quiz');
    if (quizCode) {
      const decoded = decodeQuizData(quizCode);
      if (decoded && decoded.q && decoded.q.length > 0) {
        setQuizPayload(decoded);
        setActiveQuizCode(quizCode);
        setMode('PLAYER');
      }
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('dont_block_me_leaderboard', JSON.stringify(leaderboard));
    } catch (e) {
      console.error(e);
    }
  }, [leaderboard]);

  const handleQuizCreated = (code, payload) => {
    setActiveQuizCode(code);
    setQuizPayload(payload);
    setMode('QUIZ_CREATED');
    setShowShareModal(true);
  };

  const handleFinishPlayerQuiz = (res) => {
    setResultData(res);
    setLeaderboard(prev => [res, ...prev]);
    setMode('RESULTS');
  };

  const handleReset = () => {
    if (window.location.search) {
      window.history.pushState({}, '', window.location.pathname);
    }
    setMode('CREATOR');
    setActiveQuizCode(null);
    setQuizPayload(null);
    setResultData(null);
    setShowShareModal(false);
    setShowLeaderboard(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans pb-6 relative overflow-x-hidden">
      {/* Top Navigation Header matching Mockup */}
      <Navbar onReset={handleReset} />

      {/* Main Container */}
      <main className="flex-1 max-w-xl w-full mx-auto px-2.5 sm:px-4 py-2 sm:py-3 relative z-20 flex flex-col justify-center">
        {showLeaderboard ? (
          <Leaderboard
            leaderboardEntries={leaderboard}
            onClearLeaderboard={() => setLeaderboard([])}
            onClose={() => setShowLeaderboard(false)}
          />
        ) : mode === 'CREATOR' ? (
          <div className="space-y-3 sm:space-y-5">
            {/* Compact Banner for Mobile */}
            <div className="text-center space-y-1 py-0.5 relative">
              <h1 className="text-2xl sm:text-4xl font-black text-yellow-300 drop-shadow-[0_3px_5px_rgba(0,0,0,0.9)] tracking-tight leading-none flex items-center justify-center gap-1">
                <span>DON'T BLOCK ME</span>
                <span className="text-xl sm:text-3xl">🌴</span>
              </h1>
              <p className="text-[11px] sm:text-xs font-extrabold text-amber-100 drop-shadow max-w-xs sm:max-w-md mx-auto leading-tight">
                Create your 10-question friendship quiz & see who <span className="text-rose-400 underline decoration-wavy">BLOCKS YOU!</span>
              </p>
            </div>

            {/* Creator Workflow */}
            <CreatorFlow onQuizCreated={handleQuizCreated} />
          </div>
        ) : mode === 'QUIZ_CREATED' ? (
          <div className="max-w-xl mx-auto space-y-6 text-center">
            <div className="mockup-main-board p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="w-20 h-20 bg-amber-500 rounded-full border-4 border-[#231208] mx-auto flex items-center justify-center text-4xl animate-bounce shadow-xl">
                🎉
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl font-black text-yellow-300 drop-shadow">
                  YOUR QUIZ IS LIVE!
                </h2>
                <p className="text-sm font-bold text-amber-200/80">
                  Share your link with your friends to see who knows you best!
                </p>
              </div>

              <div className="p-4 dark-wood-input space-y-2">
                <span className="text-xs font-black text-yellow-300 uppercase">
                  Selected 10 Questions for your friends to answer:
                </span>
                <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                  {(quizPayload?.q || []).map((id, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-amber-950 border border-amber-800 font-black text-xs text-yellow-200 rounded-full">
                      Q{idx + 1}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => setShowShareModal(true)}
                  className="flex-1 py-4 glossy-gold-pill font-black text-base flex items-center justify-center gap-2 shadow-lg"
                >
                  <Share2 className="w-5 h-5 text-amber-950" />
                  <span>Get Share Link & QR Code</span>
                </button>

                <button
                  onClick={() => setMode('PLAYER')}
                  className="py-4 px-6 glossy-wood-pill font-black text-base flex items-center justify-center gap-2 shadow-lg"
                >
                  <Play className="w-5 h-5 fill-amber-950 text-amber-950" />
                  <span>Test Quiz</span>
                </button>
              </div>
            </div>
          </div>
        ) : mode === 'PLAYER' ? (
          <PlayerFlow 
            quizPayload={quizPayload} 
            onFinishPlayerQuiz={handleFinishPlayerQuiz} 
          />
        ) : mode === 'RESULTS' ? (
          <ResultsScreen 
            resultData={resultData}
            onCreateOwnQuiz={handleReset}
            onShareModal={() => setShowShareModal(true)}
          />
        ) : null}
      </main>

      {/* Share Modal Dialog */}
      {showShareModal && activeQuizCode && (
        <ShareModal
          quizCode={activeQuizCode}
          creatorName={quizPayload?.n || 'Your Friend'}
          onClose={() => setShowShareModal(false)}
        />
      )}

      {/* Footer */}
      <footer className="text-center py-4 text-[11px] font-black text-amber-200/70 border-t-2 border-amber-950/40 mt-auto relative z-20">
        <p>DON'T BLOCK ME 🌴 • 3D Jungle Adventure • Mobile Friendly Edition</p>
      </footer>
    </div>
  );
}
