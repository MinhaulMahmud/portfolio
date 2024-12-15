import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Presentation, Search, Trophy } from 'lucide-react';
import { experiences } from '../data';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'seminar':
        return <Presentation className="w-6 h-6" />;
      case 'research':
        return <Search className="w-6 h-6" />;
      case 'leadership':
        return <Trophy className="w-6 h-6" />;
      default:
        return <Presentation className="w-6 h-6" />;
    }
  };

  return (
    <section ref={ref} className="py-16 relative overflow-hidden bg-gradient-to-b from-primary to-secondary">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Experience & Activities</h2>
          <p className="text-gray-light max-w-3xl mx-auto">
            From organizing events to contributing to national projects, I've gained diverse experience across multiple domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="bg-gradient-to-br from-primary to-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {getIcon(experience.type)}
              </div>
              <h3 className="card-heading">{experience.title}</h3>
              <p className="text-primary text-sm mb-2">{experience.organization}</p>
              <p className="text-gray-light text-sm mb-3">{experience.date}</p>
              <p className="text-gray-light">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;