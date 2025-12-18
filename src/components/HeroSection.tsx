import { StarField } from './StarField';
import { Button } from './ui/button';
import { Sun, Moon } from 'lucide-react';

export const HeroSection = () => {

  const whatsappLink = 'https://wa.me/917379340224';

  const handleDailyRashiphalScroll = () => {
    const section = document.getElementById('rashiphal');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: 500, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <StarField starCount={200} />

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Floating Zodiac Symbols */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['♈', '♌', '♐'].map((symbol, i) => (
          <span
            key={i}
            className="absolute text-4xl md:text-5xl text-primary/10 animate-float"
            style={{
              left: `${15 + i * 30}%`,
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {symbol}
          </span>
        ))}
        {['♋', '♏', '♓'].map((symbol, i) => (
          <span
            key={i + 3}
            className="absolute text-4xl md:text-5xl text-accent/10 animate-float"
            style={{
              right: `${15 + i * 25}%`,
              bottom: `${25 + i * 15}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            {symbol}
          </span>
        ))}
      </div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 text-center">

        {/* Sanskrit Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-none bg-secondary/50 border border-primary/30 backdrop-blur-sm opacity-0 animate-fade-up">
  <Sun className="w-4 h-4 text-primary" />
  <span className="text-sm text-foreground/80 font-body">
    वैदिक ज्योतिष • Vedic Astrology
  </span>
  <Moon className="w-4 h-4 text-primary" />
</div>


        {/* Heading */}
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight opacity-0 animate-fade-up">
          <span className="block text-foreground">Decode Your</span>
          <span className="text-golden">Nakshatra</span>
          <span className="block text-foreground mt-2">Align With Your</span>
          <span className="text-primary">Destiny</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-body mb-10 leading-relaxed opacity-0 animate-fade-up">
          Discover the ancient wisdom of <span className="text-primary">Dasha</span> and{' '}
          <span className="text-accent">Nakshatra</span>. Let the 27 celestial constellations
          guide your path through life's journey.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-up">

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="sacred"
              size="xl"
              className="rounded-none px-8 h-14"
            >
              Get Your Nakshatra Reading
            </Button>
          </a>

          {/* Daily Rashiphal Scroll */}
          <Button
            variant="cosmic"
            size="xl"
            className="rounded-none px-8 h-14"
            onClick={handleDailyRashiphalScroll}
          >
            Daily Rashiphal
          </Button>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
