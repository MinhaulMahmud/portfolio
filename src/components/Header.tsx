import React from 'react';
import { Github, Linkedin, Mail, MapPin, FileText, ChevronDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/MinhaulMahmud', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/minhazul-mahmud/', label: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:minhaz.oj@gmail.com', label: 'Email' },
  ];

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Hero background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-to-br from-accent/[0.03] via-violet-500/[0.02] to-transparent blur-3xl" />
        {/* Horizontal accent line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Intro line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="text-accent font-mono text-sm tracking-wide">Hi, my name is</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2"
          >
            <span className="text-gray-100">Minhazul</span>{' '}
            <span className="gradient-text">Mahmud.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-500 mb-8 tracking-tight"
          >
            I build things for the web & AI.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400 max-w-xl text-lg leading-relaxed mb-4"
          >
            I'm a CS graduate specializing in{' '}
            <span className="text-accent/80">Natural Language Processing</span> and{' '}
            <span className="text-accent/80">full-stack web development</span>.
            Currently building scalable solutions with Laravel, Python, and modern ML frameworks.
          </motion.p>

          {/* Location + Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-10"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Chattogram, Bangladesh
            </span>
            <span className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              Available for opportunities
            </span>
          </motion.div>

          {/* CTA buttons + Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-accent group">
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a href="#contact" className="btn-accent">
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>

            <div className="flex items-center gap-2 ml-2">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2.5 rounded-lg text-gray-500 hover:text-accent hover:bg-accent/5 transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.65 + i * 0.08 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5 text-gray-600 hover:text-accent transition-colors duration-300"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase">scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </header>
  );
};

export default Header;
