import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Heart, CheckCircle2, Sparkles, Code, Cpu } from 'lucide-react';
import { CONFIG } from '../data/config';

export default function About() {
  const highlights = [
    { title: 'Interactive 3D Experiences', desc: 'WebGL & Three.js visual elements', color: 'text-cyan-400' },
    { title: 'Responsive Frontend Engineering', desc: 'Pixel-perfect, mobile-first design', color: 'text-purple-400' },
    { title: 'Modern React Architecture', desc: 'Reusable, modular component patterns', color: 'text-emerald-400' },
    { title: 'Smooth Motion Aesthetics', desc: 'Delightful micro-interactions with Framer', color: 'text-pink-400' },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Main Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.4)]"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-tr from-purple-600/20 to-cyan-500/20 border border-purple-500/30 text-purple-400">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">My Journey &amp; Passion</h3>
                  <p className="text-xs text-cyan-400 font-mono">BCA Student &amp; Creative Frontend Engineer</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-8">
                {CONFIG.about}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className={`w-5 h-5 ${h.color} mt-0.5 shrink-0`} />
                  <div>
                    <h4 className="text-white font-semibold text-sm leading-snug">{h.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-7 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Academic Focus</h4>
                  <span className="text-xs text-slate-400 font-mono">Undergraduate Studies</span>
                </div>
              </div>
              <p className="text-slate-100 font-bold text-base sm:text-lg">{CONFIG.education[0]?.degree}</p>
              <p className="text-sm font-semibold text-cyan-400 mt-1">{CONFIG.college} · {CONFIG.year}</p>
              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                Specializing in Computer Science fundamentals, Web Technologies, Database Systems, and Object-Oriented Programming.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass p-7 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.4)] flex-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">What Excites Me</h4>
                  <span className="text-xs text-slate-400 font-mono">Core Passions &amp; Tech</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {CONFIG.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-purple-500/20 text-xs text-slate-200 font-medium hover:border-cyan-400/50 hover:text-white transition-all duration-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
