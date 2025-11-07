'use client';

import { Box, Container, Typography, Button, Chip, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { CheckCircle, FlightTakeoff, Hotel, Restaurant, Security, Group, School } from '@mui/icons-material';
import Footer from '@/components/Footer';
import Link from 'next/link';

const hajjPackages = [
  {
    title: 'Hajj Economy',
    duration: '21-25 Days',
    description: 'Affordable Hajj package with complete guidance for all rituals',
    price: 'UGX 20,000,000',
    usdPrice: '$5,400',
    features: [
      'Return flights from Entebbe',
      '3-star hotels in Makkah & Madinah',
      'Full board meals',
      'Hajj visa & permits',
      'Experienced group leader',
      'All rituals support',
      'Transportation in Mina & Arafat',
      'Shared accommodation',
    ],
  },
  {
    title: 'Hajj VIP',
    duration: '21-25 Days',
    description: 'Premium Hajj experience with 5-star comfort and exclusive services',
    price: 'UGX 30,000,000',
    usdPrice: '$8,100',
    features: [
      'Qatar Airways direct flights',
      '5-star hotels near Haram',
      'Premium buffet meals',
      'Fast-track visa processing',
      'Private transportation',
      'VIP ritual guidance',
      'Luxury tents in Mina',
      'Private accommodation',
      'Travel insurance included',
      '24/7 support team',
    ],
    popular: true,
  },
];

const rituals = [
  {
    icon: <FlightTakeoff sx={{ fontSize: 40, color: '#A63A3A' }} />,
    title: 'Journey to Makkah',
    description: 'Comfortable flights and seamless airport transfers to begin your spiritual journey',
  },
  {
    icon: <Hotel sx={{ fontSize: 40, color: '#A63A3A' }} />,
    title: 'Accommodation',
    description: 'Quality hotels near the Haram for easy access to prayer and rituals',
  },
  {
    icon: <School sx={{ fontSize: 40, color: '#A63A3A' }} />,
    title: 'Expert Guidance',
    description: 'Experienced Ugandan scholars guide you through every step of Hajj',
  },
  {
    icon: <Group sx={{ fontSize: 40, color: '#A63A3A' }} />,
    title: 'Group Support',
    description: 'Travel with fellow Ugandan pilgrims for a supportive experience',
  },
  {
    icon: <Restaurant sx={{ fontSize: 40, color: '#A63A3A' }} />,
    title: 'Meals Provided',
    description: 'Full board meals throughout your journey with halal options',
  },
  {
    icon: <Security sx={{ fontSize: 40, color: '#A63A3A' }} />,
    title: 'Safety & Security',
    description: '24/7 support and coordination with Saudi authorities',
  },
];

export default function HajjPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 16, md: 20 },
          pb: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, rgba(166, 58, 58, 0.08) 0%, rgba(255, 255, 255, 0.05) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip
              label="HAJJ PACKAGES"
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
              variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '4rem' },
                color: '#0f172a',
                mb: 2,
              }}
            >
              Hajj 2025
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#64748b',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              Experience the fifth pillar of Islam with expert guidance and complete support throughout your sacred journey
            </Typography>
            <Button
              variant="contained"
              size="large"
              component="a"
              href="/#contact"
              sx={{
                background: 'linear-gradient(135deg, #A63A3A, #8B2E2E)',
                color: 'white',
                fontWeight: 600,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(166, 58, 58, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #8B2E2E, #6B2020)',
                  boxShadow: '0 6px 24px rgba(166, 58, 58, 0.4)',
                },
              }}
            >
              Book Your Hajj Journey
            </Button>
          </Box>
        </Container>
      </Box>

      {/* What's Included Section */}
      <Box sx={{ py: { xs: 10, md: 12 }, background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 100%)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip
              label="COMPREHENSIVE SERVICE"
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
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.2rem', md: '3rem' },
                color: '#0f172a',
                mb: 2,
              }}
            >
              What's Included in Hajj
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#64748b',
                fontSize: { xs: '1rem', md: '1.15rem' },
                maxWidth: '750px',
                mx: 'auto',
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              We handle every detail so you can focus entirely on your spiritual journey
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {rituals.map((ritual, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(166, 58, 58, 0.12)',
                    borderRadius: 4,
                    p: 4,
                    boxShadow: '0 2px 12px rgba(166, 58, 58, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, #A63A3A 0%, #8B2E2E 100%)',
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.4s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 32px rgba(166, 58, 58, 0.18)',
                      border: '1px solid rgba(166, 58, 58, 0.25)',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 100%)',
                      '&::before': {
                        transform: 'scaleX(1)',
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, rgba(166, 58, 58, 0.1) 0%, rgba(166, 58, 58, 0.15) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      border: '2px solid rgba(166, 58, 58, 0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'linear-gradient(135deg, rgba(166, 58, 58, 0.15) 0%, rgba(166, 58, 58, 0.2) 100%)',
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    {ritual.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#0f172a',
                      mb: 1.5,
                      fontSize: '1.25rem',
                    }}
                  >
                    {ritual.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#64748b',
                      lineHeight: 1.7,
                      fontSize: '0.95rem',
                    }}
                  >
                    {ritual.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Packages Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, background: 'linear-gradient(135deg, rgba(166, 58, 58, 0.02) 0%, rgba(255, 255, 255, 0.03) 100%)' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#0f172a',
              mb: 2,
              textAlign: 'center',
            }}
          >
            Hajj Package Options
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#64748b',
              fontSize: '1.05rem',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.7,
              mb: 6,
              textAlign: 'center',
            }}
          >
            Choose the package that best fits your needs and budget
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {hajjPackages.map((pkg, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(30px)',
                    border: pkg.popular ? '2px solid #A63A3A' : '1px solid rgba(166, 58, 58, 0.2)',
                    boxShadow: pkg.popular ? '0 12px 40px rgba(166, 58, 58, 0.2)' : '0 8px 32px rgba(166, 58, 58, 0.12)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 16px 48px rgba(166, 58, 58, 0.25)',
                    },
                  }}
                >
                  {pkg.popular && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        background: 'linear-gradient(135deg, #A63A3A, #8B2E2E)',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        letterSpacing: 1.5,
                        px: 2.5,
                        py: 1,
                        borderRadius: 2,
                        zIndex: 1,
                        boxShadow: '0 4px 12px rgba(166, 58, 58, 0.4)',
                      }}
                    >
                      MOST POPULAR
                    </Box>
                  )}

                  <Box sx={{ p: 4 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        color: '#0f172a',
                        mb: 1,
                      }}
                    >
                      {pkg.title}
                    </Typography>
                    <Chip
                      label={pkg.duration}
                      size="small"
                      sx={{
                        background: 'rgba(166, 58, 58, 0.1)',
                        color: '#A63A3A',
                        fontWeight: 600,
                        mb: 2,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#64748b',
                        mb: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      {pkg.description}
                    </Typography>

                    {/* Price */}
                    <Box
                      sx={{
                        mb: 3,
                        p: 3,
                        background: 'linear-gradient(135deg, rgba(166, 58, 58, 0.08) 0%, rgba(166, 58, 58, 0.12) 100%)',
                        borderRadius: 2,
                        border: '1px solid rgba(166, 58, 58, 0.2)',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 0.5 }}>
                        <Typography
                          variant="h3"
                          sx={{
                            color: '#A63A3A',
                            fontWeight: 800,
                          }}
                        >
                          {pkg.price}
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#64748b', fontWeight: 600 }}>
                          ({pkg.usdPrice})
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: '#64748b' }}>
                        per person • installments available
                      </Typography>
                    </Box>

                    {/* Features */}
                    <Box sx={{ mb: 3 }}>
                      {pkg.features.map((feature, idx) => (
                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                          <CheckCircle sx={{ color: '#A63A3A', fontSize: 20, flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ color: '#334155', fontWeight: 500 }}>
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* CTA */}
                    <Button
                      variant="contained"
                      fullWidth
                      size="large"
                      component="a"
                      href="/#contact"
                      sx={{
                        background: 'linear-gradient(135deg, #A63A3A 0%, #8B2E2E 100%)',
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 600,
                        borderRadius: 2,
                        textTransform: 'none',
                        boxShadow: '0 4px 16px rgba(166, 58, 58, 0.25)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #8B2E2E 0%, #6B2020 100%)',
                          boxShadow: '0 6px 20px rgba(166, 58, 58, 0.35)',
                        },
                      }}
                    >
                      Book This Package
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Button
              variant="outlined"
              component={Link}
              href="/packages"
              sx={{
                borderColor: '#A63A3A',
                color: '#A63A3A',
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                '&:hover': {
                  borderColor: '#8B2E2E',
                  background: 'rgba(166, 58, 58, 0.05)',
                },
              }}
            >
              View All Packages
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
