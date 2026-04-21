import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Layers, Wrench, Zap } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Advanced',
      icon: <Zap className="w-5 h-5" />,
      gradient: 'from-cyan-500 to-blue-500',
      skills: ['Python', 'NumPy', 'Pandas', 'Laravel', 'REST APIs', 'Eloquent ORM', 'HTML5/CSS3', 'MySQL'],
    },
    {
      title: 'Intermediate',
      icon: <Code2 className="w-5 h-5" />,
      gradient: 'from-violet-500 to-purple-500',
      skills: ['JavaScript', 'React.js', 'Next.js', 'TypeScript', 'Django', 'PHP'],
    },
    {
      title: 'ML & AI',
      icon: <Brain className="w-5 h-5" />,
      gradient: 'from-pink-500 to-rose-500',
      skills: ['TensorFlow', 'Scikit-learn', 'YOLO', 'OpenCV', 'VGG16', 'MTCNN'],
    },
    {
      title: 'Tools & Deployment',
      icon: <Wrench className="w-5 h-5" />,
      gradient: 'from-amber-500 to-orange-500',
      skills: ['Git', 'GitHub', 'VS Code', 'PyCharm', 'Netlify', 'Linux'],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={ref} id="skills" className="py-28 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 text-cyan-400 text-xs font-medium mb-6">
            <Layers className="w-3 h-3" />
            TECH STACK
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
              className="glass-card rounded-2xl p-6 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="tech-chip"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + skillIndex * 0.04 }}
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