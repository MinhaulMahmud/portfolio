import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../data';

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1, x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={ref} id="education" className="py-32 relative">
      <div className="section-divider mb-32" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="section-label">
            <GraduationCap className="w-3.5 h-3.5" />
            Education
          </div>
          <h2 className="section-heading mb-6">Academic Background</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-2xl mx-auto relative"
        >
          {/* Timeline line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-px timeline-line hidden md:block" />

          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="relative pl-0 md:pl-16 mb-8 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-[12px] top-6 timeline-dot z-10" />

              <div className="glass-card rounded-2xl p-6 group">
                <div className="flex items-center gap-2.5 mb-3">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {edu.degree}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-violet-400" />
                    {edu.institution}, {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-xs text-gray-500">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    {edu.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;