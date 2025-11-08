'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { CheckCircle, Flight, Hotel, LocalHospital, Restaurant, DirectionsBus, AccountBalance, Group } from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

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

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <Card className="h-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-slate-100">
      <div className="relative">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-60 object-cover"
        />
        {pkg.badge && (
          <Badge className="absolute top-4 right-4 bg-gradient-to-r from-[#A63A3A] to-[#8B2E2E] text-white font-bold px-3 py-1 shadow-lg">
            {pkg.badge}
          </Badge>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-white text-sm font-semibold uppercase tracking-wide">
            {pkg.category} • {pkg.duration}
          </p>
        </div>
      </div>

      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
          <p className="text-slate-600 mb-3 leading-relaxed">{pkg.description}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-sm text-slate-500">from</span>
            <span className="text-4xl font-extrabold text-[#A63A3A]">
              ${pkg.price.toLocaleString()}
            </span>
            <span className="text-sm text-slate-500">/person</span>
          </div>
        </div>

        <div className="mb-4 flex-grow">
          <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
            What's Included
          </p>
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
        </div>

        <div className="flex gap-2 mt-auto">
          <Button
            asChild
            className="flex-1 bg-gradient-to-r from-[#A63A3A] to-[#8B2E2E] hover:from-[#8B2E2E] hover:to-[#6B2020] text-white font-bold h-12 shadow-lg hover:shadow-xl transition-all"
          >
            <a href="/#contact">Book Now</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#A63A3A] text-[#A63A3A] hover:bg-[#A63A3A]/5 font-semibold h-12 px-6"
          >
            <a href="/#contact">Details</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function PackagesPage() {
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

      {/* Packages Content with Tabs */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Tabs defaultValue="all" className="w-full">
          {/* Tab Navigation */}
          <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-slate-100 p-1 h-12">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#A63A3A] data-[state=active]:to-[#8B2E2E] data-[state=active]:text-white font-semibold"
              >
                All Packages
              </TabsTrigger>
              <TabsTrigger
                value="hajj"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#A63A3A] data-[state=active]:to-[#8B2E2E] data-[state=active]:text-white font-semibold"
              >
                Hajj
              </TabsTrigger>
              <TabsTrigger
                value="umrah"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#A63A3A] data-[state=active]:to-[#8B2E2E] data-[state=active]:text-white font-semibold"
              >
                Umrah
              </TabsTrigger>
            </TabsList>
          </Box>

          {/* All Packages Tab */}
          <TabsContent value="all">
            <Grid container spacing={4}>
              {packages.map((pkg) => (
                <Grid item xs={12} md={6} key={pkg.id}>
                  <PackageCard pkg={pkg} />
                </Grid>
              ))}
            </Grid>
          </TabsContent>

          {/* Hajj Packages Tab */}
          <TabsContent value="hajj">
            <Grid container spacing={4}>
              {packages.filter(pkg => pkg.category === 'hajj').map((pkg) => (
                <Grid item xs={12} md={6} key={pkg.id}>
                  <PackageCard pkg={pkg} />
                </Grid>
              ))}
            </Grid>
          </TabsContent>

          {/* Umrah Packages Tab */}
          <TabsContent value="umrah">
            <Grid container spacing={4}>
              {packages.filter(pkg => pkg.category === 'umrah').map((pkg) => (
                <Grid item xs={12} md={6} key={pkg.id}>
                  <PackageCard pkg={pkg} />
                </Grid>
              ))}
            </Grid>
          </TabsContent>
        </Tabs>

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
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#A63A3A] to-[#8B2E2E] hover:from-[#8B2E2E] hover:to-[#6B2020] text-white font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
          >
            <a href="/#contact">Contact Our Team</a>
          </Button>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
