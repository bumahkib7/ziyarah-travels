'use client';

import { Box, Container, Typography, Link as MuiLink, TextField, Button, Tabs, Tab } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { Phone, Email, LocationOn, ArrowForward } from '@mui/icons-material';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [activeTab, setActiveTab] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Box id="contact" sx={{ py: { xs: 10, md: 14 }, background: '#ffffff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }}>
          {/* Left Side - Contact Info */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="overline"
              sx={{
                color: '#A63A3A',
                fontWeight: 700,
                fontSize: '0.75rem',
                letterSpacing: 2,
                mb: 2,
                display: 'block',
              }}
            >
              Connect
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3rem' },
                color: '#0f172a',
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Contact us
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#64748b',
                fontSize: '1.05rem',
                mb: 5,
                lineHeight: 1.7,
              }}
            >
              We are here to answer your questions and support your spiritual journey
            </Typography>

            {/* Contact Details */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {/* Email */}
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      background: 'rgba(166, 58, 58, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Email sx={{ color: '#A63A3A', fontSize: 22 }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#0f172a', fontSize: '1.1rem' }}>
                    Email
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#64748b', mb: 0.5, pl: 7 }}>
                  Reach out for information
                </Typography>
                <Typography variant="body1" sx={{ color: '#0f172a', fontWeight: 500, pl: 7 }}>
                  info@ziyarahtravels.com
                </Typography>
              </Box>

              {/* Phone */}
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      background: 'rgba(166, 58, 58, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Phone sx={{ color: '#A63A3A', fontSize: 22 }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#0f172a', fontSize: '1.1rem' }}>
                    Phone
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#64748b', mb: 0.5, pl: 7 }}>
                  Speak with our travel consultants
                </Typography>
                <Typography variant="body1" sx={{ color: '#0f172a', fontWeight: 500, pl: 7 }}>
                  +256 700 000 000
                </Typography>
              </Box>

              {/* Office */}
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      background: 'rgba(166, 58, 58, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <LocationOn sx={{ color: '#A63A3A', fontSize: 22 }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#0f172a', fontSize: '1.1rem' }}>
                    Office
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#64748b', mb: 0.5, pl: 7 }}>
                  Kampala Road, CBD
                </Typography>
                <Typography variant="body1" sx={{ color: '#0f172a', fontWeight: 500, mb: 1, pl: 7 }}>
                  Kampala, Uganda
                </Typography>
                <MuiLink
                  href="https://maps.google.com/?q=Kampala+Road+CBD+Uganda"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: '#A63A3A',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    pl: 7,
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Get directions
                  <ArrowForward sx={{ fontSize: 16 }} />
                </MuiLink>
              </Box>
            </Box>
          </Grid>

          {/* Right Side - Form & Map Tabs */}
          <Grid item xs={12} md={7}>
            <Box>
              <Tabs
                value={activeTab}
                onChange={(e, newValue) => setActiveTab(newValue)}
                sx={{
                  mb: 3,
                  '& .MuiTabs-indicator': {
                    background: 'linear-gradient(90deg, #A63A3A 0%, #8B2E2E 100%)',
                    height: 3,
                  },
                }}
              >
                <Tab
                  label="Send Message"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#64748b',
                    '&.Mui-selected': { color: '#A63A3A' },
                    textTransform: 'none',
                  }}
                />
                <Tab
                  label="View Map"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#64748b',
                    '&.Mui-selected': { color: '#A63A3A' },
                    textTransform: 'none',
                  }}
                />
              </Tabs>

              {/* Contact Form Tab */}
              {activeTab === 0 && (
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 3,
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(166, 58, 58, 0.1)',
                    boxShadow: '0 4px 20px rgba(166, 58, 58, 0.08)',
                  }}
                >
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#A63A3A',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#A63A3A',
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#A63A3A',
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#A63A3A',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#A63A3A',
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#A63A3A',
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#A63A3A',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#A63A3A',
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#A63A3A',
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={5}
                    variant="outlined"
                    sx={{
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#A63A3A',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#A63A3A',
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#A63A3A',
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={isSubmitting}
                    sx={{
                      py: 1.5,
                      background: 'linear-gradient(135deg, #A63A3A, #8B2E2E)',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1rem',
                      textTransform: 'none',
                      borderRadius: 2,
                      boxShadow: '0 4px 14px rgba(166, 58, 58, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #8B2E2E, #A63A3A)',
                        boxShadow: '0 6px 20px rgba(166, 58, 58, 0.4)',
                      },
                      '&:disabled': {
                        background: 'rgba(166, 58, 58, 0.5)',
                      },
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  {submitStatus === 'success' && (
                    <Box
                      sx={{
                        mt: 3,
                        p: 2,
                        borderRadius: 2,
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                      }}
                    >
                      <Typography sx={{ color: '#10b981', fontWeight: 600, textAlign: 'center' }}>
                        Message sent successfully! We'll get back to you soon.
                      </Typography>
                    </Box>
                  )}
                </Box>
              )}

              {/* Map Tab */}
              {activeTab === 1 && (
                <Box
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    height: { xs: 400, md: 550 },
                    boxShadow: '0 4px 20px rgba(166, 58, 58, 0.12)',
                    border: '1px solid rgba(166, 58, 58, 0.1)',
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.756621831697!2d32.58185931475396!3d0.31628999979429415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb8d2f5b5555%3A0x5555555555555555!2sKampala%20Road%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
