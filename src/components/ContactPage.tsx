import { motion, useInView } from 'motion/react';
import { Mail, Phone, MapPin, Calendar, Clock, MessageSquare, Send, Linkedin, Twitter, Instagram, Facebook, CheckCircle } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { ScrollIndicator } from './ScrollIndicator';
import { useIsMobile } from '../hooks/useMediaQuery';
import { trackFormSubmission } from '../utils/analytics';
import { Seo } from './Seo';
import { useForm, ValidationError } from '@formspree/react';

export function ContactPage() {
  // Load the booking widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Seo
        title="Contact Johnson Marketing and Consulting Group | Schedule a Marketing & Growth Consultation"
        description="Contact Johnson Marketing and Consulting Group to schedule a no-pressure marketing and business growth consultation. Talk with our team about web, SEO, GEO, ads, and consulting support for your brand."
      />
      <HeroSection />
      <ContactFormSection />
      <FAQSection />
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
            Let's Start a Conversation
            <span className="block bg-gradient-to-r from-[#EFA82F] to-[#d89527] bg-clip-text text-transparent">
              About Your Business
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            No pressure, no sales pitch — just an honest discussion about what you need
            and how we can help you grow.
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

function ContactFormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [state, handleSubmit] = useForm("mdakqvnd");

  // Track successful form submission
  useEffect(() => {
    if (state.succeeded) {
      trackFormSubmission('contact');
    }
  }, [state.succeeded]);

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-2">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">We'll get back to you within 24 hours</p>

            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="text-white" size={48} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
                <p className="text-gray-700 text-lg mb-4">
                  Your message has been successfully sent. We'll get back to you within 24 hours.
                </p>
                <p className="text-gray-600">
                  In the meantime, feel free to schedule a consultation using the booking widget →
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label htmlFor="firstName" className="block text-sm text-gray-700 mb-2">First Name *</label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#EFA82F] focus:outline-none transition-colors"
                    required
                  />
                  <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label htmlFor="lastName" className="block text-sm text-gray-700 mb-2">Last Name *</label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#EFA82F] focus:outline-none transition-colors"
                    required
                  />
                  <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
                </motion.div>
              </div>

              {/* Email */}
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">Email *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#EFA82F] focus:outline-none transition-colors"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </motion.div>

              {/* Phone */}
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#EFA82F] focus:outline-none transition-colors"
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              </motion.div>

              {/* Company */}
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label htmlFor="company" className="block text-sm text-gray-700 mb-2">Company Name</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#EFA82F] focus:outline-none transition-colors"
                />
                <ValidationError prefix="Company" field="company" errors={state.errors} />
              </motion.div>

              {/* Services */}
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label htmlFor="services" className="block text-sm text-gray-700 mb-2">Services Interested In</label>
                <select
                  id="services"
                  name="services"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#EFA82F] focus:outline-none transition-colors"
                >
                  <option value="">Select a service...</option>
                  <option value="geo">Generative Engine Optimization</option>
                  <option value="seo">Search Engine Optimization</option>
                  <option value="web">Web Development</option>
                  <option value="design">Graphic Design</option>
                  <option value="podcast">Podcast Production</option>
                  <option value="ppc">Google PPC</option>
                  <option value="meta">Meta Ads</option>
                  <option value="consulting">Business Consulting</option>
                  <option value="multiple">Multiple Services</option>
                </select>
                <ValidationError prefix="Services" field="services" errors={state.errors} />
              </motion.div>

              {/* Message */}
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">Tell us about your business challenges *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#EFA82F] focus:outline-none transition-colors resize-none"
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </motion.div>

              {/* Budget */}
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label htmlFor="budget" className="block text-sm text-gray-700 mb-2">Budget Range (Optional)</label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#EFA82F] focus:outline-none transition-colors"
                >
                  <option value="">Select a range...</option>
                  <option value="2-5k">$2,000 - $5,000/mo</option>
                  <option value="5-10k">$5,000 - $10,000/mo</option>
                  <option value="10-20k">$10,000 - $20,000/mo</option>
                  <option value="20k+">$20,000+/mo</option>
                </select>
                <ValidationError prefix="Budget" field="budget" errors={state.errors} />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={state.submitting}
                className="w-full py-4 bg-gradient-to-r from-[#EFA82F] to-[#d89527] text-white rounded-xl hover:from-[#d89527] hover:to-[#EFA82F] transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!state.submitting ? { scale: 1.02, boxShadow: '0 20px 40px rgba(239, 168, 47, 0.3)' } : {}}
                whileTap={!state.submitting ? { scale: 0.98 } : {}}
              >
                {state.submitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-sm text-gray-500 text-center">
                We'll respond within 24 hours during business days
              </p>
            </form>
            )}
          </motion.div>

          {/* Contact Info & Calendar */}
          <div className="space-y-8">
            {/* Calendar Integration with Embedded Booking */}
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#EFA82F] to-[#d89527] rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl text-gray-900">Schedule a Free Consultation</h3>
                  <p className="text-sm text-gray-600">30-minute discovery call</p>
                </div>
              </div>

              {/* Embedded Calendar Booking */}
              <div className="bg-white rounded-xl overflow-hidden border-2 border-gray-200" style={{ height: '600px', overflow: 'auto' }}>
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/TULCTBlm1joM9YmHApGA" 
                  style={{ width: '100%', border: 'none', height: '100%', minHeight: '600px' }} 
                  scrolling="yes" 
                  id="TULCTBlm1joM9YmHApGA_1764950786388"
                  title="Book a Consultation"
                />
              </div>

              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#EFA82F] text-white rounded flex items-center justify-center text-xs">✓</div>
                  <span>30-minute discovery call</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#EFA82F] text-white rounded flex items-center justify-center text-xs">✓</div>
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#EFA82F] text-white rounded flex items-center justify-center text-xs">✓</div>
                  <span>Instant confirmation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How quickly will I hear back?',
      answer: 'We typically respond to all inquiries within 2-4 hours during business days (Mon-Fri, 9am-5pm EST). For urgent matters, please call us directly.',
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes! We offer a complimentary 30-minute discovery call to discuss your business goals and determine if we\'re a good fit for your needs.',
    },
    {
      question: 'What information should I prepare for our call?',
      answer: 'Come prepared to discuss your business goals, current challenges, target audience, and budget. The more context you provide, the better we can tailor our recommendations.',
    },
    {
      question: 'Do you work with businesses in my industry?',
      answer: 'We work with diverse industries including HVAC, hospitality, consulting, trades, and more. Our holistic approach adapts to any business model.',
    },
    {
      question: 'What are your payment terms?',
      answer: 'We offer flexible payment options including monthly retainers and project-based pricing. Specific terms are discussed during the consultation phase.',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Frequently Asked <span className="text-[#EFA82F]">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">Quick answers to common questions</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
            >
              <motion.button
                className="w-full p-6 text-left flex items-start gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#EFA82F] to-[#d89527] rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                  Q
                </div>
                <div className="flex-1">
                  <h3 className="text-lg text-gray-900 mb-1">{faq.question}</h3>
                </div>
                <motion.div
                  animate={{ rotate: openIdx === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#EFA82F]"
                >
                  ▼
                </motion.div>
              </motion.button>
              <motion.div
                initial={false}
                animate={{
                  height: openIdx === idx ? 'auto' : 0,
                  opacity: openIdx === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pl-18 text-gray-600">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}