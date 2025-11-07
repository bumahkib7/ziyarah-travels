'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import CssBaseline from '@mui/material/CssBaseline';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
