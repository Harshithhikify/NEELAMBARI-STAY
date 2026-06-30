import { Waves, ParkingCircle, Wifi, Wind, Users, Compass, Flame, TreePine, HeartHandshake, Sparkles } from 'lucide-react';
import { AMENITIES_DATA } from '../data';

interface AmenitiesProps {
  isDarkMode: boolean;
}

export default function Amenities({ isDarkMode }: AmenitiesProps) {
  // Explicit mapping of icons to prevent dynamic import issues
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves':
        return <Waves className="h-6 w-6" />;
      case 'ParkingCircle':
        return <ParkingCircle className="h-6 w-6" />;
      case 'Wifi':
        return <Wifi className="h-6 w-6" />;
      case 'Wind':
        return <Wind className="h-6 w-6" />;
      case 'Users':
        return <Users className="h-6 w-6" />;
      case 'Compass':
        return <Compass className="h-6 w-6" />;
      case 'Flame':
        return <Flame className="h-6 w-6" />;
      case 'TreePine':
        return <TreePine className="h-6 w-6" />;
      case 'HeartHandshake':
        return <HeartHandshake className="h-6 w-6" />;
      default:
        return <Sparkles className="h-6 w-6" />;
    }
  };

  return (
    <section
      id="amenities"
      className={`py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-forest-950 text-white' : 'bg-sand-50 text-forest-950'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="amenities-header">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Sparkles className="h-4 w-4 text-sand-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-sand-500 font-bold">
              Resort Amenities
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            World-Class Comfort in Nature
          </h2>
          <p className="text-sm text-forest-600 dark:text-stone-300 font-light leading-relaxed">
            From dipping into our valley-facing swimming pool to taking guided walkabouts across dense coffee plantations, we curate elements of premium countryside leisure.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="amenities-grid">
          {AMENITIES_DATA.map((amenity) => (
            <div
              key={amenity.id}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 group hover:shadow-xl hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-forest-900/40 border-forest-800/60 hover:bg-forest-900/80 hover:border-forest-700'
                  : 'bg-white border-forest-100 hover:bg-white hover:border-forest-200'
              }`}
              id={`amenity-card-${amenity.id}`}
            >
              <div className="flex items-start space-x-4">
                {/* Icon Circle */}
                <div className={`p-4 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                  isDarkMode
                    ? 'bg-forest-800 text-sand-300 group-hover:bg-sand-400 group-hover:text-forest-950'
                    : 'bg-forest-50 text-forest-800 group-hover:bg-forest-700 group-hover:text-white'
                }`}>
                  {getIcon(amenity.iconName)}
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold tracking-tight mb-1.5">
                    {amenity.name}
                  </h3>
                  <p className="text-xs text-forest-600 dark:text-stone-400 leading-relaxed font-light">
                    {amenity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Smoking Policy Hint / Extra Note */}
        <div className="mt-12 text-center" id="amenities-policy-note">
          <p className="text-[11px] font-mono uppercase tracking-wider text-forest-500 dark:text-stone-400">
            🌱 Designated Smoking Areas Available • Eco-Friendly Policy Enforced
          </p>
        </div>

      </div>
    </section>
  );
}
