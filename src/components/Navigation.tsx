import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from 'figma:asset/d18e64897d799e5d5096e61c7df4c2f2de01828f.png';
import { useIsMobile } from '../hooks/useMediaQuery';

type Page = 'home' | 'about' | 'services' | 'contact';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav 
      className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.button 
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img 
              src={logo}
              alt="JMCG Logo"
              className="w-14 h-14 object-contain"
              whileHover={!isMobile ? { rotate: 360 } : {}}
              transition={{ duration: 0.6 }}
            />
            <div className="hidden sm:block">
              <div className="text-xl text-gray-900">Johnson Marketing</div>
              <div className="text-xs text-gray-500 -mt-1">& Consulting Group</div>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <motion.button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`px-6 py-2 rounded-lg transition-colors relative ${
                  currentPage === item.page
                    ? 'text-[#EFA82F]'
                    : 'text-gray-700 hover:text-[#EFA82F]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {currentPage === item.page && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EFA82F]"
                    layoutId="activeNav"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            <motion.button
              className="ml-4 px-6 py-2 bg-[#EFA82F] text-white rounded-lg hover:bg-[#d89527] transition-colors"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(239, 168, 47, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigate('contact')}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${
                    currentPage === item.page
                      ? 'bg-[#EFA82F] text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}