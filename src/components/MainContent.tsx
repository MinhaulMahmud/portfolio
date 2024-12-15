import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Certifications from './Certifications';
import Volunteer from './Volunteer';
import Contact from './Contact';

const MainContent = () => {
  return (
    <main className="bg-primary">
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Volunteer />
      <Contact />
    </main>
  );
};

export default MainContent;