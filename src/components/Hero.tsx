import { ArrowRight, Sparkles, MapPin, Coffee, Waves } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

export default function Hero({ isDarkMode }: HeroProps) {
  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const topOffset = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Parallax Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAE97Y3U-5_bLujCqX5-DTW-Kbg3W-JxxN1l_Qn6MLBbXqbRfuHetUoTdeOz-m0ugd9QsASFdZ-QnFI0zYcB5GMMHW4CIJUbYy0Ewg7xZp8H9zcoxYTWhj9ZYTMxWpWtLcz41qg=w1600"
          alt="Misty Coffee Plantation Sunrise in Madikeri Coorg"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-glow"
          style={{ transform: 'translateY(0px)' }}
        />
        {/* Soft, luxurious dark/green overlay gradient to make text incredibly readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/60 to-forest-950/45" />
      </div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-12">
        {/* Estate Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in">
          <Sparkles className="h-4 w-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-xs uppercase tracking-widest font-mono text-stone-200">
            Coorg's Premier Luxury Homestay
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 drop-shadow-xl">
          <span className="block animate-slide-up leading-tight">Experience Serenity at</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sand-200 via-amber-200 to-sand-300 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Neelambari Stay
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-stone-200 mb-10 drop-shadow-md font-sans font-light tracking-wide animate-slide-up" style={{ animationDelay: '400ms' }}>
          A peaceful getaway in the heart of Coorg where comfort meets nature. Wake up to pristine forest views, morning mountain mist, and organic estates.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '600ms' }}>
          <button
            onClick={() => handleScrollTo('#booking')}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-widest bg-sand-400 text-forest-950 hover:bg-sand-300 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
            id="hero-book-now"
          >
            Book Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => handleScrollTo('#rooms')}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-widest bg-white/15 text-white hover:bg-white/25 border border-white/30 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            id="hero-explore-rooms"
          >
            Explore Rooms
          </button>
        </div>

        {/* Featured Amenities Pills for Quick Highlight */}
        <div className="hidden md:flex items-center justify-center gap-8 mt-16 text-xs text-stone-300/90 font-mono animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-sand-300" />
            <span>Madikeri, Coorg</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-sand-400/60" />
          <div className="flex items-center gap-1.5">
            <Waves className="h-4 w-4 text-sand-300" />
            <span>Luxury Pool Access</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-sand-400/60" />
          <div className="flex items-center gap-1.5">
            <Coffee className="h-4 w-4 text-sand-300" />
            <span>Surrounded by Coffee Estate</span>
          </div>
        </div>
      </div>

      {/* Decorative Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden line-height-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`relative block w-full h-[60px] translate-y-[1px] ${
            isDarkMode ? 'fill-forest-950' : 'fill-sand-50'
          }`}
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V30.27C1124.4,2.28,1051.85,110.15,985.66,92.83Z" />
        </svg>
      </div>

      {/* Scroll Down mouse wheel visual indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <button
          onClick={() => handleScrollTo('#about')}
          className="flex flex-col items-center gap-1.5 text-stone-400 hover:text-white transition-colors duration-300 focus:outline-none"
          aria-label="Scroll to About Section"
          id="scroll-indicator"
        >
          <span className="text-[10px] uppercase tracking-widest font-mono">Discover More</span>
          <div className="w-5 h-8 border-2 border-stone-400/50 rounded-full p-1 flex justify-center">
            <div className="w-1.5 h-2.5 bg-sand-400 rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
