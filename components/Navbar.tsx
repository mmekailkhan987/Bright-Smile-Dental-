import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { COMPANY_NAME, NAV_LINKS, BOOKING_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    // Prevent empty lookups
    if (!targetId) return;

    const element = document.getElementById(targetId);
    
    console.log(`[Navigation] Clicked link: ${href}`);

    if (element) {
      // Offset for fixed navbar
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      try {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Update URL hash safely, try-catch for strict environments
        if (window.history && window.history.pushState) {
          window.history.pushState(null, "", href);
        }
      } catch (err) {
        console.warn("Navigation error:", err);
        // Fallback simple scroll
        element.scrollIntoView();
      }
    } else {
      console.warn(`[Navigation] Element with id "${targetId}" not found.`);
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={`
          flex items-center justify-between 
          w-full max-w-5xl 
          px-6 py-3 
          rounded-full 
          transition-all duration-300
          ${isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-lg border border-teal-100/50' : 'bg-white/80 backdrop-blur-sm shadow-sm border border-transparent'}
        `}>
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 z-50">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              B
            </div>
            <span className="font-serif text-lg font-bold text-slate-800 tracking-tight">
              {COMPANY_NAME}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-full hover:bg-teal-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Book Online
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-slate-800 p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 bg-white rounded-3xl shadow-2xl p-6 border border-teal-100 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-medium text-slate-800 py-2 border-b border-slate-100 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-teal-600 text-white font-semibold rounded-xl mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;