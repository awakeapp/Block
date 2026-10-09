import React, { useState } from 'react';
import { soundFx } from '../utils/audio';
import { Copy, Check, Share2, MessageCircle, X } from 'lucide-react';

export default function ShareModal({ quizCode, creatorName, onClose }) {
  const [copied, setCopied] = useState(false);

  const shareUrl = `${window.location.origin}${window.location.pathname}?quiz=${quizCode}`;

  const handleCopy = () => {
    soundFx.playPop();
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    soundFx.playPop();
    const text = encodeURIComponent(`Take ${creatorName}'s "Don't Block Me!" Friendship Quiz 🌴✨\nCan you answer 10 questions to prove you won't get blocked?\n\nPlay here: ${shareUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="wooden-card p-6 max-w-md w-full space-y-5 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 gold-btn flex items-center justify-center"
        >
          <X className="w-5 h-5 text-amber-950" />
        </button>

        <div className="text-center space-y-1">
          <div className="w-12 h-12 bg-amber-500 rounded-full border-2 border-amber-950 mx-auto flex items-center justify-center text-2xl mb-1">
            🚀
          </div>
          <h2 className="text-2xl font-black text-yellow-200">
            Quiz Ready To Share!
          </h2>
          <p className="text-xs font-bold text-amber-200/80">
            Send this link to your friends or post on social media!
          </p>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center justify-center p-3 bg-amber-950/90 rounded-2xl border-2 border-amber-800 space-y-2">
          <img
            src={qrCodeUrl}
            alt="Quiz QR Code"
            className="w-36 h-36 rounded-xl border-2 border-amber-950 bg-white p-2"
          />
          <span className="text-[11px] font-black text-amber-300 uppercase tracking-wider">
            Scan QR Code to play
          </span>
        </div>

        {/* Link input with copy button */}
        <div className="space-y-1.5">
          <label className="block text-xs font-black text-amber-200 uppercase">
            Your Quiz Link:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="flex-1 px-3 py-2.5 bg-amber-950 border-2 border-amber-800 rounded-xl text-yellow-200 font-bold text-xs focus:outline-none overflow-hidden text-ellipsis"
            />
            <button
              onClick={handleCopy}
              className={`px-4 py-2.5 text-xs font-black flex items-center gap-1.5 transition-all ${
                copied ? 'bg-emerald-500 text-white border-2 border-amber-950 rounded-xl' : 'red-jungle-btn'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Quick Share Buttons */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <button
            onClick={handleWhatsApp}
            className="py-3 px-3 red-jungle-btn text-xs font-black flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={handleCopy}
            className="py-3 px-3 gold-btn text-xs font-black flex items-center justify-center gap-2"
          >
            <Share2 className="w-4 h-4 text-amber-950" />
            <span>Share Link</span>
          </button>
        </div>
      </div>
    </div>
  );
}
