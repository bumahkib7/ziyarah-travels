'use client';

import { Box, Container, Typography, Chip, Avatar, IconButton } from '@mui/material';
import { Star, Verified, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Ahmed Hassan',
    location: 'Kampala, Uganda',
    rating: 5,
    comment: 'Alhamdulillah! Best Umrah experience ever. The service was exceptional and the accommodations were perfect.',
    package: 'Umrah VIP Package',
    verified: true,
  },
  {
    name: 'Fatima Abdullah',
    location: 'Nairobi, Kenya',
    rating: 5,
    comment: 'Highly recommended! The team was very professional and made our Hajj journey smooth and memorable.',
    package: 'Hajj 2024 Package',
    verified: true,
  },
  {
    name: 'Ibrahim Mohamed',
    location: 'Dar es Salaam, Tanzania',
    rating: 5,
    comment: 'Outstanding service from start to finish. The guides were knowledgeable and very helpful.',
    package: 'Ziyarah Extended',
    verified: true,
  },
  {
    name: 'Aisha Nakato',
    location: 'Kampala, Uganda',
    rating: 5,
    comment: 'Professional and caring service. Everything was handled perfectly. Great value for money!',
    package: 'Umrah Economy',
    verified: true,
  },
  {
    name: 'Omar Abdullah',
    location: 'Mombasa, Kenya',
    rating: 5,
    comment: 'First time doing Umrah and the team made it so easy. Will definitely book again for Hajj.',
    package: 'Umrah VIP Package',
    verified: true,
  },
  {
    name: 'Khadija Mwangi',
    location: 'Nairobi, Kenya',
    rating: 5,
    comment: 'The Ziyarah tours were spiritually fulfilling. Highly recommend this company!',
    package: 'Ziyarah Extended',
    verified: true,
  },
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Chip
            label="CLIENT REVIEWS"
            sx={{
              background: 'rgba(166, 58, 58, 0.15)',
              backdropFilter: 'blur(10px)',
              color: '#8B2E2E',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: 1.5,
              mb: 2,
              border: '1px solid rgba(166, 58, 58, 0.3)',
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '3rem' },
              color: '#0f172a',
              mb: 1.5,
            }}
          >
            Trusted by Thousands
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#475569',
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            10,000+ Happy Pilgrims • 4.9/5 Rating • 98% Satisfaction
          </Typography>
        </Box>

        {/* Carousel */}
        <Box sx={{ position: 'relative', maxWidth: '900px', mx: 'auto' }}>
          <Box
            className="glass-strong"
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 5,
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(25px)',
              border: '1.5px solid rgba(255, 255, 255, 0.4)',
              boxShadow: '0 15px 50px rgba(31, 38, 135, 0.15)',
              minHeight: { xs: 280, md: 240 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {/* Rating & Verified */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} sx={{ color: '#A63A3A', fontSize: 24 }} />
                ))}
              </Box>
              {currentTestimonial.verified && (
                <Chip
                  icon={<Verified sx={{ fontSize: 16 }} />}
                  label="Verified"
                  size="small"
                  sx={{
                    background: 'rgba(166, 58, 58, 0.15)',
                    color: '#8B2E2E',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    border: '1px solid rgba(166, 58, 58, 0.3)',
                  }}
                />
              )}
            </Box>

            {/* Review Text */}
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: '#334155',
                lineHeight: 1.7,
                fontSize: { xs: '1rem', md: '1.1rem' },
                fontStyle: 'italic',
              }}
            >
              "{currentTestimonial.comment}"
            </Typography>

            {/* Author & Package */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
                  sx={{
                    background: 'linear-gradient(135deg, #A63A3A, #8B2E2E)',
                    width: 56,
                    height: 56,
                    fontWeight: 700,
                    fontSize: '1.3rem',
                  }}
                >
                  {currentTestimonial.name.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a' }}>
                    {currentTestimonial.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b' }}>
                    {currentTestimonial.location}
                  </Typography>
                </Box>
              </Box>
              <Chip
                label={currentTestimonial.package}
                sx={{
                  background: 'rgba(166, 58, 58, 0.12)',
                  color: '#8B2E2E',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                }}
              />
            </Box>
          </Box>

          {/* Navigation Arrows */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: { xs: -10, md: -20 },
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(166, 58, 58, 0.3)',
              width: { xs: 45, md: 55 },
              height: { xs: 45, md: 55 },
              '&:hover': {
                background: 'rgba(166, 58, 58, 0.2)',
                borderColor: 'rgba(166, 58, 58, 0.6)',
              },
            }}
          >
            <ArrowBackIos sx={{ color: '#A63A3A', ml: 1 }} />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: { xs: -10, md: -20 },
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(166, 58, 58, 0.3)',
              width: { xs: 45, md: 55 },
              height: { xs: 45, md: 55 },
              '&:hover': {
                background: 'rgba(166, 58, 58, 0.2)',
                borderColor: 'rgba(166, 58, 58, 0.6)',
              },
            }}
          >
            <ArrowForwardIos sx={{ color: '#A63A3A' }} />
          </IconButton>

          {/* Dots */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mt: 4 }}>
            {testimonials.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentSlide(index)}
                sx={{
                  width: currentSlide === index ? 40 : 12,
                  height: 12,
                  borderRadius: 20,
                  background: currentSlide === index
                    ? 'linear-gradient(135deg, #A63A3A, #8B2E2E)'
                    : 'rgba(166, 58, 58, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: currentSlide === index ? '2px solid rgba(166, 58, 58, 0.5)' : 'none',
                  '&:hover': {
                    background: 'rgba(166, 58, 58, 0.5)',
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
