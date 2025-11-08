'use client';

import { Box, Container, Typography, Button, Chip, CardMedia, Grid } from '@mui/material';
import { CheckCircle, AccessTime, Star, PhoneInTalk, Phone, Security, Payment } from '@mui/icons-material';

const packages = [
  {
    title: 'Umrah Economy',
    duration: '14 Days',
    description: 'Affordable Umrah package perfect for families and groups',
    price: 'UGX 9,500,000',
    usdPrice: '$2,600',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&auto=format&fit=crop',
    features: ['Return flights from Entebbe', '3-star hotel near Haram', 'Full board meals', 'Visa processing', 'Group leader & guide', 'Ziyarah tours included'],
    popular: false,
  },
  {
    title: 'Umrah VIP',
    duration: '14 Days',
    description: 'Premium Umrah experience with 5-star comfort and exclusive services',
    price: 'UGX 17,000,000',
    usdPrice: '$4,600',
    image: 'https://images.unsplash.com/photo-1564769625392-651b2089f8c7?w=800&auto=format&fit=crop',
    features: ['Qatar Airways flights', '5-star hotel (walking distance)', 'Premium buffet meals', 'Fast-track visa', 'Private transport in KSA', 'VIP Ziyarah tours', 'Travel insurance included'],
    popular: true,
  },
  {
    title: 'Hajj 2025',
    duration: '21-25 Days',
    description: 'Complete Hajj package with expert guidance for all rituals',
    price: 'UGX 23,000,000',
    usdPrice: '$6,200',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&auto=format&fit=crop',
    features: ['Direct flights from Entebbe', 'Hotels in Makkah & Madinah', 'Full board meals', 'Hajj visa & permits', 'Experienced Ugandan scholars', 'All rituals support', 'Transportation in Mina & Arafat'],
    popular: true,
  },
  {
    title: 'Ziyarah Extended',
    duration: '21 Days',
    description: 'Extended tour of holy sites in Saudi Arabia and historical Islamic locations',
    price: 'UGX 14,000,000',
    usdPrice: '$3,800',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&auto=format&fit=crop',
    features: ['Return flights', 'Hotels in multiple cities', 'Daily breakfast & dinner', 'Historical sites tour', 'Islamic lectures', 'Visit to Badr, Uhud, Quba'],
    popular: false,
  },
];

export default function PackagesSection() {
  return (
    <Box id="packages" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            label="TRAVEL PACKAGES"
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
            Choose Your Journey
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#64748b',
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Curated packages for your spiritual pilgrimage
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 4 }}>
          {packages.filter(pkg => pkg.popular).map((pkg, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Box
                className="glass-strong"
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(30px)',
                  border: '1px solid rgba(166, 58, 58, 0.2)',
                  boxShadow: '0 8px 32px rgba(166, 58, 58, 0.12)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 48px rgba(166, 58, 58, 0.2)',
                    border: '1px solid rgba(166, 58, 58, 0.3)',
                  },
                }}
              >
                {/* Image Section */}
                <Box sx={{ position: 'relative', overflow: 'hidden', height: 260 }}>
                  <CardMedia
                    component="img"
                    height="260"
                    image={pkg.image}
                    alt={pkg.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(16,185,129,0.2) 100%)',
                    }}
                  />
                  {pkg.popular && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        background: 'rgba(166, 58, 58, 0.95)',
                        backdropFilter: 'blur(10px)',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        letterSpacing: 1,
                        px: 2,
                        py: 0.8,
                        borderRadius: 20,
                        border: '1.5px solid rgba(255, 255, 255, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                      }}
                    >
                      <Star sx={{ fontSize: 12 }} /> POPULAR
                    </Box>
                  )}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      left: 16,
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      color: '#0f172a',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      px: 2.5,
                      py: 1,
                      borderRadius: 20,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.8,
                    }}
                  >
                    <AccessTime sx={{ fontSize: 18 }} /> {pkg.duration}
                  </Box>
                </Box>

                {/* Content */}
                <Box sx={{ p: 3 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: '#0f172a',
                      mb: 1,
                      fontSize: '1.5rem',
                    }}
                  >
                    {pkg.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#64748b',
                      mb: 2,
                      lineHeight: 1.6,
                    }}
                  >
                    {pkg.description}
                  </Typography>

                  {/* Price */}
                  <Box
                    sx={{
                      mb: 2,
                      p: 2,
                      background: 'rgba(166, 58, 58, 0.08)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2.5,
                      border: '1px solid rgba(166, 58, 58, 0.2)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#8B2E2E',
                          fontWeight: 800,
                          fontSize: '1.75rem',
                        }}
                      >
                        {pkg.price}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 600 }}>
                        ({pkg.usdPrice})
                      </Typography>
                    </Box>
                    <Typography variant="caption" sx={{ color: '#64748b' }}>
                      per person • installments available
                    </Typography>
                  </Box>

                  {/* Features */}
                  <Box sx={{ mb: 2.5 }}>
                    {pkg.features.slice(0, 3).map((feature, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 1.2 }}>
                        <CheckCircle sx={{ color: '#A63A3A', fontSize: 18, flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: '#334155', fontWeight: 500, fontSize: '0.9rem' }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                    {pkg.features.length > 3 && (
                      <Typography variant="caption" sx={{ color: '#64748b', fontStyle: 'italic', ml: 3.5, fontSize: '0.8rem' }}>
                        +{pkg.features.length - 3} more features
                      </Typography>
                    )}
                  </Box>

                  {/* CTA */}
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    href="#contact"
                    startIcon={<PhoneInTalk />}
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
                    Book Now
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* View All Packages CTA */}
        <Box sx={{ textAlign: 'center', mt: 2, mb: 4 }}>
          <Typography
            variant="body2"
            sx={{
              color: '#64748b',
              mb: 2,
              fontSize: '0.95rem',
            }}
          >
            Looking for more options? We have {packages.length - 2} additional packages available
          </Typography>
          <Button
            variant="outlined"
            size="large"
            href="#contact"
            sx={{
              borderColor: '#A63A3A',
              borderWidth: '2px',
              color: '#A63A3A',
              px: 4,
              py: 1.2,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: 2,
              textTransform: 'none',
              '&:hover': {
                borderColor: '#8B2E2E',
                borderWidth: '2px',
                background: 'rgba(166, 58, 58, 0.05)',
              },
            }}
          >
            View All Packages & Get Custom Quote
          </Button>
        </Box>

        {/* Bottom Info */}
        <Box sx={{ mt: 4 }}>
          <Box
            className="glass-strong"
            sx={{
              p: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              flexWrap: 'wrap',
              justifyContent: 'center',
              borderRadius: 4,
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'rgba(166, 58, 58, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 0.8,
                  border: '2px solid rgba(166, 58, 58, 0.3)',
                }}
              >
                <Phone sx={{ color: '#A63A3A', fontSize: 24 }} />
              </Box>
              <Typography variant="body2" sx={{ color: '#0f172a', fontWeight: 700 }}>
                24/7 Support
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'rgba(166, 58, 58, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 0.8,
                  border: '2px solid rgba(166, 58, 58, 0.3)',
                }}
              >
                <Security sx={{ color: '#A63A3A', fontSize: 24 }} />
              </Box>
              <Typography variant="body2" sx={{ color: '#0f172a', fontWeight: 700 }}>
                Secure Booking
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'rgba(166, 58, 58, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 0.8,
                  border: '2px solid rgba(166, 58, 58, 0.3)',
                }}
              >
                <Payment sx={{ color: '#A63A3A', fontSize: 24 }} />
              </Box>
              <Typography variant="body2" sx={{ color: '#0f172a', fontWeight: 700 }}>
                Mobile Money
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.75rem' }}>
                & Installments
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
