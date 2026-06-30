import { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data';

interface FAQProps {
  isDarkMode: boolean;
}

export default function FAQ({ isDarkMode }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className={`py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-forest-900 text-white' : 'bg-sand-100/30 text-forest-950'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="faq-header">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Sparkles className="h-4 w-4 text-sand-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-sand-500 font-bold">
              Got Questions?
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-forest-600 dark:text-stone-300 font-light leading-relaxed">
            All the key operational queries regarding bookings, location directions, regional food catering, and estate guidelines cleared.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4" id="faq-accordions">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? isDarkMode
                      ? 'bg-forest-950 border-forest-750 shadow-lg'
                      : 'bg-white border-forest-200 shadow-lg'
                    : isDarkMode
                      ? 'bg-forest-950/40 border-forest-800 hover:bg-forest-950/60'
                      : 'bg-white border-forest-100 hover:bg-stone-50'
                }`}
                id={`faq-item-${item.id}`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-start space-x-3.5 pr-4">
                    <HelpCircle className="h-5 w-5 text-sand-500 flex-shrink-0 mt-0.5" />
                    <span className="font-serif text-sm sm:text-base font-bold tracking-tight">
                      {item.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full transition-transform duration-300 flex-shrink-0 ${
                    isDarkMode ? 'bg-forest-900 text-stone-300' : 'bg-sand-50 text-forest-800'
                  } ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Accordion Collapsible Panel */}
                <div
                  className={`transition-all duration-500 ${
                    isOpen ? 'max-h-60 border-t border-forest-100/10' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 py-5 text-xs sm:text-sm text-forest-600 dark:text-stone-300 leading-relaxed font-light">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
