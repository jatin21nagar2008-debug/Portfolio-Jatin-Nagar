import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckCircle2, Sparkles, FileText, Download, ExternalLink } from 'lucide-react';
import { CONFIG } from '../data/config';

export default function Education() {
  return (
    <section id="education" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-xs tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background &amp; Resume</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">Education &amp; Credentials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-4">
            Degrees from LBS College, certifications, and official downloadable resume.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Education Timeline */}
          <div className="lg:col-span-7">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span>Degree Milestones</span>
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-cyan-400 before:to-transparent">
              {CONFIG.education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-10 group"
                >
                  {/* Glowing timeline node */}
                  <div className="absolute left-2.5 top-2.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(0,229,255,0.6)]" />

                  <div className="glass p-6 sm:p-7 rounded-3xl border border-white/10 group-hover:border-purple-500/40 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </span>
                      {item.badge && (
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-white">{item.degree}</h4>
                    <p className="text-sm text-cyan-300 font-medium mb-2">{item.institution}</p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Official Resume Download & Certifications */}
          <div className="lg:col-span-5 space-y-8">
            {/* Download Resume Featured Card */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <FileText className="w-5 h-5" />
                </div>
                <span>Official Resume</span>
              </h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-3xl border border-purple-500/30 bg-gradient-to-b from-purple-950/20 to-cyan-950/20 shadow-[0_10px_35px_rgba(0,0,0,0.4)] relative overflow-hidden group"
              >
                <div className="flex gap-4 items-center">
                  {/* Resume thumbnail preview */}
                  <a
                    href={CONFIG.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-20 h-28 shrink-0 rounded-xl overflow-hidden border border-white/20 bg-slate-900 group-hover:scale-105 transition-transform duration-300 relative shadow-lg block"
                  >
                    <img
                      src="/jatin-resume.jpg"
                      alt="Jatin Resume Preview"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </a>

                  <div className="flex-1">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Ready to Download
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1.5 leading-snug">Jatin Nagar — CV</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      BCA 1st Year · LBS College · Harda
                    </p>
                    <p className="text-[11px] text-cyan-300 font-mono mt-0.5">
                      HTML · CSS · JavaScript · React
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 mt-5 pt-4 border-t border-white/10">
                  <a
                    href="/jatin-resume.jpg"
                    download="Jatin_Nagar_Resume.jpg"
                    className="py-2.5 px-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-neon-purple hover:scale-105 transition-all text-xs flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download CV</span>
                  </a>

                  <a
                    href="/jatin-resume.jpg"
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 rounded-xl font-semibold text-cyan-300 glass border border-cyan-500/30 hover:bg-cyan-500/10 hover:text-white transition-all text-xs flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Full Size</span>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Award className="w-5 h-5" />
                </div>
                <span>Certifications &amp; Courses</span>
              </h3>

              <div className="space-y-3.5">
                {CONFIG.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="glass p-4 rounded-2xl border border-white/10 flex items-center gap-3.5 hover:border-cyan-400/40 transition-all shadow-[0_8px_25px_rgba(0,0,0,0.3)]"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 shadow-inner"
                      style={{ background: cert.bg }}
                    >
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-white">{cert.name}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{cert.issuer}</p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
