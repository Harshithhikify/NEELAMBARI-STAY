import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles, CalendarDays } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  openHistoryModal: () => void;
  bookingCount: number;
}

export default function Navbar({ isDarkMode, toggleDarkMode, openHistoryModal, bookingCount }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Attractions', href: '#attractions' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background transparency transition
      setIsScrolled(window.scrollY > 50);

      // Simple active section highlights
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const target = document.querySelector(item.href);
        if (target) {
          const top = (target as HTMLElement).offsetTop;
          const height = (target as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.substring(1));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? isDarkMode
            ? 'glass-dark py-3 shadow-lg border-b border-forest-800/40'
            : 'glass-light py-3 shadow-lg border-b border-forest-100/60'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 group focus:outline-none"
            id="navbar-logo-link"
          >
            <div className={`p-2 rounded-full transition-transform duration-300 group-hover:rotate-12 ${
              isDarkMode ? 'bg-forest-900/60 text-sand-300' : 'bg-forest-100 text-forest-800'
            }`}>
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-xl tracking-wider font-bold transition-colors ${
                isScrolled 
                  ? 'text-forest-900 dark:text-sand-100' 
                  : 'text-white md:text-white'
              } ${!isScrolled && 'text-forest-900 dark:text-sand-100 md:text-white'}`}>
                Neelambari Stay
              </span>
              <span className={`text-[10px] uppercase tracking-widest font-mono ${
                isScrolled ? 'text-forest-500 dark:text-sand-400' : 'text-stone-200 md:text-stone-300'
              } ${!isScrolled && 'text-forest-600 dark:text-sand-400 md:text-stone-300'}`}>
                Coorg, Madikeri
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeSection === item.href.substring(1)
                    ? isScrolled
                      ? 'text-forest-700 dark:text-sand-300 font-semibold'
                      : 'text-forest-700 dark:text-sand-300 md:text-white font-semibold'
                    : isScrolled
                      ? 'text-forest-600 hover:text-forest-900 dark:text-stone-300 dark:hover:text-white'
                      : 'text-stone-700 hover:text-forest-900 dark:text-stone-300 dark:hover:text-white md:text-stone-200 md:hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full ${
                    isScrolled ? 'bg-forest-600 dark:bg-sand-400' : 'bg-forest-600 dark:bg-sand-400 md:bg-white'
                  }`} />
                )}
              </a>
            ))}
          </div>

          {/* Right Action Icons (Dark Mode, Bookings, CTA Button) */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-300 hover:scale-105 focus:outline-none ${
                isScrolled
                  ? 'hover:bg-forest-100 dark:hover:bg-forest-800 text-forest-600 dark:text-sand-300'
                  : 'hover:bg-white/10 text-white md:text-white'
              } ${!isScrolled && 'text-forest-600 dark:text-sand-300 md:text-white'}`}
              title="Toggle Dark Mode"
              id="theme-toggle-btn"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-amber-300" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Booking History Badge Trigger */}
            <button
              onClick={openHistoryModal}
              className={`relative p-2 rounded-full transition-colors duration-300 hover:scale-105 focus:outline-none ${
                isScrolled
                  ? 'hover:bg-forest-100 dark:hover:bg-forest-800 text-forest-600 dark:text-sand-300'
                  : 'hover:bg-white/10 text-white md:text-white'
              } ${!isScrolled && 'text-forest-600 dark:text-sand-300 md:text-white'}`}
              title="My Booking History"
              id="booking-history-btn"
            >
              <CalendarDays className="h-5 w-5" />
              {bookingCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-pulse">
                  {bookingCount}
                </span>
              )}
            </button>

            {/* Quick Action Book CTA */}
            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, '#booking')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-md transform active:scale-95 ${
                isScrolled
                  ? 'bg-forest-700 text-white hover:bg-forest-800 dark:bg-sand-400 dark:text-forest-950 dark:hover:bg-sand-300'
                  : 'bg-white text-forest-950 hover:bg-stone-100 md:bg-white md:text-forest-950'
              } ${!isScrolled && 'bg-forest-700 text-white dark:bg-sand-400 dark:text-forest-950'}`}
              id="quick-book-btn"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Buttons Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors focus:outline-none ${
                isScrolled
                  ? 'text-forest-600 dark:text-sand-300'
                  : 'text-white md:text-white'
              } ${!isScrolled && 'text-forest-600 dark:text-sand-300 md:text-white'}`}
              id="mobile-theme-toggle"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-amber-300" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Booking History Trigger for Mobile */}
            <button
              onClick={openHistoryModal}
              className={`relative p-2 rounded-full transition-colors focus:outline-none ${
                isScrolled
                  ? 'text-forest-600 dark:text-sand-300'
                  : 'text-white md:text-white'
              } ${!isScrolled && 'text-forest-600 dark:text-sand-300 md:text-white'}`}
              id="mobile-history-trigger"
            >
              <CalendarDays className="h-5 w-5" />
              {bookingCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {bookingCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-colors focus:outline-none ${
                isScrolled
                  ? 'text-forest-800 dark:text-sand-100'
                  : 'text-white md:text-white'
              } ${!isScrolled && 'text-forest-800 dark:text-sand-100 md:text-white'}`}
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {isOpen && (
        <div
          className={`lg:hidden animate-fade-in-down transition-all duration-300 ${
            isDarkMode ? 'bg-forest-950/95 border-b border-forest-800' : 'bg-sand-50/95 border-b border-forest-100'
          } shadow-2xl py-4 px-4 space-y-2`}
          id="mobile-nav-drawer"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                activeSection === item.href.substring(1)
                  ? 'bg-forest-600 text-white dark:bg-sand-400 dark:text-forest-950'
                  : 'text-forest-800 hover:bg-forest-100/50 dark:text-stone-300 dark:hover:bg-forest-900/40'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-forest-200/40 dark:border-forest-800/60">
            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, '#booking')}
              className="block w-full py-3 px-4 rounded-full text-center text-sm font-semibold uppercase tracking-wider bg-forest-700 text-white hover:bg-forest-800 dark:bg-sand-400 dark:text-forest-950 dark:hover:bg-sand-300 shadow-md"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
