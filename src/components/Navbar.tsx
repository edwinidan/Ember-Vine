import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hash links work on home; from other pages prefix with /
  const hashHref = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream/90 backdrop-blur-md py-4 shadow-lg shadow-black/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-2xl md:text-3xl font-serif font-bold tracking-wider text-burgundy">
          EMBER <span className="text-charcoal font-light">&</span> VINE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href={hashHref('#about')}
            className="text-sm uppercase tracking-widest text-charcoal/70 hover:text-burgundy transition-colors"
          >
            About
          </a>
          <Link
            to="/menu"
            className={`text-sm uppercase tracking-widest transition-colors ${
              location.pathname === '/menu'
                ? 'text-burgundy border-b border-burgundy pb-0.5'
                : 'text-charcoal/70 hover:text-burgundy'
            }`}
          >
            Menu
          </Link>
          <a
            href={hashHref('#reservations')}
            className="text-sm uppercase tracking-widest text-charcoal/70 hover:text-burgundy transition-colors"
          >
            Reservations
          </a>
          <a
            href={hashHref('#reservations')}
            className="px-6 py-2 border border-burgundy text-burgundy hover:bg-burgundy hover:text-cream transition-all duration-300 uppercase tracking-widest text-xs font-medium"
          >
            Book a Table
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-charcoal hover:text-burgundy transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-charcoal/10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              <a
                href={hashHref('#about')}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg uppercase tracking-widest text-charcoal hover:text-burgundy transition-colors"
              >
                About
              </a>
              <Link
                to="/menu"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg uppercase tracking-widest text-charcoal hover:text-burgundy transition-colors"
              >
                Menu
              </Link>
              <a
                href={hashHref('#reservations')}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg uppercase tracking-widest text-charcoal hover:text-burgundy transition-colors"
              >
                Reservations
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
