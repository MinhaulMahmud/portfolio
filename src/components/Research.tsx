import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, ExternalLink, FileText, Award } from 'lucide-react';
import { research } from '../data';

const Research = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={ref} id="research" className="py-28 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 text-cyan-400 text-xs font-medium mb-6">
            <BookOpen className="w-3 h-3" />
            PUBLICATIONS
          </div>
          <h2 className="section-heading mb-6">Research & Papers</h2>
          <p className="section-subtitle">
            Published academic work and industry research contributions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto space-y-6"
        >
          {research.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="glass-card rounded-2xl p-8 group relative overflow-hidden"
            >
              {/* Accent bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full ${item.type === 'publication' ? 'bg-gradient-to-b from-cyan-400 to-blue-500' : 'bg-gradient-to-b from-violet-400 to-purple-500'}`} />

              <div className="pl-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-lg ${item.type === 'publication' ? 'bg-gradient-to-br from-cyan-500 to-blue-500' : 'bg-gradient-to-br from-violet-500 to-purple-500'}`}>
                    {item.type === 'publication' ? <FileText className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                  </div>
                  <div>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${item.type === 'publication' ? 'text-cyan-400' : 'text-violet-400'}`}>
                      {item.type === 'publication' ? 'IEEE Publication' : 'Paid Research'}
                    </span>
                    <span className="text-gray-600 text-xs ml-2">• {item.year}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 leading-relaxed">
                  "{item.title}"
                </h3>

                {item.venue && (
                  <p className="text-gray-500 text-sm mb-3">{item.venue}</p>
                )}

                <div className="flex items-center gap-2 mb-5">
                  <span className="tech-chip">{item.focus}</span>
                </div>

                <div className="flex items-center gap-4">
                  {item.doi && (
                    <a
                      href={`https://doi.org/${item.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-mono text-xs">DOI: {item.doi}</span>
                    </a>
                  )}
                  {item.link && !item.doi && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Post</span>
                    </a>
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

export default Research;
