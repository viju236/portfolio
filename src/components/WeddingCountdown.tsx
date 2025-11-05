'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Camera, Video } from 'lucide-react';

const WeddingCountdown = () => {
  const weddingDate = new Date('2025-11-25T12:35:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const vlogs = [
    { title: 'Pre-Wedding Shoot BTS', type: 'video', date: 'Oct 2025', thumbnail: '/wedding/bts1.jpg' },
    { title: 'Venue Selection Day', type: 'video', date: 'Sep 2025', thumbnail: '/wedding/venue.jpg' },
    { title: 'Shopping Adventures', type: 'image', date: 'Aug 2025', thumbnail: '/wedding/shopping.jpg' },
    { title: 'Engagement Ceremony', type: 'image', date: 'Jul 2025', thumbnail: '/wedding/engagement.jpg' },
  ];

  return (
    <section id="wedding" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block mb-3 sm:mb-4"
            >
              <Heart className="text-pink-600" size={48} fill="currentColor" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
              Our Wedding Journey
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Counting down to November 25, 2025 at 12:35 PM
            </p>
          </div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12 border border-pink-200 dark:border-pink-900"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg p-3 sm:p-4">
                  <motion.div
                    key={item.value}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pink-600 dark:text-pink-400 mb-1 sm:mb-2"
                  >
                    {String(item.value).padStart(2, '0')}
                  </motion.div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 uppercase tracking-wide font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Wedding Vlog Section */}
          <div>
            <div className="flex items-center justify-center mb-6 sm:mb-8 px-4">
              <Video className="text-pink-600 mr-2 sm:mr-3 flex-shrink-0" size={28} />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Wedding Vlog & Memories
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {vlogs.map((vlog, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden cursor-pointer border border-pink-200 dark:border-pink-900 hover:border-pink-400 dark:hover:border-pink-600 transition-all"
                >
                  <div className="aspect-video bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 flex items-center justify-center">
                    {vlog.type === 'video' ? (
                      <Video size={36} className="text-pink-600 dark:text-pink-400" />
                    ) : (
                      <Camera size={36} className="text-pink-600 dark:text-pink-400" />
                    )}
                  </div>
                  <div className="p-3 sm:p-4">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm sm:text-base line-clamp-2">
                      {vlog.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <Calendar size={12} className="mr-1 flex-shrink-0" />
                      {vlog.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic px-4">
              💡 Add your wedding photos and videos to the public/wedding folder to display them here
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingCountdown;
