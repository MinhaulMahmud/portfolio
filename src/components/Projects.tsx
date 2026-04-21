import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Rocket, FolderGit2, ArrowUpRight } from 'lucide-react';
import { projects } from '../data';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={ref} id="projects" className="py-32 relative">
      <div className="section-divider mb-32" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="section-label">
            <Rocket className="w-3.5 h-3.5" />
            Portfolio
          </div>
          <h2 className="section-heading mb-6">Featured Projects</h2>
          <p className="section-subtitle">
            Live production websites and full-stack applications built with modern technologies.
          </p>
        </motion.div>

        {/* Featured projects — large showcase cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8 mb-20"
        >
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="p-8 md:p-10 relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.03] to-violet-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="live-badge">● Live</span>
                      <span className="text-gray-600 text-xs font-mono">Project 0{index + 1}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-5 max-w-lg">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-chip">{tech}</span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-accent group/btn"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit Website
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-lg text-gray-500 hover:text-accent hover:bg-accent/5 transition-all duration-300"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Decorative side element */}
                  <div className="hidden md:flex items-center justify-center w-32 h-32 shrink-0">
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-accent/10 to-violet-500/10 border border-accent/10 flex items-center justify-center group-hover:scale-105 group-hover:border-accent/20 transition-all duration-500">
                      <span className="text-4xl font-black gradient-text-static">0{index + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10"
        >
          <h3 className="text-xl font-bold text-white flex items-center gap-3">
            <FolderGit2 className="w-5 h-5 text-accent" />
            Other Noteworthy Projects
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {others.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="glass-card rounded-xl p-5 group flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <FolderGit2 className="w-5 h-5 text-accent" />
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="text-gray-600 hover:text-accent transition-colors duration-300">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="text-gray-600 hover:text-accent transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <h4 className="text-base font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300 leading-snug">
                {project.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-[10px] font-mono text-gray-500">{tech}{i < 2 && project.technologies.length > 1 ? ' ·' : ''}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
