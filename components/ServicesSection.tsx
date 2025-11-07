'use client';

import { Box, Container, Typography, Chip, IconButton } from '@mui/material';
import { Flight, Hotel, Restaurant, Groups, Support, Security, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useState, useEffect } from 'react';

const services = [
  {
    icon: <Flight fontSize="large" />,
    title: 'Flight Booking',
    description: 'Direct flights from Entebbe to Jeddah and Medina with Qatar Airways, Emirates, and Ethiopian Airlines. Convenient schedules and comfortable travel.',
    image: '/services/flight-booking.jpg',
  },
  {
    icon: <Hotel fontSize="large" />,
    title: 'Hotels Near Haram',
    description: 'Premium accommodations in Makkah and Madinah within walking distance to Al-Masjid al-Haram and Masjid an-Nabawi. 3 to 5-star options available.',
    image: '/services/hotel-room.jpg',
  },
  {
    icon: <Groups fontSize="large" />,
    title: 'Quba Mosque Tours',
    description: 'Visit the first mosque built in Islam. Located in Medina, Quba Mosque holds immense spiritual significance. Guided tours with experienced scholars.',
    image: '/gallery/pilgrims-mecca-1.jpg',
  },
  {
    icon: <Groups fontSize="large" />,
    title: 'Jabal al-Nour & Cave Hira',
    description: 'Climb Mount Hira where Prophet Muhammad (PBUH) received the first revelation. Experience this profound spiritual journey with guided support.',
    image: '/gallery/pilgrimage-guide-1.jpg',
  },
  {
    icon: <Groups fontSize="large" />,
    title: 'Mount Uhud Tours',
    description: 'Visit the historic site of the Battle of Uhud and pay respects at the Martyrs Cemetery. Learn about Islamic history with knowledgeable guides.',
    image: '/gallery/pilgrimage-guide-2.jpg',
  },
  {
    icon: <Restaurant fontSize="large" />,
    title: 'Halal Meals & Dining',
    description: 'Full board packages with delicious halal meals. International buffets and traditional Saudi cuisine at quality restaurants near your hotel.',
    image: '/services/halal-food.jpg',
  },
  {
    icon: <Support fontSize="large" />,
    title: '24/7 Support',
    description: 'Ugandan team leaders and 24/7 support throughout your journey. Emergency assistance, translation services, and guidance always available.',
    image: '/services/customer-support.jpg',
  },
  {
    icon: <Security fontSize="large" />,
    title: 'Safe & Secure Travel',
    description: 'Comprehensive travel insurance, secure transportation, verified accommodations, and licensed guides ensure your safety throughout the pilgrimage.',
    image: '/gallery/office-exterior.jpg',
  },
];

export default function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const currentService = services[currentSlide];

  return (
    <Box id="services" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            label="OUR SERVICES"
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
            Premium Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#475569',
              fontWeight: 400,
              maxWidth: '650px',
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Everything you need for a seamless and spiritual journey
          </Typography>
        </Box>

        {/* Carousel */}
        <Box sx={{ position: 'relative' }}>
          <Box
            className="glass-strong"
            sx={{
              borderRadius: 5,
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(25px)',
              border: '1.5px solid rgba(255, 255, 255, 0.4)',
              boxShadow: '0 15px 50px rgba(31, 38, 135, 0.15)',
            }}
          >
            {/* Image */}
            <Box sx={{ position: 'relative', height: { xs: 280, md: 350 }, overflow: 'hidden' }}>
              <img
                src={currentService.image}
                alt={currentService.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'opacity 0.5s ease',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(16,185,129,0.4) 100%)',
                }}
              />
              {/* Icon Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 24,
                  left: 24,
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(15px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(166, 58, 58, 0.5)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                }}
              >
                <Box sx={{ color: '#A63A3A', fontSize: 32 }}>{currentService.icon}</Box>
              </Box>
            </Box>

            {/* Content */}
            <Box sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: '#0f172a',
                  mb: 1.5,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                {currentService.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#475569',
                  lineHeight: 1.7,
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                }}
              >
                {currentService.description}
              </Typography>
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

          {/* Dots Indicator */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1.5,
              mt: 4,
            }}
          >
            {services.map((_, index) => (
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
