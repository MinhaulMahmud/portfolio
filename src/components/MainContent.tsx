import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Research from './Research';
import Education from './Education';
import Certifications from './Certifications';
import Contact from './Contact';

const MainContent = () => {
  return (
    <main>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Research />
      <Education />
      <Certifications />
      <Contact />
    </main>
  );
};

export default MainContent;