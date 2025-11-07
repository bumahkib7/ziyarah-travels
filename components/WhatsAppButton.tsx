'use client';

import { Fab, Tooltip, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsAppButton() {
  const phoneNumber = '256700000000'; // Replace with actual WhatsApp number
  const message = encodeURIComponent('Hello! I would like to inquire about your Ziyarah travel packages.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Zoom in={true}>
      <Tooltip title="Chat with us on WhatsApp" placement="left" arrow>
        <Fab
          color="success"
          aria-label="whatsapp"
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            '&:hover': {
              background: 'linear-gradient(135deg, #128C7E, #075E54)',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 32px 0 rgba(37, 211, 102, 0.37)',
          }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon sx={{ fontSize: 32 }} />
        </Fab>
      </Tooltip>
    </Zoom>
  );
}
