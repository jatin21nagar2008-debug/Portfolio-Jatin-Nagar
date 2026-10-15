import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import ParticlesCanvas from './components/ParticlesCanvas';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function AppContent() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen relative selection:bg-purple-500 selection:text-white overflow-x-hidden transition-colors duration-500 ${
      isDark ? 'bg-[#030308] text-slate-100' : 'bg-[#f8fafc] text-slate-800'
    }`}>
      {/* Interactive Cursor */}
      <Cursor />

      {/* Cosmic Nebula Ambient Blobs with theme reactivity */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full blur-[120px] animate-pulse-slow transition-colors duration-700 ${
          isDark ? 'bg-purple-600/15' : 'bg-purple-400/20'
        }`} />
        <div className={`absolute top-[35%] -right-40 w-[600px] h-[600px] rounded-full blur-[130px] animate-pulse-slow transition-colors duration-700 ${
          isDark ? 'bg-blue-600/15' : 'bg-sky-400/20'
        }`} style={{ animationDelay: '2s' }} />
        <div className={`absolute top-[65%] -left-32 w-[550px] h-[550px] rounded-full blur-[120px] animate-pulse-slow transition-colors duration-700 ${
          isDark ? 'bg-cyan-500/12' : 'bg-indigo-300/20'
        }`} style={{ animationDelay: '4s' }} />
        <div className={`absolute -bottom-40 right-20 w-[600px] h-[600px] rounded-full blur-[130px] animate-pulse-slow transition-colors duration-700 ${
          isDark ? 'bg-indigo-600/15' : 'bg-violet-400/15'
        }`} style={{ animationDelay: '1s' }} />
        
        {/* Subtle Cyber Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.16] transition-opacity duration-500"
          style={{
            backgroundImage: isDark
              ? `radial-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px), radial-gradient(rgba(0, 229, 255, 0.3) 1px, transparent 1px)`
              : `radial-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), radial-gradient(rgba(14, 165, 233, 0.25) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            backgroundPosition: '0 0, 24px 24px',
          }}
        />
      </div>

      {/* Dynamic Star Constellations Particles Canvas */}
      <ParticlesCanvas />

      {/* Floating Island Navigation */}
      <Navbar />

      {/* Dedicated Floating Dark/Light Toggle on Right-Hand Side */}
      <ThemeToggle floating={true} />

      {/* Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <a
        href="https://wa.me/917489809824?text=Hello%20Jatin,%20I%20would%20like%20to%20discuss%20a%20website%20project!"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-emerald-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.7)] hover:bg-emerald-400 hover:scale-110 transition-all flex items-center gap-2.5 group cursor-pointer border border-emerald-300/40"
        aria-label="Chat with Jatin on WhatsApp"
        title="Chat with Jatin on WhatsApp (+91 7489809824)"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping absolute -top-1 -right-1" />
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold font-mono">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
