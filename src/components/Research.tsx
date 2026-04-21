import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, ExternalLink, FileText, Award, ArrowUpRight } from 'lucide-react';
import { research } from '../data';

const Research = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={ref} id="research" className="py-32 relative">
      <div className="section-divider mb-32" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="section-label">
            <BookOpen className="w-3.5 h-3.5" />
            Publications
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
          className="max-w-3xl mx-auto space-y-8"
        >
          {research.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="glass-card rounded-2xl p-8 md:p-10 group relative overflow-hidden"
            >
              {/* Left accent bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                item.type === 'publication'
                  ? 'bg-gradient-to-b from-accent to-[#0ea5e9]'
                  : 'bg-gradient-to-b from-violet-400 to-purple-500'
              }`} />

              <div className="pl-4">
                {/* Badge row */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-[#050816] shadow-lg ${
                    item.type === 'publication'
                      ? 'bg-gradient-to-br from-accent to-[#0ea5e9]'
                      : 'bg-gradient-to-br from-violet-400 to-purple-500'
                  }`}>
                    {item.type === 'publication' ? <FileText className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                  </div>
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-wider ${
                      item.type === 'publication' ? 'text-accent' : 'text-violet-400'
                    }`}>
                      {item.type === 'publication' ? 'IEEE Publication' : 'Paid Research'}
                    </span>
                    <span className="text-gray-600 text-xs ml-2 font-mono">· {item.year}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300 leading-relaxed">
                  "{item.title}"
                </h3>

                {item.venue && (
                  <p className="text-gray-500 text-sm mb-3 font-medium">{item.venue}</p>
                )}

                <div className="flex items-center gap-2 mb-6">
                  <span className="tech-chip">{item.focus}</span>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {item.doi && (
                    <a
                      href={`https://doi.org/${item.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent text-xs py-2 px-4 group/link"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="font-mono">DOI: {item.doi.slice(0, 25)}...</span>
                      <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  {item.link && !item.doi && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent text-xs py-2 px-4"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Post
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
