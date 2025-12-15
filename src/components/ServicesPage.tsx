import { motion, useInView } from 'motion/react';
import { Search, Sparkles, Code, Palette, Mic, MousePointerClick, Target, Users, ArrowRight, CheckCircle, User, Bot, X, Minus, Maximize2, RotateCw, Lock, ChevronLeft, ChevronRight, ShoppingCart, Menu, Star } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { GraphicDesignVisualization } from './GraphicDesignVisualization';
import { PodcastVisualization } from './PodcastVisualization';
import { GooglePPCVisualization } from './GooglePPCVisualization';
import { MetaAdsVisualization } from './MetaAdsVisualization';
import { BusinessConsultingVisualization } from './BusinessConsultingVisualization';
import { WebDevVisualization } from './WebDevVisualization';
import { ScrollIndicator } from './ScrollIndicator';
import { useIsMobile } from '../hooks/useMediaQuery';
import { trackCTAClick } from '../utils/analytics';
import { Seo } from './Seo';

type Page = 'home' | 'about' | 'services' | 'contact';

interface ServicesPageProps {
  onNavigate?: (page: Page, serviceId?: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps = {}) {
  const services = [
    {
      icon: Sparkles,
      name: 'Generative Engine Optimization',
      shortName: 'GEO',
      description: 'Position your brand in AI-generated responses and stay ahead of the search revolution.',
      color: 'from-purple-500 to-pink-500',
      features: ['AI Content Optimization', 'LLM Training Data', 'Answer Engine Rankings', 'Future-Ready Strategy'],
    },
    {
      icon: Search,
      name: 'Search Engine Optimization',
      shortName: 'SEO',
      description: 'Dominate search rankings with data-driven strategies that deliver sustainable organic growth.',
      color: 'from-blue-500 to-cyan-500',
      features: ['Keyword Research', 'Technical SEO Audits', 'Content Strategy', 'Link Building'],
    },
    {
      icon: Code,
      name: 'Web Development',
      shortName: 'Web Dev',
      description: 'Custom websites and applications that convert visitors into customers.',
      color: 'from-[#EFA82F] to-orange-500',
      features: ['Custom Design', 'Responsive Development', 'E-commerce Solutions', 'Performance Optimization'],
    },
    {
      icon: Palette,
      name: 'Graphic Design',
      shortName: 'Design',
      description: 'Visual identity that captures attention and communicates your brand story.',
      color: 'from-green-500 to-emerald-500',
      features: ['Brand Identity', 'Marketing Materials', 'Social Media Graphics', 'Print & Digital Design'],
    },
    {
      icon: Mic,
      name: 'Podcast Producing & Editing',
      shortName: 'Podcast',
      description: 'Professional audio and video podcast production that engages your audience and builds authority.',
      color: 'from-red-500 to-rose-500',
      features: ['Audio & Video Production', 'Post-Production Editing', 'Show Notes & SEO', 'Multi-Platform Distribution'],
    },
    {
      icon: MousePointerClick,
      name: 'Google PPC',
      shortName: 'Google Ads',
      description: 'Targeted Google Ads campaigns that maximize ROI and drive qualified leads.',
      color: 'from-indigo-500 to-purple-500',
      features: ['Campaign Strategy', 'Ad Copy Optimization', 'Bid Management', 'Conversion Tracking'],
    },
    {
      icon: Target,
      name: 'Meta Ads',
      shortName: 'Meta',
      description: 'Facebook and Instagram advertising that reaches your ideal customers at scale.',
      color: 'from-pink-500 to-rose-500',
      features: ['Audience Targeting', 'Creative Testing', 'Campaign Optimization', 'Retargeting Strategies'],
    },
    {
      icon: Users,
      name: 'Business Consulting',
      shortName: 'Consulting',
      description: 'Strategic business guidance that addresses root challenges before scaling marketing.',
      color: 'from-amber-500 to-orange-500',
      features: ['Business Analysis', 'Process Optimization', 'Sales Strategy', 'Growth Planning'],
    },
  ];

  return (
    <div>
      <Seo
        title="Marketing Services | Web Development, SEO, GEO, Ads & Consulting – Johnson Marketing and Consulting Group"
        description="Explore Johnson Marketing and Consulting Group’s full-stack marketing services, including web development, SEO, GEO, Google Ads, Meta Ads, podcast production, and business consulting built for scalable growth."
      />
      <HeroSection />
      <ServicesGridSection services={services} onNavigate={onNavigate} />
      {services.map((service, idx) => (
        <ServiceDetailSection key={idx} service={service} index={idx} />
      ))}
      <ProcessSection />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

function HeroSection() {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
      {/* Animated Background - Disabled on mobile for performance */}
      {!isMobile && [...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 bg-gradient-to-br from-[#EFA82F]/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 md:py-12">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl text-gray-900 mb-4 md:mb-6 py-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive Marketing
            <span className="block bg-gradient-to-r from-[#EFA82F] to-[#d89527] bg-clip-text text-transparent py-1">
              Backed by Business Consulting
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Every service is tailored to your business goals, not just marketing metrics.
            We don't just execute — we strategize, optimize, and transform.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2">
        <ScrollIndicator />
      </div>
    </section>
  );
}

function ServicesGridSection({ services, onNavigate }: { services: any[]; onNavigate?: (page: Page, serviceId?: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Helper function to convert service name to section ID
  const getServiceId = (serviceName: string) => {
    return serviceName.toLowerCase().replace(/\s+/g, '-');
  };

  // Handle click to scroll to service section on same page
  const handleServiceClick = (service: any) => {
    const sectionId = getServiceId(service.shortName);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              onClick={() => handleServiceClick(service)}
            >
              <motion.div
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 border-2 border-gray-100 hover:border-[#EFA82F] transition-all shadow-lg"
                whileHover={{ boxShadow: '0 20px 40px rgba(239, 168, 47, 0.2)' }}
              >
                <motion.div
                  className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 mx-auto`}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.1,
                  }}
                >
                  <service.icon className="text-white" size={24} />
                </motion.div>
                <h3 className="text-center text-gray-900 text-sm md:text-base">{service.shortName}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceDetailSection({ service, index }: { service: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  // Generate ID from service shortName (e.g., "GEO" -> "geo", "Web Dev" -> "web-dev")
  const sectionId = service.shortName.toLowerCase().replace(/\s+/g, '-');
  
  // Check which service visualization to show
  const isGEO = index === 0;
  const isSEO = index === 1;
  const isWebDev = index === 2;
  const isGraphicDesign = index === 3;
  const isPodcast = index === 4;
  const isGooglePPC = index === 5;
  const isMetaAds = index === 6;
  const isConsulting = index === 7;

  return (
    <section id={sectionId} ref={ref} className={`py-12 md:py-24 ${isEven ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
          <motion.div
            className={isEven ? '' : 'lg:order-2'}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-4xl text-gray-900 mb-4 md:mb-6">{service.name}</h2>

            <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
              {service.description}
            </p>

            <div className="bg-white border-2 border-gray-200 rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl text-gray-900 mb-3 md:mb-4">What's Included:</h3>
              <div className="space-y-3">
                {service.features.map((feature: string, idx: number) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    <CheckCircle className="text-[#EFA82F] flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              className="px-6 md:px-8 py-3 md:py-4 bg-[#EFA82F] text-white rounded-xl hover:bg-[#d89527] transition-colors shadow-lg flex items-center gap-2 text-sm md:text-base"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(239, 168, 47, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About {service.shortName} <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          <motion.div
            className={isEven ? '' : 'lg:order-1'}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            {isGEO ? (
              // Show AI Chat Interface for GEO
              <div className="aspect-square">
                <AIChatInterface />
              </div>
            ) : isSEO ? (
              // Show Google Search Results for SEO
              <div className="aspect-square">
                <GoogleSearchResults />
              </div>
            ) : isWebDev ? (
              // Show Web Development Visualization
              <div className="aspect-square">
                <WebDevVisualization />
              </div>
            ) : isGraphicDesign ? (
              // Show Graphic Design Visualization
              <div className="aspect-square">
                <GraphicDesignVisualization />
              </div>
            ) : isPodcast ? (
              // Show Podcast Visualization
              <div className="aspect-square">
                <PodcastVisualization />
              </div>
            ) : isGooglePPC ? (
              // Show Google PPC Visualization
              <div className="aspect-square">
                <GooglePPCVisualization />
              </div>
            ) : isMetaAds ? (
              // Show Meta Ads Visualization
              <div className="aspect-square">
                <MetaAdsVisualization />
              </div>
            ) : isConsulting ? (
              // Show Business Consulting Visualization
              <div className="aspect-square">
                <BusinessConsultingVisualization />
              </div>
            ) : (
              // Show default animated icon for other services
              <div className={`relative aspect-square bg-gradient-to-br ${service.color} rounded-2xl p-12 flex items-center justify-center`}>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <service.icon className="text-white" size={200} strokeWidth={1} />
                </motion.div>

                {/* Floating particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-white/30 rounded-full"
                    animate={{
                      y: [0, -100, 0],
                      x: [0, Math.random() * 100 - 50, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: '50%',
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const steps = [
    { title: 'Discovery & Analysis', description: 'Deep dive into your business, market, and goals' },
    { title: 'Strategy Development', description: 'Custom roadmap aligned with your objectives' },
    { title: 'Implementation', description: 'Execute with precision and expertise' },
    { title: 'Optimize & Scale', description: 'Continuous improvement and growth' },
  ];

  return (
    <section ref={ref} className="py-12 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl md:text-5xl mb-3 md:mb-4">
            Our <span className="text-[#EFA82F]">Process</span>
          </h2>
          <p className="text-base md:text-xl text-gray-300">How we work with you to deliver results</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#EFA82F]/50 rounded-xl md:rounded-2xl p-6 md:p-8 transition-all">
                <motion.div
                  className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#EFA82F] to-[#d89527] rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 mx-auto text-xl md:text-2xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {idx + 1}
                </motion.div>
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 text-center">{step.title}</h3>
                <p className="text-sm text-gray-400 text-center leading-snug">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#EFA82F]"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ onNavigate }: ServicesPageProps = {}) {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-5xl text-gray-900 mb-4 md:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Not sure which services you need?
          <span className="block text-[#EFA82F]">Let's talk about your business first.</span>
        </motion.h2>
        <motion.p
          className="text-base md:text-xl text-gray-600 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          We'll help you identify the right strategies for your unique situation.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            className="px-6 md:px-8 py-3 md:py-4 bg-[#EFA82F] text-white rounded-xl hover:bg-[#d89527] transition-colors shadow-lg text-sm md:text-base"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(239, 168, 47, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              trackCTAClick('Schedule Free Consultation', 'services-cta');
              onNavigate?.('contact');
            }}
          >
            Schedule Free Consultation
          </motion.button>
          <motion.button
            className="px-6 md:px-8 py-3 md:py-4 bg-white text-gray-700 rounded-xl border-2 border-gray-200 hover:border-[#EFA82F] transition-colors text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              trackCTAClick('View Our Work', 'services-cta');
              onNavigate?.('home');
            }}
          >
            View Our Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

// New AI Chat Interface Component for GEO visualization
function AIChatInterface() {
  const [showUser, setShowUser] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Arrays of different business types and cities
  const scenarios = [
    {
      business: 'roofing company',
      city: 'Austin',
      companyName: 'Summit Roofing & Restoration',
      description: 'a top-rated roofing company serving your area with over 15 years of experience. They specialize in residential and commercial roofing, offering comprehensive services including roof replacement, repairs, and storm damage restoration.'
    },
    {
      business: 'HVAC company',
      city: 'Phoenix',
      companyName: 'Climate Control Experts',
      description: 'a highly-rated HVAC company with 20+ years serving the Phoenix area. They provide 24/7 emergency service, complete system installations, repairs, and maintenance with certified technicians.'
    },
    {
      business: 'dentist',
      city: 'Seattle',
      companyName: 'Bright Smiles Dental Group',
      description: 'a premier dental practice known for exceptional patient care and modern treatments. They offer comprehensive dental services including cosmetic dentistry, implants, and family care with a 5-star patient satisfaction rating.'
    },
    {
      business: 'plumber',
      city: 'Denver',
      companyName: 'Mountain State Plumbing',
      description: 'a trusted plumbing service with over 25 years of experience. They provide 24/7 emergency services, complete plumbing installations, repairs, and water heater specialists with transparent upfront pricing.'
    },
    {
      business: 'personal injury lawyer',
      city: 'Miami',
      companyName: 'Justice Legal Partners',
      description: 'a respected law firm with a track record of winning cases and securing maximum compensation for clients. They offer free consultations and work on contingency, so you only pay if they win your case.'
    },
    {
      business: 'auto repair shop',
      city: 'Chicago',
      companyName: 'Precision Auto Service',
      description: 'a family-owned auto repair shop with ASE-certified technicians and 30+ years of experience. They provide honest diagnostics, quality repairs, and a comprehensive warranty on all work performed.'
    }
  ];

  const currentScenario = scenarios[currentIndex];
  const userQuestion = `What is the best ${currentScenario.business} in ${currentScenario.city}?`;
  const aiResponse = `Based on customer reviews, service quality, and local expertise, I recommend **${currentScenario.companyName}**. They're ${currentScenario.description} Their team is fully licensed and insured, and they offer free consultations and estimates.`;

  useEffect(() => {
    // Reset states
    setShowUser(false);
    setShowAI(false);
    setTypingText('');

    // Show user message first
    const timer1 = setTimeout(() => setShowUser(true), 500);
    
    // Show AI response after user message
    const timer2 = setTimeout(() => setShowAI(true), 1500);
    
    // Type out AI response
    let typingInterval: NodeJS.Timeout;
    const timer3 = setTimeout(() => {
      let index = 0;
      typingInterval = setInterval(() => {
        if (index <= aiResponse.length) {
          setTypingText(aiResponse.slice(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 15);
    }, 2000);

    // Move to next scenario after full cycle completes
    const timer4 = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % scenarios.length);
    }, 12000); // 12 seconds total per scenario

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      if (typingInterval) clearInterval(typingInterval);
    };
  }, [currentIndex]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl h-full flex flex-col overflow-hidden">
      {/* Chat Header */}
      <div className="pb-3 md:pb-4 border-b border-gray-700 mb-4 md:mb-6">
        <h3 className="text-white text-base md:text-lg">Example AI Response</h3>
        <p className="text-xs text-gray-400">ChatGPT, Perplexity, Claude & more</p>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 space-y-3 md:space-y-4 overflow-hidden">
        {/* User Message */}
        <motion.div
          key={`user-${currentIndex}`}
          className="flex items-start gap-2 md:gap-3 justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={showUser ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-blue-600 rounded-xl md:rounded-2xl rounded-tr-sm px-3 md:px-4 py-2 md:py-3 max-w-[85%]">
            <p className="text-white text-xs md:text-sm">
              {userQuestion}
            </p>
          </div>
          <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <User className="text-white" size={14} />
          </div>
        </motion.div>

        {/* AI Response */}
        <motion.div
          key={`ai-${currentIndex}`}
          className="flex items-start gap-2 md:gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={showAI ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Bot className="text-white" size={14} />
          </div>
          <div className="bg-gray-700/50 rounded-xl md:rounded-2xl rounded-tl-sm px-3 md:px-4 py-2 md:py-3 max-w-[85%]">
            <p className="text-gray-200 text-xs md:text-sm leading-relaxed">
              {typingText.split('**').map((part, idx) => {
                // Bold text between ** markers
                if (idx % 2 === 1) {
                  return <strong key={idx} className="text-white font-semibold">{part}</strong>;
                }
                return <span key={idx}>{part}</span>;
              })}
              {typingText.length < aiResponse.length && (
                <motion.span
                  className="inline-block w-1 h-4 bg-purple-400 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              )}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer Note */}
      <motion.div
        className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <p className="text-xs text-center text-gray-400">
          <span className="text-[#EFA82F] font-semibold">GEO ensures your brand</span> appears in AI-generated answers
        </p>
      </motion.div>
    </div>
  );
}

// New Google Search Results Component for SEO visualization
function GoogleSearchResults() {
  const [showResults, setShowResults] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const searches = [
    {
      query: 'best HVAC company in Phoenix',
      topResult: {
        title: 'Climate Control Experts - Phoenix HVAC Services',
        url: 'www.climatecontrolexperts.com',
        description: '24/7 Emergency HVAC Service in Phoenix. Over 20 years of experience with certified technicians. Free estimates on installations & repairs.',
        rating: 4.9,
        reviews: 342
      },
      otherResults: [
        {
          title: 'Phoenix Air Conditioning & Heating Services',
          url: 'www.phoenixairpros.com',
          description: 'Residential and commercial HVAC services. Same-day service available in the Phoenix metro area.',
        },
        {
          title: 'Desert Comfort HVAC - Heating & Cooling',
          url: 'www.desertcomforthvac.com',
          description: 'Affordable HVAC solutions for Phoenix homeowners. Installation, repair, and maintenance services.',
        }
      ]
    },
    {
      query: 'roofing contractors near me Austin',
      topResult: {
        title: 'Summit Roofing & Restoration | Austin Roofing Experts',
        url: 'www.summitroofingaustin.com',
        description: 'Top-rated roofing company in Austin with 15+ years of experience. Specializing in residential & commercial roofing, repairs, and storm damage.',
        rating: 5.0,
        reviews: 289
      },
      otherResults: [
        {
          title: 'Austin Roof Repair & Replacement Services',
          url: 'www.austinroofpros.com',
          description: 'Professional roofing services in Austin, TX. Free inspections and competitive pricing.',
        },
        {
          title: 'Texas Premier Roofing - Austin',
          url: 'www.texaspremierroofing.com',
          description: 'Residential and commercial roofing solutions. Serving Austin and surrounding areas since 2005.',
        }
      ]
    },
    {
      query: 'dentist in Seattle family dental',
      topResult: {
        title: 'Bright Smiles Dental Group - Seattle Family Dentistry',
        url: 'www.brightsmilesdental.com',
        description: 'Premier dental practice in Seattle offering comprehensive care, cosmetic dentistry, and implants. Accepting new patients with flexible scheduling.',
        rating: 4.8,
        reviews: 456
      },
      otherResults: [
        {
          title: 'Seattle Modern Dentistry - Family & Cosmetic',
          url: 'www.seattlemoderndentistry.com',
          description: 'State-of-the-art dental care for the whole family. Convenient downtown Seattle location.',
        },
        {
          title: 'Pacific Northwest Dental Associates',
          url: 'www.pnwdentalassociates.com',
          description: 'Comprehensive dental services with a focus on patient comfort and advanced technology.',
        }
      ]
    }
  ];

  const currentSearch = searches[currentIndex];

  useEffect(() => {
    setShowResults(false);
    const timer1 = setTimeout(() => setShowResults(true), 300);
    
    const timer2 = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % searches.length);
    }, 8000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [currentIndex]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl h-full flex flex-col overflow-hidden">
      {/* Google Search Bar */}
      <div className="mb-4 md:mb-6">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
          <span className="text-xl md:text-2xl tracking-tight">
            <span className="text-blue-400">G</span>
            <span className="text-red-400">o</span>
            <span className="text-yellow-400">o</span>
            <span className="text-blue-400">g</span>
            <span className="text-green-400">l</span>
            <span className="text-red-400">e</span>
          </span>
        </div>
        <motion.div
          key={`search-${currentIndex}`}
          className="bg-gray-700/50 border border-gray-600 rounded-full px-3 md:px-4 py-2 md:py-3 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Search className="text-gray-400" size={16} />
          <span className="text-xs md:text-sm text-gray-200">{currentSearch.query}</span>
        </motion.div>
      </div>

      {/* Search Results */}
      <div className="flex-1 space-y-3 md:space-y-4 overflow-hidden">
        {/* Top Result - Highlighted */}
        <motion.div
          key={`top-${currentIndex}`}
          className="border-l-4 border-[#EFA82F] bg-[#EFA82F]/10 rounded-lg p-3 md:p-4 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={showResults ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-xs font-semibold text-[#EFA82F] bg-[#EFA82F]/20 px-2 py-0.5 rounded">
              #1 RANKING
            </span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xs">★</span>
              ))}
              <span className="text-xs text-gray-400 ml-1">
                {currentSearch.topResult.rating} ({currentSearch.topResult.reviews})
              </span>
            </div>
          </div>
          <h3 className="text-blue-400 text-base md:text-lg mb-1 hover:underline cursor-pointer">
            {currentSearch.topResult.title}
          </h3>
          <p className="text-xs text-green-400 mb-2">{currentSearch.topResult.url}</p>
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
            {currentSearch.topResult.description}
          </p>
        </motion.div>

        {/* Other Results */}
        {currentSearch.otherResults.map((result, idx) => (
          <motion.div
            key={`${currentIndex}-${idx}`}
            className="p-3 md:p-4 hover:bg-gray-700/30 rounded-lg transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={showResults ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
          >
            <h3 className="text-blue-400 text-sm md:text-base mb-1 hover:underline cursor-pointer">
              {result.title}
            </h3>
            <p className="text-xs text-green-400 mb-2">{result.url}</p>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              {result.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Footer Note */}
      <motion.div
        className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-xs text-center text-gray-400">
          <span className="text-[#EFA82F] font-semibold">SEO gets your business</span> ranking at the top of Google
        </p>
      </motion.div>
    </div>
  );
}

// New Wireframe to Website Component for Web Development visualization
function WireframeToWebsite() {
  const [isFinished, setIsFinished] = useState(false);
  const [currentWebsite, setCurrentWebsite] = useState(0);

  const websites = [
    {
      name: 'E-Commerce',
      finished: {
        headerBg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        heroBg: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
        card1: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
        card2: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        card3: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
        ctaBg: '#10b981',
      }
    },
    {
      name: 'Corporate',
      finished: {
        headerBg: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
        heroBg: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
        card1: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
        card2: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
        card3: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        ctaBg: '#1e40af',
      }
    },
    {
      name: 'Creative',
      finished: {
        headerBg: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
        heroBg: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
        card1: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
        card2: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
        card3: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        ctaBg: '#7c3aed',
      }
    }
  ];

  const current = websites[currentWebsite];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFinished((prev) => {
        if (prev) {
          // If transitioning from finished to wireframe, change website
          setTimeout(() => {
            setCurrentWebsite((w) => (w + 1) % websites.length);
          }, 400);
        }
        return !prev;
      });
    }, 3500); // Toggle every 3.5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl overflow-hidden h-full border-2 border-gray-300 p-4 sm:p-6">
      {/* Label */}
      <div className="absolute top-6 left-6 z-20">
        <motion.div
          className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg ${
            isFinished 
              ? 'bg-[#EFA82F] text-white' 
              : 'bg-white text-gray-700 border-2 border-gray-300'
          }`}
          animate={{
            scale: isFinished ? [1, 1.15, 1] : 1,
          }}
          transition={{ duration: 0.6 }}
        >
          {isFinished ? `✨ ${current.name} Website` : '📐 Wireframe Sketch'}
        </motion.div>
      </div>

      {/* Main Content - Website */}
      <div className="h-full flex flex-col bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Header/Navigation */}
        <motion.div
          className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4"
          animate={{
            background: isFinished ? current.finished.headerBg : '#ffffff',
          }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            animate={{
              scale: isFinished ? 1 : 0.9,
            }}
            transition={{ duration: 0.8 }}
          >
            {isFinished ? (
              <>
                <motion.div
                  className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-lg"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.span
                  className="text-white text-sm sm:text-base font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {current.name}
                </motion.span>
              </>
            ) : (
              <div className="w-16 sm:w-24 h-4 sm:h-6 border-2 border-dashed border-gray-400 rounded" />
            )}
          </motion.div>
          
          {/* Nav Items */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{
                  width: isFinished ? '60px' : '50px',
                  height: isFinished ? '16px' : '12px',
                  background: isFinished ? '#ffffff50' : 'transparent',
                  borderWidth: isFinished ? '0px' : '2px',
                  borderStyle: 'dashed',
                  borderColor: '#9ca3af',
                }}
                className="rounded"
                transition={{ duration: 0.8, delay: i * 0.1 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="px-4 sm:px-8 md:px-12 py-8 sm:py-12 md:py-16 relative overflow-hidden"
          animate={{
            background: isFinished ? current.finished.heroBg : '#fafafa',
          }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Content */}
          <div className="relative z-10">
            {/* Main Headline */}
            {isFinished ? (
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 sm:mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Transform Your
                <br />
                Digital Presence
              </motion.h1>
            ) : (
              <div className="space-y-2 sm:space-y-3 mb-4">
                <div className="w-3/4 sm:w-2/3 h-6 sm:h-8 md:h-10 border-2 border-dashed border-gray-400 rounded" />
                <div className="w-2/3 sm:w-1/2 h-6 sm:h-8 md:h-10 border-2 border-dashed border-gray-400 rounded" />
              </div>
            )}

            {/* Subheadline */}
            {isFinished ? (
              <motion.p
                className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Custom websites that drive results and delight your customers
              </motion.p>
            ) : (
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="w-4/5 sm:w-3/5 h-3 sm:h-4 border-2 border-dashed border-gray-300 rounded" />
                <div className="w-3/4 sm:w-1/2 h-3 sm:h-4 border-2 border-dashed border-gray-300 rounded" />
              </div>
            )}

            {/* CTA Button */}
            <motion.div
              className="inline-block rounded-lg"
              animate={{
                background: isFinished ? '#ffffff' : 'transparent',
                borderWidth: isFinished ? '0px' : '2px',
                borderStyle: 'dashed',
                borderColor: '#9ca3af',
              }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {isFinished ? (
                <motion.button
                  className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold"
                  style={{ color: current.finished.ctaBg }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Get Started →
                </motion.button>
              ) : (
                <div className="w-24 sm:w-32 h-8 sm:h-10" />
              )}
            </motion.div>
          </div>

          {/* Decorative Elements (finished only) */}
          {isFinished && (
            <>
              <motion.div
                className="absolute top-10 right-10 w-20 h-20 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-2xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              <motion.div
                className="absolute bottom-10 right-20 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full blur-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </>
          )}
        </motion.div>

        {/* Content Grid */}
        <div className="flex-1 grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 bg-gray-50">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="rounded-lg overflow-hidden bg-white"
              animate={{
                boxShadow: isFinished ? '0 4px 20px rgba(0,0,0,0.08)' : '0 0 0 rgba(0,0,0,0)',
              }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              {/* Card Image */}
              <motion.div
                className="w-full aspect-square relative"
                animate={{
                  background: isFinished 
                    ? i === 1 ? current.finished.card1 : i === 2 ? current.finished.card2 : current.finished.card3
                    : '#ffffff',
                  borderWidth: isFinished ? '0px' : '2px',
                  borderStyle: 'dashed',
                  borderColor: '#d1d5db',
                }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                {isFinished && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/30 rounded-xl backdrop-blur-sm" />
                  </motion.div>
                )}
              </motion.div>

              {/* Card Text */}
              <div className="p-2 sm:p-3 md:p-4 space-y-1.5 sm:space-y-2">
                {isFinished ? (
                  <>
                    <motion.div
                      className="h-3 sm:h-4 bg-gray-800 rounded w-full"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    />
                    <motion.div
                      className="h-2 sm:h-3 rounded w-3/4"
                      style={{ background: i === 1 ? current.finished.card1 : i === 2 ? current.finished.card2 : current.finished.card3 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    />
                  </>
                ) : (
                  <>
                    <div className="h-2 sm:h-3 border-2 border-dashed border-gray-300 rounded" />
                    <div className="h-2 border-2 border-dashed border-gray-300 rounded w-2/3" />
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Progress Indicator */}
      <motion.div
        className="absolute bottom-6 right-6 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className={`w-2 h-2 rounded-full ${isFinished ? 'bg-gray-400' : 'bg-[#EFA82F]'}`}
          animate={{ scale: !isFinished ? 1.3 : 1 }}
        />
        <motion.div
          className={`w-2 h-2 rounded-full ${isFinished ? 'bg-[#EFA82F]' : 'bg-gray-400'}`}
          animate={{ scale: isFinished ? 1.3 : 1 }}
        />
      </motion.div>

      {/* Transformation Effect Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-30"
        animate={{
          background: isFinished 
            ? 'radial-gradient(circle at center, rgba(239, 168, 47, 0.2) 0%, transparent 70%)'
            : 'radial-gradient(circle at center, transparent 0%, transparent 100%)',
        }}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}

// Before/After Design Transformation for Graphic Design visualization
function BeforeAfterDesign() {
  const [isTransformed, setIsTransformed] = useState(false);
  const [currentDesign, setCurrentDesign] = useState(0);

  const designs = [
    {
      type: 'Event Poster',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
      layout: 'poster',
    },
    {
      type: 'Product Card',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
      layout: 'product',
    },
    {
      type: 'Magazine Ad',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      layout: 'magazine',
    },
    {
      type: 'Brand Identity',
      gradient: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
      layout: 'identity',
    },
  ];

  const current = designs[currentDesign];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransformed((prev) => {
        if (prev) {
          setTimeout(() => {
            setCurrentDesign((d) => (d + 1) % designs.length);
          }, 500);
        }
        return !prev;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden h-full">
      {/* Status Label */}
      <motion.div
        className={`absolute top-6 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
          !isTransformed 
            ? 'bg-gray-700 text-gray-300 border-2 border-gray-600'
            : 'bg-[#EFA82F] text-white'
        }`}
        animate={{
          scale: isTransformed ? [1, 1.1, 1] : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        {!isTransformed ? 'Before: Bland Design' : `After: ${current.type}`}
      </motion.div>

      {/* Split Screen Container */}
      <div className="h-full flex items-center justify-center p-8">
        <div className="relative w-full max-w-2xl aspect-[16/10]">
          
          {/* BEFORE - Grayscale Design (Left/Behind) */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-xl p-8 flex flex-col justify-between"
            animate={{
              opacity: isTransformed ? 0.3 : 1,
              scale: isTransformed ? 0.95 : 1,
            }}
            transition={{ duration: 0.8 }}
          >
            {current.layout === 'poster' && (
              <>
                <div className="space-y-3">
                  <div className="h-8 bg-gray-600 rounded w-2/3" />
                  <div className="h-5 bg-gray-500 rounded w-1/2" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-600 rounded w-full" />
                  <div className="h-3 bg-gray-600 rounded w-4/5" />
                </div>
                <div className="h-10 bg-gray-600 rounded w-1/3" />
              </>
            )}

            {current.layout === 'product' && (
              <>
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-gray-600 rounded-lg" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-600 rounded w-3/4" />
                    <div className="h-3 bg-gray-500 rounded w-full" />
                    <div className="h-3 bg-gray-500 rounded w-2/3" />
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <div className="h-8 bg-gray-600 rounded w-20" />
                  <div className="h-8 bg-gray-500 rounded w-24" />
                </div>
              </>
            )}

            {current.layout === 'magazine' && (
              <>
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div className="space-y-3">
                    <div className="h-5 bg-gray-600 rounded" />
                    <div className="h-3 bg-gray-500 rounded" />
                    <div className="h-3 bg-gray-500 rounded w-4/5" />
                  </div>
                  <div className="bg-gray-600 rounded-lg" />
                </div>
                <div className="h-6 bg-gray-600 rounded w-1/2" />
              </>
            )}

            {current.layout === 'identity' && (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-gray-600 rounded-full" />
                  <div className="space-y-2">
                    <div className="h-5 bg-gray-600 rounded w-32" />
                    <div className="h-3 bg-gray-500 rounded w-24" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-square bg-gray-600 rounded" />
                  <div className="aspect-square bg-gray-500 rounded" />
                  <div className="aspect-square bg-gray-600 rounded" />
                </div>
              </>
            )}
          </motion.div>

          {/* AFTER - Vibrant Colored Design (Right/Front) */}
          <motion.div
            className="absolute inset-0 rounded-xl shadow-2xl p-8 flex flex-col justify-between"
            style={{ background: current.gradient }}
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{
              clipPath: isTransformed ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
            }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            {current.layout === 'poster' && (
              <>
                <div className="space-y-3">
                  <motion.div 
                    className="h-8 bg-white/95 rounded w-2/3 shadow-lg"
                    animate={{ x: isTransformed ? [0, 5, 0] : 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  />
                  <div className="h-5 bg-white/85 rounded w-1/2" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-white/90 rounded w-full" />
                  <div className="h-3 bg-white/80 rounded w-4/5" />
                </div>
                <motion.div 
                  className="h-10 bg-white rounded w-1/3 shadow-xl"
                  animate={{ scale: isTransformed ? [1, 1.05, 1] : 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                />
              </>
            )}

            {current.layout === 'product' && (
              <>
                <div className="flex gap-4">
                  <motion.div 
                    className="w-24 h-24 bg-white/95 rounded-lg shadow-xl"
                    animate={{ rotate: isTransformed ? 360 : 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-white/95 rounded w-3/4 shadow-md" />
                    <div className="h-3 bg-white/85 rounded w-full" />
                    <div className="h-3 bg-white/75 rounded w-2/3" />
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <motion.div 
                    className="h-8 bg-white/90 rounded w-20 shadow-lg"
                    animate={{ scale: isTransformed ? [1, 1.05, 1] : 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  />
                  <motion.div 
                    className="h-8 bg-white rounded w-24 shadow-xl"
                    animate={{ scale: isTransformed ? [1, 1.05, 1] : 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  />
                </div>
              </>
            )}

            {current.layout === 'magazine' && (
              <>
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div className="space-y-3">
                    <div className="h-5 bg-white/95 rounded shadow-md" />
                    <div className="h-3 bg-white/85 rounded" />
                    <div className="h-3 bg-white/75 rounded w-4/5" />
                  </div>
                  <motion.div 
                    className="bg-white/95 rounded-lg shadow-xl"
                    animate={{ scale: isTransformed ? [0.95, 1] : 0.95 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  />
                </div>
                <motion.div 
                  className="h-6 bg-white rounded w-1/2 shadow-lg"
                  animate={{ x: isTransformed ? [0, 5, 0] : 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                />
              </>
            )}

            {current.layout === 'identity' && (
              <>
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-16 h-16 bg-white/95 rounded-full shadow-xl"
                    animate={{ rotate: isTransformed ? 360 : 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <div className="space-y-2">
                    <div className="h-5 bg-white/95 rounded w-32 shadow-md" />
                    <div className="h-3 bg-white/85 rounded w-24" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <motion.div 
                    className="aspect-square bg-white/95 rounded shadow-lg"
                    animate={{ scale: isTransformed ? [1, 1.05, 1] : 1 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  />
                  <motion.div 
                    className="aspect-square bg-white/90 rounded shadow-lg"
                    animate={{ scale: isTransformed ? [1, 1.05, 1] : 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  />
                  <motion.div 
                    className="aspect-square bg-white/95 rounded shadow-lg"
                    animate={{ scale: isTransformed ? [1, 1.05, 1] : 1 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                  />
                </div>
              </>
            )}
          </motion.div>

          {/* Wipe Line Effect */}
          <motion.div
            className="absolute inset-y-0 w-1 bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            animate={{
              left: isTransformed ? '100%' : '0%',
              opacity: isTransformed ? [0, 1, 1, 0] : 0,
            }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </div>
  );
}