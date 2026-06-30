import React, { useState, useEffect } from 'react';
import { CalendarDays, Phone, Mail, User, ShieldCheck, Waves, Sparkles, AlertCircle, FileSpreadsheet } from 'lucide-react';
import { ROOMS_DATA } from '../data';
import { Booking } from '../types';

interface BookingFormProps {
  isDarkMode: boolean;
  selectedRoomId: string;
  setSelectedRoomId: (id: string) => void;
  onBookingSuccess: () => void;
}

export default function BookingForm({
  isDarkMode,
  selectedRoomId,
  setSelectedRoomId,
  onBookingSuccess
}: BookingFormProps) {
  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [specialRequests, setSpecialRequests] = useState('');

  // UI state
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [nights, setNights] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Auto-fill dates with reasonable defaults (tomorrow and day after)
  useEffect(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Tomorrow
    const tmrStr = today.toISOString().split('T')[0];
    
    today.setDate(today.getDate() + 2); // Two days later
    const dayAfterStr = today.toISOString().split('T')[0];

    setCheckIn(tmrStr);
    setCheckOut(dayAfterStr);
  }, []);

  // Calculate nights and price
  useEffect(() => {
    if (!checkIn || !checkOut) {
      setNights(0);
      setTotalPrice(0);
      return;
    }

    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const timeDiff = d2.getTime() - d1.getTime();
    const calculatedNights = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (calculatedNights > 0) {
      setNights(calculatedNights);
      const selectedRoomObj = ROOMS_DATA.find(r => r.id === selectedRoomId);
      if (selectedRoomObj) {
        setTotalPrice(selectedRoomObj.pricePerNight * calculatedNights * rooms);
      }
    } else {
      setNights(0);
      setTotalPrice(0);
    }
  }, [checkIn, checkOut, selectedRoomId, rooms]);

  const validateForm = () => {
    if (!name.trim()) return 'Please enter your full name.';
    if (!phone.trim()) return 'Please enter your mobile phone number.';
    if (!email.trim() || !email.includes('@')) return 'Please enter a valid email address.';
    if (!checkIn) return 'Please specify a check-in date.';
    if (!checkOut) return 'Please specify a check-out date.';
    if (nights <= 0) return 'Check-out date must be after check-in date.';
    if (guests <= 0) return 'Number of guests must be at least 1.';
    if (rooms <= 0) return 'Number of rooms must be at least 1.';
    return '';
  };

  // Generate WhatsApp message template
  const generateWhatsAppLink = (bookingDetails: Booking) => {
    const phoneNo = '919876543210'; // Traditional Coorg Host Helpline Placeholder
    const text = `*NEW RESERVATION INQUIRY - NEELAMBARI STAY* 🏡🌿\n\n` +
      `• *Guest Name:* ${bookingDetails.name}\n` +
      `• *Mobile:* ${bookingDetails.phone}\n` +
      `• *Email:* ${bookingDetails.email}\n` +
      `• *Room Selected:* ${bookingDetails.roomType}\n` +
      `• *Check-in Date:* ${bookingDetails.checkIn}\n` +
      `• *Check-out Date:* ${bookingDetails.checkOut}\n` +
      `• *Stay Duration:* ${nights} Night(s)\n` +
      `• *Rooms Required:* ${bookingDetails.rooms}\n` +
      `• *Total Guests:* ${bookingDetails.guests} Person(s)\n` +
      `• *Estimated Total Tariff:* ₹${bookingDetails.totalPrice || 0}\n` +
      (bookingDetails.specialRequests ? `• *Special Requests:* _${bookingDetails.specialRequests}_\n` : '') +
      `\n_Please confirm room availability. Thank you!_ ✨`;

    return `https://wa.me/${phoneNo}?text=${encodeURIComponent(text)}`;
  };

  const handleBookingSubmit = (e: React.FormEvent, method: 'whatsapp' | 'manual') => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    const validationError = validateForm();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    const selectedRoomObj = ROOMS_DATA.find(r => r.id === selectedRoomId);
    const newBooking: Booking = {
      id: 'book_' + Date.now(),
      name,
      phone,
      email,
      checkIn,
      checkOut,
      guests,
      rooms,
      roomType: selectedRoomObj ? selectedRoomObj.name : 'Standard Room',
      specialRequests,
      status: 'pending',
      totalPrice,
      createdAt: new Date().toISOString()
    };

    // Save to localStorage
    const existingBookingsStr = localStorage.getItem('neelambari_bookings') || '[]';
    const existingBookings = JSON.parse(existingBookingsStr);
    existingBookings.push(newBooking);
    localStorage.setItem('neelambari_bookings', JSON.stringify(existingBookings));

    setSuccessMsg('Your reservation request has been drafted successfully!');
    onBookingSuccess();

    if (method === 'whatsapp') {
      // Wait briefly, then open WhatsApp in a new window
      setTimeout(() => {
        const waLink = generateWhatsAppLink(newBooking);
        window.open(waLink, '_blank');
      }, 500);
    }
  };

  return (
    <section
      id="booking"
      className={`py-24 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'bg-forest-900 text-white' : 'bg-sand-100/50 text-forest-950'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Informative Content Left */}
          <div className="lg:col-span-5 space-y-8" id="booking-left-panel">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-sand-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-sand-500 font-bold">
                Instantly Reserve
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Reserve Your Blissful Retreat
            </h2>

            <p className="text-sm text-forest-600 dark:text-stone-300 leading-relaxed font-light">
              Secure your stay at Neelambari. Fill out our simple booking form below. You can send your inquiries directly to our hosts via WhatsApp to get immediate responses, or draft a booking directly onto our local guest logs.
            </p>

            {/* Quick Policy details */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-forest-100 dark:bg-forest-950 text-forest-700 dark:text-sand-300">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-tight">Flexible Cancellation</h4>
                  <p className="text-xs text-forest-500 dark:text-stone-400 mt-1">
                    Free cancellations up to 72 hours prior to your scheduled check-in hour.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-forest-100 dark:bg-forest-950 text-forest-700 dark:text-sand-300">
                  <Waves className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-tight">Direct WhatsApp Helpline</h4>
                  <p className="text-xs text-forest-500 dark:text-stone-400 mt-1">
                    Get answers about traditional dinners, estate pickups, or group campfires in minutes.
                  </p>
                </div>
              </div>
            </div>

            {/* Simulated Live Costing Summary Panel */}
            {nights > 0 && totalPrice > 0 && (
              <div className={`p-6 rounded-2xl border ${
                isDarkMode ? 'bg-forest-950/80 border-forest-800' : 'bg-white border-forest-100 shadow-lg'
              } animate-scale-up`} id="booking-live-calculator">
                <h4 className="text-xs font-mono uppercase tracking-widest text-sand-500 font-bold mb-3">
                  Live Costing Summary
                </h4>
                <div className="space-y-2.5 pb-4 border-b border-forest-200/40 dark:border-forest-800/60">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-forest-500 dark:text-stone-400">Duration of Stay:</span>
                    <span className="font-semibold">{nights} Night(s)</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-forest-500 dark:text-stone-400">Selected Room:</span>
                    <span className="font-semibold text-right max-w-[200px] truncate">
                      {ROOMS_DATA.find(r => r.id === selectedRoomId)?.name || 'Custom Stay'}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-forest-500 dark:text-stone-400">Rooms Needed:</span>
                    <span className="font-semibold">{rooms} Room(s)</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="font-serif text-sm font-bold">Estimated Total:</span>
                  <span className="font-serif text-2xl font-extrabold text-sand-600 dark:text-sand-400">
                    ₹{totalPrice}
                  </span>
                </div>
                <span className="block text-[9px] font-mono text-center text-forest-400 dark:text-stone-500 mt-3 uppercase">
                  *Excludes on-demand lunches, estate pick-ups or bonfire extra charges.
                </span>
              </div>
            )}
          </div>

          {/* Column 2: Booking Form Right */}
          <div className="lg:col-span-7" id="booking-form-panel">
            <form
              onSubmit={(e) => handleBookingSubmit(e, 'manual')}
              className={`p-6 sm:p-10 rounded-3xl border shadow-xl space-y-6 ${
                isDarkMode ? 'bg-forest-950/60 border-forest-800' : 'bg-white border-forest-100'
              }`}
            >
              <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight mb-4">
                Booking Details
              </h3>

              {/* Form Validation Errors / Success Alert box */}
              {errorMsg && (
                <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 text-xs flex items-start gap-2.5 border border-rose-200/50 dark:border-rose-900/40">
                  <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {successMsg && (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 text-xs flex items-start gap-2.5 border border-emerald-200/50 dark:border-emerald-900/40">
                  <ShieldCheck className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>{successMsg}</span>
                </div>
              )}

              {/* Grid 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="booking-name" className="text-xxs uppercase tracking-wider font-mono font-bold text-forest-600 dark:text-stone-400">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-forest-400" />
                    <input
                      id="booking-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-1 transition-all ${
                        isDarkMode
                          ? 'bg-forest-900 border-forest-800 focus:border-sand-400 focus:ring-sand-400 text-white'
                          : 'bg-stone-50 border-forest-100 focus:border-forest-600 focus:ring-forest-600 text-forest-950'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="booking-phone" className="text-xxs uppercase tracking-wider font-mono font-bold text-forest-600 dark:text-stone-400">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-forest-400" />
                    <input
                      id="booking-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-1 transition-all ${
                        isDarkMode
                          ? 'bg-forest-900 border-forest-800 focus:border-sand-400 focus:ring-sand-400 text-white'
                          : 'bg-stone-50 border-forest-100 focus:border-forest-600 focus:ring-forest-600 text-forest-950'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Input: Email */}
              <div className="space-y-1.5">
                <label htmlFor="booking-email" className="text-xxs uppercase tracking-wider font-mono font-bold text-forest-600 dark:text-stone-400">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-forest-400" />
                  <input
                    id="booking-email"
                    type="email"
                    required
                    placeholder="jane.doe@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-1 transition-all ${
                      isDarkMode
                        ? 'bg-forest-900 border-forest-800 focus:border-sand-400 focus:ring-sand-400 text-white'
                        : 'bg-stone-50 border-forest-100 focus:border-forest-600 focus:ring-forest-600 text-forest-950'
                    }`}
                  />
                </div>
              </div>

              {/* Grid 2: Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="booking-checkin" className="text-xxs uppercase tracking-wider font-mono font-bold text-forest-600 dark:text-stone-400">
                    Check-in Date
                  </label>
                  <div className="relative">
                    <CalendarDays className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-forest-400 pointer-events-none" />
                    <input
                      id="booking-checkin"
                      type="date"
                      required
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-1 transition-all ${
                        isDarkMode
                          ? 'bg-forest-900 border-forest-800 focus:border-sand-400 focus:ring-sand-400 text-white scheme-dark'
                          : 'bg-stone-50 border-forest-100 focus:border-forest-600 focus:ring-forest-600 text-forest-950'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="booking-checkout" className="text-xxs uppercase tracking-wider font-mono font-bold text-forest-600 dark:text-stone-400">
                    Check-out Date
                  </label>
                  <div className="relative">
                    <CalendarDays className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-forest-400 pointer-events-none" />
                    <input
                      id="booking-checkout"
                      type="date"
                      required
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-1 transition-all ${
                        isDarkMode
                          ? 'bg-forest-900 border-forest-800 focus:border-sand-400 focus:ring-sand-400 text-white scheme-dark'
                          : 'bg-stone-50 border-forest-100 focus:border-forest-600 focus:ring-forest-600 text-forest-950'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Grid 3: Selection fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="booking-roomtype" className="text-xxs uppercase tracking-wider font-mono font-bold text-forest-600 dark:text-stone-400">
                    Room Sanctuary
                  </label>
                  <select
                    id="booking-roomtype"
                    value={selectedRoomId}
                    onChange={(e) => setSelectedRoomId(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-1 transition-all cursor-pointer ${
                      isDarkMode
                        ? 'bg-forest-900 border-forest-800 focus:border-sand-400 focus:ring-sand-400 text-white'
                        : 'bg-stone-50 border-forest-100 focus:border-forest-600 focus:ring-forest-600 text-forest-950'
                    }`}
                  >
                    {ROOMS_DATA.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} (₹{r.pricePerNight})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="booking-rooms" className="text-xxs uppercase tracking-wider font-mono font-bold text-forest-600 dark:text-stone-400">
                    Rooms Count
                  </label>
                  <select
                    id="booking-rooms"
                    value={rooms}
                    onChange={(e) => setRooms(parseInt(e.target.value))}
                    className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-1 transition-all cursor-pointer ${
                      isDarkMode
                        ? 'bg-forest-900 border-forest-800 focus:border-sand-400 focus:ring-sand-400 text-white'
                        : 'bg-stone-50 border-forest-100 focus:border-forest-600 focus:ring-forest-600 text-forest-950'
                    }`}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n} Room{n > 1 && 's'}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="booking-guests" className="text-xxs uppercase tracking-wider font-mono font-bold text-forest-600 dark:text-stone-400">
                    Guests Count
                  </label>
                  <select
                    id="booking-guests"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-1 transition-all cursor-pointer ${
                      isDarkMode
                        ? 'bg-forest-900 border-forest-800 focus:border-sand-400 focus:ring-sand-400 text-white'
                        : 'bg-stone-50 border-forest-100 focus:border-forest-600 focus:ring-forest-600 text-forest-950'
                    }`}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n}>
                        {n} Guest{n > 1 && 's'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Textarea: Special requests */}
              <div className="space-y-1.5">
                <label htmlFor="booking-requests" className="text-xxs uppercase tracking-wider font-mono font-bold text-forest-600 dark:text-stone-400">
                  Special Requests / Inquiries
                </label>
                <textarea
                  id="booking-requests"
                  rows={3}
                  placeholder="e.g. Traditional homemade dinners, campfire arrangement, aromatic coffee tasting, airport pickup, extra bed, baby cot..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-1 transition-all resize-none ${
                    isDarkMode
                      ? 'bg-forest-900 border-forest-800 focus:border-sand-400 focus:ring-sand-400 text-white'
                      : 'bg-stone-50 border-forest-100 focus:border-forest-600 focus:ring-forest-600 text-forest-950'
                  }`}
                />
              </div>

              {/* Booking CTAs Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {/* Manual Draft Register */}
                <button
                  type="submit"
                  className={`w-full py-4 rounded-xl text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 border cursor-pointer hover:shadow-md ${
                    isDarkMode
                      ? 'bg-forest-800 hover:bg-forest-750 text-white border-forest-700'
                      : 'bg-stone-50 hover:bg-stone-100 border-forest-100 text-forest-900'
                  }`}
                  id="booking-draft-btn"
                >
                  <FileSpreadsheet className="h-4 w-4 text-sand-500 animate-pulse" />
                  Save Draft
                </button>

                {/* Instant WhatsApp Booking */}
                <button
                  type="button"
                  onClick={(e) => handleBookingSubmit(e, 'whatsapp')}
                  className="w-full py-4 rounded-xl text-xs font-semibold tracking-widest uppercase bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg transform active:scale-95 cursor-pointer"
                  id="booking-whatsapp-btn"
                >
                  <Phone className="h-4 w-4 fill-white animate-bounce" />
                  Book on WhatsApp
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
