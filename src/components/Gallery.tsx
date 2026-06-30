import { useState, useEffect } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';

interface GalleryProps {
  isDarkMode: boolean;
}

export default function Gallery({ isDarkMode }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Coffee Estate', 'Exterior', 'Rooms', 'Swimming Pool', 'Garden', 'Scenic Views', 'Family Areas'];

  const filteredImages = activeFilter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeFilter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNextLightbox();
      if (e.key === 'ArrowLeft') handlePrevLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section
      id="gallery"
      className={`py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-forest-900 text-white' : 'bg-sand-100/30 text-forest-950'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12" id="gallery-header">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Sparkles className="h-4 w-4 text-sand-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-sand-500 font-bold">
              Visual Showcase
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Neelambari in Frames
          </h2>
          <p className="text-sm text-forest-600 dark:text-stone-300 font-light leading-relaxed">
            A glimpse into the quiet comfort of our rooms, the refreshing azure waters of our pool, and the lush forest pathways surrounding our property.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none"
          id="gallery-filters"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === category
                  ? 'bg-forest-700 text-white dark:bg-sand-400 dark:text-forest-950 shadow-md'
                  : isDarkMode
                    ? 'bg-forest-800 hover:bg-forest-750 text-stone-300'
                    : 'bg-white hover:bg-stone-50 text-forest-700 border border-forest-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance] mx-auto"
          id="gallery-masonry-grid"
        >
          {filteredImages.map((image, index) => (
            <div
              key={image.src + index}
              className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-forest-100/10"
              onClick={() => setLightboxIndex(index)}
              id={`gallery-item-${index}`}
            >
              {/* Image element with zoom effects */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Sophisticated Hover Cover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] uppercase tracking-widest font-mono text-sand-300">
                  {image.category}
                </span>
                <h3 className="font-serif text-white text-base font-bold mt-1 mb-2">
                  {image.alt}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-white/80 font-mono">
                  <Maximize2 className="h-3.5 w-3.5 text-sand-300" />
                  <span>Enlarge Frame</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12 text-forest-500" id="gallery-empty">
            <ImageIcon className="h-10 w-10 mx-auto mb-2 text-stone-400" />
            <p className="text-xs font-mono">No images found in this category.</p>
          </div>
        )}

      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
          id="gallery-lightbox"
        >
          {/* Top Panel */}
          <div className="absolute top-4 left-0 right-0 px-6 flex justify-between items-center text-white z-10">
            <div className="font-mono text-xs text-stone-300">
              <span className="text-sand-300 font-bold uppercase mr-2">
                {filteredImages[lightboxIndex].category}
              </span>
              <span>
                {lightboxIndex + 1} of {filteredImages.length}
              </span>
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-white focus:outline-none text-xl"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrevLightbox(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors focus:outline-none hidden md:block"
            aria-label="Previous Frame"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Active Image */}
          <div
            className="relative max-w-5xl max-h-[75vh] flex items-center justify-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl animate-scale-up"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); handleNextLightbox(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors focus:outline-none hidden md:block"
            aria-label="Next Frame"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Description caption text */}
          <div className="absolute bottom-6 left-0 right-0 px-6 text-center text-white z-10 max-w-2xl mx-auto">
            <p className="font-serif text-sm sm:text-base tracking-wide text-stone-200">
              {filteredImages[lightboxIndex].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
