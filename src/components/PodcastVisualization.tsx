import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Mic, Scissors, Sliders, Sparkles, Radio } from 'lucide-react';

export function PodcastVisualization() {
  const [stage, setStage] = useState(0);
  
  // Cycle through stages: 0=Recording, 1=Editing, 2=Mixing, 3=Mastering, 4=Publishing
  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 5);
    }, 3500);
    
    return () => clearInterval(timer);
  }, []);

  const stages = [
    { name: 'Recording', icon: Mic, color: '#EF4444' },
    { name: 'Editing', icon: Scissors, color: '#F59E0B' },
    { name: 'Mixing', icon: Sliders, color: '#EFA82F' },
    { name: 'Mastering', icon: Sparkles, color: '#10B981' },
    { name: 'Publishing', icon: Radio, color: '#8B5CF6' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl md:rounded-2xl shadow-2xl overflow-hidden h-full w-full flex items-center justify-center p-4 md:p-6">
      
      {/* Stage indicator at top */}
      <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {stages.map((s, i) => (
          <motion.div
            key={i}
            className="relative"
            animate={{
              scale: stage === i ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                stage === i ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-900' : ''
              }`}
              style={{
                backgroundColor: stage >= i ? s.color : '#4B5563',
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main visualization area */}
      <div className="w-full max-w-2xl flex flex-col items-center justify-center">
        
        {/* Stage title */}
        <motion.div
          key={`title-${stage}`}
          className="mb-4 sm:mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl sm:text-2xl text-white mb-2">{stages[stage].name}</h3>
          <div className="h-1 w-16 sm:w-24 mx-auto rounded-full" style={{ backgroundColor: stages[stage].color }} />
        </motion.div>

        {/* Stage 0: Recording */}
        {stage === 0 && (
          <motion.div
            className="w-full flex flex-col items-center gap-4 sm:gap-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            {/* Microphone */}
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-2xl">
                <Mic className="text-white" size={36} />
              </div>
            </motion.div>

            {/* Sound waves */}
            <div className="flex items-center gap-0.5 sm:gap-1 h-20 sm:h-24 w-full max-w-md">
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-red-500 to-rose-400 rounded-full"
                  animate={{
                    height: [
                      Math.random() * 40 + 10,
                      Math.random() * 70 + 20,
                      Math.random() * 40 + 10,
                    ],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.02,
                  }}
                />
              ))}
            </div>

            <div className="text-gray-400 text-center px-4">
              <p className="text-xs sm:text-sm">Capturing pristine audio quality</p>
            </div>
          </motion.div>
        )}

        {/* Stage 1: Editing */}
        {stage === 1 && (
          <motion.div
            className="w-full flex flex-col items-center gap-4 sm:gap-6 px-2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-2xl">
              <Scissors className="text-white" size={28} />
            </div>

            {/* Timeline with clips */}
            <div className="w-full max-w-lg bg-gray-950 rounded-xl p-3 sm:p-4 border-2 border-gray-700 space-y-2 sm:space-y-3">
              {/* Timeline ruler */}
              <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mb-2">
                <span>0:00</span>
                <span>15:00</span>
                <span>30:00</span>
                <span>45:00</span>
              </div>

              {/* Track 1 - Main audio */}
              <div className="relative h-12 sm:h-14 bg-gray-900 rounded overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gray-700" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gray-700" />
                
                {/* Clips */}
                <motion.div
                  className="absolute h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded"
                  initial={{ width: '0%', left: '0%' }}
                  animate={{ width: '25%', left: '0%' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                
                <motion.div
                  className="absolute h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded"
                  initial={{ width: '0%', left: '30%' }}
                  animate={{ width: '35%', left: '30%' }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                
                <motion.div
                  className="absolute h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded"
                  initial={{ width: '0%', left: '70%' }}
                  animate={{ width: '28%', left: '70%' }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />

                {/* Cut indicators */}
                <motion.div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
                  style={{ left: '25%' }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: [0, 1.2, 1] }}
                  transition={{ duration: 0.4, delay: 1 }}
                />
                <motion.div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
                  style={{ left: '65%' }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: [0, 1.2, 1] }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                />
              </div>

              {/* Track 2 - Music */}
              <div className="relative h-8 sm:h-10 bg-gray-900 rounded overflow-hidden">
                <motion.div
                  className="absolute h-full bg-gradient-to-r from-amber-600/60 to-orange-600/60 rounded"
                  initial={{ width: '0%', left: '10%' }}
                  animate={{ width: '80%', left: '10%' }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
              </div>

              {/* Track 3 - Sound effects */}
              <div className="relative h-6 sm:h-8 bg-gray-900 rounded overflow-hidden">
                <motion.div
                  className="absolute h-full bg-gradient-to-r from-orange-400/40 to-amber-400/40 rounded"
                  initial={{ width: '0%', left: '5%' }}
                  animate={{ width: '15%', left: '5%' }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                />
                <motion.div
                  className="absolute h-full bg-gradient-to-r from-orange-400/40 to-amber-400/40 rounded"
                  initial={{ width: '0%', left: '45%' }}
                  animate={{ width: '12%', left: '45%' }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                />
              </div>
            </div>

            <div className="text-gray-400 text-center px-4">
              <p className="text-xs sm:text-sm">Removing pauses and perfecting timing</p>
            </div>
          </motion.div>
        )}

        {/* Stage 2: Mixing */}
        {stage === 2 && (
          <motion.div
            className="w-full flex flex-col items-center gap-4 sm:gap-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#EFA82F] to-orange-500 flex items-center justify-center shadow-2xl">
              <Sliders className="text-white" size={28} />
            </div>

            {/* Mixing board */}
            <div className="flex gap-3 sm:gap-6">
              {/* Channel 1 - Voice */}
              <div className="flex flex-col items-center gap-2">
                <div className="text-[10px] sm:text-xs text-gray-400">VOICE</div>
                <div className="relative w-8 sm:w-12 h-32 sm:h-40 bg-gray-900 rounded-full border-2 border-gray-700 overflow-hidden">
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#EFA82F] to-orange-400 rounded-full"
                    initial={{ height: '20%' }}
                    animate={{ height: '75%' }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                  <motion.div
                    className="absolute w-10 sm:w-14 h-5 sm:h-6 bg-white rounded-full shadow-lg -left-1"
                    initial={{ bottom: '20%' }}
                    animate={{ bottom: '70%' }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>

              {/* Channel 2 - Music */}
              <div className="flex flex-col items-center gap-2">
                <div className="text-[10px] sm:text-xs text-gray-400">MUSIC</div>
                <div className="relative w-8 sm:w-12 h-32 sm:h-40 bg-gray-900 rounded-full border-2 border-gray-700 overflow-hidden">
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#EFA82F] to-orange-400 rounded-full"
                    initial={{ height: '30%' }}
                    animate={{ height: '45%' }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                  <motion.div
                    className="absolute w-10 sm:w-14 h-5 sm:h-6 bg-white rounded-full shadow-lg -left-1"
                    initial={{ bottom: '30%' }}
                    animate={{ bottom: '40%' }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </div>
              </div>

              {/* Channel 3 - SFX */}
              <div className="flex flex-col items-center gap-2">
                <div className="text-[10px] sm:text-xs text-gray-400">SFX</div>
                <div className="relative w-8 sm:w-12 h-32 sm:h-40 bg-gray-900 rounded-full border-2 border-gray-700 overflow-hidden">
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#EFA82F] to-orange-400 rounded-full"
                    initial={{ height: '15%' }}
                    animate={{ height: '35%' }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                  <motion.div
                    className="absolute w-10 sm:w-14 h-5 sm:h-6 bg-white rounded-full shadow-lg -left-1"
                    initial={{ bottom: '15%' }}
                    animate={{ bottom: '30%' }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </div>
              </div>

              {/* Channel 4 - Master */}
              <div className="flex flex-col items-center gap-2">
                <div className="text-[10px] sm:text-xs text-[#EFA82F]">MASTER</div>
                <div className="relative w-10 sm:w-16 h-32 sm:h-40 bg-gray-900 rounded-full border-2 border-[#EFA82F] overflow-hidden shadow-lg shadow-[#EFA82F]/20">
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#EFA82F] via-orange-400 to-yellow-400 rounded-full"
                    initial={{ height: '50%' }}
                    animate={{ height: '65%' }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                  <motion.div
                    className="absolute w-12 sm:w-[4.5rem] h-6 sm:h-7 bg-white rounded-full shadow-lg -left-1 sm:-left-2 border-2 border-[#EFA82F]"
                    initial={{ bottom: '45%' }}
                    animate={{ bottom: '58%' }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </div>
              </div>
            </div>

            <div className="text-gray-400 text-center px-4">
              <p className="text-xs sm:text-sm">Balancing levels and enhancing clarity</p>
            </div>
          </motion.div>
        )}

        {/* Stage 3: Mastering */}
        {stage === 3 && (
          <motion.div
            className="w-full flex flex-col items-center gap-3 sm:gap-4 px-2"
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 10 }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon */}
            <motion.div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(16, 185, 129, 0.5)',
                  '0 0 40px rgba(16, 185, 129, 0.8)',
                  '0 0 20px rgba(16, 185, 129, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="text-white" size={28} />
            </motion.div>

            {/* Mastering interface */}
            <div className="w-full max-w-lg bg-gray-950 rounded-xl p-3 sm:p-4 border-2 border-gray-700 space-y-3 sm:space-y-4">
              
              {/* Single transforming waveform */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] sm:text-xs">
                  <motion.span 
                    className="text-gray-500"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    RAW AUDIO
                  </motion.span>
                  <motion.span 
                    className="text-green-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    MASTERED
                  </motion.span>
                </div>
                <div className="flex items-center gap-0.5 h-16 sm:h-20 bg-gray-900 rounded-lg p-2">
                  {Array.from({ length: 30 }).map((_, i) => {
                    const rawHeight = 15 + Math.random() * 30;
                    const position = i / 30;
                    const sine = Math.sin(position * Math.PI * 2.5);
                    const masteredHeight = 30 + Math.abs(sine) * 25;
                    
                    return (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-full"
                        style={{
                          background: 'linear-gradient(to top, #6B7280, #9CA3AF)',
                        }}
                        initial={{ height: rawHeight }}
                        animate={{ 
                          height: masteredHeight,
                          background: 'linear-gradient(to top, #10B981, #34D399)'
                        }}
                        transition={{ duration: 1.2, delay: 0.5 + i * 0.02 }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Processing indicators */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'EQ' },
                  { label: 'Compression' },
                  { label: 'Limiting' },
                ].map((effect, i) => (
                  <motion.div
                    key={effect.label}
                    className="bg-gray-900 rounded-lg p-2 text-center border border-green-500/50"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5 + i * 0.15 }}
                  >
                    <div className="text-[10px] sm:text-xs text-green-400">{effect.label}</div>
                    <motion.div
                      className="w-full h-1 bg-gray-800 rounded-full mt-1.5 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 + i * 0.15 }}
                    >
                      <motion.div
                        className="h-full bg-green-500"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.6, delay: 1.6 + i * 0.15 }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-gray-400 text-center px-4">
              <p className="text-xs sm:text-sm">Professional mastering applied</p>
            </div>
          </motion.div>
        )}

        {/* Stage 4: Publishing */}
        {stage === 4 && (
          <motion.div
            className="w-full flex flex-col items-center gap-2 sm:gap-3 px-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-2xl">
              <Radio className="text-white" size={24} />
            </div>

            {/* Publishing interface */}
            <div className="w-full max-w-lg bg-gray-950 rounded-xl p-2.5 sm:p-3 border-2 border-gray-700 space-y-2">
              
              {/* Upload progress */}
              <motion.div
                className="bg-gray-900 rounded-lg p-2 sm:p-2.5 space-y-1.5"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white text-xs sm:text-sm">Episode #127</div>
                    <div className="text-gray-500 text-[10px] sm:text-xs">45:32 • 128 MB</div>
                  </div>
                  <motion.div
                    className="text-purple-400 text-xs sm:text-sm font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    100%
                  </motion.div>
                </div>
                
                <div className="h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                  />
                </div>
              </motion.div>

              {/* Platform list */}
              <div className="space-y-1.5 sm:space-y-2">
                {[
                  { name: 'Spotify', color: '#1DB954', delay: 0.8 },
                  { name: 'Apple Podcasts', color: '#FA243C', delay: 1.0 },
                  { name: 'YouTube Music', color: '#FF0000', delay: 1.2 },
                  { name: 'Google Podcasts', color: '#4285F4', delay: 1.4 },
                ].map((platform) => (
                  <motion.div
                    key={platform.name}
                    className="bg-gray-900 rounded-lg p-2 flex items-center justify-between border-2 border-gray-800"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ 
                      x: 0, 
                      opacity: 1,
                      borderColor: '#10B981'
                    }}
                    transition={{ 
                      x: { duration: 0.4, delay: platform.delay },
                      opacity: { duration: 0.4, delay: platform.delay },
                      borderColor: { duration: 0.3, delay: platform.delay + 0.3 }
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: platform.color }}
                      />
                      <div className="text-white text-xs sm:text-sm">{platform.name}</div>
                    </div>
                    
                    {/* Checkmark */}
                    <motion.div
                      className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: platform.delay + 0.4, type: 'spring', stiffness: 500 }}
                    >
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-gray-400 text-center px-4">
              <p className="text-xs">Live on all major platforms</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Progress bar at bottom */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-full max-w-xs sm:max-w-md px-4">
        <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(to right, ${stages[stage].color}, ${stages[(stage + 1) % 5].color})`,
            }}
            animate={{
              width: '100%',
            }}
            transition={{
              duration: 3.5,
              ease: 'linear',
            }}
            key={stage}
          />
        </div>
      </div>
    </div>
  );
}