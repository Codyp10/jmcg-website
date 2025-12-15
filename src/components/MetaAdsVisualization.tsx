import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function MetaAdsVisualization() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAd, setShowAd] = useState(false);

  // Three different company ads
  const ads = [
    {
      companyName: 'Elite Digital Solutions',
      industry: 'Digital Marketing Agency',
      avatar: 'EDS',
      avatarBg: 'from-blue-500 to-cyan-500',
      platform: 'Facebook',
      adImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      adText: 'Transform Your Business with Expert Digital Marketing',
      description: 'Ready to 10x your online presence? Our proven strategies have helped 500+ businesses grow. Book your free consultation today!',
      cta: 'Learn More',
      likes: '1.2K',
      comments: 89,
      shares: 234
    },
    {
      companyName: 'Superior Comfort HVAC',
      industry: 'HVAC Services',
      avatar: 'SC',
      avatarBg: 'from-orange-500 to-red-500',
      platform: 'Instagram',
      adImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      adText: 'Beat the Heat! Summer AC Special',
      description: 'Save $200 on AC installation this month! 24/7 emergency service. Same-day repairs. Serving Phoenix since 2005. Call now!',
      cta: 'Call Now',
      likes: '892',
      comments: 45,
      shares: 67
    },
    {
      companyName: 'Peak Performance Fitness',
      industry: 'Fitness Center',
      avatar: 'PPF',
      avatarBg: 'from-green-500 to-emerald-500',
      platform: 'Facebook',
      adImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      adText: 'Your Dream Body Starts Here',
      description: 'Join this month and get 2 months FREE + personal training session! State-of-the-art equipment, expert trainers, and a supportive community.',
      cta: 'Join Now',
      likes: '2.1K',
      comments: 156,
      shares: 421
    }
  ];

  const currentAd = ads[currentIndex];

  useEffect(() => {
    // Reset animation
    setShowAd(false);
    
    // Show ad with delay
    const showTimer = setTimeout(() => {
      setShowAd(true);
    }, 300);

    // Rotate to next ad
    const rotateTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % ads.length);
    }, 6000); // Change ad every 6 seconds

    return () => {
      clearTimeout(showTimer);
      clearTimeout(rotateTimer);
    };
  }, [currentIndex]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl h-full flex flex-col overflow-hidden">
      {/* Platform Header */}
      <div className="pb-3 md:pb-4 border-b border-gray-700 mb-4 md:mb-6 flex-shrink-0">
        <h3 className="text-white text-base md:text-lg">
          {currentAd.platform === 'Facebook' ? 'Facebook' : 'Instagram'} Feed
        </h3>
        <p className="text-xs text-gray-400">Sponsored Ad in User Feed</p>
      </div>

      {/* Scrollable Ad Container */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800/50">
        <motion.div
          key={currentIndex}
          className="bg-gray-800 rounded-lg md:rounded-xl border border-gray-700 shadow-sm overflow-hidden max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={showAd ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Post Header */}
          <div className="p-2.5 md:p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br ${currentAd.avatarBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                <span className="text-white text-xs md:text-sm">{currentAd.avatar}</span>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1 md:gap-2">
                  <span className="text-xs md:text-sm text-white truncate">{currentAd.companyName}</span>
                  <span className="text-xs text-gray-400 flex-shrink-0">· Sponsored</span>
                </div>
                <p className="text-xs text-gray-400 truncate">{currentAd.industry}</p>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="px-2.5 md:px-4 pb-2 md:pb-3">
            <p className="text-white text-xs md:text-sm mb-1 md:mb-2">{currentAd.adText}</p>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{currentAd.description}</p>
          </div>

          {/* Ad Image */}
          <motion.div
            className="w-full h-32 md:h-48 relative overflow-hidden"
            style={{ background: currentAd.adImage }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-white text-center px-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="text-xl md:text-3xl mb-1 md:mb-2">{currentAd.adText.split(' ')[0]}</div>
                <div className="text-sm md:text-lg">{currentAd.companyName}</div>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <div className="p-2.5 md:p-4">
            <motion.button
              className="w-full py-2 md:py-3 bg-gradient-to-r from-[#EFA82F] to-[#d89527] text-white rounded-lg text-sm md:text-base hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {currentAd.cta}
            </motion.button>
          </div>

          {/* Post Stats */}
          <div className="px-2.5 md:px-4 py-1.5 md:py-2 border-t border-gray-700 flex items-center justify-between text-xs text-gray-400">
            <div>
              {currentAd.likes}
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <span>{currentAd.comments} comments</span>
              <span className="hidden sm:inline">{currentAd.shares} shares</span>
            </div>
          </div>

          {/* Interaction Buttons */}
          <div className="border-t border-gray-700 px-2 md:px-4 py-1 md:py-2 flex items-center justify-around">
            <motion.button
              className="text-gray-300 hover:text-white py-1.5 md:py-2 px-2 md:px-4 rounded-lg hover:bg-gray-700 transition-colors text-xs md:text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Like
            </motion.button>
            <motion.button
              className="text-gray-300 hover:text-white py-1.5 md:py-2 px-2 md:px-4 rounded-lg hover:bg-gray-700 transition-colors text-xs md:text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Comment
            </motion.button>
            <motion.button
              className="text-gray-300 hover:text-white py-1.5 md:py-2 px-2 md:px-4 rounded-lg hover:bg-gray-700 transition-colors text-xs md:text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Share
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Footer Note */}
      <motion.div
        className="mt-3 md:mt-6 pt-3 md:pt-4 border-t border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-xs text-center text-gray-400">
          <span className="text-[#EFA82F]">Meta Ads reach your ideal customers</span> where they spend their time
        </p>
      </motion.div>
    </div>
  );
}