// Mock data for Glimmora Hotel AI Guest Website

export const rooms = [
  {
    id: 1,
    name: "Deluxe Ocean View Suite",
    description: "Spacious suite with breathtaking ocean views and modern amenities",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    size: "45 sqm",
    guests: 2,
    bedType: "King Bed",
    pricePerNight: 350,
    amenities: ["Ocean View", "Balcony", "Mini Bar", "Smart TV", "Rain Shower"],
    type: "suite"
  },
  {
    id: 2,
    name: "Premium Garden Room",
    description: "Elegant room overlooking tranquil garden landscapes",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
    size: "35 sqm",
    guests: 2,
    bedType: "Queen Bed",
    pricePerNight: 250,
    amenities: ["Garden View", "Workspace", "Mini Bar", "Smart TV"],
    type: "room"
  },
  {
    id: 3,
    name: "Executive City Suite",
    description: "Modern suite in the heart of the city with panoramic views",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
    size: "50 sqm",
    guests: 3,
    bedType: "King Bed + Sofa Bed",
    pricePerNight: 400,
    amenities: ["City View", "Living Room", "Workspace", "Coffee Machine", "Bathtub"],
    type: "suite"
  },
  {
    id: 4,
    name: "Classic Comfort Room",
    description: "Cozy and comfortable room perfect for solo travelers",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
    size: "28 sqm",
    guests: 1,
    bedType: "Double Bed",
    pricePerNight: 180,
    amenities: ["Workspace", "Smart TV", "Mini Fridge"],
    type: "room"
  },
  {
    id: 5,
    name: "Royal Penthouse",
    description: "Luxurious penthouse with private terrace and exceptional service",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
    size: "85 sqm",
    guests: 4,
    bedType: "2 King Beds",
    pricePerNight: 750,
    amenities: ["Private Terrace", "Jacuzzi", "Butler Service", "Kitchen", "Dining Area"],
    type: "penthouse"
  },
  {
    id: 6,
    name: "Signature Spa Suite",
    description: "Wellness-focused suite with in-room spa amenities",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800",
    size: "42 sqm",
    guests: 2,
    bedType: "King Bed",
    pricePerNight: 450,
    amenities: ["Spa Bath", "Aromatherapy", "Yoga Mat", "Wellness Minibar"],
    type: "suite"
  }
];

export const amenities = [
  {
    icon: "🏊",
    title: "Infinity Pool",
    description: "Rooftop infinity pool with stunning city views"
  },
  {
    icon: "🍽️",
    title: "Fine Dining",
    description: "Multiple award-winning restaurants and bars"
  },
  {
    icon: "💆",
    title: "Luxury Spa",
    description: "Full-service spa with signature treatments"
  },
  {
    icon: "🏋️",
    title: "Fitness Center",
    description: "State-of-the-art gym with personal trainers"
  },
  {
    icon: "🚗",
    title: "Valet Parking",
    description: "Complimentary valet and secure parking"
  },
  {
    icon: "🤖",
    title: "AI Concierge",
    description: "24/7 intelligent assistance via Baarez AI"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "New York, USA",
    rating: 5,
    comment: "The AI assistant made everything so seamless! From booking to checkout, the intelligent systems anticipated my every need. Truly a hotel of the future.",
    date: "2024-01-15",
    avatar: "SM"
  },
  {
    id: 2,
    name: "James Chen",
    location: "Singapore",
    rating: 5,
    comment: "Pre-check-in was a breeze. I completed everything online before arrival and walked straight to my room. The voice assistant helped me with dinner reservations instantly.",
    date: "2024-01-10",
    avatar: "JC"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    rating: 5,
    comment: "Luxury meets intelligence at Glimmora. The rooms are stunning, and having an AI assistant available 24/7 made my stay incredibly comfortable.",
    date: "2024-01-05",
    avatar: "ER"
  },
  {
    id: 4,
    name: "Michael Thompson",
    location: "London, UK",
    rating: 5,
    comment: "The attention to detail is impeccable. The AGI-powered services are not gimmicky but genuinely useful. Best hotel experience I've ever had.",
    date: "2023-12-28",
    avatar: "MT"
  }
];

export const preCheckInSteps = [
  {
    step: 1,
    title: "Retrieve Booking",
    description: "Enter your email and confirmation number to find your reservation",
    icon: "🔍"
  },
  {
    step: 2,
    title: "Complete Details",
    description: "Provide guest information and upload ID for seamless check-in",
    icon: "📋"
  },
  {
    step: 3,
    title: "Set Preferences",
    description: "Choose room preferences and explore exclusive upsells",
    icon: "⚙️"
  },
  {
    step: 4,
    title: "Confirm & Sign",
    description: "Review everything and digitally sign to complete pre-check-in",
    icon: "✓"
  }
];

export const upsells = [
  {
    id: 1,
    name: "Breakfast Package",
    description: "Daily gourmet breakfast buffet for two",
    price: 45,
    per: "per day",
    icon: "🍳"
  },
  {
    id: 2,
    name: "Airport Pickup",
    description: "Private luxury car service from airport",
    price: 80,
    per: "one-time",
    icon: "🚗"
  },
  {
    id: 3,
    name: "Room Upgrade",
    description: "Upgrade to the next room category",
    price: 100,
    per: "per night",
    icon: "⬆️"
  },
  {
    id: 4,
    name: "Spa Package",
    description: "60-minute signature massage treatment",
    price: 150,
    per: "per session",
    icon: "💆"
  },
  {
    id: 5,
    name: "Late Checkout",
    description: "Extend checkout until 3 PM",
    price: 50,
    per: "one-time",
    icon: "🕒"
  }
];

export const suggestedQuestions = [
  "What time is breakfast served?",
  "Can I get a late checkout?",
  "What's the Wi-Fi password?",
  "How do I reach the hotel from the airport?",
  "Do you have a gym and spa?",
  "What are the pool hours?",
  "Can you arrange restaurant reservations?",
  "Is there airport shuttle service?"
];

export const faqs = [
  {
    question: "What is the check-in and check-out time?",
    answer: "Check-in is from 3:00 PM and check-out is at 12:00 PM. Early check-in and late checkout are subject to availability."
  },
  {
    question: "Do you offer airport transfers?",
    answer: "Yes, we offer private luxury car service. You can add this during pre-check-in or contact our AI assistant to arrange."
  },
  {
    question: "Is breakfast included?",
    answer: "Breakfast is included with select room packages. You can also add it as an upsell during pre-check-in."
  },
  {
    question: "What is the cancellation policy?",
    answer: "Free cancellation up to 48 hours before arrival. Cancellations within 48 hours are subject to a one-night charge."
  },
  {
    question: "Do you have parking?",
    answer: "Yes, we offer complimentary valet parking for all guests."
  },
  {
    question: "How does the AI Guest Assistant work?",
    answer: "Baarez AI is available 24/7 via chat or voice to help with any questions, requests, or bookings during your stay."
  }
];

// Mock AI responses for the assistant
export const getAIMockResponse = (userMessage) => {
  const message = userMessage.toLowerCase();

  if (message.includes('breakfast')) {
    return "Breakfast is served daily from 7:00 AM to 11:00 AM in our main restaurant on the ground floor. We offer both buffet and à la carte options featuring international and local cuisine. Would you like me to make a reservation for you?";
  }

  if (message.includes('checkout') || message.includes('check out')) {
    return "Standard checkout time is 12:00 PM (noon). If you'd like a late checkout, I can arrange that for you for $50, subject to availability. Would you like me to request that for your stay?";
  }

  if (message.includes('wifi') || message.includes('wi-fi') || message.includes('password')) {
    return "Our complimentary high-speed Wi-Fi network is 'Glimmora_Guest'. No password is required. For premium speeds in your room, connect to 'Glimmora_Premium' - the password is provided in your room welcome booklet.";
  }

  if (message.includes('airport') || message.includes('transfer') || message.includes('shuttle')) {
    return "We're located 25 minutes from the airport. We offer private luxury car service for $80 each way. Alternatively, taxis are readily available. Would you like me to arrange a pickup for your arrival?";
  }

  if (message.includes('gym') || message.includes('fitness') || message.includes('spa')) {
    return "Our fitness center is open 24/7 on the 5th floor. Our luxury spa is open daily from 9:00 AM to 9:00 PM and offers a range of treatments. Would you like me to book a spa treatment for you?";
  }

  if (message.includes('pool')) {
    return "Our rooftop infinity pool is open from 6:00 AM to 10:00 PM daily. Towels and loungers are provided. The pool bar serves refreshments from 11:00 AM to 8:00 PM.";
  }

  if (message.includes('restaurant') || message.includes('dining') || message.includes('dinner')) {
    return "We have three restaurants: Azure (fine dining, 6 PM - 11 PM), The Garden Café (all-day dining), and Skybar (rooftop lounge, 5 PM - 1 AM). Would you like me to make a reservation?";
  }

  if (message.includes('room service')) {
    return "Room service is available 24/7. You can order through the tablet in your room, via this chat, or by calling extension 2000. Average delivery time is 20-30 minutes.";
  }

  // Default response
  return "I'm Baarez, your AI guest assistant. I can help you with information about the hotel, make reservations, arrange services, or answer any questions about your stay. How may I assist you today?";
};
