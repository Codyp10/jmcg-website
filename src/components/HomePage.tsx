import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ArrowRight, Play, Sparkles, TrendingUp, Target, Users, CheckCircle, Zap, DollarSign, MousePointerClick, ShoppingCart } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { LineChart, Line, AreaChart, Area, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { MorphingTextShowcase } from './MorphingTextShowcase';
import { useIsMobile } from '../hooks/useMediaQuery';
import { ScrollIndicator } from './ScrollIndicator';

type Page = 'home' | 'about' | 'services' | 'contact';

interface ServicesButtonProps {
  onNavigate: (page: Page, serviceId?: string) => void;
}

export function HomePage({ onNavigate }: ServicesButtonProps) {
  const isMobile = useIsMobile();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  // Disable parallax on mobile for performance
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', isMobile ? '0%' : '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 1 : 0]);

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-gray-50 via-white to-orange-50 pt-8 md:pt-0">
        {/* Animated Background Elements - Disabled on mobile for performance */}
        {!isMobile && (
          <motion.div 
            className="absolute inset-0 opacity-30 overflow-hidden"
            style={{ y: heroY }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-64 h-64 bg-gradient-to-br from-[#EFA82F]/20 to-transparent rounded-full blur-3xl"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${10 + i * 20}%`,
                }}
              />
            ))}
          </motion.div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              className="overflow-visible"
              initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: isMobile ? 0.5 : 0.8 }}
              style={{ opacity: isMobile ? 1 : heroOpacity }}
            >
              {/* Removed the badge element */}

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6 py-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                We're More Than
                <span className="block bg-gradient-to-r from-[#EFA82F] to-[#d89527] bg-clip-text text-transparent py-1">
                  Marketing Partners
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                We don't just look at data — we analyze every aspect of your business. Because more leads won't help if your sales process needs work. That's where our consulting expertise comes in.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  className="px-8 py-4 bg-[#EFA82F] text-white rounded-xl hover:bg-[#d89527] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#EFA82F]/30"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(239, 168, 47, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('contact')}
                >
                  Get Started <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  className="px-8 py-4 bg-white text-gray-700 rounded-xl border-2 border-gray-200 hover:border-[#EFA82F] transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://www.youtube.com/@JohnsonMarketingandConsulting', '_blank')}
                >
                  <Play size={20} className="text-[#EFA82F]" /> Watch Our Approach
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator - Mobile Only (positioned between buttons and morphing text) */}
            <div className="lg:hidden mt-6 mb-0 flex justify-center">
              <ScrollIndicator />
            </div>

            {/* Hero Animation - Business Ecosystem Diagram */}
            <motion.div
              className="relative lg:-mt-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <MorphingTextShowcase />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Desktop Only */}
        <div className="hidden lg:block absolute bottom-10 left-1/2 -translate-x-1/2">
          <ScrollIndicator />
        </div>
      </section>

      {/* Client Work Showcase */}
      <ClientWorkSection />

      {/* Services Overview */}
      <ServicesSection onNavigate={onNavigate} />

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

function AnimatedResultsDashboard() {
  const revenueData = [
    { month: 'J', value: 20 },
    { month: 'F', value: 35 },
    { month: 'M', value: 45 },
    { month: 'A', value: 60 },
    { month: 'M', value: 75 },
    { month: 'J', value: 100 },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
      {/* Dashboard Header */}
      <motion.div
        className="flex items-center justify-between mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div>
          <h3 className="text-xl text-gray-900 mb-1">Client Results</h3>
          <p className="text-sm text-gray-500">Real-time performance metrics</p>
        </div>
        <motion.div
          className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ● Live
        </motion.div>
      </motion.div>

      {/* Metric Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Revenue', value: '$127K', change: '+285%', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
          { label: 'Traffic', value: '45.2K', change: '+180%', icon: MousePointerClick, color: 'from-blue-500 to-cyan-500' },
          { label: 'Conversions', value: '3.8K', change: '+210%', icon: ShoppingCart, color: 'from-[#EFA82F] to-[#d89527]' },
        ].map((metric, idx) => (
          <motion.div
            key={idx}
            className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + idx * 0.1 }}
            whileHover={{ scale: 1.05, borderColor: '#EFA82F' }}
          >
            <motion.div
              className={`w-10 h-10 bg-gradient-to-br ${metric.color} rounded-lg flex items-center justify-center mb-3`}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
            >
              <metric.icon className="text-white" size={20} />
            </motion.div>
            <div className="text-sm text-gray-500 mb-1">{metric.label}</div>
            <motion.div
              className="text-2xl text-gray-900 mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + idx * 0.1 }}
            >
              {metric.value}
            </motion.div>
            <motion.div
              className="text-sm text-green-600"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
            >
              ↗ {metric.change}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Revenue Growth Chart */}
      <motion.div
        className="bg-gradient-to-br from-[#EFA82F]/5 to-transparent rounded-xl p-4 border border-[#EFA82F]/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-700">Revenue Growth</div>
          <motion.div
            className="flex items-center gap-2 text-sm text-green-600"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <TrendingUp size={16} />
            <span>+400% in 6 months</span>
          </motion.div>
        </div>
        <ResponsiveContainer width="100%" height={120}>
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EFA82F" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#EFA82F" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#EFA82F"
              strokeWidth={3}
              fill="url(#colorRevenue)"
              animationDuration={2000}
            />
            <XAxis dataKey="month" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Success Badge */}
      <motion.div
        className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <CheckCircle className="text-[#EFA82F]" size={16} />
        <span>Results delivered in Q1 2025</span>
      </motion.div>
    </div>
  );
}

function ClientWorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const clients = [
    {
      name: 'Johnson and Johnson Heating and Air-Conditioning and Plumbing',
      industry: 'HVAC Services',
      image: 'https://ik.imagekit.io/jmcg/website%20previews/jnjcomfort.png',
      website: 'https://superiorcomforthvac.com',
    },
    {
      name: 'Able2Global',
      industry: 'Global Consulting',
      image: 'https://ik.imagekit.io/jmcg/website%20previews/able2global.png',
      website: 'https://able2global.com',
    },
    {
      name: 'Constantine Unclassified',
      industry: 'Podcast & Media',
      image: 'https://ik.imagekit.io/jmcg/website%20previews/constantineunclassified.png',
      website: 'https://constantineunclassified.com',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Client <span className="text-[#EFA82F]">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600">Websites we've built that drive real results</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <motion.div
                  className="absolute top-4 right-4 px-4 py-2 bg-[#EFA82F] text-white rounded-full text-sm"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + idx * 0.15 }}
                >
                  {client.industry}
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-gray-900 mb-4">{client.name}</h3>
                <motion.a
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#EFA82F] hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  View Live Site <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ onNavigate }: ServicesButtonProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  const services = [
    { 
      name: 'Web Development', 
      icon: Zap, 
      color: 'from-[#EFA82F] to-orange-500',
      description: 'Custom websites built for performance and conversions',
      features: ['Responsive Design', 'SEO Optimized', 'Lightning Fast', 'E-commerce Ready']
    },
    { 
      name: 'SEO', 
      icon: TrendingUp, 
      color: 'from-blue-500 to-cyan-500',
      description: 'Dominate search rankings and drive organic traffic',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Analytics']
    },
    { 
      name: 'GEO', 
      icon: Target, 
      color: 'from-purple-500 to-pink-500',
      description: 'Optimize for AI-powered search engines',
      features: ['AI Optimization', 'Voice Search', 'Entity Building', 'Schema Markup']
    },
    { 
      name: 'Business Consulting', 
      icon: Users, 
      color: 'from-amber-500 to-orange-600',
      description: 'Strategic guidance for sustainable growth',
      features: ['Strategy Planning', 'Process Optimization', 'Team Training', 'Growth Roadmap']
    },
    { 
      name: 'Graphic Design', 
      icon: Sparkles, 
      color: 'from-green-500 to-emerald-500',
      description: 'Beautiful visuals that capture your brand essence',
      features: ['Brand Identity', 'Marketing Materials', 'Social Graphics', 'Print Design']
    },
    { 
      name: 'Podcast Production', 
      icon: Play, 
      color: 'from-red-500 to-rose-500',
      description: 'Full-service podcast creation and promotion',
      features: ['Recording', 'Editing', 'Distribution', 'Marketing']
    },
    { 
      name: 'Google Ads', 
      icon: Target, 
      color: 'from-indigo-500 to-purple-500',
      description: 'Maximize ROI with data-driven PPC campaigns',
      features: ['Search Ads', 'Display Ads', 'Shopping Ads', 'Remarketing']
    },
    { 
      name: 'Meta Ads', 
      icon: TrendingUp, 
      color: 'from-pink-500 to-rose-500',
      description: 'Scale your business with social advertising',
      features: ['Facebook Ads', 'Instagram Ads', 'Retargeting', 'Creative Testing']
    },
  ];

  const getServiceId = (serviceName: string) => {
    // Map HomePage service names to ServicesPage shortName IDs
    const serviceMap: { [key: string]: string } = {
      'Web Development': 'web-dev',
      'SEO': 'seo',
      'GEO': 'geo',
      'Business Consulting': 'consulting',
      'Graphic Design': 'design',
      'Podcast Production': 'podcast',
      'Google Ads': 'google-ads',
      'Meta Ads': 'meta'
    };
    
    return serviceMap[serviceName] || serviceName.toLowerCase().replace(/\s+/g, '-');
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Auto-rotation effect - Disabled on mobile for performance
  useEffect(() => {
    if (!scrollRef.current || isMobile) return; // Disable on mobile

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % services.length;
        
        if (scrollRef.current) {
          // Calculate the scroll position for the next service
          const cardWidth = 400; // Approximate width including gap
          const targetScroll = nextIndex * cardWidth;
          
          // If we're going back to the start, reset scroll position
          if (nextIndex === 0) {
            scrollRef.current.scrollTo({
              left: 0,
              behavior: 'smooth'
            });
          } else {
            scrollRef.current.scrollTo({
              left: targetScroll,
              behavior: 'smooth'
            });
          }
        }
        
        return nextIndex;
      });
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval);
  }, [services.length, isMobile]);

  return (
    <section ref={ref} className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">Everything you need to grow your business</p>
        </motion.div>

        {/* Scroll Controls - Desktop */}
        <div className="hidden md:flex justify-end gap-2 mb-6">
          <motion.button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight size={20} className="rotate-180 text-gray-700" />
          </motion.button>
          <motion.button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight size={20} className="text-gray-700" />
          </motion.button>
        </div>

        {/* Horizontal Scroll Container */}
        <motion.div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-6 snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {services.map((service, idx) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                key={idx}
                className="flex-shrink-0 w-80 md:w-96 snap-center"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className={`relative h-full bg-gradient-to-br ${service.color} rounded-2xl p-8 shadow-lg overflow-hidden cursor-pointer group`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => onNavigate('services', getServiceId(service.name))}
                >
                  {/* Animated background pattern - Disabled on mobile for performance */}
                  {!isMobile && (
                    <motion.div
                      className="absolute inset-0 opacity-10"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                      style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                      }}
                    />
                  )}

                  {/* Floating orb - Disabled on mobile for performance */}
                  {!isMobile && (
                    <motion.div
                      className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 10, 0],
                        y: [0, 15, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                    />
                  )}

                  <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl text-white mb-3">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIdx) => (
                        <motion.div
                          key={featureIdx}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + idx * 0.1 + featureIdx * 0.05 }}
                        >
                          <CheckCircle className="text-white/80" size={16} />
                          <span className="text-white/90 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <motion.div
                      className="flex items-center gap-2 text-white group-hover:gap-3 transition-all"
                      whileHover={{ x: 5 }}
                    >
                      <span>Learn More</span>
                      <ArrowRight size={18} />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile scroll hint */}
        <motion.p
          className="text-center text-gray-500 text-sm mt-6 md:hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          Swipe to explore all services →
        </motion.p>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="px-6 py-3 bg-[#EFA82F] text-white rounded-xl hover:bg-[#d89527] transition-colors flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('services')}
          >
            Explore All Services <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
    </section>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isMobile = useIsMobile();

  const stats = [
    { value: '100%', label: 'Transparent Pricing' },
    { value: 'Zero', label: 'Long-Term Contracts' },
    { value: 'Real', label: 'Business Partners' },
    { value: 'Always', label: 'Results-Focused' },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Animated Background - Disabled on mobile for performance */}
      {!isMobile && (
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, #EFA82F 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Our <span className="text-[#EFA82F]">Commitment</span> To You
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(239, 168, 47, 0.5)' }}
            >
              <motion.div
                className="text-5xl md:text-6xl text-[#EFA82F] mb-4"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + idx * 0.1, type: 'spring' }}
              >
                {stat.value}
              </motion.div>
              <div className="text-lg text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ onNavigate }: ServicesButtonProps) {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-24 bg-gradient-to-br from-[#EFA82F] to-[#d89527] text-white relative overflow-hidden">
      {/* Animated Background Circles - Disabled on mobile for performance */}
      {!isMobile && [...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: `${i * 20}%`,
            top: `${i * 15}%`,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          className="text-xl mb-8 text-white/90"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Let's analyze what's really holding you back and create a strategy for explosive growth.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            className="px-8 py-4 bg-white text-[#EFA82F] rounded-xl hover:bg-gray-100 transition-colors shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('contact')}
          >
            Schedule a Consultation
          </motion.button>
          <motion.button
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Case Studies
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}