'use client';

import { motion } from 'framer-motion';
import { Music, Trophy, Camera } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      title: 'Badminton',
      icon: Trophy,
      description: 'Passionate about badminton! Regular player and enthusiast.',
      media: [
        { type: 'image', src: '/hobbies/badminton1.jpg', alt: 'Playing badminton' },
        { type: 'image', src: '/hobbies/badminton2.jpg', alt: 'Tournament day' },
        { type: 'video', src: '/hobbies/badminton-match.mp4', alt: 'Match highlight' },
      ],
    },
    {
      title: 'Music',
      icon: Music,
      description: 'Love creating and listening to music. Here are some of my performances.',
      media: [
        { type: 'image', src: '/hobbies/music1.jpg', alt: 'Music session' },
        { type: 'video', src: '/hobbies/performance.mp4', alt: 'Live performance' },
      ],
    },
  ];

  return (
    <section id="hobbies" className="py-12 sm:py-16 md:py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
            My Hobbies
          </h2>
          <p className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-4">
            Beyond work, I'm passionate about sports and music
          </p>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700"
              >
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                    <hobby.icon className="text-blue-600 mr-3 sm:mr-4 flex-shrink-0" size={32} />
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {hobby.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">
                        {hobby.description}
                      </p>
                    </div>
                  </div>

                  {/* Media Gallery */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {hobby.media.map((item, mediaIndex) => (
                      <motion.div
                        key={mediaIndex}
                        whileHover={{ scale: 1.02 }}
                        className="relative aspect-square bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden"
                      >
                        {item.type === 'image' ? (
                          <div className="w-full h-full flex items-center justify-center">
                            <Camera size={32} className="text-gray-400" />
                            <span className="absolute bottom-1 left-1 text-xs text-white bg-black/60 px-1.5 py-0.5 rounded text-[10px] sm:text-xs">
                              {item.alt}
                            </span>
                          </div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-slate-800">
                            <div className="text-center">
                              <div className="text-3xl sm:text-4xl mb-1">▶️</div>
                              <span className="text-[10px] sm:text-xs text-white px-2">{item.alt}</span>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">
                    💡 Tip: Replace placeholder images/videos by adding your media files to the public/hobbies folder
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;
