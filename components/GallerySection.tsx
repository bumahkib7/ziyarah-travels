'use client';

import { useState, useEffect } from 'react';
import { Box, Container, Typography, Chip, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const galleryImages = [
  {
    src: '/gallery/pilgrimage-guide-1.jpg',
    title: 'Professional Guidance at Holy Sites',
  },
  {
    src: '/gallery/pilgrimage-guide-2.jpg',
    title: 'Expert Support in Mecca',
  },
  {
    src: '/gallery/pilgrims-mecca-1.jpg',
    title: 'Pilgrims at Sacred Sites',
  },
  {
    src: '/gallery/pilgrims-mecca-2.jpg',
    title: 'Guided Tours at Mecca',
  },
  {
    src: '/gallery/team-departure.jpg',
    title: 'Team Ready for Departure',
  },
  {
    src: '/gallery/heartfelt-success.jpg',
    title: 'Heartfelt Success Stories',
  },
  {
    src: '/gallery/office-exterior.jpg',
    title: 'Ziyarah Travels Office',
  },
  {
    src: '/gallery/office-team.jpg',
    title: 'Meeting with Officials',
  },
  {
    src: '/gallery/office-greeting.jpg',
    title: 'Welcoming Our Clients',
  },
  {
    src: '/gallery/office-reception.jpg',
    title: 'Our Modern Reception Area',
  },
  {
    src: '/gallery/office-event.jpg',
    title: 'Community Events',
  },
];

export default function GallerySection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Determine how many images to show based on screen size
  const imagesPerView = isMobile ? 1 : isTablet ? 2 : 3;

  // Duplicate images for infinite scroll
  const extendedImages = [...galleryImages, ...galleryImages, ...galleryImages];
  const startIndex = galleryImages.length; // Start from the middle set

  const [currentSlide, setCurrentSlide] = useState(startIndex);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto-play functionality with infinite scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Reset position when reaching end of duplicated section
  useEffect(() => {
    if (currentSlide >= startIndex + galleryImages.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(startIndex);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    } else if (currentSlide < startIndex) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(startIndex + galleryImages.length - 1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    }
  }, [currentSlide, startIndex]);

  const handlePrev = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  return (
    <Box id="gallery" sx={{ py: { xs: 8, md: 10 }, background: 'linear-gradient(135deg, rgba(166, 58, 58, 0.02) 0%, rgba(255, 255, 255, 0.03) 100%)' }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            label="PHOTO GALLERY"
            sx={{
              background: 'rgba(166, 58, 58, 0.12)',
              backdropFilter: 'blur(10px)',
              color: '#8B2E2E',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: 2,
              mb: 2,
              border: '1px solid rgba(166, 58, 58, 0.25)',
              px: 2,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.25rem', md: '2.75rem' },
              color: '#0f172a',
              mb: 1.5,
            }}
          >
            Our Journey in Pictures
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#64748b',
              fontSize: '1rem',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Explore moments from our pilgrimages and community
          </Typography>
        </Box>

        {/* Multi-Image Carousel */}
        <Box sx={{ position: 'relative', maxWidth: '1400px', mx: 'auto', px: { xs: 2, md: 8 } }}>
          <Box sx={{ overflow: 'hidden', borderRadius: 4 }}>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
                transform: `translateX(-${currentSlide * (100 / imagesPerView)}%)`,
              }}
            >
              {extendedImages.map((image, index) => (
                <Box
                  key={index}
                  sx={{
                    minWidth: `calc(${100 / imagesPerView}% - ${(imagesPerView - 1) * 8 / imagesPerView}px)`,
                    position: 'relative',
                    borderRadius: 3,
                    overflow: 'hidden',
                    height: { xs: 320, sm: 380, md: 420 },
                    boxShadow: '0 8px 32px rgba(166, 58, 58, 0.15)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 16px 48px rgba(166, 58, 58, 0.25)',
                    },
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)',
                      p: { xs: 2, md: 2.5 },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                        lineHeight: 1.3,
                      }}
                    >
                      {image.title}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Navigation Arrows - Always visible for infinite scroll */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: { xs: -10, md: -20 },
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(166, 58, 58, 0.2)',
              width: { xs: 45, md: 55 },
              height: { xs: 45, md: 55 },
              zIndex: 10,
              '&:hover': {
                background: 'rgba(166, 58, 58, 0.1)',
                borderColor: 'rgba(166, 58, 58, 0.4)',
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
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(166, 58, 58, 0.2)',
              width: { xs: 45, md: 55 },
              height: { xs: 45, md: 55 },
              zIndex: 10,
              '&:hover': {
                background: 'rgba(166, 58, 58, 0.1)',
                borderColor: 'rgba(166, 58, 58, 0.4)',
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
            {galleryImages.map((_, index) => {
              const actualSlide = ((currentSlide - startIndex) % galleryImages.length + galleryImages.length) % galleryImages.length;
              return (
                <Box
                  key={index}
                  onClick={() => setCurrentSlide(startIndex + index)}
                  sx={{
                    width: actualSlide === index ? 40 : 12,
                    height: 12,
                    borderRadius: 20,
                    background: actualSlide === index
                      ? 'linear-gradient(135deg, #A63A3A, #8B2E2E)'
                      : 'rgba(166, 58, 58, 0.25)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: actualSlide === index ? '2px solid rgba(166, 58, 58, 0.4)' : 'none',
                    '&:hover': {
                      background: 'rgba(166, 58, 58, 0.4)',
                    },
                  }}
                />
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
