import { useState } from 'react';
import { Briefcase, Heart, Baby, Calendar, Home, Sparkles, X } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: Briefcase,
    title: 'Career Guidance',
    sanskrit: 'व्यवसाय मार्गदर्शन',
    description: 'Navigate your professional path with planetary insights. Discover favorable periods for growth and success.',
    detailedDescription: 'Our career guidance service uses Vedic astrology to analyze your birth chart and identify favorable planetary periods for career advancement.',
    benefits: [
      'Personalized career path analysis',
      'Timing for promotions and job changes',
      'Remedies for career obstacles',
      'Business success timing'
    ]
  },
  {
    icon: Heart,
    title: 'Matrimonial Matching',
    sanskrit: 'वैवाहिक मिलान',
    description: 'Find cosmic compatibility through Kundali matching. Ensure harmony in your sacred union.',
    detailedDescription: 'Detailed Kundali matching based on 36 gunas to ensure perfect compatibility between partners.',
    benefits: [
      '36 guna matching analysis',
      'Emotional compatibility assessment',
      'Remedies for doshas',
      'Marriage timing guidance'
    ]
  },
  {
    icon: Baby,
    title: 'Baby Nakshatra',
    sanskrit: 'शिशु नक्षत्र फल',
    description: 'Understand your child’s celestial blueprint.',
    detailedDescription: 'Analyze your child’s birth nakshatra to understand their inherent qualities and talents.',
    benefits: [
      'Nakshatra-based analysis',
      'Auspicious name selection',
      'Child’s future guidance',
      'Remedies for planetary influences'
    ]
  },
  {
    icon: Calendar,
    title: 'Muhurat Selection',
    sanskrit: 'शुभ मुहूर्त',
    description: 'Choose auspicious timings for important events.',
    detailedDescription: 'Selection of the most auspicious timing (muhurat) for important life events.',
    benefits: [
      'Marriage muhurat selection',
      'Business inauguration timing',
      'House warming ceremonies',
      'All important life events'
    ]
  },
  {
    icon: Home,
    title: 'Vastu & Property',
    sanskrit: 'वास्तु एवं संपत्ति',
    description: 'Align your living spaces with cosmic energy.',
    detailedDescription: 'Vastu Shastra consultation to harmonize your living and working spaces.',
    benefits: [
      'Home and office vastu analysis',
      'Property purchase guidance',
      'Remedies for vastu doshas',
      'Wealth enhancement solutions'
    ]
  },
  {
    icon: Sparkles,
    title: 'Spiritual Remedies',
    sanskrit: 'आध्यात्मिक उपाय',
    description: 'Personalized mantras and rituals.',
    detailedDescription: 'Personalized spiritual remedies including mantras and yantras.',
    benefits: [
      'Personalized mantras',
      'Gemstone recommendations',
      'Ritual guidance',
      'Planetary balance remedies'
    ]
  },
];

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleLearnMore = (service: typeof services[0]) => {
    setSelectedService(service);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  const handleBookConsultant = () => {
    const phoneNumber = '7379340224';
    const message = encodeURIComponent(`Hello, I want to book a consultation for ${selectedService?.title}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    closeModal();
  };

  return (
    <>
      <section id="services" className="relative py-24 md:py-32 mandala-pattern">
        <div className="container px-4">

          {/* Header */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1 mb-4 text-sm text-primary/80 border border-primary/30 rounded-none">
              हमारी सेवाएं
            </span>
            <h2 className="font-heading text-3xl md:text-5xl mb-4">
              Our <span className="text-golden">Sacred Services</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Comprehensive Vedic guidance for every aspect of life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                onClick={() => handleLearnMore(service)}
                className="cosmic-card sacred-border rounded-none p-8 cursor-pointer hover:scale-[1.02] transition-all"
              >
                <div className="w-14 h-14 rounded-none bg-primary/20 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-heading text-xl mb-1">{service.title}</h3>
                <p className="text-sm text-primary/70 mb-4">{service.sanskrit}</p>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button variant="sacred" size="xl" className="rounded-none">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedService && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="cosmic-card sacred-border rounded-none w-full max-w-4xl max-h-[90vh] overflow-hidden">

            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 rounded-none bg-background flex items-center justify-center"
            >
              <X />
            </button>

            <div className="p-8 overflow-y-auto">
              <h3 className="font-heading text-3xl mb-2">{selectedService.title}</h3>
              <p className="text-primary/70 mb-6">{selectedService.sanskrit}</p>
              <p className="mb-8">{selectedService.detailedDescription}</p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {selectedService.benefits.map((b, i) => (
                  <div key={i} className="p-3 border border-primary/20 rounded-none">
                    {b}
                  </div>
                ))}
              </div>

              <div className="p-6 border border-primary/30 rounded-none flex justify-between items-center">
                <div>
                  <h4 className="font-heading text-xl">Ready to Begin?</h4>
                  <p className="text-muted-foreground">Book a personal consultation</p>
                </div>
                <Button
                  variant="sacred"
                  size="lg"
                  onClick={handleBookConsultant}
                  className="rounded-none"
                >
                  Book via WhatsApp
                </Button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
