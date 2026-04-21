import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Globe, Sparkles, ArrowUpRight } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: <Brain className="w-7 h-7" />,
      title: 'AI & Machine Learning',
      description: 'Building intelligent solutions with TensorFlow, Scikit-learn, YOLO, and OpenCV for real-world computer vision and NLP tasks.',
      gradient: 'from-[#64ffda] to-[#0ea5e9]',
      number: '01',
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: 'Full-Stack Development',
      description: 'Crafting robust web applications with Laravel, React, Next.js, and modern frontend/backend technologies.',
      gradient: 'from-violet-500 to-purple-500',
      number: '02',
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: 'NLP Research',
      description: 'Published IEEE research on sentiment analysis. Advancing NLP capabilities through innovative ML algorithms.',
      gradient: 'from-pink-500 to-rose-500',
      number: '03',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={ref} id="about" className="py-32 relative">
      {/* Section divider */}
      <div className="section-divider mb-32" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="section-label">
            <Sparkles className="w-3.5 h-3.5" />
            About Me
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
              className="glass-card rounded-2xl p-8 group cursor-default relative"
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-6 text-6xl font-black text-white/[0.02] select-none">
                {feature.number}
              </span>

              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 text-[#050816] shadow-lg group-hover:scale-110 group-hover:shadow-accent/20 transition-all duration-500`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
                {feature.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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