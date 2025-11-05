'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Phone, MapPin, Clock, Plus } from 'lucide-react';

interface Activity {
  id: number;
  task: string;
  completed: boolean;
  category: 'venue' | 'vendor' | 'planning' | 'other';
}

interface Vendor {
  id: number;
  name: string;
  category: string;
  contact: string;
  status: string;
}

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
}

const WeddingPlanner = () => {
  const [activities, setActivities] = useState<Activity[]>([
    { id: 1, task: 'Book wedding venue', completed: true, category: 'venue' },
    { id: 2, task: 'Finalize guest list', completed: true, category: 'planning' },
    { id: 3, task: 'Select wedding outfits', completed: false, category: 'planning' },
    { id: 4, task: 'Send invitations', completed: false, category: 'planning' },
    { id: 5, task: 'Final venue decoration', completed: false, category: 'venue' },
  ]);

  const [vendors] = useState<Vendor[]>([
    { id: 1, name: 'Royal Banquet Hall', category: 'Venue', contact: '+1-234-567-890', status: 'Confirmed' },
    { id: 2, name: 'Picture Perfect Photography', category: 'Photography', contact: '+1-234-567-891', status: 'Confirmed' },
    { id: 3, name: 'Delicious Catering Co.', category: 'Catering', contact: '+1-234-567-892', status: 'Pending' },
    { id: 4, name: 'Bloom Florists', category: 'Decoration', contact: '+1-234-567-893', status: 'Confirmed' },
  ]);

  const [events] = useState<Event[]>([
    { id: 1, name: 'Mehendi Ceremony', date: 'Nov 23, 2025', time: '4:00 PM', location: 'Home' },
    { id: 2, name: 'Sangeet Night', date: 'Nov 24, 2025', time: '6:00 PM', location: 'Banquet Hall' },
    { id: 3, name: 'Wedding Ceremony', date: 'Nov 25, 2025', time: '10:00 AM', location: 'Royal Banquet Hall' },
    { id: 4, name: 'Reception', date: 'Nov 25, 2025', time: '7:00 PM', location: 'Royal Banquet Hall' },
  ]);

  const toggleActivity = (id: number) => {
    setActivities(activities.map(activity =>
      activity.id === id ? { ...activity, completed: !activity.completed } : activity
    ));
  };

  const completedCount = activities.filter(a => a.completed).length;
  const progressPercentage = (completedCount / activities.length) * 100;

  return (
    <section id="wedding-planner" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
            Wedding Planning Dashboard
          </h2>
          <p className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4">
            Tracking all activities, vendors, and events for the big day
          </p>

          {/* Progress Bar */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 sm:p-5 md:p-6 mb-8 sm:mb-10 md:mb-12 border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-center mb-2 sm:mb-3">
              <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm sm:text-base">Overall Progress</span>
              <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm sm:text-base">
                {completedCount}/{activities.length}
              </span>
            </div>
            <div className="w-full bg-slate-300 dark:bg-slate-700 rounded-full h-3 sm:h-4">
              <motion.div
                className="bg-gradient-to-r from-pink-500 to-rose-500 h-3 sm:h-4 rounded-full shadow-sm"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1 }}
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
              {Math.round(progressPercentage)}% Complete
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            {/* Activities Checklist */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <CheckCircle className="text-green-600 mr-2 flex-shrink-0" size={24} />
                Activities Checklist
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {activities.map((activity) => (
                  <motion.div
                    key={activity.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex items-start sm:items-center p-2.5 sm:p-3 bg-white dark:bg-slate-900 rounded-lg cursor-pointer active:bg-slate-50 dark:active:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    onClick={() => toggleActivity(activity.id)}
                  >
                    {activity.completed ? (
                      <CheckCircle className="text-green-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-0" size={20} />
                    ) : (
                      <Circle className="text-gray-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-0" size={20} />
                    )}
                    <span
                      className={`flex-1 text-sm sm:text-base ${
                        activity.completed
                          ? 'line-through text-gray-500 dark:text-gray-400'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {activity.task}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Vendors */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <Phone className="text-blue-600 mr-2 flex-shrink-0" size={24} />
                Vendor Details
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {vendors.map((vendor) => (
                  <div
                    key={vendor.id}
                    className="p-3 sm:p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700"
                  >
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base flex-1">{vendor.name}</h4>
                      <span
                        className={`px-2 py-0.5 text-xs rounded-full whitespace-nowrap ${
                          vendor.status === 'Confirmed'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                        }`}
                      >
                        {vendor.status}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">{vendor.category}</p>
                    <a href={`tel:${vendor.contact}`} className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 flex items-center hover:underline">
                      <Phone size={12} className="mr-1 flex-shrink-0" />
                      {vendor.contact}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Event Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-slate-800 dark:to-slate-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg border border-pink-200 dark:border-pink-900"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
              <Clock className="text-pink-600 mr-2 flex-shrink-0" size={24} />
              Event Schedule
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-900 rounded-lg p-3 sm:p-4 md:p-5 shadow-md border border-pink-200 dark:border-pink-900"
                >
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {event.name}
                  </h4>
                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                    <p className="text-gray-600 dark:text-gray-400 flex items-start">
                      <Clock size={14} className="mr-1.5 sm:mr-2 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span>{event.date} at {event.time}</span>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 flex items-start">
                      <MapPin size={14} className="mr-1.5 sm:mr-2 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span>{event.location}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingPlanner;
