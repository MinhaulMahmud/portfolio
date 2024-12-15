import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Layers, Wrench } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Web Development',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['React', 'TypeScript', 'Node.js', 'Next.js', 'TailwindCSS']
    },
    {
      title: 'ML/AI',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV']
    },
    {
      title: 'Frameworks',
      icon: <Layers className="w-6 h-6" />,
      skills: ['Django', 'FastAPI', 'Express.js', 'Flask']
    },
    {
      title: 'Tools',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['Git', 'Docker', 'AWS', 'Linux', 'PostgreSQL']
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;