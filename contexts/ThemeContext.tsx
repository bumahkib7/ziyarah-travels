'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light');

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    if (savedTheme) {
      setMode(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
    document.documentElement.classList.toggle('dark', newMode === 'dark');
  };

  const theme = createTheme({
    palette: {
      mode,
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
        default: mode === 'light' ? '#ffffff' : '#0f172a',
        paper: mode === 'light' ? 'rgba(255, 255, 255, 0.25)' : 'rgba(30, 41, 59, 0.25)',
      },
      text: {
        primary: mode === 'light' ? '#1e293b' : '#f8fafc',
        secondary: mode === 'light' ? '#64748b' : '#cbd5e1',
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
            background: mode === 'light' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(30, 41, 59, 0.3)',
            backdropFilter: 'blur(10px)',
            border: mode === 'light' ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: mode === 'light' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(30, 41, 59, 0.4)',
              transform: 'translateY(-5px)',
              boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.5)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: mode === 'light' ? 'rgba(10, 10, 31, 0.4)' : 'rgba(15, 23, 42, 0.8)',
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
              background: mode === 'light' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(30, 41, 59, 0.3)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              '& fieldset': {
                borderColor: mode === 'light' ? 'rgba(166, 58, 58, 0.2)' : 'rgba(255, 255, 255, 0.2)',
              },
              '&:hover fieldset': {
                borderColor: mode === 'light' ? 'rgba(166, 58, 58, 0.3)' : 'rgba(255, 255, 255, 0.3)',
              },
            },
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
