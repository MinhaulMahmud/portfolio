import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-200 relative overflow-hidden">
      {/* Ambient background orbs */}
      <div className="orb orb-cyan w-[600px] h-[600px] -top-[200px] -left-[200px] animate-orb" />
      <div className="orb orb-violet w-[500px] h-[500px] top-[40%] -right-[150px] animate-orb" style={{ animationDelay: '3s' }} />
      <div className="orb orb-pink w-[400px] h-[400px] bottom-[10%] left-[20%] animate-orb" style={{ animationDelay: '6s' }} />

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0" />

      <div className="relative z-10">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;