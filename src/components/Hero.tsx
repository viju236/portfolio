'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:to-slate-800 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 relative"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900">
              {/* Replace this placeholder with your actual image */}
              <div className="w-full h-full flex items-center justify-center text-5xl sm:text-6xl md:text-7xl font-bold text-blue-600 dark:text-blue-400">
                VP
              </div>
              {/* Uncomment and use this when you add your image:
              <img 
                src="/profile.jpg" 
                alt="Vijay Patil" 
                className="w-full h-full object-cover"
              />
              */}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900"></div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 px-2">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Vijay Patil</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 max-w-2xl mx-auto px-4 leading-relaxed">
            Software Engineer & Scrum Master at <span className="font-semibold text-blue-600 dark:text-blue-400">Siemens</span>
          </p>
          
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto px-4">
            7+ years of experience in full-stack development | Leading teams and building scalable solutions
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-8 px-4">
            <span className="flex items-center gap-1">📍 Pune, Maharashtra</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">🎓 VIT Pune</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">🏠 From Latur</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4">
            <a
              href="#professional"
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#wedding"
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-pink-600 to-rose-600 text-white text-sm sm:text-base font-medium rounded-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Wedding Journey 💍
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} className="text-gray-600 dark:text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
