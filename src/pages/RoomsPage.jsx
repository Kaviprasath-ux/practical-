import React, { useState, useMemo } from 'react';
import { rooms } from '../data/mockData';
import RoomCard from '../components/shared/RoomCard';
import Button from '../components/shared/Button';

const RoomsPage = () => {
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    guests: 'all',
    roomType: 'all',
    sortBy: 'price-low'
  });

  const [searchDates, setSearchDates] = useState({
    checkIn: '',
    checkOut: ''
  });

  // Filter and sort rooms
  const filteredRooms = useMemo(() => {
    let filtered = rooms.filter(room => {
      // Price filter
      if (room.pricePerNight < filters.priceRange[0] || room.pricePerNight > filters.priceRange[1]) {
        return false;
      }

      // Guests filter
      if (filters.guests !== 'all' && room.guests < parseInt(filters.guests)) {
        return false;
      }

      // Room type filter
      if (filters.roomType !== 'all' && room.type !== filters.roomType) {
        return false;
      }

      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low':
          return a.pricePerNight - b.pricePerNight;
        case 'price-high':
          return b.pricePerNight - a.pricePerNight;
        case 'size':
          return parseInt(b.size) - parseInt(a.size);
        default:
          return 0;
      }
    });

    return filtered;
  }, [filters]);

  const handleCheckAvailability = (room) => {
    console.log('Check availability for:', room.name);
    // Navigate to pre-check-in or booking page
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-luxury-navy to-luxury-charcoal text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Rooms & Suites
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Discover our collection of luxurious accommodations designed for the modern traveler
          </p>

          {/* Availability Search */}
          <div className="glass max-w-4xl mt-8 p-6 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Check-In</label>
                <input
                  type="date"
                  value={searchDates.checkIn}
                  onChange={(e) => setSearchDates({ ...searchDates, checkIn: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Check-Out</label>
                <input
                  type="date"
                  value={searchDates.checkOut}
                  onChange={(e) => setSearchDates({ ...searchDates, checkOut: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50"
                />
              </div>
              <div className="flex items-end">
                <button className="w-full px-6 py-3 bg-luxury-gold hover:bg-luxury-darkGold text-white font-medium rounded-lg transition-colors">
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">
                Filters
              </h3>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Price per Night
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="50"
                    value={filters.priceRange[1]}
                    onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
                    className="w-full accent-luxury-gold"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${filters.priceRange[0]}</span>
                    <span>${filters.priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Number of Guests */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Number of Guests
                </label>
                <select
                  value={filters.guests}
                  onChange={(e) => handleFilterChange('guests', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50"
                >
                  <option value="all">All</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3+ Guests</option>
                  <option value="4">4+ Guests</option>
                </select>
              </div>

              {/* Room Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Room Type
                </label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="roomType"
                      value="all"
                      checked={filters.roomType === 'all'}
                      onChange={(e) => handleFilterChange('roomType', e.target.value)}
                      className="text-luxury-gold focus:ring-luxury-gold"
                    />
                    <span className="text-sm text-gray-700">All Types</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="roomType"
                      value="room"
                      checked={filters.roomType === 'room'}
                      onChange={(e) => handleFilterChange('roomType', e.target.value)}
                      className="text-luxury-gold focus:ring-luxury-gold"
                    />
                    <span className="text-sm text-gray-700">Rooms</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="roomType"
                      value="suite"
                      checked={filters.roomType === 'suite'}
                      onChange={(e) => handleFilterChange('roomType', e.target.value)}
                      className="text-luxury-gold focus:ring-luxury-gold"
                    />
                    <span className="text-sm text-gray-700">Suites</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="roomType"
                      value="penthouse"
                      checked={filters.roomType === 'penthouse'}
                      onChange={(e) => handleFilterChange('roomType', e.target.value)}
                      className="text-luxury-gold focus:ring-luxury-gold"
                    />
                    <span className="text-sm text-gray-700">Penthouse</span>
                  </label>
                </div>
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Sort By
                </label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50"
                >
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="size">Size: Largest First</option>
                </select>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => setFilters({
                  priceRange: [0, 1000],
                  guests: 'all',
                  roomType: 'all',
                  sortBy: 'price-low'
                })}
                className="w-full py-2 text-sm text-luxury-gold hover:bg-luxury-gold/10 border border-luxury-gold rounded-lg transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Rooms Grid */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredRooms.length}</span> {filteredRooms.length === 1 ? 'room' : 'rooms'}
              </p>
            </div>

            {/* Rooms */}
            {filteredRooms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredRooms.map((room) => (
                  <RoomCard
                    key={room.id}
                    room={room}
                    onCheckAvailability={handleCheckAvailability}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-12 text-center">
                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No rooms found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to see more results</p>
                <Button
                  variant="outline"
                  onClick={() => setFilters({
                    priceRange: [0, 1000],
                    guests: 'all',
                    roomType: 'all',
                    sortBy: 'price-low'
                  })}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;
