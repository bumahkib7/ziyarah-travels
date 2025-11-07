'use client';

import { Box } from '@mui/material';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PartnersSection from '@/components/PartnersSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <ServicesSection />
      <PartnersSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}
