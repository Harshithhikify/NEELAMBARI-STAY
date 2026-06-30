import { Compass, Sparkles, MapPin, Home, Star } from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data';

interface WhyChooseUsProps {
  isDarkMode: boolean;
}

export default function WhyChooseUs({ isDarkMode }: WhyChooseUsProps) {
  // Map icons to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="h-6 w-6" />;
      case 'Sparkles':
        return <Sparkles className="h-6 w-6" />;
      case 'MapPin':
        return <MapPin className="h-6 w-6" />;
      case 'Home':
        return <Home className="h-6 w-6" />;
      default:
        return <Star className="h-6 w-6" />;
    }
  };

  return (
    <section
      id="why-choose-us"
      className={`py-24 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'bg-forest-950 text-white' : 'bg-sand-50 text-forest-950'
      }`}
    >
      {/* Decorative organic background shape */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-sand-100 dark:bg-forest-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="why-choose-header">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Sparkles className="h-4 w-4 text-sand-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-sand-500 font-bold">
              Why Choose Neelambari
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            A Crafted Homestay Experience
          </h2>
          <p className="text-sm text-forest-600 dark:text-stone-300 font-light leading-relaxed">
            We bridge the warm hospitality of an authentic Coorg family homestay with the flawless amenities and layout of a high-end luxury retreat.
          </p>
        </div>

        {/* Reason Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="why-choose-grid">
          {WHY_CHOOSE_US_DATA.map((item, idx) => (
            <div
              key={item.title}
              className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2 ${
                isDarkMode
                  ? 'bg-forest-900/40 border-forest-800/60 hover:bg-forest-900/70 hover:border-forest-700'
                  : 'bg-white border-forest-100 hover:bg-white hover:border-forest-200'
              }`}
              id={`why-choose-card-${idx}`}
            >
              <div>
                {/* Custom Icon Wrapper with light colored themes */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${item.bgTheme}`}>
                  {getIcon(item.icon)}
                </div>

                <h3 className="font-serif text-lg font-bold tracking-tight mb-3">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-forest-600 dark:text-stone-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Little bottom design accent */}
              <div className="mt-8 pt-4 border-t border-forest-100/5 dark:border-forest-800/10 flex items-center justify-between">
                <span className="text-xxs font-mono uppercase tracking-wider text-forest-400 dark:text-stone-500">
                  Feature 0{idx + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-sand-400/50" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
