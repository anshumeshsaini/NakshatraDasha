import { Sparkles, Instagram, Youtube, Twitter } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Nakshatra Analysis', href: '#' },
    { name: 'Kundali Matching', href: '#' },
    { name: 'Career Guidance', href: '#' },
    { name: 'Muhurat Selection', href: '#' },
  ],
  resources: [
    { name: 'Blog', href: '#blog' },
    { name: 'Daily Rashiphal', href: '#rashiphal' },
    { name: 'Panchang', href: '#' },
    { name: 'Festival Calendar', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#consultation' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative pt-24 pb-8 border-t border-border/30 mandala-pattern">
      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-4">
        {/* Sanskrit Quote */}
        <div className="text-center mb-16">
          <p className="font-heading text-2xl md:text-3xl text-primary/80 mb-3">
            "यथा दृष्टिस्तथा सृष्टिः"
          </p>
          <p className="text-muted-foreground font-body italic">
            "As is your vision, so is your creation."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="font-heading text-xl tracking-wide">
                <span className="text-golden">Nakshatra</span>
                <span className="text-foreground/80">Dasha</span>
              </span>
            </a>
            <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-sm mb-6">
              Bridging ancient Vedic wisdom with modern seekers. 
              Your celestial guide to life's profound questions.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {[Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-body">
          <p>© 2024 NakshatraDasha. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-primary">✦</span> celestial energy
          </p>
        </div>
      </div>
    </footer>
  );
};
