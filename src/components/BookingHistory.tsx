import { X, Calendar, Phone, Mail, FileText, Trash2, Send, CheckCircle } from 'lucide-react';
import { Booking } from '../types';

interface BookingHistoryProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: Booking[];
  isDarkMode: boolean;
  onDeleteBooking: (id: string) => void;
}

export default function BookingHistory({
  isOpen,
  onClose,
  bookings,
  isDarkMode,
  onDeleteBooking
}: BookingHistoryProps) {
  if (!isOpen) return null;

  const handleWhatsAppInquiry = (booking: Booking) => {
    const phoneNo = '919876543210';
    // Calculate nights for the message
    const d1 = new Date(booking.checkIn);
    const d2 = new Date(booking.checkOut);
    const timeDiff = d2.getTime() - d1.getTime();
    const nights = Math.max(1, Math.ceil(timeDiff / (1000 * 3600 * 24)));

    const text = `*NEW RESERVATION INQUIRY - NEELAMBARI STAY* 🏡🌿\n\n` +
      `• *Guest Name:* ${booking.name}\n` +
      `• *Mobile:* ${booking.phone}\n` +
      `• *Email:* ${booking.email}\n` +
      `• *Room Selected:* ${booking.roomType}\n` +
      `• *Check-in Date:* ${booking.checkIn}\n` +
      `• *Check-out Date:* ${booking.checkOut}\n` +
      `• *Stay Duration:* ${nights} Night(s)\n` +
      `• *Rooms Required:* ${booking.rooms}\n` +
      `• *Total Guests:* ${booking.guests} Person(s)\n` +
      `• *Estimated Total Tariff:* ₹${booking.totalPrice || 0}\n` +
      (booking.specialRequests ? `• *Special Requests:* _${booking.specialRequests}_\n` : '') +
      `\n_Please confirm room availability. Thank you!_ ✨`;

    window.open(`https://wa.me/${phoneNo}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      id="booking-history-overlay"
    >
      <div
        className={`w-full max-w-md h-full shadow-2xl flex flex-col justify-between transition-transform duration-500 transform translate-x-0 ${
          isDarkMode ? 'bg-forest-950 text-white border-l border-forest-800' : 'bg-white text-forest-950 border-l border-forest-100'
        }`}
        onClick={(e) => e.stopPropagation()}
        id="booking-history-sidebar"
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-forest-200/40 dark:border-forest-800/60 flex justify-between items-center">
          <div className="flex items-center space-x-2.5">
            <Calendar className="h-5 w-5 text-sand-500 animate-pulse" />
            <h3 className="font-serif text-lg font-bold tracking-tight">
              My Booking Drafts
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-forest-100 dark:hover:bg-forest-800 rounded-full transition-colors text-stone-500 hover:text-stone-800 dark:hover:text-white focus:outline-none"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Sidebar Bookings List Body */}
        <div className="flex-grow p-6 overflow-y-auto space-y-6">
          {bookings.length === 0 ? (
            <div className="text-center py-20 text-forest-500" id="bookings-history-empty">
              <Calendar className="h-12 w-12 mx-auto mb-3 text-stone-400" />
              <p className="text-sm font-semibold tracking-wide">No Reservation Drafts</p>
              <p className="text-xs text-forest-450 dark:text-stone-400 mt-1 max-w-[240px] mx-auto font-light leading-relaxed">
                Your offline drafts and booking history will show up here. Select a room to begin!
              </p>
            </div>
          ) : (
            bookings.map((booking) => (
              <div
                key={booking.id}
                className={`p-5 rounded-2xl border space-y-4 relative group ${
                  isDarkMode ? 'bg-forest-900/40 border-forest-800' : 'bg-stone-50 border-forest-150 shadow-sm'
                }`}
                id={`booking-history-item-${booking.id}`}
              >
                {/* Delete button top corner */}
                <button
                  onClick={() => onDeleteBooking(booking.id)}
                  className="absolute top-4 right-4 text-stone-400 hover:text-rose-600 transition-colors duration-300 focus:outline-none"
                  title="Remove Draft"
                >
                  <Trash2 className="h-4 w-4" />
                </button>

                {/* Badge and Name */}
                <div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-[9px] font-mono uppercase tracking-widest font-bold mb-2">
                    <CheckCircle className="h-3 w-3" /> Draft Pending
                  </span>
                  <h4 className="font-serif text-sm font-bold tracking-tight">
                    {booking.roomType}
                  </h4>
                </div>

                {/* Details layout */}
                <div className="space-y-1.5 text-xxs font-mono text-forest-600 dark:text-stone-300 border-b border-forest-100/10 pb-3">
                  <div className="flex justify-between">
                    <span>Guest:</span>
                    <span className="font-semibold">{booking.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contact:</span>
                    <span className="font-semibold">{booking.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-in:</span>
                    <span className="font-semibold">{booking.checkIn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-out:</span>
                    <span className="font-semibold">{booking.checkOut}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rooms/Guests:</span>
                    <span className="font-semibold">
                      {booking.rooms} Room({booking.rooms > 1 ? 's' : ''}) • {booking.guests} Guest({booking.guests > 1 ? 's' : ''})
                    </span>
                  </div>
                </div>

                {/* Price and Action WhatsApp */}
                <div className="flex justify-between items-center pt-1.5">
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-forest-500 dark:text-stone-400">
                      Estimated Cost:
                    </span>
                    <span className="font-serif font-bold text-sm text-sand-600 dark:text-sand-400">
                      ₹{booking.totalPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => handleWhatsAppInquiry(booking)}
                    className="py-2 px-3 rounded-xl text-[10px] font-semibold uppercase tracking-wider font-mono bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Send className="h-3 w-3" /> Confirm WA
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-forest-200/40 dark:border-forest-800/60 bg-stone-50/10">
          <p className="text-[10px] text-center text-forest-500 dark:text-stone-400 font-mono uppercase tracking-wider">
            🌿 Neelambari Stay Customer Care 🌿
          </p>
        </div>
      </div>
    </div>
  );
}
