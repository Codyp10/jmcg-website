import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useIsMobile } from '../hooks/useMediaQuery';

const services = [
  { text: 'SEO', gradient: 'from-blue-500 via-cyan-500 to-teal-500' },
  { text: 'Web Development', gradient: 'from-purple-500 via-pink-500 to-rose-500' },
  { text: 'Graphic Design', gradient: 'from-orange-500 via-red-500 to-pink-500' },
  { text: 'Podcast Production', gradient: 'from-green-500 via-emerald-500 to-teal-500' },
  { text: 'Google Ads', gradient: 'from-indigo-500 via-purple-500 to-pink-500' },
  { text: 'GEO', gradient: 'from-teal-500 via-cyan-500 to-blue-500' },
  { text: 'Meta Ads', gradient: 'from-[#EFA82F] via-amber-500 to-yellow-500' },
  { text: 'Consulting', gradient: 'from-cyan-500 via-blue-500 to-indigo-500' },
  { text: 'True Partnership', gradient: 'from-[#EFA82F] via-orange-500 to-red-500' },
];

export function MorphingTextShowcase() {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const currentService = services[currentIndex];

  useEffect(() => {
    // Reset everything when service changes
    setDisplayedText('');
    setShowCursor(true);

    let charIndex = 0;
    const fullText = currentService.text;

    // Type out the text
    const typingInterval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false);
        // Wait before moving to next service
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % services.length);
        }, 2000);
      }
    }, 80);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, currentService.text]);

  return (
    <div className="relative w-full h-auto md:h-[550px] overflow-visible flex items-start md:items-center justify-center pt-2 md:pt-0 pb-3 md:pb-0">
      {/* Main Typewriter Text */}
      <div className="relative z-10 text-center px-4 w-full max-w-5xl">
        <motion.div
          className="mb-3 md:mb-12 text-sm md:text-base tracking-widest text-gray-500 uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We Specialize In
        </motion.div>

        <div className="relative h-16 md:h-48 flex items-center justify-center">
          <motion.div
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r ${currentService.gradient} bg-clip-text text-transparent text-center flex flex-col items-center justify-center leading-tight gap-3 md:gap-4`}
            animate={isMobile ? {} : {
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            {/* Line 1 */}
            <div className="inline-flex items-center justify-center">
              <span>{displayedText}</span>
              {showCursor && (
                <motion.span
                  className="inline-block w-1 h-10 md:h-16 lg:h-20 bg-gradient-to-r from-[#EFA82F] to-[#d89527] ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Tagline */}
        <motion.div
          className="mt-3 md:mt-12 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <p className="text-sm md:text-base text-gray-600">
            Powered by{' '}
            <span className="bg-gradient-to-r from-[#EFA82F] to-[#d89527] bg-clip-text text-transparent">
              data-driven strategies
            </span>{' '}
            {' & holistic analysis'}
          </p>
        </motion.div>
      </div>
    </div>
  );
}