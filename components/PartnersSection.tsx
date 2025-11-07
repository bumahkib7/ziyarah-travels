'use client';

import { Box, Container, Typography, Chip } from '@mui/material';

const partners = [
  { name: 'Qatar Airways', logo: '/partners/qatar-airways.png' },
  { name: 'Emirates', logo: '/partners/emirates.png' },
  { name: 'Turkish Airlines', logo: '/partners/turkish-airlines.png' },
];

// Duplicate the array for seamless infinite scroll
const allPartners = [...partners, ...partners];

export default function PartnersSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(180deg, rgba(166, 58, 58, 0.02) 0%, rgba(255, 255, 255, 0.05) 100%)',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            label="TRUSTED PARTNERS"
            sx={{
              background: 'rgba(166, 58, 58, 0.12)',
              backdropFilter: 'blur(10px)',
              color: '#8B2E2E',
              fontWeight: 700,
              fontSize: '0.7rem',
              letterSpacing: 2,
              mb: 2,
              border: '1px solid rgba(166, 58, 58, 0.25)',
              px: 2,
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#0f172a',
              mb: 2,
            }}
          >
            Our Airline Partners
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#64748b',
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            We work with the world's leading airlines to provide you with comfortable and reliable flights
          </Typography>
        </Box>
      </Container>

      {/* Auto-scrolling logos */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          py: 4,
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            width: '150px',
            height: '100%',
            zIndex: 2,
            pointerEvents: 'none',
          },
          '&::before': {
            left: 0,
            background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
          },
          '&::after': {
            right: 0,
            background: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 4, md: 8 },
            '@keyframes scroll': {
              '0%': {
                transform: 'translateX(0)',
              },
              '100%': {
                transform: 'translateX(-50%)',
              },
            },
            animation: 'scroll 30s linear infinite',
            '&:hover': {
              animationPlayState: 'paused',
            },
          }}
        >
          {allPartners.map((partner, index) => (
            <Box
              key={`${partner.name}-${index}`}
              sx={{
                minWidth: { xs: '140px', md: '180px' },
                height: { xs: '80px', md: '100px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'white',
                borderRadius: 3,
                border: '1px solid rgba(166, 58, 58, 0.12)',
                boxShadow: '0 2px 12px rgba(166, 58, 58, 0.08)',
                transition: 'all 0.3s ease',
                p: 3,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(166, 58, 58, 0.15)',
                  border: '1px solid rgba(166, 58, 58, 0.25)',
                },
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
