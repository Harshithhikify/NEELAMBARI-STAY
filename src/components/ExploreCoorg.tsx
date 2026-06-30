import { useState } from 'react';
import { MapPin, Navigation, Clock, Sparkles, Car, Info, X } from 'lucide-react';
import { Attraction } from '../types';
import { COORG_ATTRACTIONS } from '../data';

interface ExploreCoorgProps {
  isDarkMode: boolean;
}

export default function ExploreCoorg({ isDarkMode }: ExploreCoorgProps) {
  const [activeRoute, setActiveRoute] = useState<Attraction | null>(null);

  return (
    <section
      id="attractions"
      className={`py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-forest-900 text-white' : 'bg-sand-100/40 text-forest-950'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="coorg-header">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Sparkles className="h-4 w-4 text-sand-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-sand-500 font-bold">
              Local Destination Guide
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Explore Scenic Coorg
          </h2>
          <p className="text-sm text-forest-600 dark:text-stone-300 font-light leading-relaxed">
            Neelambari Stay is strategically nestled near Madikeri, putting you within brief scenic drives of legendary mountain lookouts, temples, waterfalls, and safaris.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="attractions-grid">
          {COORG_ATTRACTIONS.map((attraction) => (
            <div
              key={attraction.id}
              className={`group rounded-3xl overflow-hidden shadow-lg border flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 ${
                isDarkMode ? 'bg-forest-950/70 border-forest-800' : 'bg-white border-forest-100'
              }`}
              id={`attraction-card-${attraction.id}`}
            >
              {/* Card Image Cover with info tags */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Distance Indicator Overlay */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-forest-950/80 backdrop-blur-md text-white text-[10px] font-mono flex items-center gap-1.5 shadow-md">
                  <MapPin className="h-3 w-3 text-sand-300" />
                  <span>{attraction.distance}</span>
                </div>

                {/* Drive Time Tag */}
                <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[9px] font-mono flex items-center gap-1">
                  <Clock className="h-3 w-3 text-amber-300" />
                  <span>{attraction.travelTime}</span>
                </div>
              </div>

              {/* Card Content body */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold tracking-tight mb-2 group-hover:text-sand-600 dark:group-hover:text-sand-300 transition-colors">
                    {attraction.name}
                  </h3>
                  <p className="text-xs text-forest-600 dark:text-stone-300 leading-relaxed font-light mb-4">
                    {attraction.description}
                  </p>
                </div>

                {/* Action Route Trigger */}
                <button
                  onClick={() => setActiveRoute(attraction)}
                  className={`w-full py-2.5 rounded-xl text-[10px] font-semibold uppercase tracking-wider font-mono transition-all duration-300 flex items-center justify-center gap-1.5 border cursor-pointer ${
                    isDarkMode
                      ? 'bg-forest-900 border-forest-800 hover:bg-forest-800 text-stone-200'
                      : 'bg-stone-50 border-forest-100 hover:bg-stone-100 text-forest-800'
                  }`}
                >
                  <Navigation className="h-3.5 w-3.5 text-sand-500 animate-pulse" />
                  Show Route Guide
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simulated Interactive Route Map Guide Modal */}
      {activeRoute && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveRoute(null)}
          id="route-guide-modal"
        >
          <div
            className={`w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border transition-all duration-300 ${
              isDarkMode ? 'bg-forest-950 text-white border-forest-800' : 'bg-white text-forest-950 border-forest-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-forest-200/40 dark:border-forest-800/60 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Navigation className="h-5 w-5 text-sand-500 animate-bounce" />
                <h3 className="font-serif text-lg font-bold tracking-tight">
                  Travel Route Guide
                </h3>
              </div>
              <button
                onClick={() => setActiveRoute(null)}
                className="p-1 hover:bg-forest-100 dark:hover:bg-forest-800 rounded-full transition-colors text-stone-500 hover:text-stone-800 dark:hover:text-white focus:outline-none"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Simulated Vector Map Panel */}
            <div className="p-6 bg-stone-900/10 dark:bg-stone-900/30 flex justify-center items-center h-48 relative border-b border-forest-200/40 dark:border-forest-800/60">
              {/* Stylized geometric background representing routes */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%">
                  <line x1="10%" y1="20%" x2="40%" y2="50%" stroke="#be8437" strokeWidth="2" strokeDasharray="5" />
                  <line x1="40%" y1="50%" x2="80%" y2="30%" stroke="#be8437" strokeWidth="4" />
                  <circle cx="10%" cy="20%" r="5" fill="#3f654c" />
                  <circle cx="40%" cy="50%" r="8" fill="#be8437" />
                  <circle cx="80%" cy="30%" r="12" fill="#be8437" className="animate-ping" />
                </svg>
              </div>

              {/* Route Summary overlay card */}
              <div className={`p-4 rounded-xl shadow-md border max-w-xs text-center relative z-10 ${
                isDarkMode ? 'bg-forest-900 border-forest-800' : 'bg-white border-forest-100'
              }`}>
                <Car className="h-6 w-6 text-sand-500 mx-auto mb-2 animate-bounce" />
                <span className="block text-xxs font-mono uppercase tracking-wider text-forest-400">
                  Total Travel Estimate
                </span>
                <span className="block font-serif text-lg font-bold text-forest-900 dark:text-sand-300 mt-0.5">
                  {activeRoute.distance} ({activeRoute.travelTime})
                </span>
              </div>
            </div>

            {/* Instruction Steps */}
            <div className="p-6 space-y-4">
              <div className="flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-forest-500 dark:text-stone-400">Departure</h4>
                  <p className="text-xs font-medium text-forest-900 dark:text-stone-200 mt-0.5">
                    Depart from Neelambari Stay gates onto Kadagadal - Boikeri Road.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-700 dark:text-amber-400 font-mono text-xs font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-forest-500 dark:text-stone-400">Main Junction</h4>
                  <p className="text-xs font-medium text-forest-900 dark:text-stone-200 mt-0.5">
                    Turn toward Madikeri Bypass or main highway depending on route.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-950 flex items-center justify-center text-rose-700 dark:text-rose-400 font-mono text-xs font-bold animate-pulse">
                  3
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-forest-500 dark:text-stone-400">Destination Arrival</h4>
                  <p className="text-xs font-medium text-forest-900 dark:text-stone-200 mt-0.5">
                    Arrive smoothly at <strong>{activeRoute.name}</strong>. Enjoy!
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeRoute.name + ', Madikeri, Coorg, Karnataka')}`, '_blank');
                }}
                className="w-full py-3 rounded-xl bg-sand-500 hover:bg-sand-600 text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 mt-4 cursor-pointer"
              >
                Open Real GPS Navigation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
