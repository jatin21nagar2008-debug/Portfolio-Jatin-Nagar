import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ floating = false }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  if (floating) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
        className={`fixed right-4 sm:right-6 top-24 z-50 p-3 rounded-full transition-all duration-300 shadow-lg cursor-pointer border ${
          isDark
            ? 'bg-[#0b0b1c]/80 text-amber-300 border-purple-500/30 hover:border-amber-400/50 shadow-[0_0_20px_rgba(245,158,11,0.25)] backdrop-blur-xl'
            : 'bg-white/90 text-purple-600 border-slate-300 hover:border-purple-500/50 shadow-[0_4px_25px_rgba(0,0,0,0.12)] backdrop-blur-xl'
        }`}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-amber-400" />
          ) : (
            <Moon className="w-5 h-5 text-purple-600" />
          )}
        </motion.div>
      </motion.button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
      className={`p-2 rounded-full transition-all duration-200 cursor-pointer border ${
        isDark
          ? 'bg-white/[0.06] border-white/10 text-amber-300 hover:text-amber-200 hover:bg-amber-400/10 hover:border-amber-400/30'
          : 'bg-slate-100 border-slate-300 text-purple-600 hover:text-purple-700 hover:bg-purple-100'
      }`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-300" />
        ) : (
          <Moon className="w-4 h-4 text-purple-600" />
        )}
      </motion.div>
    </button>
  );
}
