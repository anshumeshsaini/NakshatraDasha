import { useState } from 'react';

const zodiacSigns = [
  { name: 'Aries', sanskrit: 'मेष', symbol: '♈', element: 'Fire', ruling: 'Mars' },
  { name: 'Taurus', sanskrit: 'वृषभ', symbol: '♉', element: 'Earth', ruling: 'Venus' },
  { name: 'Gemini', sanskrit: 'मिथुन', symbol: '♊', element: 'Air', ruling: 'Mercury' },
  { name: 'Cancer', sanskrit: 'कर्क', symbol: '♋', element: 'Water', ruling: 'Moon' },
  { name: 'Leo', sanskrit: 'सिंह', symbol: '♌', element: 'Fire', ruling: 'Sun' },
  { name: 'Virgo', sanskrit: 'कन्या', symbol: '♍', element: 'Earth', ruling: 'Mercury' },
  { name: 'Libra', sanskrit: 'तुला', symbol: '♎', element: 'Air', ruling: 'Venus' },
  { name: 'Scorpio', sanskrit: 'वृश्चिक', symbol: '♏', element: 'Water', ruling: 'Mars' },
  { name: 'Sagittarius', sanskrit: 'धनु', symbol: '♐', element: 'Fire', ruling: 'Jupiter' },
  { name: 'Capricorn', sanskrit: 'मकर', symbol: '♑', element: 'Earth', ruling: 'Saturn' },
  { name: 'Aquarius', sanskrit: 'कुंभ', symbol: '♒', element: 'Air', ruling: 'Saturn' },
  { name: 'Pisces', sanskrit: 'मीन', symbol: '♓', element: 'Water', ruling: 'Jupiter' },
];

const predictions = [
  "Today brings favorable opportunities for new beginnings. The planetary alignment supports decisive action.",
  "Focus on relationships and communication. Venus influences bring harmony to partnerships.",
  "A day for introspection and spiritual growth. The Moon's transit deepens your intuition.",
  "Professional endeavors are highlighted. Saturn's aspect rewards disciplined efforts.",
];

export const RashiphalSection = () => {
  const [selectedSign, setSelectedSign] = useState<number | null>(null);

  return (
    <section id="rashiphal" className="relative py-24 md:py-32">
      <div className="container px-4">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1 mb-4 text-sm text-primary/80 font-body tracking-widest uppercase border border-primary/30 rounded-none">
            दैनिक राशिफल
          </span>

          <h2 className="font-heading text-3xl md:text-5xl mb-4">
            Daily <span className="text-golden">Rashiphal</span>
          </h2>

          <p className="max-w-2xl mx-auto text-muted-foreground font-body">
            Select your zodiac sign to receive today's celestial guidance from the stars
          </p>
        </div>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
          {zodiacSigns.map((sign, index) => (
            <button
              key={sign.name}
              onClick={() => setSelectedSign(selectedSign === index ? null : index)}
              className={`cosmic-card sacred-border rounded-none p-4 md:p-6 text-center transition-all duration-500 group ${
                selectedSign === index ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              <span className="block text-3xl md:text-4xl mb-2 zodiac-glow transition-all duration-300 group-hover:scale-110">
                {sign.symbol}
              </span>
              <span className="block font-heading text-sm md:text-base text-foreground/90 mb-1">
                {sign.name}
              </span>
              <span className="block text-xs text-primary/70 font-body">
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
                <span className="text-5xl md:text-6xl zodiac-glow">
                  {zodiacSigns[selectedSign].symbol}
                </span>
                <div className="text-left">
                  <h3 className="font-heading text-2xl text-foreground">
                    {zodiacSigns[selectedSign].name}
                  </h3>
                  <p className="text-primary/80 font-body">
                    {zodiacSigns[selectedSign].sanskrit} • {zodiacSigns[selectedSign].element}
                  </p>
                </div>
              </div>

              <div className="border-t border-border/50 pt-6">
                <p className="text-lg text-foreground/80 font-body leading-relaxed mb-6">
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
