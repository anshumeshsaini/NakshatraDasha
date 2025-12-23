import { useState } from 'react';

/* -------------------- SIGN IMAGES -------------------- */
import aries from '@/assets/sign/aries-removebg-preview.png';
import taurus from '@/assets/sign/traus.png';
import gemini from '@/assets/sign/gemini.png';
import cancer from '@/assets/sign/cancer.png';
import leo from '@/assets/sign/leo.png';
import virgo from '@/assets/sign/virgo.png';
import libra from '@/assets/sign/libra.png';
import scorpio from '@/assets/sign/scopoio.png';
import sagittarius from '@/assets/sign/sagi.png';
import capricorn from '@/assets/sign/capricon.png';
import aquarius from '@/assets/sign/aqua.png';
import pisces from '@/assets/sign/picses.png';

/* -------------------- DATA -------------------- */
const zodiacSigns = [
  { name: 'Aries', sanskrit: 'मेष', image: aries, element: 'Fire', ruling: 'Mars' },
  { name: 'Taurus', sanskrit: 'वृषभ', image: taurus, element: 'Earth', ruling: 'Venus' },
  { name: 'Gemini', sanskrit: 'मिथुन', image: gemini, element: 'Air', ruling: 'Mercury' },
  { name: 'Cancer', sanskrit: 'कर्क', image: cancer, element: 'Water', ruling: 'Moon' },
  { name: 'Leo', sanskrit: 'सिंह', image: leo, element: 'Fire', ruling: 'Sun' },
  { name: 'Virgo', sanskrit: 'कन्या', image: virgo, element: 'Earth', ruling: 'Mercury' },
  { name: 'Libra', sanskrit: 'तुला', image: libra, element: 'Air', ruling: 'Venus' },
  { name: 'Scorpio', sanskrit: 'वृश्चिक', image: scorpio, element: 'Water', ruling: 'Mars' },
  { name: 'Sagittarius', sanskrit: 'धनु', image: sagittarius, element: 'Fire', ruling: 'Jupiter' },
  { name: 'Capricorn', sanskrit: 'मकर', image: capricorn, element: 'Earth', ruling: 'Saturn' },
  { name: 'Aquarius', sanskrit: 'कुंभ', image: aquarius, element: 'Air', ruling: 'Saturn' },
  { name: 'Pisces', sanskrit: 'मीन', image: pisces, element: 'Water', ruling: 'Jupiter' },
];

const predictions = [
  'Today brings favorable opportunities for new beginnings. The planetary alignment supports decisive action.',
  'Focus on relationships and communication. Venus influences bring harmony to partnerships.',
  'A day for introspection and spiritual growth. The Moon’s transit deepens your intuition.',
  'Professional endeavors are highlighted. Saturn rewards disciplined efforts.',
];

/* -------------------- COMPONENT -------------------- */
export const RashiphalSection = () => {
  const [selectedSign, setSelectedSign] = useState<number | null>(null);

  return (
    <section id="rashiphal" className="relative py-24 md:py-32">
      <div className="container px-4">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1 mb-4 text-sm border border-primary/30 rounded-none">
            दैनिक राशिफल
          </span>

          <h2 className="font-heading text-3xl md:text-5xl mb-4">
            Daily <span className="text-golden">Rashiphal</span>
          </h2>

          <p className="max-w-2xl mx-auto text-muted-foreground">
            Select your zodiac sign to receive today’s celestial guidance
          </p>
        </div>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
          {zodiacSigns.map((sign, index) => (
            <button
              key={sign.name}
              onClick={() =>
                setSelectedSign(selectedSign === index ? null : index)
              }
              className={`cosmic-card sacred-border rounded-none p-4 md:p-6 text-center transition-all duration-500 group ${
                selectedSign === index ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              <img
                src={sign.image}
                alt={sign.name}
                className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-2 object-contain transition-transform duration-300 group-hover:scale-110"
              />

              <span className="block font-heading text-sm md:text-base mb-1">
                {sign.name}
              </span>
              <span className="block text-xs text-primary/70">
                {sign.sanskrit}
              </span>
            </button>
          ))}
        </div>

        {/* Expanded Reading */}
        {selectedSign !== null && (
          <div className="mt-12 max-w-3xl mx-auto animate-scale-in">
            <div className="cosmic-card rounded-none p-8 md:p-10 text-center">

              <div className="flex items-center justify-center gap-4 mb-6">
                <img
                  src={zodiacSigns[selectedSign].image}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />

                <div className="text-left">
                  <h3 className="font-heading text-2xl">
                    {zodiacSigns[selectedSign].name}
                  </h3>
                  <p className="text-primary/80">
                    {zodiacSigns[selectedSign].sanskrit} •{' '}
                    {zodiacSigns[selectedSign].element}
                  </p>
                </div>
              </div>

              <div className="border-t border-border/50 pt-6">
                <p className="text-lg leading-relaxed mb-6">
                  {predictions[selectedSign % predictions.length]}
                </p>

                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <span>
                    Ruling Planet:{' '}
                    <span className="text-primary">
                      {zodiacSigns[selectedSign].ruling}
                    </span>
                  </span>
                  <span>•</span>
                  <span>
                    Element:{' '}
                    <span className="text-accent">
                      {zodiacSigns[selectedSign].element}
                    </span>
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
