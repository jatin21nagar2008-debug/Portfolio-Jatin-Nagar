import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal } from 'lucide-react';
import { CONFIG } from '../data/config';

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-xs tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>My Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">Skills &amp; Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-4">
            Core technical foundation: HTML, CSS, JavaScript, and React.js.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONFIG.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass p-6 rounded-3xl border border-white/10 group relative transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_10px_30px_rgba(168,85,247,0.25)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2.5 rounded-2xl bg-white/[0.04] border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {skill.emoji}
                  </span>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-900/90 text-cyan-300 border border-cyan-500/20">
                    {skill.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
              </div>

              {/* Skill meter */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex justify-between items-center text-xs text-slate-400 mb-2 font-mono">
                  <span>Proficiency</span>
                  <span className="text-cyan-400 font-bold">{(skill.level / 5) * 100}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-950 border border-white/5 overflow-hidden p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 shadow-[0_0_8px_rgba(0,229,255,0.5)]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
