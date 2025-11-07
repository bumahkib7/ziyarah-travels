'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#A63A3A',
      light: '#D94A4A',
      dark: '#8B2E2E',
    },
    secondary: {
      main: '#B33A3A',
      light: '#D94A4A',
      dark: '#8B2E2E',
    },
    background: {
      default: '#f0f9ff',
      paper: 'rgba(255, 255, 255, 0.25)',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
    },
  },
  typography: {
    fontFamily: "'Amazon Ember', system-ui, sans-serif",
    h1: {
      fontFamily: "'Amazon Ember Display', system-ui, sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Amazon Ember Display', system-ui, sans-serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Amazon Ember Display', system-ui, sans-serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Amazon Ember Display', system-ui, sans-serif",
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '16px',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.15)',
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.5)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(10, 10, 31, 0.4)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
        },
        contained: {
          background: 'linear-gradient(135deg, #A63A3A, #8B2E2E)',
          '&:hover': {
            background: 'linear-gradient(135deg, #8B2E2E, #6B2020)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.2)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.3)',
            },
          },
        },
      },
    },
  },
});
