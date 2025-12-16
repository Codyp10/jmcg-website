import { motion, useInView } from 'motion/react';
import { Award, Target, Users, TrendingUp, Heart, Lightbulb, Shield, Zap } from 'lucide-react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScrollIndicator } from './ScrollIndicator';
import { useIsMobile } from '../hooks/useMediaQuery';
import { Seo } from './Seo';

type Page = 'home' | 'about' | 'services' | 'contact';

interface AboutPageProps {
  onNavigate?: (page: Page) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps = {}) {
  return (
    <div>
      <Seo
        title="About Johnson Marketing and Consulting Group | Strategic Marketing & Business Growth Partner"
        description="Learn how Johnson Marketing and Consulting Group combines modern marketing, SEO, GEO, ads, and business consulting to become a long-term growth partner for ambitious, national brands."
      />
      <HeroSection />
      <StorySection />
      <MissionValuesSection />
      <TeamSection />
      <StatsSection onNavigate={onNavigate} />
    </div>
  );
}

function HeroSection() {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            We're Not Just Marketers —
            <span className="block bg-gradient-to-r from-[#EFA82F] to-[#d89527] bg-clip-text text-transparent">
              We're Business Partners
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Our unique approach combines marketing expertise with strategic business consulting
            to deliver results that matter to your bottom line.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ScrollIndicator />
      </div>
    </section>
  );
}

function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = useIsMobile();

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Our <span className="text-[#EFA82F]">Story</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Johnson Marketing & Consulting Group was founded on a simple observation: traditional
                marketing agencies were solving the wrong problems. They focused on vanity metrics
                and surface-level solutions.
              </p>
              <p>
                We realized that businesses don't just need more leads — they need strategic partners
                who understand their entire operation. A broken sales process, unclear positioning,
                or operational inefficiencies will undermine even the best marketing campaign.
              </p>
              <p>
                Today, we combine cutting-edge marketing tactics with deep business consulting to
                deliver holistic growth strategies. We don't just drive traffic — we transform businesses.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://ik.imagekit.io/jmcg/ourstory.png?updatedAt=1765410031757"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
              {/* Animated overlay - Disabled on mobile for performance */}
              {!isMobile && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#EFA82F]/20 to-transparent"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MissionValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    {
      icon: Target,
      title: 'Holistic Approach',
      description: 'We examine your entire business ecosystem, not just marketing channels.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      title: 'Results-Driven',
      description: 'Every strategy is designed to impact your bottom line, not just look good on paper.',
      color: 'from-[#EFA82F] to-orange-500',
    },
    {
      icon: Heart,
      title: 'Partnership First',
      description: 'Your success is our success. We grow when you grow.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Honest communication, clear expectations, and authentic relationships.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge strategies like GEO and AI-driven marketing.',
      color: 'from-amber-500 to-yellow-500',
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'Delivering exceptional work that exceeds expectations, every single time.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Our <span className="text-[#EFA82F]">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            To empower businesses with holistic growth strategies that combine marketing excellence
            and strategic consulting, ensuring sustainable success that goes beyond vanity metrics.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Our <span className="text-[#EFA82F]">Values</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#EFA82F] transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <value.icon className="text-white" size={32} />
              </motion.div>
              <h3 className="text-2xl text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const team = [
    { name: 'Caleb Johnson', role: 'Founder & CEO', image: 'https://ik.imagekit.io/jmcg/website%20headshots/caleb.png' },
    { name: 'Cody Perkins', role: 'CTO', image: 'https://ik.imagekit.io/jmcg/website%20headshots/cody.png' },
    { name: 'Skyla Godlove', role: 'Director of UX/UI', image: 'https://ik.imagekit.io/jmcg/website%20headshots/skyla.png' },
    { name: 'Jacob Ritter', role: 'Business Associate', image: 'https://ik.imagekit.io/jmcg/jacob.PNG' },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Meet Our <span className="text-[#EFA82F]">Team</span>
          </h2>
          <p className="text-xl text-gray-600">The people behind your success</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#EFA82F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ opacity: 1 }}
                />
              </div>
              <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
              <p className="text-[#EFA82F]">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection({ onNavigate }: AboutPageProps = {}) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-5"
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Want to work with a team that
          <span className="block text-[#EFA82F]">truly understands business?</span>
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Let's have a conversation about your goals and challenges.
        </motion.p>
        <motion.button
          className="px-8 py-4 bg-[#EFA82F] text-white rounded-xl hover:bg-[#d89527] transition-colors shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(239, 168, 47, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate?.('contact')}
        >
          Let's Talk About Your Business
        </motion.button>
      </div>
    </section>
  );
}