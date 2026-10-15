import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Menu, X, Sparkles, Code2, Download } from 'lucide-react'
import { CONFIG } from '../data/config'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact']
      const scrollPos = window.scrollY + 180

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActive(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Floating Island Navbar */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#060611]/90 backdrop-blur-2xl border border-purple-500/30 shadow-[0_12px_40px_rgba(0,0,0,0.7),0_0_25px_rgba(139,92,246,0.2)] py-2 sm:py-2.5 px-4 sm:px-6'
              : 'bg-[#090918]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(139,92,246,0.12)] py-2.5 sm:py-3 px-5 sm:px-7'
          } flex items-center justify-between`}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo with pulsating status */}
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, 'hero')}
            className="group flex items-center gap-2.5 text-decoration-none"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_12px_rgba(168,85,247,0.4)]">
              <div className="w-full h-full bg-[#080815] rounded-full flex items-center justify-center">
                <Code2 className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-base font-bold text-gradient leading-none tracking-tight">
                &lt;{CONFIG.brandName} /&gt;
              </span>
              <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/5 list-none m-0">
            {links.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id} className="relative">
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => scrollTo(e, link.id)}
                    className={`relative z-10 px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 block ${
                      isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {link.label}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 via-indigo-600/30 to-cyan-500/30 border border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.3)] z-0"
                    />
                  )}
                </li>
              )
            })}
          </ul>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2">
            {/* Top Resume Button */}
            <a
              href="/jatin-resume.jpg"
              download="Jatin_Nagar_Resume.jpg"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-cyan-300 glass border border-cyan-500/30 hover:bg-cyan-500/15 hover:text-white shadow-[0_0_12px_rgba(0,229,255,0.2)] transition-all duration-300 hover:scale-105"
              title="Download Jatin's Resume"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollTo(e, 'contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-400/30 shadow-[0_0_15px_rgba(147,51,234,0.35)] hover:shadow-[0_0_20px_rgba(147,51,234,0.6)] transition-all duration-300 hover:scale-105"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>

            {/* Dark/Light Mode Switch in Navbar */}
            <ThemeToggle floating={false} />

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle Navigation"
            >
              {menuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-slate-300" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 z-40 p-5 rounded-3xl bg-[#080816]/95 backdrop-blur-3xl border border-purple-500/30 shadow-[0_15px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(168,85,247,0.2)] md:hidden flex flex-col gap-3"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => {
                const isActive = active === link.id
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollTo(e, link.id)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-purple-600/20 text-white border border-purple-500/40 font-semibold'
                        : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href="/jatin-resume.jpg"
                download="Jatin_Nagar_Resume.jpg"
                className="w-full py-2.5 rounded-xl text-center text-sm font-semibold text-cyan-300 glass border border-cyan-500/30 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollTo(e, 'contact')}
                className="w-full py-2.5 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-neon-purple"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
