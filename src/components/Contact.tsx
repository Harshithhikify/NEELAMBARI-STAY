import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Sparkles, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

export default function Contact({ isDarkMode }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // UI States
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-sand-500" />,
      title: 'Our Location',
      details: 'Kadagadal - Boikeri Road, Madikeri, Coorg, Karnataka 571248',
      link: 'https://maps.google.com/?q=Kadagadal+-+Boikeri+Road,+Madikeri,+Coorg,+Karnataka+571248'
    },
    {
      icon: <Phone className="h-5 w-5 text-sand-500" />,
      title: 'Reservations Helpline',
      details: '+91 98765 43210 / +91 87654 32109',
      link: 'tel:+919876543210'
    },
    {
      icon: <Mail className="h-5 w-5 text-sand-500" />,
      title: 'Email Inquiries',
      details: 'stay@neelambaricoorg.com / info@neelambari.com',
      link: 'mailto:stay@neelambaricoorg.com'
    },
    {
      icon: <Clock className="h-5 w-5 text-sand-500" />,
      title: 'Operating Hours',
      details: 'Reception open daily: 7:00 AM - 10:00 PM',
      link: null
    }
  ];

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!name.trim()) { setErrorMsg('Please enter your name.'); return; }
    if (!email.trim() || !email.includes('@')) { setErrorMsg('Please enter a valid email.'); return; }
    if (!subject.trim()) { setErrorMsg('Please select or specify a subject.'); return; }
    if (!message.trim() || message.length < 10) { setErrorMsg('Message must be at least 10 characters long.'); return; }

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMsg('Thank you! Your message has been sent successfully. Our team will contact you back shortly.');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1200);
  };

  return (
    <section
      id="contact"
      className={`py-24 transition-colors duration-300 relative ${
        isDarkMode ? 'bg-forest-950 text-white' : 'bg-sand-50 text-forest-950'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="contact-header">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Sparkles className="h-4 w-4 text-sand-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-sand-500 font-bold">
              Reach Out
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Contact Neelambari Stay
          </h2>
          <p className="text-sm text-forest-600 dark:text-stone-300 font-light leading-relaxed">
            Have custom dietary requirements, planning group tours, or looking to rent out the entire villa? Send us a direct greeting or call our round-the-clock lines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-grid">
          
          {/* Column 1: Contact Details & Google Map (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8" id="contact-info-panel">
            
            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, idx) => {
                const CardWrapper = info.link ? 'a' : 'div';
                return (
                  <CardWrapper
                    key={info.title}
                    href={info.link || undefined}
                    target={info.link ? '_blank' : undefined}
                    rel={info.link ? 'noopener noreferrer' : undefined}
                    className={`p-6 rounded-2xl border flex items-start space-x-4 transition-all duration-300 ${
                      info.link ? 'hover:shadow-lg hover:-translate-y-0.5 cursor-pointer' : ''
                    } ${
                      isDarkMode
                        ? 'bg-forest-900/40 border-forest-800 hover:bg-forest-900/60'
                        : 'bg-white border-forest-100 hover:bg-stone-50'
                    }`}
                    id={`contact-card-${idx}`}
                  >
                    <div className={`p-3 rounded-xl flex items-center justify-center ${
                      isDarkMode ? 'bg-forest-800' : 'bg-forest-50'
                    }`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold tracking-tight mb-1">
                        {info.title}
                      </h4>
                      <p className="text-xs text-forest-600 dark:text-stone-300 leading-relaxed font-light">
                        {info.details}
                      </p>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>

            {/* Embedded Google Maps Box */}
            <div
              className={`rounded-3xl overflow-hidden border h-80 relative shadow-inner ${
                isDarkMode ? 'border-forest-800' : 'border-forest-100'
              }`}
              id="google-maps-box"
            >
              {/* High-fidelity responsive interactive Google Maps embed of Madikeri area */}
              <iframe
                title="Neelambari Stay Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15584.092440306103!2d75.73693247071658!3d12.421711299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4cf318df1fbc9%3A0xe2be882652cae2d4!2sMadikeri%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1711624891104!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale dark:invert"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Column 2: Guest Message Form (5 Cols) */}
          <div className="lg:col-span-5" id="contact-form-panel">
            <form
              onSubmit={handleMessageSubmit}
              className={`p-6 sm:p-8 rounded-3xl border shadow-xl space-y-5 h-full flex flex-col justify-between ${
                isDarkMode ? 'bg-forest-950/60 border-forest-800' : 'bg-white border-forest-100'
              }`}
            >
              <div className="space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
                  Send a Message
                </h3>

                {/* Status Banners */}
                {errorMsg && (
                  <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 text-xs flex items-start gap-2 border border-rose-200/50 dark:border-rose-900/40 animate-scale-up">
                    <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {successMsg && (
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 text-xs flex items-start gap-2 border border-emerald-200/50 dark:border-emerald-900/40 animate-scale-up">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>{successMsg}</span>
                  </div>
                )}

                {/* Input Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xxs uppercase tracking-wider font-mono font-bold text-forest-600 dark:text-stone-400">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl text-xs border focus:outline-none focus:ring-1 transition-all ${
                      isDarkMode
                        ? 'bg-forest-900 border-forest-800 focus:border-sand-400 focus:ring-sand-400 text-white'
                        : 'bg-stone-50 border-forest-100 focus:border-forest-600 focus:ring-forest-600 text-forest-950'
                    }`}
                  />
                </div>

                {/* Input Email */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xxs uppercase tracking-wider font-mono font-bold text-forest-600 dark:text-stone-400">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl text-xs border focus:outline-none focus:ring-1 transition-all ${
                      isDarkMode
                        ? 'bg-forest-900 border-forest-800 focus:border-sand-400 focus:ring-sand-400 text-white'
                        : 'bg-stone-50 border-forest-100 focus:border-forest-600 focus:ring-forest-600 text-forest-950'
                    }`}
                  />
                </div>

                {/* Input Subject Select */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xxs uppercase tracking-wider font-mono font-bold text-forest-600 dark:text-stone-400">
                    Subject of Inquiry
                  </label>
                  <select
                    id="contact-subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl text-xs border focus:outline-none focus:ring-1 transition-all cursor-pointer ${
                      isDarkMode
                        ? 'bg-forest-900 border-forest-800 focus:border-sand-400 focus:ring-sand-400 text-white'
                        : 'bg-stone-50 border-forest-100 focus:border-forest-600 focus:ring-forest-600 text-forest-950'
                    }`}
                  >
                    <option value="">Select a topic...</option>
                    <option value="General Questions">General Questions</option>
                    <option value="Bulk Room Bookings">Bulk / Corporate Room Bookings</option>
                    <option value="Estate Tours & Dining">Estate Private Tours & Catering</option>
                    <option value="Long Term Stays">Long Term Workations / Rentals</option>
                  </select>
                </div>

                {/* Textarea Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xxs uppercase tracking-wider font-mono font-bold text-forest-600 dark:text-stone-400">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell us what you are looking for..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl text-xs border focus:outline-none focus:ring-1 transition-all resize-none ${
                      isDarkMode
                        ? 'bg-forest-900 border-forest-800 focus:border-sand-400 focus:ring-sand-400 text-white'
                        : 'bg-stone-50 border-forest-100 focus:border-forest-600 focus:ring-forest-600 text-forest-950'
                    }`}
                  />
                </div>
              </div>

              {/* Submit CTA button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 mt-4 rounded-xl text-xs font-semibold tracking-widest uppercase bg-forest-750 hover:bg-forest-800 dark:bg-sand-400 dark:hover:bg-sand-300 text-white dark:text-forest-950 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white dark:border-forest-950 border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 animate-bounce" style={{ animationDuration: '2s' }} />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
