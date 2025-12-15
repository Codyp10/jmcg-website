import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Code, Globe, Smartphone, Zap, CheckCircle } from 'lucide-react';

export function WebDevVisualization() {
  const [phase, setPhase] = useState<'code' | 'building' | 'live'>('code');
  const [currentSite, setCurrentSite] = useState(0);

  const websites = [
    {
      name: 'E-Commerce Platform',
      type: 'Online Store',
      primaryColor: '#10b981',
      secondaryColor: '#059669',
      accentColor: '#34d399',
      code: [
        '// Product Grid Component',
        'const ProductGrid = () => {',
        '  return (',
        '    <div className="grid">',
        '      {products.map(item =>',
        '        <ProductCard',
        '          key={item.id}',
        '          product={item}',
        '        />',
        '      )}',
        '    </div>',
        '  )',
        '}',
      ],
      features: ['Shopping Cart', 'Secure Checkout', 'Product Search']
    },
    {
      name: 'SaaS Dashboard',
      type: 'Web Application',
      primaryColor: '#3b82f6',
      secondaryColor: '#1e40af',
      accentColor: '#60a5fa',
      code: [
        '// Analytics Dashboard',
        'const Dashboard = () => {',
        '  const { data } = useQuery()',
        '  return (',
        '    <Layout>',
        '      <MetricsGrid',
        '        revenue={data.revenue}',
        '        users={data.users}',
        '      />',
        '      <Chart data={data} />',
        '    </Layout>',
        '  )',
        '}',
      ],
      features: ['Real-time Data', 'Custom Reports', 'Team Access']
    },
    {
      name: 'Portfolio Site',
      type: 'Personal Brand',
      primaryColor: '#8b5cf6',
      secondaryColor: '#6d28d9',
      accentColor: '#a78bfa',
      code: [
        '// Portfolio Showcase',
        'const Portfolio = () => {',
        '  return (',
        '    <section>',
        '      <Hero',
        '        title="Creative Work"',
        '        subtitle="Designer"',
        '      />',
        '      <ProjectGallery',
        '        projects={showcase}',
        '      />',
        '    </section>',
        '  )',
        '}',
      ],
      features: ['Responsive Design', 'Image Gallery', 'Contact Form']
    }
  ];

  const current = websites[currentSite];

  useEffect(() => {
    const phaseTimer = setTimeout(() => {
      if (phase === 'code') {
        setPhase('building');
      } else if (phase === 'building') {
        setPhase('live');
      } else {
        setPhase('code');
        setTimeout(() => {
          setCurrentSite((prev) => (prev + 1) % websites.length);
        }, 500);
      }
    }, phase === 'code' ? 3000 : phase === 'building' ? 2000 : 3500);

    return () => clearTimeout(phaseTimer);
  }, [phase, currentSite]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl md:rounded-2xl shadow-2xl h-full overflow-hidden relative">
      {/* Header */}
      <div className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <motion.div 
              key={`${phase}-${currentSite}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-sm md:text-base"
            >
              {phase === 'code' && 'Writing Code...'}
              {phase === 'building' && 'Building Website...'}
              {phase === 'live' && current.name}
            </motion.div>
            <div className="text-xs text-gray-400">{current.type}</div>
          </div>
        </div>
        
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="h-[calc(100%-52px)] relative">
        <AnimatePresence mode="wait">
          {phase === 'code' && (
            <motion.div
              key="code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-4 md:p-6 font-mono text-sm overflow-hidden"
            >
              {/* Code Editor */}
              <div className="space-y-1.5">
                {current.code.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-gray-600 text-xs select-none min-w-[20px] text-right">
                      {index + 1}
                    </span>
                    <span className="text-gray-300">
                      <span className="text-purple-400">{line.includes('const') ? 'const ' : ''}</span>
                      <span className="text-blue-400">{line.includes('return') ? 'return ' : ''}</span>
                      <span className="text-green-400">{line.includes('//') ? line : ''}</span>
                      {!line.includes('//') && (
                        <span className="text-gray-300">{line.replace('const ', '').replace('return ', '')}</span>
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Cursor */}
              <motion.div
                className="inline-block w-2 h-5 bg-[#EFA82F] ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.div>
          )}

          {phase === 'building' && (
            <motion.div
              key="building"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6"
            >
              {/* Building Animation */}
              <div className="relative">
                <motion.div
                  className="w-24 h-24 md:w-32 md:h-32 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${current.primaryColor}, ${current.secondaryColor})`
                  }}
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="text-white" size={40} />
                  </div>
                </motion.div>

                {/* Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{ 
                      background: i % 2 === 0 ? current.primaryColor : current.accentColor,
                      top: '50%',
                      left: '50%'
                    }}
                    animate={{
                      x: Math.cos((i * Math.PI * 2) / 8) * 60,
                      y: Math.sin((i * Math.PI * 2) / 8) * 60,
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>

              <motion.p
                className="text-white mt-8 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Compiling & Deploying...
              </motion.p>

              {/* Progress indicators */}
              <div className="mt-6 space-y-2 w-full max-w-xs">
                {['Optimizing assets', 'Building components', 'Deploying to web'].map((task, i) => (
                  <motion.div
                    key={task}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.3 }}
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    <CheckCircle size={16} className="text-green-400" />
                    {task}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {phase === 'live' && (
            <motion.div
              key="live"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {/* Live Website Preview */}
              <div className="h-full flex flex-col">
                {/* Website Header */}
                <motion.div
                  className="px-4 md:px-6 py-4 md:py-5 flex items-center justify-between border-b"
                  style={{
                    background: `linear-gradient(135deg, ${current.primaryColor}, ${current.secondaryColor})`,
                    borderColor: `${current.secondaryColor}40`
                  }}
                  initial={{ y: -50 }}
                  animate={{ y: 0 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur rounded-lg" />
                    <span className="text-white text-sm md:text-base hidden sm:block">Logo</span>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4">
                    {['Home', 'About', 'Contact'].map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="text-white/90 text-xs md:text-sm hidden md:block"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Hero Section */}
                <motion.div
                  className="flex-1 px-4 md:px-8 py-6 md:py-10 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(180deg, ${current.primaryColor}15 0%, transparent 100%)`
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="relative z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-3 md:space-y-4"
                    >
                      <div 
                        className="h-8 md:h-12 rounded-lg w-3/4 max-w-md"
                        style={{ background: `linear-gradient(90deg, ${current.primaryColor}, ${current.accentColor})` }}
                      />
                      <div className="space-y-2">
                        <div className="h-3 md:h-4 bg-gray-700 rounded w-4/5 max-w-lg" />
                        <div className="h-3 md:h-4 bg-gray-700 rounded w-2/3 max-w-md" />
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="inline-block px-4 md:px-6 py-2 md:py-3 rounded-lg text-white text-xs md:text-sm"
                        style={{ background: current.primaryColor }}
                      >
                        Get Started
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute top-10 right-10 w-32 h-32 rounded-full blur-3xl opacity-30"
                    style={{ background: current.accentColor }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>

                {/* Features Grid */}
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <div className="grid grid-cols-3 gap-2 md:gap-3">
                    {current.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                        className="bg-gray-800 rounded-lg p-2 md:p-3 border border-gray-700"
                      >
                        <div 
                          className="w-full aspect-square rounded mb-2"
                          style={{ background: `linear-gradient(135deg, ${current.primaryColor}, ${current.accentColor})` }}
                        />
                        <div className="h-2 bg-gray-700 rounded w-full" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute top-4 right-4 flex items-center gap-2 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs"
              >
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                LIVE
              </motion.div>

              {/* Device Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-4 left-4 flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700"
              >
                <Globe size={14} className="text-green-400" />
                <Smartphone size={14} className="text-blue-400" />
                <span className="text-xs text-gray-400">Responsive</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}