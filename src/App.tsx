import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ArrowRight, ExternalLink, Check, Copy } from 'lucide-react';
import avatarImg from './assets/profile.jpg';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLinkClick = (name: string, url: string) => {
    setClickedButton(name);
    setTimeout(() => {
      setClickedButton(null);
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 200);
  };

  return (
    <main
      id="main-container"
      className="min-h-screen w-full flex flex-col items-center justify-between px-5 py-10 md:py-14 bg-[#08080a] relative overflow-hidden select-none"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 18%, rgba(220, 20, 60, 0.32) 0%, rgba(139, 0, 30, 0.12) 35%, rgba(8, 8, 10, 0.98) 65%, #08080a 100%)
        `,
      }}
    >
      {/* Subtle background glow effect */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Card Container */}
      <div className="w-full max-w-[360px] sm:max-w-[380px] flex flex-col items-center z-10 my-auto">
        
        {/* Profile Avatar with Neon Red Glow */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative mb-6"
        >
          <div
            id="avatar-glow-ring"
            className="w-[170px] h-[170px] sm:w-[185px] sm:h-[185px] rounded-full p-[3px] bg-[#e61e38] avatar-glow flex items-center justify-center"
            style={{
              boxShadow:
                '0 0 35px rgba(230, 30, 56, 0.7), 0 0 65px rgba(230, 30, 56, 0.35), inset 0 0 20px rgba(230, 30, 56, 0.5)',
            }}
          >
            <img
              id="profile-avatar"
              src={avatarImg}
              alt="Afrodite sou_eu"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full select-none pointer-events-none"
            />
          </div>
        </motion.div>

        {/* Name / Titles */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center flex flex-col items-center"
        >
          <h1
            id="profile-name"
            className="text-[38px] sm:text-[42px] font-extrabold tracking-tight leading-[1.08] flex flex-col items-center"
          >
            <span className="text-white drop-shadow-sm font-black">Afrodite</span>
            <span className="text-[#e61e38] drop-shadow-[0_2px_12px_rgba(230,30,56,0.5)] font-black">
              sou_eu
            </span>
          </h1>

          {/* Username Handle */}
          <p
            id="profile-handle"
            className="text-neutral-400 font-medium text-[12px] sm:text-[13px] tracking-[0.2em] mt-2 select-all"
          >
            @afrodite_sou_eu
          </p>
        </motion.div>

        {/* Buttons List */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex flex-col gap-3.5 mt-6"
        >
          {/* Privacy Button (Highlighted Solid Red) */}
          <a
            id="button-privacy"
            href="https://privacy.com.br/checkout/Deliciadecoroa"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              // Smooth touch feedback
              setClickedButton('privacy');
            }}
            className="group relative w-full h-[70px] sm:h-[74px] px-5 rounded-[18px] bg-[#e61e38] hover:bg-[#d8162f] active:scale-[0.98] transition-all duration-200 flex items-center justify-between shadow-lg shadow-red-950/50 cursor-pointer overflow-hidden border border-red-500/30"
          >
            {/* Subtle inner highlight */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/15 pointer-events-none rounded-[18px]" />

            {/* Left side: Icon + Texts */}
            <div className="flex items-center gap-3.5 z-10">
              {/* Privacy Custom Speech Bubble Icon */}
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-[#e61e38]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.03 2 11c0 2.21 0.89 4.23 2.37 5.79-.19 1.43-.8 2.87-1.87 3.91-.25.25-.09.68.26.7 2.18.12 4.14-.62 5.56-1.61.85.3 1.76.47 2.68.47 5.523 0 10-4.03 10-9s-4.477-9-10-9z" />
                </svg>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-white font-bold text-[17px] sm:text-[18px] leading-tight tracking-tight">
                  Privacy
                </span>
                <span className="text-white/85 font-semibold text-[10px] sm:text-[10.5px] tracking-[0.16em] uppercase mt-0.5">
                  CONTEÚDO COMPLETO
                </span>
              </div>
            </div>

            {/* Right side: Arrow */}
            <div className="z-10 text-white/90 group-hover:translate-x-1 transition-transform duration-200">
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </a>

          {/* Telegram VIP Button (Dark Card) */}
          <a
            id="button-telegram"
            href="https://t.me/joelia_bot"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setClickedButton('telegram')}
            className="group relative w-full h-[70px] sm:h-[74px] px-5 rounded-[18px] bg-[#121215]/95 hover:bg-[#18171c] active:scale-[0.98] transition-all duration-200 flex items-center justify-between cursor-pointer border border-white/[0.08] hover:border-white/[0.16] shadow-md shadow-black/40 overflow-hidden"
          >
            {/* Left side: Icon + Texts */}
            <div className="flex items-center gap-3.5 z-10">
              {/* Telegram Custom Vector Icon */}
              <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.1] transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-white font-bold text-[17px] sm:text-[18px] leading-tight tracking-tight">
                  Telegram VIP
                </span>
                <span className="text-neutral-400 font-semibold text-[10px] sm:text-[10.5px] tracking-[0.16em] uppercase mt-0.5">
                  GRUPO EXCLUSIVO
                </span>
              </div>
            </div>

            {/* Right side: Arrow */}
            <div className="z-10 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </a>

          {/* Instagram Button (Dark Card, directly below Telegram) */}
          <a
            id="button-instagram"
            href="https://www.instagram.com/afrodite_sou_eu"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setClickedButton('instagram')}
            className="group relative w-full h-[70px] sm:h-[74px] px-5 rounded-[18px] bg-[#121215]/95 hover:bg-[#18171c] active:scale-[0.98] transition-all duration-200 flex items-center justify-between cursor-pointer border border-white/[0.08] hover:border-white/[0.16] shadow-md shadow-black/40 overflow-hidden"
          >
            {/* Left side: Icon + Texts */}
            <div className="flex items-center gap-3.5 z-10">
              {/* Instagram Vector Icon */}
              <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.1] transition-colors">
                <Instagram className="w-5 h-5 text-white stroke-[2]" />
              </div>

              <div className="flex flex-col text-left">
                <span className="text-white font-bold text-[17px] sm:text-[18px] leading-tight tracking-tight">
                  Instagram
                </span>
                <span className="text-neutral-400 font-semibold text-[10px] sm:text-[10.5px] tracking-[0.16em] uppercase mt-0.5">
                  @AFRODITE_SOU_EU
                </span>
              </div>
            </div>

            {/* Right side: Arrow */}
            <div className="z-10 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </a>
        </motion.div>

        {/* Social Icons at Bottom */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-3.5 mt-8 sm:mt-10"
        >
          {/* Instagram Button */}
          <a
            id="button-social-instagram"
            href="https://www.instagram.com/afrodite_sou_eu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @afrodite_sou_eu"
            className="w-12 h-12 rounded-[14px] bg-[#121215]/95 border border-white/[0.08] hover:border-white/[0.22] hover:bg-[#18171d] text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
          >
            <Instagram className="w-5 h-5 stroke-[1.8]" />
          </a>

          {/* X (Twitter) Button */}
          <a
            id="button-social-x"
            href="https://x.com/giselichorro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X Twitter Giseli Chorro"
            className="w-12 h-12 rounded-[14px] bg-[#121215]/95 border border-white/[0.08] hover:border-white/[0.22] hover:bg-[#18171d] text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-[18px] h-[18px] fill-currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Footer / Copy link micro-button */}
      <footer className="z-10 mt-6 flex items-center gap-1.5 text-[11px] text-neutral-600">
        <button
          id="btn-copy-profile"
          onClick={handleCopyLink}
          className="hover:text-neutral-400 transition-colors flex items-center gap-1 py-1 px-2 rounded-md hover:bg-white/[0.03]"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Link copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copiar link da página</span>
            </>
          )}
        </button>
      </footer>
    </main>
  );
}

