import React from 'react';
import { Heart, ArrowUp, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { CONFIG } from '../data/config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 border-t border-white/10 bg-[#04040a]/90 backdrop-blur-xl relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-xl text-gradient">
              &lt;{CONFIG.brandName} /&gt;
            </span>
            <span className="text-slate-600 font-mono hidden sm:inline">|</span>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            © {new Date().getFullYear()} {CONFIG.fullName}. Crafted with passion &amp; code.
          </span>
        </div>

        {/* Center Credits */}
        <p className="text-xs text-slate-400 flex items-center gap-1.5">
          Engineered with <span className="text-cyan-400 font-medium">React</span>,{' '}
          <span className="text-purple-400 font-medium">Three.js</span> &amp;{' '}
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline" />
        </p>

        {/* Back to top button */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
