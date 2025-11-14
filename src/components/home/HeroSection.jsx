import React, { useState } from 'react';
import Button from '../shared/Button';

const HeroSection = () => {
  const [searchData, setSearchData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search:', searchData);
    // Navigate to rooms page with search params
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 neural-waves opacity-30"></div>
      <div className="absolute inset-0 luxury-gradient"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
          Experience the Future of
          <span className="block mt-2 text-gradient bg-gradient-to-r from-luxury-gold via-yellow-200 to-luxury-gold bg-clip-text text-transparent">
            Intelligent Hospitality
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Where luxury meets artificial intelligence. Glimmora Hotel AI redefines your stay with
          seamless experiences powered by our AGI-native operating system.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button to="/rooms" size="lg" className="shadow-xl">
            Book Your Stay
          </Button>
          <Button to="/pre-check-in" variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
            Pre-Check-In
          </Button>
        </div>

        {/* Search Bar */}
        <div className="glass max-w-4xl mx-auto p-6 rounded-2xl shadow-2xl animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            {/* Check-In */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-200 mb-2">Check-In</label>
              <input
                type="date"
                value={searchData.checkIn}
                onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50"
                required
              />
            </div>

            {/* Check-Out */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-200 mb-2">Check-Out</label>
              <input
                type="date"
                value={searchData.checkOut}
                onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50"
                required
              />
            </div>

            {/* Guests */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-200 mb-2">Guests</label>
              <select
                value={searchData.guests}
                onChange={(e) => setSearchData({ ...searchData, guests: parseInt(e.target.value) })}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num} className="text-gray-900">
                    {num} Guest{num > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-luxury-gold hover:bg-luxury-darkGold text-white font-medium rounded-lg transition-colors shadow-lg"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
