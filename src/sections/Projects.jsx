import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2, Sparkles, ArrowUpRight } from 'lucide-react';
import { CONFIG } from '../data/config';

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-4">
            Showcase of web applications, 3D experiences, and modern user interfaces crafted with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONFIG.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-cyan-500/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(0,229,255,0.2)] transition-all duration-300"
            >
              {/* Project preview header */}
              <div
                className="h-48 p-6 relative flex flex-col justify-between overflow-hidden"
                style={{ background: project.gradient }}
              >
                <div className="flex items-center justify-between relative z-10">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-black/60 text-cyan-300 backdrop-blur-md border border-white/15">
                    PROJECT #{project.id}
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-black/50 text-slate-300 hover:text-white hover:bg-black/80 border border-white/10 transition-all hover:scale-110"
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-black/50 text-slate-300 hover:text-cyan-300 hover:bg-black/80 border border-white/10 transition-all hover:scale-110"
                      title="View Live Demo"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-2.5 border border-white/10">
                    <FolderGit2 className="w-5 h-5 text-cyan-300 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#060613] via-transparent to-transparent opacity-90" />
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-[#060613]/50">
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-purple-300 border border-purple-500/25"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore Demo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-slate-400 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
