import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';
import logo from 'figma:asset/d18e64897d799e5d5096e61c7df4c2f2de01828f.png';

type Page = 'home' | 'about' | 'services' | 'contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white border-t-4 border-[#EFA82F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <img src={logo} alt="Johnson Marketing Logo" className="w-12 h-12" />
            </div>
            <div className="text-xl mb-2">Johnson Marketing</div>
            <div className="text-sm text-gray-400 mb-4">& Consulting Group</div>
            <p className="text-sm text-gray-400">
              Your strategic partner for holistic business growth through marketing excellence.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => handleNavigate(item.toLowerCase() as Page)}
                  className="block text-gray-400 hover:text-[#EFA82F] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg mb-4">Services</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>GEO & SEO</div>
              <div>Web Development</div>
              <div>Graphic Design</div>
              <div>PPC & Meta Ads</div>
              <div>Consulting</div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex gap-3 mt-4">
                <motion.a
                  href="https://www.linkedin.com/company/johnson-marketing-and-consulting-group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#EFA82F] transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/@JohnsonMarketingandConsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#EFA82F] transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/jmcgmarketing?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#EFA82F] transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/profile.php?id=100095064597135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#EFA82F] transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Johnson Marketing & Consulting Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}