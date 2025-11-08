'use client';

import { Box, Container, Typography, Button, Chip } from '@mui/material';
import SplitText from './SplitText';

export default function HeroSection() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: 10,
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        key="hero-video"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/hero-video.mp4?v=2" type="video/mp4" />
      </video>

      {/* Video Overlay */}
      <Box className="video-overlay" sx={{ zIndex: 1 }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            p: { xs: 4, md: 8 },
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px)',
            borderRadius: 5,
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Chip
            label="Trusted by 10,000+ Pilgrims"
            sx={{
              mb: 3,
              background: 'rgba(166, 58, 58, 0.25)',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: 0.5,
              backdropFilter: 'blur(10px)',
              px: 2,
              py: 0.5,
            }}
          />
          <Box
            sx={{
              fontSize: { xs: '2.8rem', md: '5rem' },
              fontWeight: 800,
              mb: 3,
              color: '#ffffff',
              textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 2px 10px rgba(166,58,58,0.3)',
              lineHeight: 1.2,
              letterSpacing: -1,
            }}
          >
            <SplitText
              text="Begin Your Sacred Journey"
              className=""
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </Box>
          <Box
            sx={{
              mb: 5,
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 500,
              maxWidth: '700px',
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.4rem' },
              lineHeight: 1.6,
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            }}
          >
            <SplitText
              text="Experience the spiritual journey of a lifetime with our comprehensive Hajj, Umrah, and Ziyarah packages"
              className=""
              delay={80}
              duration={0.5}
              ease="power2.out"
              splitType="words"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </Box>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              href="/packages"
              sx={{
                background: 'linear-gradient(135deg, #A63A3A, #8B2E2E)',
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 700,
                borderRadius: 3,
                textTransform: 'none',
                boxShadow: '0 8px 24px rgba(166, 58, 58, 0.4)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #8B2E2E, #6B2020)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 32px rgba(166, 58, 58, 0.5)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              View Packages
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/#contact"
              sx={{
                borderColor: 'rgba(255, 255, 255, 0.8)',
                borderWidth: '2px',
                color: '#fff',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 700,
                borderRadius: 3,
                textTransform: 'none',
                '&:hover': {
                  borderColor: '#fff',
                  borderWidth: '2px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
