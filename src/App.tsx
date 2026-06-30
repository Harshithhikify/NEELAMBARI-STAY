import { useState, useEffect } from 'react';
import { Phone, ArrowUp, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import ExploreCoorg from './components/ExploreCoorg';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingHistory from './components/BookingHistory';
import { Booking } from './types';

export default function App() {
  // Theme State
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('neelambari_theme');
    return savedTheme === 'dark';
  });

  // Booking details & History Drawer state
  const [selectedRoomId, setSelectedRoomId] = useState('standard-room');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  // Floating Widgets State
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Sync dark mode class on HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('neelambari_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('neelambari_theme', 'light');
    }
  }, [isDarkMode]);

  // Load bookings on mount
  useEffect(() => {
    const existing = localStorage.getItem('neelambari_bookings');
    if (existing) {
      try {
        setBookings(JSON.parse(existing));
      } catch (e) {
        console.error('Error parsing bookings', e);
      }
    }

    // Simulate luxury loader sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  // Monitor window scroll to show scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleBookingSuccess = () => {
    // Reload local storage state
    const existing = localStorage.getItem('neelambari_bookings');
    if (existing) {
      try {
        setBookings(JSON.parse(existing));
      } catch (e) {
        console.error('Error reloading bookings', e);
      }
    }
  };

  const handleDeleteBooking = (id: string) => {
    const filtered = bookings.filter((b) => b.id !== id);
    setBookings(filtered);
    localStorage.setItem('neelambari_bookings', JSON.stringify(filtered));
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-sand-50 dark:bg-forest-950 transition-colors duration-500">
        <div className="relative flex flex-col items-center text-center px-4 animate-scale-up">
          {/* Logo element icon */}
          <div className="p-4 rounded-full bg-forest-100 dark:bg-forest-900/60 text-forest-800 dark:text-sand-300 mb-4 shadow-xl animate-spin" style={{ animationDuration: '8s' }}>
            <Sparkles className="h-8 w-8 text-sand-500" />
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-widest text-forest-950 dark:text-white mb-2">
            Neelambari Stay
          </h1>
          <p className="text-xxs uppercase tracking-widest font-mono text-sand-500 font-bold mb-6">
            Lush Coorg • Mountain Escape
          </p>

          {/* Loader bar */}
          <div className="w-48 h-[3px] bg-forest-200 dark:bg-forest-800 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-gradient-to-r from-sand-500 to-amber-500 rounded-full animate-infinite-slide" style={{ animation: 'shimmer 1.5s infinite ease-in-out' }} />
          </div>
        </div>
        
        {/* Shimmer animation inline CSS styles */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
        `}} />
      </div>
    );
  }

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${
      isDarkMode ? 'bg-forest-950 text-white' : 'bg-sand-50 text-forest-950'
    }`} id="app-viewport-root">
      
      {/* Premium Sticky Navigation */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        openHistoryModal={() => setIsHistoryOpen(true)}
        bookingCount={bookings.length}
      />

      {/* Main Page Layout Segment Components */}
      <main id="main-content-flow">
        {/* Hero Banner Section */}
        <Hero isDarkMode={isDarkMode} />

        {/* Narrative / About Section */}
        <About isDarkMode={isDarkMode} />

        {/* Accommodations Grid */}
        <Rooms
          isDarkMode={isDarkMode}
          onSelectRoom={(roomId) => setSelectedRoomId(roomId)}
        />

        {/* Amenities Icons Row */}
        <Amenities isDarkMode={isDarkMode} />

        {/* Mosaic / Photo Gallery */}
        <Gallery isDarkMode={isDarkMode} />

        {/* Why Choose Us bento blocks */}
        <WhyChooseUs isDarkMode={isDarkMode} />

        {/* Attractions map & guide points */}
        <ExploreCoorg isDarkMode={isDarkMode} />

        {/* Ratings and Reviews carousels */}
        <Testimonials isDarkMode={isDarkMode} />

        {/* Professional check-in/out Booking panel */}
        <BookingForm
          isDarkMode={isDarkMode}
          selectedRoomId={selectedRoomId}
          setSelectedRoomId={setSelectedRoomId}
          onBookingSuccess={handleBookingSuccess}
        />

        {/* Accordion FAQ inquiries */}
        <FAQ isDarkMode={isDarkMode} />

        {/* Google Maps & Physical Address detail blocks */}
        <Contact isDarkMode={isDarkMode} />
      </main>

      {/* Structured Footer */}
      <Footer isDarkMode={isDarkMode} />

      {/* Bookings Drawer popup modal */}
      <BookingHistory
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        bookings={bookings}
        isDarkMode={isDarkMode}
        onDeleteBooking={handleDeleteBooking}
      />

      {/* Floating Action Controls */}
      <div className="fixed right-6 bottom-6 z-40 flex flex-col space-y-3.5" id="floating-action-controls">
        {/* Scroll To Top button */}
        {showScrollTop && (
          <button
            onClick={handleScrollToTop}
            className={`p-3.5 rounded-full border shadow-xl flex items-center justify-center transition-all duration-300 transform scale-100 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer ${
              isDarkMode
                ? 'bg-forest-900 border-forest-800 hover:bg-forest-850 text-stone-200'
                : 'bg-white border-forest-100 hover:bg-stone-50 text-forest-850'
            }`}
            title="Scroll To Top"
            aria-label="Scroll to top"
            id="floating-scroll-top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}

        {/* Floating WhatsApp reservation helper */}
        <a
          href="https://wa.me/919876543210?text=Hello!%20I'm%20interested%20in%20booking%20a%20stay%20at%20Neelambari%20Stay,%20Coorg.%20Please%20share%20room%20availability%20and%20rates.%20Thank%20you!"
          target="_blank"
          rel="noreferrer"
          className="p-4 rounded-full bg-emerald-600 text-white shadow-xl flex items-center justify-center hover:bg-emerald-700 transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer hover:shadow-emerald-500/20 hover:shadow-2xl"
          title="Instant WhatsApp Support"
          aria-label="Chat on WhatsApp"
          id="floating-whatsapp-trigger"
        >
          <Phone className="h-5.5 w-5.5 fill-white" />
        </a>
      </div>

    </div>
  );
}
