import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2, MessageSquare, ExternalLink, MessageCircle, ArrowRight } from 'lucide-react';
import { CONFIG } from '../data/config';

export default function Contact() {
  const [status, setStatus] = React.useState(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });

  const whatsappBaseUrl = `https://wa.me/${CONFIG.whatsappNumber}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const textMsg = `Hello Jatin!%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Email:* ${encodeURIComponent(form.email)}%0A*Message:* ${encodeURIComponent(form.message)}`;
    const waUrl = `${whatsappBaseUrl}?text=${textMsg}`;

    try {
      // Send directly to jatin21nagar2008@gmail.com via FormSubmit API
      await fetch(`https://formsubmit.co/ajax/${CONFIG.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Website Inquiry from ${form.name} (Portfolio)`,
        }),
      });
    } catch (err) {
      console.log('Email delivery fallback', err);
    }

    // Also open WhatsApp message
    window.open(waUrl, '_blank');

    setStatus(`Thank you ${form.name}! Your message was sent to Jatin's Email (${CONFIG.email}) and opened in WhatsApp. 🚀`);
    setForm({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    setTimeout(() => setStatus(null), 8000);
  };

  const handleWhatsAppOnly = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      window.open(`${whatsappBaseUrl}?text=Hello%20Jatin,%20I%20would%20like%20to%20discuss%20a%20website%20project!`, '_blank');
      return;
    }
    const textMsg = `Hello Jatin!%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Email:* ${encodeURIComponent(form.email || 'Not provided')}%0A*Message:* ${encodeURIComponent(form.message)}`;
    window.open(`${whatsappBaseUrl}?text=${textMsg}`, '_blank');
  };

  return (
    <section id="contact" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect Directly</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">Get In Touch With Jatin</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-4">
            Need a professional website built or have a coding inquiry? Message Jatin on WhatsApp or Email instantly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Prominent Card */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              href={`${whatsappBaseUrl}?text=Hello%20Jatin,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!`}
              target="_blank"
              rel="noreferrer"
              className="glass p-5 rounded-3xl border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-900/30 transition-all flex items-center gap-4 group shadow-[0_8px_30px_rgba(16,185,129,0.2)] block"
            >
              <div className="p-3.5 rounded-2xl bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-xs text-emerald-400 font-mono font-semibold uppercase tracking-wider">WhatsApp Available</p>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-base font-bold text-white mt-0.5">{CONFIG.phone}</p>
                <p className="text-xs text-slate-300">Click to chat directly on WhatsApp</p>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-7 rounded-3xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.4)] space-y-4"
            >
              <h3 className="text-base font-bold text-white flex items-center gap-2 pb-2 border-b border-white/10">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Contact Channels</span>
              </h3>

              {/* Email Card */}
              <a
                href={`mailto:${CONFIG.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/40 text-slate-300 hover:text-white transition-all group hover:bg-cyan-500/[0.04]"
              >
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-[11px] text-slate-400 font-mono">Official Email</p>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5 truncate">{CONFIG.email}</p>
                </div>
                <span className="text-[10px] text-cyan-400 font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">Mail</span>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${CONFIG.phone}`}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/40 text-slate-300 hover:text-white transition-all group hover:bg-purple-500/[0.04]"
              >
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] text-slate-400 font-mono">Direct Phone</p>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">{CONFIG.phone}</p>
                </div>
                <span className="text-[10px] text-purple-400 font-mono px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">Call</span>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-slate-300">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-mono">Address</p>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">{CONFIG.address}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dual Submission Form (Email + WhatsApp) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-7 glass p-8 sm:p-10 rounded-3xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.4)]"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white">Send Message to Jatin</h3>
              <p className="text-xs text-slate-400 mt-1">
                Your message will be sent to both <span className="text-cyan-400 font-semibold">{CONFIG.email}</span> and delivered to WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Message (Describe your website project)
                </label>
                <textarea
                  rows="4"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Hi Jatin, I need a website designed for..."
                  className="w-full px-4 py-3 rounded-2xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm resize-none"
                />
              </div>

              {/* Action Buttons: Email + WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 shadow-neon-purple hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer disabled:opacity-60 text-xs sm:text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send (Email + WhatsApp)'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppOnly}
                  className="w-full py-3.5 px-4 rounded-2xl font-semibold text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/30 hover:text-white shadow-[0_0_20px_rgba(16,185,129,0.25)] flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer text-xs sm:text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Send on WhatsApp</span>
                </button>
              </div>

              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-center text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{status}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
