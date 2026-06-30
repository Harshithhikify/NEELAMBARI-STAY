import React from 'react';
import { Sparkles, ArrowUpRight, MessageSquare, Instagram, Facebook, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className={`pt-16 pb-8 transition-colors duration-300 border-t ${
        isDarkMode
          ? 'bg-forest-950 text-white border-forest-850'
          : 'bg-forest-900 text-stone-200 border-forest-950'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4" id="footer-brand-col">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center space-x-2 group focus:outline-none"
            >
              <div className="p-2 rounded-full bg-white/10 text-sand-300 transition-transform group-hover:rotate-12">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-wider font-bold text-white">
                  Neelambari Stay
                </span>
                <span className="text-[10px] uppercase tracking-widest font-mono text-sand-400">
                  Madikeri, Coorg
                </span>
              </div>
            </a>
            
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Experience luxurious, quiet nature gateways at our private homestay in the valleys of Madikeri. Surrounded by aromatic coffee plants, fresh hill winds, and custom amenities.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-stone-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram Page"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-stone-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook Page"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-stone-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp Helpline"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4" id="footer-links-col">
            <h4 className="font-serif text-base font-bold text-white tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Home Page', href: '#home' },
                { label: 'About Neelambari', href: '#about' },
                { label: 'Our Rooms', href: '#rooms' },
                { label: 'Amenities & Pools', href: '#amenities' },
                { label: 'Reservation Form', href: '#booking' }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-stone-400 hover:text-white flex items-center gap-1 transition-colors group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Regional Attractions */}
          <div className="space-y-4" id="footer-attractions-col">
            <h4 className="font-serif text-base font-bold text-white tracking-tight">
              Regional Highlights
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>Raja's Seat (4.5 km)</li>
              <li>Madikeri Fort (3.8 km)</li>
              <li>Abbey Falls (8.2 km)</li>
              <li>Omkareshwara Temple (4 km)</li>
              <li>Mandalpatti View Point (21 km)</li>
            </ul>
          </div>

          {/* Column 4: Policy & Legal */}
          <div className="space-y-4" id="footer-policies-col">
            <h4 className="font-serif text-base font-bold text-white tracking-tight">
              Policies & Legal
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#privacy" className="text-stone-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-stone-400 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <div className="flex items-start gap-1.5 text-stone-400 mt-4">
                  <MapPin className="h-4 w-4 text-sand-500 flex-shrink-0" />
                  <span className="leading-normal">Kadagadal-Boikeri Road, Coorg, Karnataka 571248</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-1.5 text-stone-400">
                  <Phone className="h-4 w-4 text-sand-500 flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xxs sm:text-xs text-stone-400 gap-4" id="footer-bottom">
          <p>© {currentYear} Neelambari Stay. All Rights Reserved. Coorg, Karnataka.</p>
          <div className="flex items-center space-x-6">
            <span>Designed in Earthy Elegance</span>
            <div className="w-1.5 h-1.5 rounded-full bg-sand-400" />
            <span>ECO Certified Homestay</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
