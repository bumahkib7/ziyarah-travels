'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Box,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MosqueIcon from '@mui/icons-material/Mosque';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Hajj', href: '/hajj' },
  { label: 'Umrah', href: '/umrah' },
  { label: 'Packages', href: '/packages' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', background: 'rgba(10, 10, 31, 0.95)', height: '100%' }}>
      <Box sx={{ my: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src="/logo.png"
          alt="Ziyarah Travels"
          style={{
            height: '45px',
            width: 'auto',
            objectFit: 'contain',
          }}
        />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component="a" href={item.href}>
              <ListItemText primary={item.label} sx={{ color: 'white' }} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component="a" href="#contact">
            <Button
              variant="contained"
              fullWidth
              sx={{
                background: 'linear-gradient(135deg, #A63A3A, #8B2E2E)',
                color: 'white',
                fontWeight: 600,
                '&:hover': {
                  background: 'linear-gradient(135deg, #8B2E2E, #6B2020)',
                },
              }}
            >
              Book Now
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          background: 'rgba(10, 10, 31, 0.98)',
          backdropFilter: 'blur(12px)',
          transition: 'all 0.3s ease',
          borderBottom: '1px solid rgba(166, 58, 58, 0.3)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box
              component={Link}
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexGrow: 1,
                gap: 0,
                textDecoration: 'none',
              }}
            >
              <img
                src="/logo.png"
                alt="Ziyarah Travels"
                style={{
                  height: '50px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component="a"
                  href={item.href}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      color: 'primary.main',
                    },
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                component="a"
                href="#contact"
                sx={{
                  background: 'linear-gradient(135deg, #A63A3A, #8B2E2E)',
                  color: 'white',
                  fontWeight: 600,
                  px: 3,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #8B2E2E, #6B2020)',
                  },
                }}
              >
                Book Now
              </Button>
            </Box>

            {/* Mobile menu button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
