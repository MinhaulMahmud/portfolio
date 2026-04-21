import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Layers, Wrench, Zap } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Advanced',
      icon: <Zap className="w-5 h-5" />,
      gradient: 'from-[#64ffda] to-[#0ea5e9]',
      accentColor: '#64ffda',
      skills: ['Python', 'NumPy', 'Pandas', 'Laravel', 'REST APIs', 'Eloquent ORM', 'HTML5/CSS3', 'MySQL'],
    },
    {
      title: 'Intermediate',
      icon: <Code2 className="w-5 h-5" />,
      gradient: 'from-violet-400 to-purple-500',
      accentColor: '#a78bfa',
      skills: ['JavaScript', 'React.js', 'Next.js', 'TypeScript', 'Django', 'PHP'],
    },
    {
      title: 'ML & AI',
      icon: <Brain className="w-5 h-5" />,
      gradient: 'from-pink-400 to-rose-500',
      accentColor: '#f472b6',
      skills: ['TensorFlow', 'Scikit-learn', 'YOLO', 'OpenCV', 'VGG16', 'MTCNN'],
    },
    {
      title: 'Tools & Deployment',
      icon: <Wrench className="w-5 h-5" />,
      gradient: 'from-amber-400 to-orange-500',
      accentColor: '#fbbf24',
      skills: ['Git', 'GitHub', 'VS Code', 'PyCharm', 'Netlify', 'Linux'],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={ref} id="skills" className="py-32 relative">
      <div className="section-divider mb-32" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="section-label">
            <Layers className="w-3.5 h-3.5" />
            Tech Stack
          </div>
          <h2 className="section-heading mb-6">Skills & Technologies</h2>
          <p className="section-subtitle">
            A versatile toolkit spanning full-stack development, machine learning, and modern DevOps workflows.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card rounded-2xl p-6 group relative"
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${category.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="flex items-center gap-3 mb-6 mt-2">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center text-[#050816] shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, si) => (
                  <motion.span
                    key={si}
                    className="tech-chip"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.08 + si * 0.04 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;