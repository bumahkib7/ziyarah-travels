'use client';

import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { CheckCircle } from '@mui/icons-material';

export default function AboutSection() {
  return (
    <Box id="about" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '3rem' },
                color: '#1e293b',
              }}
            >
              About Ziyarah Travels
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: '#475569',
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              With over 15 years of experience, Ziyarah Travels has been helping thousands of Muslims fulfill their
              spiritual obligations. We specialize in providing comprehensive Hajj, Umrah, and Ziyarah packages with
              exceptional service and attention to detail.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {['Licensed & Certified', 'Expert Guidance', '24/7 Support', 'Best Price Guarantee'].map(
                (item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircle sx={{ color: '#A63A3A', fontSize: 24 }} />
                    <Typography variant="body1" sx={{ fontWeight: 500, color: '#334155' }}>{item}</Typography>
                  </Box>
                )
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              className="glass-strong"
              sx={{
                p: 5,
                borderRadius: 4,
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(25px)',
              }}
            >
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, textAlign: 'center', color: '#0f172a' }}>
                Why Choose Us?
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ color: '#A63A3A', fontWeight: 700 }}>
                      10K+
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#475569', fontWeight: 500 }}>Happy Pilgrims</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ color: '#8B2E2E', fontWeight: 700 }}>
                      15+
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#475569', fontWeight: 500 }}>Years Experience</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ color: '#A63A3A', fontWeight: 700 }}>
                      50+
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#475569', fontWeight: 500 }}>Expert Guides</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ color: '#8B2E2E', fontWeight: 700 }}>
                      100%
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#475569', fontWeight: 500 }}>Satisfaction Rate</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
