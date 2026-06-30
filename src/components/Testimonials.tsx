import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

interface TestimonialsProps {
  isDarkMode: boolean;
}

export default function Testimonials({ isDarkMode }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section
      id="reviews"
      className={`py-24 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'bg-forest-950 text-white' : 'bg-sand-50 text-forest-950'
      }`}
    >
      {/* Decorative foliage shadows */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-forest-300/10 dark:bg-forest-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-12" id="reviews-header">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Sparkles className="h-4 w-4 text-sand-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-sand-500 font-bold">
              Guest Testimonials
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Stories from Our Guests
          </h2>
        </div>

        {/* Testimonials Slider Box */}
        <div className="relative" id="reviews-slider-container">
          
          {/* Big quotes icon backdrop */}
          <div className="absolute -top-10 -left-6 sm:-left-12 opacity-10 dark:opacity-5 text-forest-800 dark:text-sand-100 pointer-events-none">
            <Quote className="h-28 w-28" />
          </div>

          {/* Active Review Card */}
          <div
            className={`p-8 sm:p-12 rounded-3xl border shadow-xl transition-all duration-500 ${
              isDarkMode ? 'bg-forest-900/60 border-forest-800' : 'bg-white border-forest-100'
            }`}
            id={`testimonial-slide-${activeIndex}`}
          >
            {/* Star Rating row */}
            <div className="flex items-center space-x-1 mb-6 text-amber-500 justify-center">
              {[...Array(TESTIMONIALS_DATA[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>

            {/* Comment Copy */}
            <p className="text-base sm:text-lg md:text-xl font-light text-center leading-relaxed text-forest-900 dark:text-stone-200 mb-8 italic">
              "{TESTIMONIALS_DATA[activeIndex].comment}"
            </p>

            {/* Profile Row */}
            <div className="flex flex-col items-center text-center">
              <img
                src={TESTIMONIALS_DATA[activeIndex].avatar}
                alt={TESTIMONIALS_DATA[activeIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-sand-400 mb-3 shadow-md"
              />
              <span className="font-serif text-base font-bold tracking-tight block">
                {TESTIMONIALS_DATA[activeIndex].name}
              </span>
              <span className="text-xxs uppercase tracking-widest font-mono text-forest-500 dark:text-stone-400 mt-0.5">
                {TESTIMONIALS_DATA[activeIndex].location}
              </span>
            </div>
          </div>

          {/* Left / Right Nav Arrows */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={handlePrev}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-none cursor-pointer ${
                isDarkMode
                  ? 'bg-forest-900 hover:bg-forest-800 border-forest-800 text-stone-200'
                  : 'bg-white hover:bg-stone-50 border-forest-150 text-forest-850 shadow-sm'
              }`}
              aria-label="Previous Review"
              id="reviews-prev"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none cursor-pointer ${
                    idx === activeIndex
                      ? 'bg-sand-500 w-6'
                      : 'bg-forest-300 dark:bg-forest-800'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-none cursor-pointer ${
                isDarkMode
                  ? 'bg-forest-900 hover:bg-forest-800 border-forest-800 text-stone-200'
                  : 'bg-white hover:bg-stone-50 border-forest-150 text-forest-850 shadow-sm'
              }`}
              aria-label="Next Review"
              id="reviews-next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
