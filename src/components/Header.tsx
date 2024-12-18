import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-primary py-12 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 hexagon-bg animate-pulse" />
        <div className="absolute inset-0 wave-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-32 md:w-40"
          >
            <div className="w-full aspect-square rounded-full border-2 border-accent overflow-hidden">
              <img
                src="./profile.jpg"
                alt="Minhazul Mahmud"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-highlight neon-glow">
              Minhazul Mahmud
            </h1>
            <p className="text-lg md:text-xl text-accent mb-4">
              ML/AI Engineer & Web Developer
            </p>
            <p className="text-gray-300 mb-4 max-w-2xl text-sm md:text-base">
              A passionate technologist specializing in machine learning, web development, and NLP research.
              Currently based in Bangladesh.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://github.com/MinhaulMahmud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/minhazul-mahmud/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:minhaz.oj@gmail.com"
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Header;