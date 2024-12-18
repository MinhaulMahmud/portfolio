import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-primary py-12 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 hexagon-bg animate-pulse" />
        <div className="absolute inset-0 wave-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            {/* Clean and Readable Name */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white neon-glow">
              Minhazul Mahmud
            </h1>
            {/* Role */}
            <p className="text-lg md:text-2xl text-accent mb-6">
              ML/AI Engineer & Web Developer
            </p>
            {/* Short Description */}
            <p className="text-gray-300 mb-6 max-w-2xl text-sm md:text-lg leading-relaxed">
              A passionate technologist specializing in machine learning, web development, and NLP research. 
              Currently based in Bangladesh.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="https://github.com/MinhaulMahmud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/minhazul-mahmud/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="mailto:minhaz.oj@gmail.com"
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
