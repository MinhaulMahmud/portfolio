import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Building2, Calendar, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={ref} id="experience" className="py-28 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 text-cyan-400 text-xs font-medium mb-6">
            <Briefcase className="w-3 h-3" />
            CAREER
          </div>
          <h2 className="section-heading mb-6">Work Experience</h2>
          <p className="section-subtitle">
            Professional roles spanning IT management, operations, and field research.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto relative"
        >
          {/* Timeline line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px timeline-line hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative pl-0 md:pl-14 mb-10 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-[11px] top-8 timeline-dot" />

              <div className="glass-card rounded-2xl p-7 group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 mt-1">
                      <Building2 className="w-4 h-4 text-violet-400" />
                      <span className="text-sm">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm shrink-0">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2.5 mt-4">
                  {exp.responsibilities.map((task, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.2 + i * 0.08 }}
                      className="flex items-start gap-3 text-sm text-gray-400"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-500/70 mt-0.5 shrink-0" />
                      <span>{task}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;