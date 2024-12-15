import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Layers, Wrench, Github, ExternalLink, Award, GraduationCap, Heart, BookOpen } from 'lucide-react';
import { projects, education, experiences, certifications, volunteer, awards } from '../data';

const Grid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeSection, setActiveSection] = useState('about');

  const gridSections = [
    {
      id: 'about',
      title: 'About Me',
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            A recent graduate in Computer Science & Engineering with a strong foundation in web app development, 
            machine learning, and IT support. Eager to apply academic knowledge to real-world challenges.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-accent font-semibold mb-2">Languages</h3>
              <ul className="text-gray-300 space-y-1">
                <li>Bengali: Fluent</li>
                <li>English: Proficient</li>
                <li>Hindi: Proficient</li>
              </ul>
            </div>
            <div>
              <h3 className="text-accent font-semibold mb-2">Interests</h3>
              <ul className="text-gray-300 space-y-1">
                <li>Machine Learning</li>
                <li>Web Development</li>
                <li>Research</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      span: 'col-span-2 row-span-1'
    },
    {
      id: 'skills',
      title: 'Skills & Technologies',
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Code2 className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-accent">Web Development</h3>
            </div>
            <p className="text-gray-300 text-sm">HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, PHP</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Brain className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-accent">ML/AI</h3>
            </div>
            <p className="text-gray-300 text-sm">Python, OpenCV, MTCNN, Scikit-learn, NumPy</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-accent">Frameworks</h3>
            </div>
            <p className="text-gray-300 text-sm">Laravel, Django, React.js</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Wrench className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-accent">Tools</h3>
            </div>
            <p className="text-gray-300 text-sm">Git, MySQL, Linux, Windows</p>
          </div>
        </div>
      ),
      span: 'col-span-2 row-span-1'
    },
    {
      id: 'education',
      title: 'Education',
      icon: <GraduationCap />,
      content: (
        <div className="space-y-3">
          {education.map((edu) => (
            <div key={edu.id} className="border-l-2 border-accent pl-3">
              <h3 className="font-semibold text-accent">{edu.degree}</h3>
              <p className="text-gray-300 text-sm">{edu.institution}</p>
              <p className="text-gray-400 text-sm">{edu.year}</p>
            </div>
          ))}
        </div>
      ),
      span: 'col-span-1 row-span-2'
    },
    {
      id: 'projects',
      title: 'Projects',
      content: (
        <div className="grid grid-cols-2 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="bg-secondary/10 rounded-lg p-3">
              <h3 className="font-semibold text-accent mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={project.githubUrl} className="text-gray-300 hover:text-accent text-sm flex items-center gap-1">
                  <Github className="w-4 h-4" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      ),
      span: 'col-span-3 row-span-2'
    },
    {
      id: 'experience',
      title: 'Experience',
      content: (
        <div className="space-y-3">
          {experiences.map((exp) => (
            <div key={exp.id} className="border-l-2 border-accent pl-3">
              <h3 className="font-semibold text-accent">{exp.title}</h3>
              <p className="text-gray-300 text-sm">{exp.organization}</p>
              <p className="text-gray-400 text-sm">{exp.date}</p>
              <p className="text-gray-300 text-sm mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      ),
      span: 'col-span-2 row-span-2'
    },
    {
      id: 'certifications',
      title: 'Certifications',
      icon: <Award />,
      content: (
        <div className="space-y-3">
          {certifications.map((cert) => (
            <div key={cert.id} className="border-l-2 border-accent pl-3">
              <h3 className="font-semibold text-accent">{cert.title}</h3>
              <p className="text-gray-300 text-sm">{cert.issuer}</p>
              <p className="text-gray-400 text-sm">{cert.date}</p>
              {cert.url && (
                <a href={cert.url} className="text-accent text-sm hover:underline">
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      ),
      span: 'col-span-1 row-span-1'
    },
    {
      id: 'volunteer',
      title: 'Volunteer Work',
      icon: <Heart />,
      content: (
        <div className="space-y-3">
          {volunteer.map((vol) => (
            <div key={vol.id} className="border-l-2 border-accent pl-3">
              <h3 className="font-semibold text-accent">{vol.organization}</h3>
              <p className="text-gray-300 text-sm">{vol.role}</p>
              <p className="text-gray-400 text-sm">{vol.period}</p>
              <p className="text-gray-300 text-sm">{vol.description}</p>
            </div>
          ))}
        </div>
      ),
      span: 'col-span-1 row-span-1'
    }
  ];

  return (
    <div ref={ref} className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-6 gap-4">
        {gridSections.map((section) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={`${section.span} bg-secondary/10 rounded-xl p-6 hover:bg-secondary/20 transition-colors duration-300`}
            onClick={() => setActiveSection(section.id)}
          >
            <div className="flex items-center gap-2 mb-4">
              {section.icon && <div className="text-accent">{section.icon}</div>}
              <h2 className="text-xl font-bold text-highlight">{section.title}</h2>
            </div>
            <div className="overflow-auto max-h-[calc(100%-2rem)]">
              {section.content}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Grid;