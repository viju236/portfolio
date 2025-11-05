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
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isWeddingOver, setIsWeddingOver] = useState(false);
  const [previewMode, setPreviewMode] = useState(false); // Temporary preview toggle

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
        setIsWeddingOver(false);
      } else {
        setIsWeddingOver(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Preload images and trigger animation sequence
  useEffect(() => {
    const verticalImg = new Image();
    const horizontalImg = new Image();
    let loadedCount = 0;

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === 2) {
        setImagesLoaded(true);
        // Delay content reveal for smooth transition
        setTimeout(() => {
          setShowContent(true);
        }, 500);
      }
    };

    verticalImg.src = '/wedding/Vertical.JPG';
    horizontalImg.src = '/wedding/Horizontal.JPG';

    verticalImg.onload = checkAllLoaded;
    horizontalImg.onload = checkAllLoaded;

    // Fallback in case images fail to load
    verticalImg.onerror = checkAllLoaded;
    horizontalImg.onerror = checkAllLoaded;

    // Timeout fallback - show content after 3 seconds regardless
    const fallbackTimer = setTimeout(() => {
      setImagesLoaded(true);
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  const vlogs = [
    { title: 'Pre-Wedding Shoot BTS', type: 'video', date: 'Oct 2025', thumbnail: '/wedding/bts1.jpg' },
    { title: 'Venue Selection Day', type: 'video', date: 'Sep 2025', thumbnail: '/wedding/venue.jpg' },
    { title: 'Shopping Adventures', type: 'image', date: 'Aug 2025', thumbnail: '/wedding/shopping.jpg' },
    { title: 'Engagement Ceremony', type: 'image', date: 'Jul 2025', thumbnail: '/wedding/engagement.jpg' },
  ];

  return (
    <section id="wedding" className="relative bg-slate-900 overflow-hidden">
      {/* Loading Spinner */}
      {!imagesLoaded && (
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: imagesLoaded ? 0 : 1 }}
          className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-pink-500/30 border-t-pink-500 rounded-full mx-auto mb-4"
            />
            <p className="text-white/70 text-lg font-light">Loading your special moment...</p>
          </div>
        </motion.div>
      )}

      {/* Hero Section with Background Image */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Responsive Background Images with Overlay */}
        {/* Mobile - Portrait */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: imagesLoaded ? 1 : 0, scale: imagesLoaded ? 1 : 1.05 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 md:hidden"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/wedding/Vertical.JPG')`,
              backgroundAttachment: 'fixed',
            }}
          />
          {/* Gradient overlay for better text readability */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: imagesLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"
          />
        </motion.div>
        
        {/* Tablet/Desktop - Landscape */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: imagesLoaded ? 1 : 0, scale: imagesLoaded ? 1 : 1.05 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 hidden md:block"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/wedding/Horizontal.JPG')`,
              backgroundAttachment: 'fixed',
            }}
          />
          {/* Gradient overlay for better text readability */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: imagesLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"
          />
        </motion.div>

        {/* Hashtag in corner */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: showContent ? 1 : 0, x: showContent ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-20"
        >
          <p className="text-white/80 text-sm sm:text-base md:text-lg font-light tracking-wider">
            #RutVi
          </p>
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 md:py-24"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 sm:mb-10 md:mb-12 px-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ 
                scale: showContent ? [0, 1.2, 1] : 0,
              }}
              transition={{ 
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut"
              }}
              className="inline-block mb-3 sm:mb-4"
            >
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-white/70 mb-3 sm:mb-4 drop-shadow-lg font-light tracking-wide"
            >
              {!(isWeddingOver || previewMode) && "We're Getting Married!"}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl"
            >
              {(isWeddingOver || previewMode) ? "Mr. & Mrs. Patil" : "Vijay ❤️ Rutuja"}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl text-white/90 drop-shadow-lg font-light"
            >
              {(isWeddingOver || previewMode) 
                ? "It's Official! 💍" 
                : "Join us on November 25, 2025 at 12:35 PM"}
            </motion.p>
          </motion.div>

          {/* Conditional Content - Countdown or Thank You Message */}
          {(isWeddingOver || previewMode) ? (
            // Thank You Message After Wedding
            <div className="flex flex-col items-center space-y-8 sm:space-y-12 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30, scale: showContent ? 1 : 0.9 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-pink-50/10 to-rose-50/10 backdrop-blur-sm rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl border border-pink-500/30"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 10, 0] }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-6xl sm:text-7xl md:text-8xl mb-6"
                  >
                    💑
                  </motion.div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                    Thank You for Celebrating With Us!
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
                    Your presence made our special day truly unforgettable. We are blessed to have shared this beautiful moment with our loved ones.
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-pink-300">
                    With love and gratitude ❤️
                  </p>
                  <p className="text-lg sm:text-xl text-gray-300 mt-4">
                    Vijay & Rutuja
                  </p>
                </div>
              </motion.div>
            </div>
          ) : (
            // Countdown Timer - Elegant Design
            <div className="flex flex-col items-center space-y-8 sm:space-y-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
              {[
                { label: 'Days', value: timeLeft.days, emoji: '📅' },
                { label: 'Hours', value: timeLeft.hours, emoji: '⏰' },
                { label: 'Minutes', value: timeLeft.minutes, emoji: '⏱️' },
                { label: 'Seconds', value: timeLeft.seconds, emoji: '⏳' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ 
                    opacity: showContent ? 1 : 0, 
                    y: showContent ? 0 : 50,
                    scale: showContent ? 1 : 0.8
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.7 + (index * 0.15),
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  {/* Decorative background circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-rose-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  
                  {/* Card */}
                  <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-pink-200/50 dark:border-pink-500/30 group-hover:border-pink-400/70 transition-all duration-300">
                    {/* Emoji Icon */}
                    <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">
                      {item.emoji}
                    </div>
                    
                    {/* Number */}
                    <motion.div
                      key={item.value}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-br from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400 bg-clip-text text-transparent mb-2 sm:mb-3 leading-none"
                    >
                      {String(item.value).padStart(2, '0')}
                    </motion.div>
                    
                    {/* Label */}
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 uppercase tracking-widest font-bold">
                      {item.label}
                    </div>
                    
                    {/* Decorative dot */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50 animate-pulse"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative divider */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: showContent ? 1 : 0,
                scale: showContent ? 1 : 0.5
              }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex items-center justify-center space-x-2 sm:space-x-3"
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: showContent ? 'auto' : 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-pink-300"
              />
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: showContent ? 'auto' : 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-pink-300"
              />
            </motion.div>
          </div>
          )}

        </motion.div>
      </div>

      {/* Details Section with background image */}
      <div className="relative py-16 sm:py-20 md:py-24">
        {/* Background Images */}
        {/* Mobile - Portrait */}
        <div className="absolute inset-0 md:hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/wedding/Vertical.JPG')`,
              backgroundAttachment: 'fixed',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>
        
        {/* Tablet/Desktop - Landscape */}
        <div className="absolute inset-0 hidden md:block">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/wedding/Horizontal.JPG')`,
              backgroundAttachment: 'fixed',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome & Invitation Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16 sm:mb-20"
          >
            <div className="bg-gradient-to-br from-pink-50/10 to-rose-50/10 backdrop-blur-sm rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl border border-pink-500/20">
              <div className="text-center mb-6">
                <div className="inline-block p-4 bg-pink-500/20 rounded-full mb-4">
                  <Heart className="text-pink-400 w-12 h-12" fill="currentColor" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  You&apos;re Invited!
                </h2>
              </div>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed text-center mb-8 max-w-2xl mx-auto">
                With great joy and excitement, we invite you to celebrate the beginning of our forever. 
                Your presence will make our special day even more memorable as we embark on this beautiful journey together.
              </p>
              <div className="text-center pt-6 border-t border-pink-500/20">
                <p className="text-xl sm:text-2xl font-semibold text-pink-300 mb-2">
                  Join us in our celebration of love
                </p>
                <p className="text-base text-gray-300">
                  We can&apos;t wait to see you there! ✨
                </p>
              </div>
            </div>
          </motion.div>

          {/* Schedule of Events Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 sm:mb-20"
          >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center drop-shadow-lg">
                Schedule of Events 📅
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 max-w-5xl mx-auto">
                {/* Event 1 - Haldi */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-gradient-to-br from-yellow-50/10 to-orange-50/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-yellow-500/30 hover:border-yellow-400/60 transition-all hover:scale-105"
                >
                  <div className="text-4xl mb-3 text-center">🌼</div>
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">
                    Haldi
                  </h3>
                  <p className="text-lg text-yellow-200 text-center font-semibold">
                    Monday
                  </p>
                  <p className="text-base text-gray-300 text-center">
                    6:00 PM onwards
                  </p>
                </motion.div>

                {/* Event 2 - Sangeet */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-br from-purple-50/10 to-pink-50/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-purple-500/30 hover:border-purple-400/60 transition-all hover:scale-105"
                >
                  <div className="text-4xl mb-3 text-center">🎵</div>
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">
                    Sangeet
                  </h3>
                  <p className="text-lg text-purple-200 text-center font-semibold">
                    Monday
                  </p>
                  <p className="text-base text-gray-300 text-center">
                    9:00 PM onwards
                  </p>
                </motion.div>

                {/* Event 3 - Saptapadi */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-gradient-to-br from-pink-50/10 to-rose-50/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-500/30 hover:border-pink-400/60 transition-all hover:scale-105"
                >
                  <div className="text-4xl mb-3 text-center">💑</div>
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">
                    Saptapadi
                  </h3>
                  <p className="text-lg text-pink-200 text-center font-semibold">
                    Tuesday
                  </p>
                  <p className="text-base text-gray-300 text-center">
                    7:00 AM onwards
                  </p>
                </motion.div>
              </div>

              {/* Venue Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-3xl mx-auto bg-gradient-to-br from-pink-50/10 to-rose-50/10 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-2xl border border-pink-500/30"
              >
                <div className="text-center mb-6">
                  <div className="inline-block p-3 bg-pink-500/20 rounded-full mb-3">
                    <div className="text-4xl">📍</div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Venue
                  </h3>
                </div>
                <p className="text-2xl font-semibold text-pink-300 text-center mb-2">
                  The Gajaraj Palace
                </p>
                <p className="text-lg text-gray-200 text-center leading-relaxed mb-8">
                  Near Potdar English School, Ring Road, Latur
                </p>

                {/* Map Location Button */}
                <div className="flex flex-col items-center pt-8 border-t border-pink-500/20 w-full">
                  <a
                    href="https://maps.app.goo.gl/PBXSsAec1AgPyGvy6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto max-w-sm"
                  >
                    <span className="text-xl sm:text-2xl">📍</span>
                    <span className="whitespace-nowrap">Open in Google Maps</span>
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                  </a>
                  <p className="text-xs sm:text-sm text-gray-300 mt-4 text-center px-4">
                    Click to get directions to the venue
                  </p>
                </div>
              </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wedding Vlog Section - Commented out for now */}
          {/* <div>
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
          </div> */}
    </section>
  );
};

export default WeddingCountdown;
