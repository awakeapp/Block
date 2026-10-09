import React, { useState } from 'react';
import { soundFx } from '../utils/audio';
import { Copy, Check, Share2, MessageCircle, X, Download } from 'lucide-react';

export default function ShareModal({ quizCode, creatorName, onClose }) {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const shareUrl = `${window.location.origin}${window.location.pathname}?quiz=${quizCode}`;

  const handleCopy = () => {
    soundFx.playPop();
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    soundFx.playPop();
    const text = encodeURIComponent(`Take ${creatorName}'s "Don't Block Me!" Friendship Quiz 🌴✨\n${creatorName} asks: Can you answer 10 questions to prove you won't get BLOCKED?\n\nPlay here: ${shareUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  // Generate Thumbnail Card Image with Both Boy & Girl Characters
  const handleDownloadThumbnail = () => {
    soundFx.playPop();
    setDownloading(true);

    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630; // Standard 1200x630 Social Media Thumbnail Size
    const ctx = canvas.getContext('2d');

    // 3D Jungle Background
    const grad = ctx.createLinearGradient(0, 0, 1200, 630);
    grad.addColorStop(0, '#1e3a1e');
    grad.addColorStop(0.5, '#4d2b17');
    grad.addColorStop(1, '#1c0f08');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1200, 630);

    // Inner Wooden Board
    ctx.fillStyle = '#3d2110';
    ctx.strokeStyle = '#231208';
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.roundRect(40, 40, 1120, 550, 30);
    ctx.fill();
    ctx.stroke();

    // Big Fancy Title
    ctx.fillStyle = '#fef08a';
    ctx.font = '900 68px "Fredoka", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText("DON'T BLOCK ME! 🌴", 600, 120);

    // Creator Asking Question Title
    ctx.fillStyle = '#f59e0b';
    ctx.font = '800 42px "Outfit", sans-serif';
    ctx.fillText(`${creatorName} asks:`, 600, 190);

    ctx.fillStyle = '#ffffff';
    ctx.font = '800 36px "Fredoka", sans-serif';
    ctx.fillText('"Can you pass 10 questions without getting BLOCKED?" 🚫', 600, 250);

    // Score / Challenge Badge
    ctx.fillStyle = '#231208';
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.roundRect(400, 310, 400, 80, 20);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#fde047';
    ctx.font = '900 32px sans-serif';
    ctx.fillText("10 QUESTIONS QUIZ 🎮", 600, 360);

    // Load Boy & Girl Images
    const boyImg = new Image();
    const girlImg = new Image();

    let loadedCount = 0;
    const checkDraw = () => {
      loadedCount++;
      if (loadedCount === 2) {
        // Draw Boy Character on Left
        ctx.drawImage(boyImg, 80, 220, 240, 280);
        // Draw Girl Character on Right
        ctx.drawImage(girlImg, 880, 220, 240, 280);

        // Watermark URL
        ctx.fillStyle = '#fef08a';
        ctx.font = '700 28px sans-serif';
        ctx.fillText("Play live at Don't Block Me! ✨", 600, 520);

        const link = document.createElement('a');
        link.download = `DontBlockMe_Thumbnail_${creatorName}.png`;
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

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="wooden-card p-5 sm:p-6 max-w-md w-full space-y-4 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 glossy-gold-pill flex items-center justify-center"
        >
          <X className="w-5 h-5 text-amber-950" />
        </button>

        <div className="text-center space-y-1">
          <h2 className="text-2xl font-black text-yellow-300 drop-shadow">
            DON'T BLOCK ME 🌴
          </h2>
          <p className="text-xs font-bold text-amber-200/90">
            {creatorName} asks: "Can you pass 10 questions without getting BLOCKED?"
          </p>
        </div>

        {/* Dynamic Thumbnail Preview Card featuring BOTH Boy & Girl Characters */}
        <div className="p-3.5 bg-[#231208] border-2 border-amber-800 rounded-2xl space-y-2 relative overflow-hidden shadow-inner">
          <div className="flex items-center justify-between gap-2">
            {/* Boy Character */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-b from-indigo-500 to-cyan-700 p-1 border-2 border-amber-900 shrink-0 shadow">
              <img src="/123/BOY/Happy.png" alt="Boy Character" className="w-full h-full object-contain filter drop-shadow" />
            </div>

            {/* Title & Creator Question */}
            <div className="text-center space-y-1 flex-1 px-1">
              <span className="text-[10px] font-black uppercase text-amber-950 bg-yellow-300 px-2 py-0.5 rounded-full shadow">
                Thumbnail Card
              </span>
              <h4 className="text-sm font-black text-yellow-200 leading-tight">
                {creatorName} asks:
              </h4>
              <p className="text-[11px] font-bold text-amber-200/80 leading-snug">
                "Will you pass or get BLOCKED? 🚫"
              </p>
            </div>

            {/* Girl Character */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-b from-pink-500 to-rose-700 p-1 border-2 border-amber-900 shrink-0 shadow">
              <img src="/123/Girl/happy.png" alt="Girl Character" className="w-full h-full object-contain filter drop-shadow" />
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex items-center justify-between p-3 bg-[#231208] rounded-2xl border-2 border-amber-800 gap-3">
          <img
            src={qrCodeUrl}
            alt="Quiz QR Code"
            className="w-24 h-24 rounded-xl border-2 border-amber-950 bg-white p-1.5 shrink-0"
          />
          <div className="space-y-1 text-left flex-1">
            <span className="text-xs font-black text-yellow-300 uppercase block">
              Scan QR to Play
            </span>
            <p className="text-[11px] font-bold text-amber-200/80 leading-tight">
              Friends can scan this QR code with camera to open quiz instantly!
            </p>
          </div>
        </div>

        {/* Share Link Input */}
        <div className="space-y-1">
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="flex-1 px-3 py-2.5 bg-[#231208] border-2 border-amber-800 rounded-xl text-yellow-200 font-bold text-xs focus:outline-none overflow-hidden text-ellipsis"
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

        {/* Download Thumbnail & WhatsApp Buttons */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <button
            onClick={handleDownloadThumbnail}
            disabled={downloading}
            className="py-3 px-3 glossy-gold-pill text-xs font-black flex items-center justify-center gap-1.5"
          >
            <Download className="w-4 h-4 text-amber-950" />
            <span>{downloading ? 'Saving...' : 'Save Thumbnail 📸'}</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="py-3 px-3 red-jungle-btn text-xs font-black flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
