'use client';

import { Box, Container, Typography, Chip, Grid } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <Box>
      {/* Compact About Section */}
      <Box sx={{ pt: { xs: 12, md: 15 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="ABOUT US"
              sx={{
                background: 'rgba(166, 58, 58, 0.15)',
                backdropFilter: 'blur(10px)',
                color: '#8B2E2E',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: 1.5,
                mb: 3,
                border: '1px solid rgba(166, 58, 58, 0.3)',
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                color: '#0f172a',
                mb: 2,
              }}
            >
              About Ziyarah Travels
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#475569',
                fontWeight: 400,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              East Africa's premier Hajj and Umrah travel agency since 2009
            </Typography>
          </Box>

          {/* Office Photos */}
          <Box sx={{ mb: 8 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gap: 2,
              }}
            >
              <Box
                className="glass-strong"
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                }}
              >
                <img
                  src="/gallery/office-exterior.jpg"
                  alt="Ziyarah Travels Office"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Box
                className="glass-strong"
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                }}
              >
                <img
                  src="/gallery/office-reception.jpg"
                  alt="Office Reception"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Box
                className="glass-strong"
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                }}
              >
                <img
                  src="/gallery/office-team.jpg"
                  alt="Our Team"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            </Box>
          </Box>

          <Grid container spacing={5} sx={{ mb: 6 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="body1"
                sx={{
                  color: '#475569',
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Founded in 2009, Ziyarah Travels has been helping thousands of Muslims in East Africa fulfill their spiritual obligations with dignity, comfort, and exceptional service.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#475569',
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                }}
              >
                Serving pilgrims from Uganda, Kenya, Tanzania and beyond, we've built our reputation on trust, transparency, and delivering unforgettable journeys.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                className="glass-strong"
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(25px)',
                }}
              >
                <Grid container spacing={2}>
                  <Grid size={{ xs: 6 }}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h3" sx={{ color: '#A63A3A', fontWeight: 800, fontSize: '2rem' }}>
                        10K+
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#475569', fontWeight: 500 }}>Pilgrims</Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h3" sx={{ color: '#8B2E2E', fontWeight: 800, fontSize: '2rem' }}>
                        15+
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#475569', fontWeight: 500 }}>Years</Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h3" sx={{ color: '#A63A3A', fontWeight: 800, fontSize: '2rem' }}>
                        50+
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#475569', fontWeight: 500 }}>Guides</Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h3" sx={{ color: '#8B2E2E', fontWeight: 800, fontSize: '2rem' }}>
                        98%
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#475569', fontWeight: 500 }}>Satisfaction</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>

          {/* Compact Features */}
          <Box
            className="glass-strong"
            sx={{
              p: 3,
              borderRadius: 4,
              background: 'rgba(166, 58, 58, 0.06)',
              backdropFilter: 'blur(25px)',
              border: '1.5px solid rgba(166, 58, 58, 0.2)',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                mb: 2,
                fontWeight: 700,
                color: '#0f172a',
              }}
            >
              Why Choose Us
            </Typography>
            <Grid container spacing={1}>
              {[
                'Licensed & Certified',
                'Hotels Near Haram',
                'Expert Ugandan Guides',
                'Direct Flights',
                '24/7 Support',
                'Flexible Payments',
              ].map((item, index) => (
                <Grid size={{ xs: 6, sm: 4 }} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle sx={{ color: '#A63A3A', fontSize: 16, flexShrink: 0 }} />
                    <Typography variant="caption" sx={{ fontWeight: 600, color: '#334155', fontSize: '0.85rem' }}>
                      {item}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
