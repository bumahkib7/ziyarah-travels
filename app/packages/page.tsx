'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Chip, Card, CardContent, CardMedia, Button, Tabs, Tab, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import { CheckCircle, Flight, Hotel, LocalHospital, Restaurant, DirectionsBus, AccountBalance, Group } from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Package {
  id: string;
  category: 'hajj' | 'umrah';
  name: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  badge?: string;
}

const packages: Package[] = [
  {
    id: 'umrah-economy',
    category: 'umrah',
    name: 'Umrah Economy Package',
    duration: '14 Days',
    price: 2499,
    image: '/gallery/pilgrims-mecca-1.jpg',
    description: 'An affordable Umrah package with comfortable accommodation near the Holy Mosques',
    features: [
      'Round-trip flight tickets',
      'Visa processing',
      '3-star hotel accommodation',
      'Daily breakfast',
      'Airport transfers',
      'Ziyarah tours',
      'English-speaking guide',
    ],
  },
  {
    id: 'umrah-vip',
    category: 'umrah',
    name: 'Umrah VIP Package',
    duration: '14 Days',
    price: 4299,
    image: '/gallery/pilgrimage-guide-1.jpg',
    description: 'Premium Umrah experience with 5-star hotels and exclusive services',
    features: [
      'Business class flights',
      'Visa processing',
      '5-star hotel near Haram',
      'All meals included',
      'Private VIP transfers',
      'Extended Ziyarah tours',
      'Personal guide service',
      '24/7 concierge support',
    ],
    badge: 'Most Popular',
  },
  {
    id: 'hajj-2025',
    category: 'hajj',
    name: 'Hajj 2025 Package',
    duration: '21 Days',
    price: 8999,
    image: '/gallery/pilgrims-mecca-2.jpg',
    description: 'Complete Hajj package with comprehensive guidance and premium services',
    features: [
      'Round-trip flight tickets',
      'Hajj visa processing',
      '4-star hotels in Makkah & Madinah',
      'Full board meals',
      'Air-conditioned bus transfers',
      'Experienced Hajj guides',
      'Medical support',
      'Group coordination',
      'Pre-departure training',
    ],
    badge: 'Limited Spots',
  },
  {
    id: 'hajj-premium',
    category: 'hajj',
    name: 'Hajj Premium Package',
    duration: '21 Days',
    price: 12999,
    image: '/gallery/pilgrimage-guide-2.jpg',
    description: 'Luxury Hajj experience with the finest accommodations and services',
    features: [
      'Business class flights',
      'Express visa processing',
      '5-star hotels near Haram',
      'Premium buffet meals',
      'Private group transfers',
      'Senior religious scholars',
      'Full medical team',
      'Small group size (max 25)',
      'Extensive training program',
      'VIP services at airports',
    ],
    badge: 'Premium',
  },
  {
    id: 'umrah-short',
    category: 'umrah',
    name: 'Umrah Express (7 Days)',
    duration: '7 Days',
    price: 1799,
    image: '/gallery/team-departure.jpg',
    description: 'Quick Umrah package perfect for those with limited time',
    features: [
      'Round-trip flight tickets',
      'Visa processing',
      '3-star hotel accommodation',
      'Daily breakfast',
      'Airport transfers',
      'Basic Ziyarah tour',
    ],
  },
  {
    id: 'umrah-ramadan',
    category: 'umrah',
    name: 'Ramadan Umrah Special',
    duration: '10 Days',
    price: 3499,
    image: '/gallery/heartfelt-success.jpg',
    description: 'Experience the blessed month of Ramadan in the Holy Cities',
    features: [
      'Round-trip flight tickets',
      'Visa processing',
      '4-star hotel near Haram',
      'Iftar & Suhoor meals',
      'Air-conditioned transfers',
      'Taraweeh arrangements',
      'Ziyarah tours',
      'Ramadan gift package',
    ],
    badge: 'Seasonal',
  },
];

const iconMap: { [key: string]: React.ReactElement } = {
  'flight': <Flight sx={{ color: '#A63A3A' }} />,
  'visa': <AccountBalance sx={{ color: '#A63A3A' }} />,
  'hotel': <Hotel sx={{ color: '#A63A3A' }} />,
  'meal': <Restaurant sx={{ color: '#A63A3A' }} />,
  'transfer': <DirectionsBus sx={{ color: '#A63A3A' }} />,
  'tour': <Group sx={{ color: '#A63A3A' }} />,
  'medical': <LocalHospital sx={{ color: '#A63A3A' }} />,
};

function getIconForFeature(feature: string): React.ReactElement {
  const lowerFeature = feature.toLowerCase();
  if (lowerFeature.includes('flight')) return iconMap.flight;
  if (lowerFeature.includes('visa')) return iconMap.visa;
  if (lowerFeature.includes('hotel') || lowerFeature.includes('accommodation')) return iconMap.hotel;
  if (lowerFeature.includes('meal') || lowerFeature.includes('breakfast') || lowerFeature.includes('buffet')) return iconMap.meal;
  if (lowerFeature.includes('transfer')) return iconMap.transfer;
  if (lowerFeature.includes('tour') || lowerFeature.includes('ziyarah')) return iconMap.tour;
  if (lowerFeature.includes('medical')) return iconMap.medical;
  return <CheckCircle sx={{ color: '#A63A3A' }} />;
}

export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'hajj' | 'umrah'>('all');

  const filteredPackages = selectedCategory === 'all'
    ? packages
    : packages.filter(pkg => pkg.category === selectedCategory);

  return (
    <Box sx={{ minHeight: '100vh', background: '#ffffff' }}>
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '50vh', md: '60vh' },
          backgroundImage: 'url(https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(10, 10, 31, 0.85) 0%, rgba(139, 46, 46, 0.75) 100%)',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Chip
            label="OUR PACKAGES"
            sx={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: 2,
              mb: 2,
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          />
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 2,
              textShadow: '0 4px 20px rgba(0,0,0,0.4)',
            }}
          >
            Choose Your Journey
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: { xs: '1rem', md: '1.25rem' },
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Carefully curated packages for Hajj and Umrah with comprehensive services
          </Typography>
        </Container>
      </Box>

      {/* Filter Tabs */}
      <Box sx={{ background: '#ffffff', borderBottom: '1px solid rgba(0,0,0,0.08)', position: 'sticky', top: 70, zIndex: 100 }}>
        <Container maxWidth="lg">
          <Tabs
            value={selectedCategory}
            onChange={(e, newValue) => setSelectedCategory(newValue)}
            sx={{
              '& .MuiTabs-indicator': {
                background: 'linear-gradient(90deg, #A63A3A 0%, #8B2E2E 100%)',
                height: 3,
              },
            }}
          >
            <Tab
              label="All Packages"
              value="all"
              sx={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#64748b',
                '&.Mui-selected': { color: '#A63A3A' },
                textTransform: 'none',
              }}
            />
            <Tab
              label="Hajj Packages"
              value="hajj"
              sx={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#64748b',
                '&.Mui-selected': { color: '#A63A3A' },
                textTransform: 'none',
              }}
            />
            <Tab
              label="Umrah Packages"
              value="umrah"
              sx={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#64748b',
                '&.Mui-selected': { color: '#A63A3A' },
                textTransform: 'none',
              }}
            />
          </Tabs>
        </Container>
      </Box>

      {/* Packages Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4}>
          {filteredPackages.map((pkg) => (
            <Grid size={{ xs: 12, md: 6 }} key={pkg.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(166, 58, 58, 0.12)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 48px rgba(166, 58, 58, 0.2)',
                  },
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={pkg.image}
                    alt={pkg.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  {pkg.badge && (
                    <Chip
                      label={pkg.badge}
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        background: 'linear-gradient(135deg, #A63A3A, #8B2E2E)',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        boxShadow: '0 4px 12px rgba(166, 58, 58, 0.4)',
                      }}
                    />
                  )}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
                      p: 2,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                      }}
                    >
                      {pkg.category} • {pkg.duration}
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Package Name & Price */}
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: '#0f172a',
                        mb: 1,
                      }}
                    >
                      {pkg.name}
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
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#64748b',
                          fontSize: '0.875rem',
                        }}
                      >
                        from
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 800,
                          color: '#A63A3A',
                        }}
                      >
                        ${pkg.price.toLocaleString()}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#64748b',
                          fontSize: '0.875rem',
                        }}
                      >
                        /person
                      </Typography>
                    </Box>
                  </Box>

                  {/* Features List */}
                  <Box sx={{ mb: 3, flexGrow: 1 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 700,
                        color: '#0f172a',
                        mb: 1.5,
                        textTransform: 'uppercase',
                        fontSize: '0.75rem',
                        letterSpacing: 1,
                      }}
                    >
                      What's Included
                    </Typography>
                    <List dense sx={{ py: 0 }}>
                      {pkg.features.map((feature, index) => (
                        <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            {getIconForFeature(feature)}
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              fontSize: '0.875rem',
                              color: '#475569',
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  {/* CTA Buttons */}
                  <Box sx={{ display: 'flex', gap: 1.5 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      href="/#contact"
                      sx={{
                        background: 'linear-gradient(135deg, #A63A3A, #8B2E2E)',
                        color: 'white',
                        fontWeight: 700,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '1rem',
                        boxShadow: '0 4px 14px rgba(166, 58, 58, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #8B2E2E, #A63A3A)',
                          boxShadow: '0 6px 20px rgba(166, 58, 58, 0.4)',
                        },
                      }}
                    >
                      Book Now
                    </Button>
                    <Button
                      variant="outlined"
                      href="/#contact"
                      sx={{
                        borderColor: '#A63A3A',
                        color: '#A63A3A',
                        fontWeight: 600,
                        py: 1.5,
                        px: 3,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '1rem',
                        '&:hover': {
                          borderColor: '#8B2E2E',
                          background: 'rgba(166, 58, 58, 0.05)',
                        },
                      }}
                    >
                      Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Contact CTA Section */}
        <Box
          sx={{
            mt: 8,
            p: { xs: 4, md: 6 },
            background: 'linear-gradient(135deg, rgba(166, 58, 58, 0.05) 0%, rgba(139, 46, 46, 0.08) 100%)',
            borderRadius: 4,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#0f172a',
              mb: 2,
            }}
          >
            Need Help Choosing?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#64748b',
              mb: 3,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Our experienced team is here to help you select the perfect package for your spiritual journey
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/#contact"
            sx={{
              background: 'linear-gradient(135deg, #A63A3A, #8B2E2E)',
              color: 'white',
              fontWeight: 700,
              px: 5,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1.1rem',
              boxShadow: '0 4px 14px rgba(166, 58, 58, 0.3)',
              '&:hover': {
                background: 'linear-gradient(135deg, #8B2E2E, #A63A3A)',
                boxShadow: '0 6px 20px rgba(166, 58, 58, 0.4)',
              },
            }}
          >
            Contact Our Team
          </Button>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
