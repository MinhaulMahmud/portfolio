import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import './styles/globals.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track mouse for card glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.glass-card');
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
      });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-gray-200 relative">
      {/* Ambient orbs */}
      <div className="orb orb-teal w-[700px] h-[700px] -top-[300px] -left-[250px] animate-orb" />
      <div className="orb orb-violet w-[600px] h-[600px] top-[30%] -right-[200px] animate-orb" style={{ animationDelay: '4s' }} />
      <div className="orb orb-pink w-[500px] h-[500px] top-[60%] left-[10%] animate-orb" style={{ animationDelay: '8s' }} />
      <div className="orb orb-blue w-[400px] h-[400px] bottom-[5%] right-[20%] animate-orb" style={{ animationDelay: '2s' }} />

      {/* Grid overlay */}
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0" />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
            opacity: 0.1 + Math.random() * 0.3,
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
          }}
        />
      ))}

      {/* Sticky navbar */}
      <Navbar scrolled={scrolled} />

      <div className="relative z-10">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;