'use client';

import { Box, Container, Typography, Grid } from '@mui/material';
import { Email, Phone, LocationOn, Facebook, Twitter, Instagram } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        borderTop: '1px solid rgba(166, 58, 58, 0.15)',
        background: 'linear-gradient(135deg, #0a0a1f 0%, #1a1a2e 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 3 }}>
              <img
                src="/logo.png"
                alt="Ziyarah Travels"
                width="200"
                height="60"
                style={{ objectFit: 'contain' }}
              />
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 3, lineHeight: 1.7 }}>
              Making your spiritual journey seamless and memorable since 2009.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Email sx={{ color: '#A63A3A', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  info@ziyarahtravels.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Phone sx={{ color: '#A63A3A', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  +256 (0) 700 123 456
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <LocationOn sx={{ color: '#A63A3A', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Kampala, Uganda
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: 'white', fontSize: '1.1rem' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Hajj', href: '/hajj' },
                { label: 'Umrah', href: '/umrah' },
                { label: 'Packages', href: '/packages' },
                { label: 'Gallery', href: '/#gallery' },
                { label: 'Contact', href: '/#contact' },
              ].map((link) => (
                <Typography
                  key={link.label}
                  component="a"
                  href={link.href}
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#A63A3A',
                      paddingLeft: '8px',
                    },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: 'white', fontSize: '1.1rem' }}>
              Follow Us
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 3, lineHeight: 1.7 }}>
              Stay connected with us on social media for updates and special offers.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {[
                { icon: <Facebook />, href: '#' },
                { icon: <Twitter />, href: '#' },
                { icon: <Instagram />, href: '#' },
              ].map((social, index) => (
                <Box
                  key={index}
                  component="a"
                  href={social.href}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'rgba(166, 58, 58, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#A63A3A',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: '#A63A3A',
                      color: 'white',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  {social.icon}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid rgba(166, 58, 58, 0.2)', textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem' }}>
            © 2025 Ziyarah Travels. All rights reserved. | Licensed Travel Agency
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
