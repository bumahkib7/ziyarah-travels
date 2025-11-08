'use client';

import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { Phone, Email, LocationOn, ArrowForward } from '@mui/icons-material';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

          {/* Right Side - Contact Form */}
          <Grid item xs={12} md={7}>
            <form onSubmit={handleSubmit}>
              <Box
                className="glass-strong"
                sx={{
                  p: { xs: 4, md: 5 },
                  borderRadius: 4,
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(166, 58, 58, 0.1)',
                  boxShadow: '0 8px 32px rgba(166, 58, 58, 0.08)',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: '#0f172a',
                    mb: 1,
                    fontSize: { xs: '1.75rem', md: '2rem' },
                  }}
                >
                  Send us a message
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#64748b',
                    mb: 4,
                    fontSize: '0.95rem',
                  }}
                >
                  Fill out the form below and we'll get back to you within 24 hours
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {/* Name Field */}
                  <Box>
                    <Label htmlFor="name" className="text-slate-900 font-semibold mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 bg-white/80 border-slate-200 focus:border-[#A63A3A] focus:ring-[#A63A3A]"
                    />
                  </Box>

                  {/* Email Field */}
                  <Box>
                    <Label htmlFor="email" className="text-slate-900 font-semibold mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 bg-white/80 border-slate-200 focus:border-[#A63A3A] focus:ring-[#A63A3A]"
                    />
                  </Box>

                  {/* Phone Field */}
                  <Box>
                    <Label htmlFor="phone" className="text-slate-900 font-semibold mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+256 700 000 000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12 bg-white/80 border-slate-200 focus:border-[#A63A3A] focus:ring-[#A63A3A]"
                    />
                  </Box>

                  {/* Message Field */}
                  <Box>
                    <Label htmlFor="message" className="text-slate-900 font-semibold mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your travel plans..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-white/80 border-slate-200 focus:border-[#A63A3A] focus:ring-[#A63A3A] resize-none"
                    />
                  </Box>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 bg-gradient-to-r from-[#A63A3A] to-[#8B2E2E] hover:from-[#8B2E2E] hover:to-[#6B2020] text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <Box
                      sx={{
                        p: 3,
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
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
