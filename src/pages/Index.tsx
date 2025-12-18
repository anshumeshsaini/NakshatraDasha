import { useState, useEffect } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { RashiphalSection } from '@/components/RashiphalSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ConsultationSection } from '@/components/ConsultationSection';

import { BlogSection } from '@/components/BlogSection';
import { Footer } from '@/components/Footer';

const Index = () => {




  return (
    <>

      
      <div >
        <Navbar />
        <main>
          <HeroSection />
          <RashiphalSection />
          <ServicesSection />

          <TestimonialsSection />
     
          <BlogSection />
          <ConsultationSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
