# Ziyarah Travels Website

A modern, professional Next.js website for a Hajj, Umrah, and Ziyarah travel agency featuring stunning glassmorphism design and Material-UI components.

## Features

- **Modern Glassmorphism Design**: Beautiful frosted glass effects throughout the website
- **Material-UI Components**: Professional UI components for a polished look
- **WhatsApp Integration**: Floating WhatsApp button for easy customer contact
- **Responsive Design**: Fully responsive across all devices
- **Amazon Ember Fonts**: Professional typography using Amazon Ember font family
- **No Backend Required**: Pure frontend application with static content

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **Packages Section**: Display of Umrah, Hajj, and Ziyarah packages with pricing
3. **Services Section**: Overview of key services offered
4. **About Section**: Company information and statistics
5. **Testimonials**: Customer reviews and ratings
6. **Contact Section**: Contact form and company information
7. **Footer**: Quick links and social media

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd ziyarah-travels
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customization Guide

### 1. WhatsApp Number

Update the WhatsApp number in `/components/WhatsAppButton.tsx`:
```typescript
const phoneNumber = '256700000000'; // Replace with actual WhatsApp number
```

### 2. Contact Information

Update contact details in `/app/page.tsx` in the Contact Section:
- Phone numbers
- Email addresses
- Office address
- Working hours

### 3. Packages & Pricing

Modify the `packages` array in `/app/page.tsx`:
```typescript
const packages = [
  {
    title: 'Your Package Name',
    description: 'Package description',
    price: '$0,000',
    image: 'image-url',
    features: ['Feature 1', 'Feature 2', ...],
  },
  ...
];
```

### 4. Company Information

Update company details in the About section in `/app/page.tsx`:
- Statistics (years, customers, guides, etc.)
- Company description
- Certifications and credentials

### 5. Images

Replace placeholder images with your actual images:
- Package images: Update URLs in the `packages` array
- Consider adding a logo in the navbar
- Add background images if desired

### 6. Colors & Theme

Modify the theme in `/theme/theme.ts`:
```typescript
primary: {
  main: '#10b981', // Your primary color
  ...
},
secondary: {
  main: '#8b5cf6', // Your secondary color
  ...
},
```

### 7. Metadata & SEO

Update SEO information in `/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Company Name",
  description: "Your description",
  keywords: "your keywords",
};
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Azure Static Web Apps
- GitHub Pages (with static export)

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: Material-UI (MUI) v6
- **Styling**: Tailwind CSS + Custom CSS with Glassmorphism
- **Typography**: Amazon Ember Font Family
- **Icons**: Material Icons
- **Language**: TypeScript

## Project Structure

```
ziyarah-travels/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles & glassmorphism
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   └── ThemeRegistry.tsx   # MUI theme provider
├── theme/
│   └── theme.ts            # MUI theme configuration
├── public/
│   └── fonts/              # Amazon Ember fonts
└── package.json
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized with Next.js 15
- Lazy loading for images
- Font optimization with `font-display: swap`
- Minimal JavaScript bundle size

## Support & Customization

For additional customization or support:
- Review the [Next.js Documentation](https://nextjs.org/docs)
- Check [Material-UI Documentation](https://mui.com/material-ui/getting-started/)
- Consult [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

© 2025 Ziyarah Travels. All rights reserved.
