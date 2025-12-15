import { motion } from 'motion/react';
import { TrendingUp, Target, Users, Cog, DollarSign, BarChart, Megaphone, ShoppingCart } from 'lucide-react';
import { useIsMobile } from '../hooks/useMediaQuery';

export function BusinessEcosystemDiagram() {
  const isMobile = useIsMobile();
  
  const businessAreas = [
    { icon: Megaphone, label: 'Marketing', color: 'from-[#EFA82F] to-[#d89527]' },
    { icon: DollarSign, label: 'Sales', color: 'from-green-500 to-emerald-500' },
    { icon: Cog, label: 'Operations', color: 'from-blue-500 to-cyan-500' },
    { icon: Target, label: 'Brand', color: 'from-purple-500 to-indigo-500' },
    { icon: BarChart, label: 'Analytics', color: 'from-pink-500 to-rose-500' },
    { icon: ShoppingCart, label: 'Customer', color: 'from-amber-500 to-yellow-500' },
    { icon: Users, label: 'Team', color: 'from-teal-500 to-cyan-500' },
    { icon: TrendingUp, label: 'Growth', color: 'from-red-500 to-orange-500' },
  ];

  const radius = isMobile ? 140 : 200;

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      {/* Pulsing Rings - Simplified on mobile */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[1, 2, 3].map((ring, idx) => (
          <motion.div
            key={ring}
            className="absolute rounded-full border-2 border-[#EFA82F]/20"
            style={{
              width: `${180 + idx * 100}px`,
              height: `${180 + idx * 100}px`,
            }}
            animate={isMobile ? {} : {
              scale: [1, 1.02, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3 + idx,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Center Hub - Your Business */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative z-20"
          initial={{ scale: 0, rotate: isMobile ? 0 : -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: isMobile ? 0.2 : 0.4 }}
        >
          <motion.div
            className="w-40 h-40 bg-gradient-to-br from-[#EFA82F] to-[#d89527] rounded-full flex items-center justify-center shadow-2xl"
            animate={isMobile ? {} : {
              boxShadow: [
                '0 20px 60px rgba(239, 168, 47, 0.3)',
                '0 20px 80px rgba(239, 168, 47, 0.5)',
                '0 20px 60px rgba(239, 168, 47, 0.3)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <div className="text-center">
              <motion.div
                className="text-xl text-white"
                animate={isMobile ? {} : { scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Your
              </motion.div>
              <div className="text-2xl text-white">Business</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Rotating Container for Business Area Cards - Static on mobile */}
        <motion.div
          className="absolute inset-0"
          animate={isMobile ? {} : { rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {businessAreas.map((area, idx) => {
            const angle = (idx * 360) / businessAreas.length - 90;
            const angleRad = (angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            return (
              <motion.div
                key={idx}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                initial={{
                  x: '-50%',
                  y: '-50%',
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  x: `calc(-50% + ${x}px)`,
                  y: `calc(-50% + ${y}px)`,
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + idx * 0.1,
                  type: 'spring',
                  bounce: isMobile ? 0.2 : 0.5,
                }}
              >
                {/* Counter-rotate the card content so text stays upright - No rotation on mobile */}
                <motion.div
                  className="group cursor-pointer"
                  animate={isMobile ? {} : { rotate: -360 }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  whileHover={isMobile ? {} : { scale: 1.15, zIndex: 50 }}
                >
                  {/* Card */}
                  <div className="relative bg-white rounded-xl shadow-lg p-3 w-24 border border-gray-100 group-hover:border-[#EFA82F] transition-all">
                    {/* Icon */}
                    <motion.div
                      className={`w-10 h-10 bg-gradient-to-br ${area.color} rounded-lg flex items-center justify-center mx-auto mb-2`}
                      whileHover={isMobile ? {} : { rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <area.icon className="text-white" size={20} />
                    </motion.div>

                    {/* Label */}
                    <div className="text-center text-xs text-gray-900">{area.label}</div>

                    {/* Glow Effect on Hover - Desktop only */}
                    {!isMobile && (
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#EFA82F]/0 to-[#EFA82F]/0 group-hover:from-[#EFA82F]/10 group-hover:to-[#d89527]/10 transition-all -z-10"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}