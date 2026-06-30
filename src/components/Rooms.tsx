import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Sparkles, MoveRight, Eye, Calendar, User, Maximize2 } from 'lucide-react';
import { Room } from '../types';
import { ROOMS_DATA } from '../data';

interface RoomsProps {
  isDarkMode: boolean;
  onSelectRoom: (roomId: string) => void;
}

export default function Rooms({ isDarkMode, onSelectRoom }: RoomsProps) {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [activeImageIndexes, setActiveImageIndexes] = useState<Record<string, number>>({});

  const handleNextImage = (roomId: string, imagesLength: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => {
      const current = prev[roomId] || 0;
      return { ...prev, [roomId]: (current + 1) % imagesLength };
    });
  };

  const handlePrevImage = (roomId: string, imagesLength: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => {
      const current = prev[roomId] || 0;
      return { ...prev, [roomId]: (current - 1 + imagesLength) % imagesLength };
    });
  };

  const triggerBookNow = (roomId: string) => {
    onSelectRoom(roomId);
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      const topOffset = (bookingSection as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="rooms"
      className={`py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-forest-900 text-white' : 'bg-sand-100/50 text-forest-950'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="rooms-header">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Sparkles className="h-4 w-4 text-sand-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-sand-500 font-bold">
              Luxury Accommodations
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our Private Sanctuaries
          </h2>
          <p className="text-sm text-forest-600 dark:text-stone-300 font-light leading-relaxed">
            Every room at Neelambari is tailored for ultimate comfort, featuring high-quality linens, handcrafted local teak wood fittings, and mesmerizing forest vistas.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="rooms-grid">
          {ROOMS_DATA.map((room) => {
            const currentImgIdx = activeImageIndexes[room.id] || 0;
            return (
              <div
                key={room.id}
                className={`group rounded-3xl overflow-hidden shadow-xl border flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  isDarkMode ? 'bg-forest-950/70 border-forest-800' : 'bg-white border-forest-100'
                }`}
                id={`room-card-${room.id}`}
              >
                {/* Dynamic Image Gallery Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden select-none">
                  <img
                    src={room.images[currentImgIdx]}
                    alt={`${room.name} gallery image`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Gallery Next/Prev Navigation */}
                  {room.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => handlePrevImage(room.id, room.images.length, e)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:outline-none"
                        aria-label="Previous Image"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={(e) => handleNextImage(room.id, room.images.length, e)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:outline-none"
                        aria-label="Next Image"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </>
                  )}

                  {/* Rating or Premium Tag overlay */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-forest-950/80 backdrop-blur-md text-white text-xxs font-mono uppercase tracking-widest flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                    <span>Luxury Stay</span>
                  </div>

                  {/* Size overlay */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/55 backdrop-blur-md text-white text-[10px] font-mono">
                    {room.size}
                  </div>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {room.images.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          idx === currentImgIdx ? 'bg-white w-3' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Card Body content */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Header: Name and Price */}
                    <div className="flex justify-between items-start mb-3 gap-2">
                      <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight">
                        {room.name}
                      </h3>
                      <div className="text-right flex-shrink-0">
                        <span className="block text-lg font-serif font-bold text-sand-600 dark:text-sand-400">
                          ₹{room.pricePerNight}
                        </span>
                        <span className="block text-[10px] uppercase tracking-widest font-mono text-forest-500 dark:text-stone-400">
                          / Night
                        </span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-forest-600 dark:text-stone-300 leading-relaxed font-light mb-6">
                      {room.description}
                    </p>

                    {/* Specifications badges */}
                    <div className="flex items-center gap-4 text-xxs text-forest-500 dark:text-stone-400 font-mono mb-6 pb-5 border-b border-forest-100 dark:border-forest-800">
                      <div className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5 text-sand-500" />
                        <span>Up to {room.maxGuests} Guests</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-forest-300 dark:bg-forest-700" />
                      <div className="flex items-center gap-1">
                        <Maximize2 className="h-3.5 w-3.5 text-sand-500" />
                        <span>{room.bedType}</span>
                      </div>
                    </div>

                    {/* Features list (Show top 4) */}
                    <div className="space-y-2 mb-6">
                      {room.features.slice(0, 4).map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                          <span className="text-xs text-forest-800 dark:text-stone-200 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Buttons action bar */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <button
                      onClick={() => setSelectedRoom(room)}
                      className={`py-3 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                        isDarkMode
                          ? 'bg-forest-800 text-white hover:bg-forest-700 border border-forest-700'
                          : 'bg-stone-50 text-forest-850 hover:bg-stone-100 border border-forest-100'
                      }`}
                      id={`view-details-${room.id}`}
                    >
                      <Eye className="h-3.5 w-3.5" />
                      Details
                    </button>
                    <button
                      onClick={() => triggerBookNow(room.id)}
                      className="py-3 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase bg-sand-500 text-white hover:bg-sand-600 transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
                      id={`book-now-${room.id}`}
                    >
                      <Calendar className="h-3.5 w-3.5" />
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* View Details Popup Modal */}
      {selectedRoom && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedRoom(null)}
          id="room-details-modal"
        >
          <div
            className={`w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border transition-all duration-300 scale-95 md:scale-100 ${
              isDarkMode ? 'bg-forest-950 text-white border-forest-800' : 'bg-white text-forest-950 border-forest-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Slider */}
            <div className="relative h-64 sm:h-80">
              <img
                src={selectedRoom.images[0]}
                alt={selectedRoom.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-xxs uppercase tracking-widest font-mono text-sand-300">
                  Detailed Preview
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1">
                  {selectedRoom.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors focus:outline-none text-xl"
                aria-label="Close details"
              >
                ✕
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1: Info and Specs */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-sand-500 font-bold mb-2">
                      About the Room
                    </h4>
                    <p className="text-sm text-forest-700 dark:text-stone-300 leading-relaxed font-light">
                      {selectedRoom.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-sand-500 font-bold mb-3">
                      All Room Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedRoom.features.map((feat) => (
                        <div key={feat} className="flex items-center space-x-2 text-xs">
                          <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                          <span className="font-medium text-forest-900 dark:text-stone-200">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column 2: Specs Sidebar & Quick CTA */}
                <div className={`p-6 rounded-2xl border flex flex-col justify-between ${
                  isDarkMode ? 'bg-forest-900/50 border-forest-800' : 'bg-sand-50 border-forest-100'
                }`}>
                  <div className="space-y-4">
                    <div className="pb-3 border-b border-forest-200/40 dark:border-forest-800/60">
                      <span className="block text-xxs uppercase tracking-widest font-mono text-forest-500 dark:text-stone-400">
                        Price Per Night
                      </span>
                      <span className="text-2xl font-serif font-bold text-sand-600 dark:text-sand-400">
                        ₹{selectedRoom.pricePerNight}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-forest-500 dark:text-stone-400">Size:</span>
                        <span className="font-semibold">{selectedRoom.size}</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-forest-500 dark:text-stone-400">Beds:</span>
                        <span className="font-semibold">{selectedRoom.bedType}</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-forest-500 dark:text-stone-400">Guests:</span>
                        <span className="font-semibold">Max {selectedRoom.maxGuests}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      triggerBookNow(selectedRoom.id);
                      setSelectedRoom(null);
                    }}
                    className="w-full py-3 rounded-xl bg-sand-500 hover:bg-sand-600 text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 mt-6 cursor-pointer"
                  >
                    Select Room
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
