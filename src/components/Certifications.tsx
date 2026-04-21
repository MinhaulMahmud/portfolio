import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen } from 'lucide-react';
import { certifications } from '../data';

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={ref} id="certifications" className="py-32 relative">
      <div className="section-divider mb-32" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="section-label">
            <Award className="w-3.5 h-3.5" />
            Training
          </div>
          <h2 className="section-heading mb-6">Certifications & Training</h2>
          <p className="section-subtitle">
            Professional development courses that sharpened my technical expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="glass-card rounded-2xl p-7 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-[#0ea5e9] flex items-center justify-center text-[#050816] shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-accent/60 font-medium mb-1">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 font-mono mb-3">{cert.date}</p>
                  {cert.description && (
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;