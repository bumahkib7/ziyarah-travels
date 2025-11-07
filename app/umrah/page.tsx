'use client';

import { Box, Container, Typography, Button, Chip, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { CheckCircle, FlightTakeoff, Hotel, Restaurant, Tour, LocalActivity, Support } from '@mui/icons-material';
import Footer from '@/components/Footer';
import Link from 'next/link';

const umrahPackages = [
  {
    title: 'Umrah Economy',
    duration: '14 Days',
    description: 'Affordable Umrah package perfect for families and groups',
    price: 'UGX 9,500,000',
    usdPrice: '$2,600',
    features: [
      'Return flights from Entebbe',
      '3-star hotel near Haram',
      'Full board meals',
      'Visa processing',
      'Group leader & guide',
      'Ziyarah tours included',
      'Shared accommodation',
      'Airport transfers',
    ],
  },
  {
    title: 'Umrah Standard',
    duration: '14 Days',
    description: 'Comfortable Umrah experience with quality accommodation',
    price: 'UGX 13,000,000',
    usdPrice: '$3,500',
    features: [
      'Qatar Airways flights',
      '4-star hotel (close to Haram)',
      'Premium meals included',
      'Fast-track visa',
      'Private transport',
      'Extended Ziyarah tours',
      'Private accommodation',
      'Travel insurance',
    ],
  },
  {
    title: 'Umrah VIP',
    duration: '14 Days',
    description: 'Premium Umrah experience with 5-star comfort and exclusive services',
    price: 'UGX 17,000,000',
    usdPrice: '$4,600',
    features: [
      'Qatar Airways business class',
      '5-star hotel (walking distance)',
      'Premium buffet meals',
      'VIP visa processing',
      'Private luxury transport',
      'VIP Ziyarah tours',
      'Suite accommodation',
      'Travel insurance included',
      '24/7 concierge service',
      'Private shopping tours',
    ],
    popular: true,
  },
];

const umrahFeatures = [
  {
    icon: <FlightTakeoff sx={{ fontSize: 40, color: '#A63A3A' }} />,
    title: 'Convenient Flights',
    description: 'Direct or one-stop flights from Entebbe with trusted airlines',
  },
  {
    icon: <Hotel sx={{ fontSize: 40, color: '#A63A3A' }} />,
    title: 'Quality Hotels',
    description: 'Comfortable hotels within walking distance or short shuttle to the Haram',
  },
  {
    icon: <Tour sx={{ fontSize: 40, color: '#A63A3A' }} />,
    title: 'Ziyarah Tours',
    description: 'Visit historic Islamic sites in Makkah and Madinah with expert guides',
  },
  {
    icon: <LocalActivity sx={{ fontSize: 40, color: '#A63A3A' }} />,
    title: 'Umrah Rituals',
    description: 'Complete guidance for Tawaf, Sa\'i, and all Umrah rituals',
  },
  {
    icon: <Restaurant sx={{ fontSize: 40, color: '#A63A3A' }} />,
    title: 'Delicious Meals',
    description: 'Full board halal meals with variety and quality throughout your stay',
  },
  {
    icon: <Support sx={{ fontSize: 40, color: '#A63A3A' }} />,
    title: '24/7 Support',
    description: 'Round-the-clock assistance from our experienced team',
  },
];

export default function UmrahPage() {
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
              label="UMRAH PACKAGES"
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
              Umrah Packages
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
              Embark on your spiritual journey to the holy cities of Makkah and Madinah with our all-inclusive packages
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
              Book Your Umrah
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 10, md: 12 }, background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 100%)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip
              label="COMPLETE PACKAGE"
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
              What's Included
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
              Every detail is taken care of for a smooth and blessed journey
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {umrahFeatures.map((feature, index) => (
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
                    {feature.icon}
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
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#64748b',
                      lineHeight: 1.7,
                      fontSize: '0.95rem',
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Packages Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, background: 'linear-gradient(135deg, rgba(166, 58, 58, 0.02) 0%, rgba(255, 255, 255, 0.03) 100%)' }}>
        <Container maxWidth="xl">
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
            Choose Your Package
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
            Select the package that best suits your needs and budget
          </Typography>

          <Grid container spacing={4}>
            {umrahPackages.map((pkg, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
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
                      POPULAR
                    </Box>
                  )}

                  <Box sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
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
                        width: 'fit-content',
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
                        p: 2.5,
                        background: 'linear-gradient(135deg, rgba(166, 58, 58, 0.08) 0%, rgba(166, 58, 58, 0.12) 100%)',
                        borderRadius: 2,
                        border: '1px solid rgba(166, 58, 58, 0.2)',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 0.5 }}>
                        <Typography
                          variant="h4"
                          sx={{
                            color: '#A63A3A',
                            fontWeight: 800,
                            fontSize: '1.8rem',
                          }}
                        >
                          {pkg.price}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 600 }}>
                          ({pkg.usdPrice})
                        </Typography>
                      </Box>
                      <Typography variant="caption" sx={{ color: '#64748b' }}>
                        per person • installments available
                      </Typography>
                    </Box>

                    {/* Features */}
                    <Box sx={{ mb: 3, flexGrow: 1 }}>
                      {pkg.features.map((feature, idx) => (
                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 1.2 }}>
                          <CheckCircle sx={{ color: '#A63A3A', fontSize: 18, flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ color: '#334155', fontWeight: 500, fontSize: '0.9rem' }}>
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
