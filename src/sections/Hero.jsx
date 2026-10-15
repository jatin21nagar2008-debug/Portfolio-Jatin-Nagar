import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Code2, Sparkles, Github, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';
import HeroScene from '../components/HeroScene';
import { CONFIG } from '../data/config';

function NumberCounter({ target, suffix = '', duration = 1800 }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTimestamp = null;
    let frameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Hero() {
  const [typedText, setTypedText] = React.useState('');
  const [index, setIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = CONFIG.typewriterTexts[index % CONFIG.typewriterTexts.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(current.substring(0, typedText.length + 1));
        if (typedText === current) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setTypedText(current.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }
    }, isDeleting ? 40 : 90);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, index]);

  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=Hello%20Jatin,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!`;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-12 overflow-hidden">
      {/* 3D Background Canvas Layer */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <HeroScene />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium shadow-[0_0_20px_rgba(168,85,247,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Available for Website Projects &amp; Collaborations</span>
          </motion.div>

          {/* Heading - Normal, elegant size matching background */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-2.5"
          >
            <p className="text-cyan-400 font-mono text-xs sm:text-sm flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Hello, World! I am</span>
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="text-white">Jatin </span>
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.45)]">
                Nagar
              </span>
            </h1>
            <div className="min-h-[36px] flex items-center text-lg sm:text-2xl font-bold flex-wrap">
              <span className="text-slate-400 mr-2.5">I'm a</span>
              <span className="text-gradient">
                {typedText}
              </span>
              <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse" />
            </div>
          </motion.div>

          {/* Description - Smaller, clean font size */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-300 text-xs sm:text-sm max-w-lg leading-relaxed"
          >
            {CONFIG.about}
          </motion.p>

          {/* CTA Buttons with Prominent Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            {/* Download Resume Button */}
            <a
              href="/jatin-resume.jpg"
              download="Jatin_Nagar_Resume.jpg"
              className="inline-flex items-center gap-2 text-white font-semibold px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 shadow-neon-purple hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 hover:scale-105 text-xs sm:text-sm cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyan-300" />
              <span>Download Resume</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-slate-200 font-medium px-4 py-3 rounded-xl glass hover:border-cyan-400/50 hover:text-white transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Direct WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-emerald-300 font-semibold px-4 py-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 hover:bg-emerald-500/25 hover:text-white shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Quick Social Buttons */}
            <div className="flex items-center gap-2 pl-1">
              <a
                href={`mailto:${CONFIG.email}`}
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-600/10 transition-all hover:scale-110"
                aria-label="Send Direct Email"
                title={`Email: ${CONFIG.email}`}
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${CONFIG.phone}`}
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-600/10 transition-all hover:scale-110"
                aria-label="Call Mobile"
                title={`Call: ${CONFIG.phone}`}
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Highlights Animated Metrics / Counters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-lg"
          >
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white flex items-center">
                <NumberCounter target={1} duration={1200} />
                <span className="text-cyan-400 ml-0.5">st Yr</span>
              </p>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 font-medium mt-1">BCA Scholar</p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-black text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse inline-block" />
                <span>Harda</span>
              </p>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 font-medium mt-1">MP, India</p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-indigo-400 flex items-center">
                <NumberCounter target={100} duration={2000} suffix="%" />
              </p>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 font-medium mt-1">Coding Passion</p>
            </div>
          </motion.div>
        </div>

        {/* Right 3D Visual Card with Jatin Nagar Identity */}
        <div className="lg:col-span-5 hidden lg:flex flex-col items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-92 h-92 rounded-3xl p-1 bg-gradient-to-tr from-purple-600 via-cyan-400 to-indigo-600 shadow-[0_0_50px_rgba(139,92,246,0.35)] animate-float"
          >
            <div className="w-full h-full rounded-[22px] bg-[#070716]/90 p-8 flex flex-col items-center justify-center text-center backdrop-blur-2xl border border-white/10 relative overflow-hidden">
              {/* Background ambient glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-purple-600/30 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-cyan-500/25 rounded-full blur-2xl pointer-events-none" />

              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-500/20 via-indigo-500/20 to-cyan-500/20 border border-white/15 flex items-center justify-center mb-5 shadow-neon-purple">
                <span className="text-2xl font-black font-mono text-gradient">JN</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-1">Jatin Nagar</h3>
              <p className="text-xs text-purple-300 font-mono tracking-widest uppercase mb-4">
                BCA 1st Year · Harda, MP
              </p>

              <div className="flex flex-wrap gap-1.5 justify-center mb-6">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300">
                  Website Building
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                  Clean Coding
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                  React &amp; WebGL
                </span>
              </div>

              <div className="inline-flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Crafting Modern Websites</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
