'use client';

import { motion } from 'framer-motion';
import { Briefcase, Code, Award } from 'lucide-react';

const Professional = () => {
  const experiences = [
    {
      title: 'Software Engineer & Scrum Master',
      company: 'Siemens PLM Software',
      period: 'Apr 2021 - Present · 4 yrs 8 mos',
      description: 'Leading a team of 7-8 members as Scrum Master while actively contributing to development. Driving end-to-end delivery from requirement gathering to deployment. Managing agile processes, coordinating the team, and hands-on development of UI and API features.',
    },
    {
      title: 'Associate Engineer',
      company: 'Atos',
      period: 'Jul 2018 - Apr 2021 · 2 yrs 10 mos',
      description: 'Worked as a Full Stack Developer building REST APIs, consuming APIs on UI, and developing new UI functionality. Contributed to multiple enterprise applications using modern web technologies.',
    },
  ];

  const skills = [
    'Vue.js', 'Node.js', 'Angular', '.NET', 'Spring Boot',
    'MongoDB', 'PostgreSQL', 'MySQL', 'AWS', 'Scrum Master',
    'REST APIs', 'Full Stack Development', 'Agile Methodologies'
  ];

  const projects = [
    {
      title: 'Enterprise Web Applications',
      description: 'Led development of scalable enterprise applications at Siemens, managing full development lifecycle from requirements to deployment',
      tech: ['Vue.js', 'Node.js', 'Spring Boot', '.NET'],
    },
    {
      title: 'REST API Development',
      description: 'Designed and developed robust REST APIs for multiple enterprise solutions, ensuring high performance and reliability',
      tech: ['Node.js', 'Spring Boot', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Full Stack Solutions at Atos',
      description: 'Built complete full-stack applications with modern UI frameworks and backend services',
      tech: ['Angular 8', 'Spring Boot', 'MySQL', 'Node.js'],
    },
  ];

  return (
    <section id="professional" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
            Professional Journey
          </h2>
          <p className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 max-w-2xl mx-auto px-4">
            7+ years of experience as a Full Stack Developer & Scrum Master
          </p>
          <p className="text-sm sm:text-base text-center text-blue-600 dark:text-blue-400 mb-8 sm:mb-12 md:mb-16 font-medium px-4">
            🎓 Vishwakarma Institute of Technology, Pune
          </p>

          {/* Experience */}
          <div className="mb-10 sm:mb-12 md:mb-16">
            <div className="flex items-center mb-6 sm:mb-8 px-2">
              <Briefcase className="text-blue-600 mr-2 sm:mr-3 flex-shrink-0" size={24} />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
            </div>
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 md:p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700"
                >
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base">{exp.company}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">{exp.period}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-10 sm:mb-12 md:mb-16">
            <div className="flex items-center mb-6 sm:mb-8 px-2">
              <Code className="text-blue-600 mr-2 sm:mr-3 flex-shrink-0" size={24} />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium text-xs sm:text-sm border border-blue-200 dark:border-blue-800"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <div className="flex items-center mb-6 sm:mb-8 px-2">
              <Award className="text-blue-600 mr-2 sm:mr-3 flex-shrink-0" size={24} />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Notable Projects</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600"
                >
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-slate-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Professional;
