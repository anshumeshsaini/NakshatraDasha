import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    text: 'The Nakshatra analysis for my daughter was incredibly accurate. The name suggestion aligned perfectly with her birth star. Truly grateful for this guidance.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    location: 'Bengaluru, India',
    text: 'Career guidance during my Saturn period helped me make crucial decisions. The remedies suggested brought positive changes within months.',
    rating: 5,
  },
  {
    name: 'Ananya Patel',
    location: 'London, UK',
    text: 'As a NRI, finding authentic Vedic astrology was challenging. This platform bridges that gap beautifully. The muhurat selection for our wedding was perfect.',
    rating: 5,
  },
];

const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '50K+', label: 'Readings Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '27', label: 'Nakshatra Expertise' },
];

export const TestimonialsSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container px-4">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1 mb-4 text-sm text-primary/80 font-body tracking-widest uppercase border border-primary/30 rounded-none">
            विश्वास एवं प्रमाण
          </span>

          <h2 className="font-heading text-3xl md:text-5xl mb-4">
            Trusted by <span className="text-golden">Thousands</span>
          </h2>

          <p className="max-w-2xl mx-auto text-muted-foreground font-body">
            Authentic Vedic lineage delivering celestial wisdom to families worldwide
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 cosmic-card rounded-none opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="block font-heading text-3xl md:text-4xl text-golden mb-2">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground font-body">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="cosmic-card rounded-none p-8 relative opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.4 + index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 font-body leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <p className="font-heading text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground font-body">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
