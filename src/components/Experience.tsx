import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Building2, Calendar, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data';

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1, x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={ref} id="experience" className="py-32 relative">
      <div className="section-divider mb-32" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="section-label">
            <Briefcase className="w-3.5 h-3.5" />
            Career
          </div>
          <h2 className="section-heading mb-6">Where I've Worked</h2>
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
          <div className="absolute left-[19px] top-4 bottom-4 w-px timeline-line hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative pl-0 md:pl-16 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-[12px] top-8 timeline-dot z-10" />

              <div className="glass-card rounded-2xl p-7 md:p-8 group">
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-accent/20 via-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-accent/70 mt-1.5">
                      <Building2 className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm shrink-0 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((task, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.15 + i * 0.08 }}
                      className="flex items-start gap-3 text-sm text-gray-400"
                    >
                      <span className="text-accent mt-1 shrink-0">▹</span>
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