import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark via-primary to-primary-light">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1)_0%,transparent_100%)]" />
      <Header />
      <MainContent />
    </div>
  );
}

export default App;