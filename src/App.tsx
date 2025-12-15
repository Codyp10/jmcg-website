import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';

type Page = 'home' | 'about' | 'services' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [targetServiceId, setTargetServiceId] = useState<string | null>(null);

  // Navigate to a page, optionally with a service section to scroll to
  const navigateToPage = (page: Page, serviceId?: string) => {
    setCurrentPage(page);
    if (serviceId) {
      setTargetServiceId(serviceId);
    } else {
      setTargetServiceId(null);
    }
  };

  // Scroll to top whenever the page changes, or to specific service section
  useEffect(() => {
    console.log('Current page:', currentPage, 'Target service:', targetServiceId);
    
    if (targetServiceId && currentPage === 'services') {
      // When navigating to a specific service, DON'T scroll to top first
      // Wait for page transition and rendering
      setTimeout(() => {
        const element = document.getElementById(targetServiceId);
        console.log('Looking for element with ID:', targetServiceId, 'Found:', element);
        if (element) {
          // Add offset to account for fixed header if needed
          const yOffset = -100; // Adjust this value as needed
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          // Clear after scrolling completes
          setTimeout(() => setTargetServiceId(null), 1000);
        } else {
          console.error('Element not found with ID:', targetServiceId);
          setTargetServiceId(null);
        }
      }, 600);
    } else if (!targetServiceId) {
      // For contact page, scroll to top instantly for better UX
      // For other pages, smooth scroll
      if (currentPage === 'contact') {
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateToPage} />;
      case 'about':
        return <AboutPage onNavigate={navigateToPage} />;
      case 'services':
        return <ServicesPage onNavigate={navigateToPage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={navigateToPage} />;
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Navigation currentPage={currentPage} onNavigate={navigateToPage} />
      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer onNavigate={navigateToPage} />
    </div>
  );
}