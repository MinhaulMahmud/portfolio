import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Globe, Sparkles } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Brain className="w-7 h-7" />,
      title: 'AI & Machine Learning',
      description: 'Building intelligent solutions with TensorFlow, Scikit-learn, YOLO, and OpenCV for real-world computer vision and NLP tasks.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: 'Full-Stack Development',
      description: 'Crafting robust web applications with Laravel, React, Next.js, and modern frontend/backend technologies.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: 'NLP Research',
      description: 'Published IEEE research on sentiment analysis. Advancing NLP capabilities through innovative ML algorithms.',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
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
    <section ref={ref} id="about" className="py-28 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 text-cyan-400 text-xs font-medium mb-6">
            <Sparkles className="w-3 h-3" />
            ABOUT ME
          </div>
          <h2 className="section-heading mb-6">
            Turning Ideas into Reality
          </h2>
          <p className="section-subtitle">
            A results-driven Computer Science graduate specializing in NLP and full-stack web development. 
            Passionate about leveraging technology to solve complex business challenges and create meaningful impact.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-2xl p-8 group cursor-default"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;