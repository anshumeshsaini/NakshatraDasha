import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Daily Rashiphal', href: '#rashiphal' },
  { name: 'Nakshatra', href: '#nakshatra' },
  { name: 'Services', href: '#services' },
  { name: 'Calendar', href: '#calendar' },
  { name: 'Blog', href: '#blog' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = 'https://wa.me/917379340224';

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 relative">
      
      {/* NAVBAR MAIN BAR */}
      <div className="bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <img
                src={logo}
                alt="Nakshatra Dasha Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
              <span className="font-heading text-lg md:text-xl tracking-wide">
                <span className="text-golden">Nakshatra</span>
                <span className="text-foreground/80">Dasha</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300 font-body tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="sacred" className="rounded-none px-6 h-12">
                  Get Reading
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 🔻 TRIANGLE SHAPE */}
      <div
        className="absolute left-1/2 -bottom-6 -translate-x-1/2 
                   w-0 h-0 
                   border-l-[30px] border-l-transparent
                   border-r-[30px] border-r-transparent
                   border-t-[24px] border-t-background/80
                   backdrop-blur-md"
      />

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-background/90 backdrop-blur-md ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 pt-4 border-t border-border/50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/70 hover:text-primary transition-colors py-2 font-body"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <Button variant="sacred" className="rounded-none h-12 w-full">
                Get Reading
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
