import { Check, ShieldCheck, Award, HeartHandshake, Compass } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  const stats = [
    { label: 'Rating on Agoda & Booking', value: '4.9/5' },
    { label: 'Attractions within 15 Mins', value: '8+' },
    { label: 'Aromatic Coffee Plantations', value: '100%' },
    { label: 'Happy Guest Reviews', value: '500+' }
  ];

  const highlights = [
    'Peaceful Location & Valley Views',
    'Spacious, Hand-Furnished Rooms',
    'Sparkling Outdoor Swimming Pool',
    'Free Secured Private Parking'
  ];

  return (
    <section
      id="about"
      className={`py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-forest-950 text-white' : 'bg-sand-50 text-forest-950'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Column 1: Image Composition with overlapping design */}
          <div className="relative group" id="about-image-composition">
            {/* Background earthy accent blob */}
            <div className="absolute -top-6 -left-6 w-72 h-72 rounded-3xl bg-forest-200 dark:bg-forest-900/40 mix-blend-multiply filter blur-2xl opacity-70 animate-pulse" />
            
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-forest-100/20 z-10 aspect-[4/3] group">
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGGhm7G2RyYi90hA36b5NGDVZPtLQZpo5BkSmkcx96_OYCBTXvQe_ZoV4S266FM0wPG9lmZX0yMuacZGb_YyaFk-46aN1NmIkz8VrFmtP0knRQSDGkWjb8dxzcOLmrne6OjjtS8tCHFq1mY=w1200"
                alt="Madikeri Coorg valley surroundings and coffee garden at Neelambari"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Overlapping secondary floating card */}
            <div className={`absolute -bottom-8 -right-4 md:-right-8 z-20 p-5 rounded-2xl shadow-xl border max-w-xs transition-transform duration-500 hover:scale-105 ${
              isDarkMode ? 'glass-dark border-forest-800' : 'glass-light border-forest-100'
            }`}>
              <div className="flex items-start space-x-3">
                <div className="p-3 bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 rounded-xl">
                  <Compass className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold tracking-tight">Kadagadal, Coorg</h4>
                  <p className="text-xs text-forest-600 dark:text-stone-300 mt-1 leading-relaxed">
                    Perched in the lush mountains of Madikeri, surrounded by fresh morning mist and aromatic coffee estates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Text & Stats */}
          <div id="about-content">
            <div className="flex items-center space-x-2 mb-4">
              <span className="h-[2px] w-8 bg-sand-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-sand-500 font-bold">
                Luxury Nature Escape
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500 dark:from-sand-300 dark:to-amber-200">Neelambari Stay</span>
            </h2>

            <p className="text-base leading-relaxed text-forest-800 dark:text-stone-300 mb-8 font-light">
              Neelambari Stay is a peaceful homestay located near Madikeri in Coorg. Surrounded by lush greenery and fresh mountain air, it offers guests a relaxing escape from city life. Whether you're visiting with family, friends, or as a couple, our stay provides spacious rooms, a calm atmosphere, and easy access to Coorg's famous attractions.
            </p>

            {/* Highlights bullet grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm font-medium text-forest-900 dark:text-stone-200">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats Counter Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-forest-200/40 dark:border-forest-800/60">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <span className="block font-serif text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sand-500 to-amber-600 dark:from-sand-300 dark:to-amber-300">
                    {stat.value}
                  </span>
                  <span className="block text-xxs sm:text-xs text-forest-500 dark:text-stone-400 mt-1 uppercase tracking-wider font-mono">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
