import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-primary py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 hexagon-bg animate-pulse" />
        <div className="absolute inset-0 wave-pattern opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Animated Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 text-white neon-glow"
          >
            Minhazul Mahmud
          </motion.h1>


          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-accent mb-6"
          >
            ML/AI Engineer & Web Developer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-300 max-w-3xl text-sm md:text-lg leading-relaxed mb-6"
          >
            A passionate technologist specializing in machine learning, web development, and NLP research. Currently based in Bangladesh.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-6"
          >
            <a
              href="https://github.com/MinhaulMahmud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/minhazul-mahmud/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:minhaz.oj@gmail.com"
              className="text-gray-300 hover:text-pink-400 transition-colors"
            >
              <Mail className="w-8 h-8" />
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
