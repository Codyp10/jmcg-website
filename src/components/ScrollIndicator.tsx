import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      {/* Text Label */}
      <motion.p
        className="text-sm text-gray-500 tracking-wider uppercase"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Explore More
      </motion.p>

      {/* Stacked Animated Chevrons */}
      <div className="relative">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 -translate-x-1/2"
            animate={{
              y: [0, 8, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2,
              ease: 'easeInOut',
            }}
            style={{
              top: `${index * 8}px`,
            }}
          >
            <ChevronDown
              size={24}
              className="text-[#EFA82F]"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(239, 168, 47, 0.6))',
              }}
            />
          </motion.div>
        ))}
        {/* Spacer to maintain layout */}
        <div className="h-12 w-6" />
      </div>
    </motion.div>
  );
}

// Alternative: Floating Orb Version (uncomment to use)
export function ScrollIndicatorOrb() {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.p
        className="text-sm text-gray-500 tracking-wider uppercase"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Discover More
      </motion.p>

      <div className="relative">
        {/* Glowing Orb */}
        <motion.div
          className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EFA82F] to-[#d89527] relative"
          animate={{
            y: [0, 12, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            boxShadow: '0 0 20px rgba(239, 168, 47, 0.5)',
          }}
        >
          {/* Inner Arrow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ChevronDown size={20} className="text-white" />
          </div>

          {/* Particle Effects */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#EFA82F] rounded-full"
              animate={{
                y: [0, 40],
                opacity: [1, 0],
                scale: [1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${20 + i * 20}%`,
                top: '50%',
              }}
            />
          ))}
        </motion.div>

        {/* Pulsing Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#EFA82F]"
          animate={{
            scale: [1, 1.5, 1.5],
            opacity: [0.5, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  );
}

// Alternative: Pulse Ring Version (uncomment to use)
export function ScrollIndicatorPulse() {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="relative">
        {/* Center Icon */}
        <motion.div
          className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-[#EFA82F] to-[#d89527] flex items-center justify-center"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            boxShadow: '0 4px 20px rgba(239, 168, 47, 0.4)',
          }}
        >
          <ChevronDown size={24} className="text-white" />
        </motion.div>

        {/* Expanding Rings */}
        {[0, 1].map((index) => (
          <motion.div
            key={index}
            className="absolute inset-0 rounded-full border-2 border-[#EFA82F]"
            animate={{
              scale: [1, 2],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 1,
            }}
          />
        ))}
      </div>

      <motion.p
        className="text-sm text-gray-500 tracking-wide"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll Down
      </motion.p>
    </motion.div>
  );
}
