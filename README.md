# Glimmora Hotel AI - Guest Website (Phase 1)

A luxury, AGI-native hotel guest website built with React, Vite, and Tailwind CSS.

## Overview

Glimmora Hotel AI is an intelligent hospitality experience that combines luxury accommodations with cutting-edge AI technology. This guest website allows visitors to:

- Browse rooms and check availability
- Complete pre-check-in online (no login required)
- Chat with Baarez, our 24/7 AI Guest Assistant
- Explore hotel facilities and amenities
- Contact the hotel

## Features

### Core Pages

1. **Home Page** (`/`)
   - Cinematic hero section with neural wave animation
   - Featured rooms showcase
   - Amenities grid
   - Pre-check-in flow overview
   - AI assistant introduction
   - Guest testimonials

2. **Rooms & Availability** (`/rooms`)
   - Filterable room grid (price, guests, type)
   - Sortable results
   - Detailed room cards with amenities
   - Availability search

3. **Pre-Check-In** (`/pre-check-in`)
   - 4-step workflow:
     - Booking retrieval
     - Guest details & ID upload
     - Room preferences & upsells
     - Confirmation & digital signature
   - No login required
   - OCR-ready ID upload

4. **AI Assistant** (`/assistant`)
   - Real-time chat interface
   - Suggested questions
   - Voice command support
   - Quick action buttons
   - Mock AI responses

5. **Contact** (`/contact`)
   - Contact form with validation
   - Hotel information
   - Map placeholder
   - FAQ accordion
   - Social media links

### Shared Components

- **Navbar**: Responsive navigation with voice assistant trigger
- **Footer**: Multi-column layout with links and contact info
- **Voice Overlay**: Full-screen glassmorphism overlay with pulsing mic animation
- **Room Card**: Reusable component for room display

## Tech Stack

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first styling
- **React Router**: Client-side routing

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── shared/
│   │   ├── VoiceOverlay.jsx
│   │   ├── RoomCard.jsx
│   │   └── Button.jsx
│   └── home/
│       ├── HeroSection.jsx
│       ├── FeaturedRooms.jsx
│       ├── Amenities.jsx
│       ├── PreCheckInSteps.jsx
│       ├── AIAssistantIntro.jsx
│       └── Testimonials.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── RoomsPage.jsx
│   ├── PreCheckInPage.jsx
│   ├── AssistantPage.jsx
│   └── ContactPage.jsx
├── data/
│   └── mockData.js
├── App.jsx
├── main.jsx
└── index.css
```

## Key Design Features

- **Luxury Aesthetic**: Modern, cinematic design with custom color palette
- **AGI Integration**: Voice overlay, AI chat, and intelligent UX throughout
- **Responsive**: Mobile-first design that works on all screen sizes
- **Animations**: Smooth transitions, fade-ins, and pulse effects
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## Color Palette

- **Primary Gold**: `#D4AF37` (luxury-gold)
- **Dark Gold**: `#B8941F` (luxury-darkGold)
- **Navy**: `#1a202c` (luxury-navy)
- **Charcoal**: `#2d3748` (luxury-charcoal)

## Future Enhancements (Phase 2+)

- Backend API integration
- Real authentication and user accounts
- Payment processing
- Real-time availability
- Advanced AI features (voice recognition, natural language processing)
- Revenue intelligence dashboard
- Reputation management tools

## Contributing

This is an internal project for Glimmora Hotel AI.

## License

Proprietary - All rights reserved

---

Built with ❤️ by the Glimmora team