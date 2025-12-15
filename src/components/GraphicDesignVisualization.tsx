import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function GraphicDesignVisualization() {
  const [phase, setPhase] = useState<'sketch' | 'color' | 'final'>('sketch');
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      name: 'Modern Logo',
      type: 'Brand Identity',
      primary: '#ec4899',
      secondary: '#8b5cf6',
      accent: '#f472b6',
    },
    {
      name: 'Social Media',
      type: 'Instagram Design',
      primary: '#3b82f6',
      secondary: '#06b6d4',
      accent: '#60a5fa',
    },
    {
      name: 'Marketing',
      type: 'Print & Digital',
      primary: '#10b981',
      secondary: '#14b8a6',
      accent: '#34d399',
    },
    {
      name: 'Product Package',
      type: 'Packaging Design',
      primary: '#f59e0b',
      secondary: '#ef4444',
      accent: '#fbbf24',
    }
  ];

  const current = projects[currentProject];

  useEffect(() => {
    const phaseTimer = setTimeout(() => {
      if (phase === 'sketch') {
        setPhase('color');
      } else if (phase === 'color') {
        setPhase('final');
      } else {
        setPhase('sketch');
        setTimeout(() => {
          setCurrentProject((prev) => (prev + 1) % projects.length);
        }, 400);
      }
    }, phase === 'sketch' ? 3000 : phase === 'color' ? 3000 : 3500);

    return () => clearTimeout(phaseTimer);
  }, [phase, currentProject]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl md:rounded-2xl shadow-2xl h-full overflow-hidden relative">
      {/* Header */}
      <div className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${phase}-${currentProject}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-white text-sm md:text-base"
              >
                {phase === 'sketch' && 'Initial Concept'}
                {phase === 'color' && 'Adding Color'}
                {phase === 'final' && current.name}
              </motion.div>
            </AnimatePresence>
            <div className="text-xs text-gray-400">{current.type}</div>
          </div>
        </div>

        {/* Phase Progress */}
        <div className="flex items-center gap-1.5">
          {['sketch', 'color', 'final'].map((p) => (
            <motion.div
              key={p}
              className="rounded-full"
              animate={{
                width: phase === p ? 20 : 6,
                height: 6,
                background: phase === p 
                  ? (p === 'final' ? current.primary : '#EFA82F')
                  : '#374151'
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* Main Canvas */}
      <div className="h-[calc(100%-60px)] relative">
        <AnimatePresence mode="wait">
          {/* SKETCH PHASE - Simple wireframe */}
          {phase === 'sketch' && (
            <motion.div
              key="sketch"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
            >
              <div className="w-full max-w-[280px] md:max-w-md aspect-square bg-gray-900/30 rounded-xl border-2 border-dashed border-gray-700 p-4 md:p-10 relative">
                {/* Grid background */}
                <div 
                  className="absolute inset-0 opacity-5 rounded-xl"
                  style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }}
                />

                {/* Simple sketch elements */}
                <svg className="w-full h-full relative z-10" viewBox="0 0 200 200">
                  {/* Main shape - circle for logo */}
                  <motion.circle
                    cx="100"
                    cy="70"
                    r="40"
                    fill="none"
                    stroke="#9ca3af"
                    strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                  />
                  
                  {/* Inner design element */}
                  <motion.path
                    d="M 100 40 L 100 100 M 75 70 L 125 70"
                    stroke="#9ca3af"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                  
                  {/* Text placeholder - brand name */}
                  <motion.line
                    x1="50"
                    y1="140"
                    x2="150"
                    y2="140"
                    stroke="#9ca3af"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                  />
                  
                  {/* Tagline */}
                  <motion.line
                    x1="60"
                    y1="165"
                    x2="140"
                    y2="165"
                    stroke="#6b7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                  />
                </svg>

                {/* Status label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-4 left-4 text-xs text-gray-400"
                >
                  <motion.span
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Sketching concept...
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* COLOR PHASE - Apply colors */}
          {phase === 'color' && (
            <motion.div
              key="color"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8"
            >
              {/* Color palette at top */}
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="flex gap-2 md:gap-3 mb-4 md:mb-8 bg-gray-900/80 backdrop-blur-sm px-3 md:px-6 py-2 md:py-3 rounded-full border border-gray-700"
              >
                {[current.primary, current.secondary, current.accent].map((color, i) => (
                  <motion.div
                    key={color}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.4 + i * 0.15, 
                      type: 'spring',
                      stiffness: 200 
                    }}
                    className="relative"
                  >
                    <div 
                      className="w-8 h-8 md:w-12 md:h-12 rounded-lg shadow-lg border-2 border-white/20"
                      style={{ background: color }}
                    />
                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      style={{ background: color }}
                      animate={{ 
                        scale: [1, 1.5, 1.5],
                        opacity: [0.5, 0, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: i * 0.4
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Design taking shape */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, type: 'spring' }}
                className="w-full max-w-[280px] md:max-w-md aspect-square rounded-xl overflow-hidden border-2 shadow-2xl relative"
                style={{ borderColor: `${current.primary}40` }}
              >
                {/* Gradient background */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ duration: 0.8 }}
                  style={{
                    background: `linear-gradient(135deg, ${current.primary}, ${current.secondary})`
                  }}
                />

                {/* Main design */}
                <div className="relative h-full flex flex-col items-center justify-center p-6 md:p-12 bg-gray-900/70 backdrop-blur-sm">
                  {/* Logo shape with color */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1, type: 'spring', stiffness: 120 }}
                    className="w-20 h-20 md:w-32 md:h-32 rounded-full shadow-2xl flex items-center justify-center mb-4 md:mb-8 relative"
                    style={{
                      background: `linear-gradient(135deg, ${current.primary}, ${current.secondary})`
                    }}
                  >
                    {/* Inner cross design */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.3, type: 'spring' }}
                      className="w-10 h-10 md:w-16 md:h-16 relative"
                    >
                      <div className="absolute top-1/2 left-0 right-0 h-1 bg-white rounded-full -translate-y-1/2" />
                      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white rounded-full -translate-x-1/2" />
                    </motion.div>

                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ 
                        background: `linear-gradient(135deg, ${current.primary}, ${current.secondary})`
                      }}
                      animate={{ 
                        scale: [1, 1.3, 1.3],
                        opacity: [0.4, 0, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Brand text with color */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '70%', opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    className="h-3 md:h-5 rounded-full mb-2 md:mb-3"
                    style={{ background: current.primary }}
                  />
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '50%', opacity: 0.7 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                    className="h-2 md:h-3 rounded-full"
                    style={{ background: current.accent }}
                  />
                </div>
              </motion.div>

              {/* "Applying colors..." label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-3 md:mt-4 text-xs md:text-sm text-gray-400"
              >
                <motion.span
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Applying brand colors...
                </motion.span>
              </motion.div>
            </motion.div>
          )}

          {/* FINAL PHASE - Polished result */}
          {phase === 'final' && (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center p-4 md:p-6"
            >
              <motion.div
                initial={{ rotateY: 90 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
                className="w-full max-w-[280px] md:max-w-md aspect-square rounded-2xl shadow-2xl overflow-hidden relative"
                style={{
                  background: `linear-gradient(135deg, ${current.primary}, ${current.secondary})`
                }}
              >
                {/* Animated background orbs */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 rounded-full blur-3xl opacity-30"
                  style={{ background: current.accent }}
                  animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Main content */}
                <div className="relative h-full flex flex-col items-center justify-center p-4 md:p-10">
                  {/* Final design showcase */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-10 shadow-2xl border border-white/30 w-full"
                  >
                    {/* Logo */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7, type: 'spring', stiffness: 120 }}
                      className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-6 rounded-full shadow-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${current.primary}, ${current.secondary})`
                      }}
                    >
                      <div className="w-8 h-8 md:w-12 md:h-12 relative">
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-white rounded-full -translate-y-1/2" />
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white rounded-full -translate-x-1/2" />
                      </div>
                    </motion.div>

                    {/* Text elements */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="space-y-2 md:space-y-3 text-center"
                    >
                      <div 
                        className="h-3 md:h-6 rounded-full mx-auto shadow-sm"
                        style={{ 
                          background: current.primary,
                          width: '70%'
                        }}
                      />
                      <div 
                        className="h-2 md:h-4 rounded-full mx-auto"
                        style={{ 
                          background: `${current.accent}80`,
                          width: '50%'
                        }}
                      />
                    </motion.div>

                    {/* Accent elements */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1 }}
                      className="mt-4 md:mt-8 flex gap-1.5 md:gap-2 justify-center"
                    >
                      {[current.primary, current.secondary, current.accent].map((color, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1.2 + i * 0.1, type: 'spring' }}
                          className="w-6 h-6 md:w-10 md:h-10 rounded-lg shadow-md"
                          style={{ background: color }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* "Complete!" label */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="mt-3 md:mt-6 text-white text-xs md:text-base px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                  >
                    Design Complete
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}