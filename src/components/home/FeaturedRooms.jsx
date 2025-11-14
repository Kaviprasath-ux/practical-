import React from 'react';
import { rooms } from '../../data/mockData';
import RoomCard from '../shared/RoomCard';
import Button from '../shared/Button';

const FeaturedRooms = () => {
  // Show only the first 3 rooms as featured
  const featuredRooms = rooms.slice(0, 3);

  const handleCheckAvailability = (room) => {
    console.log('Check availability for:', room.name);
    // Navigate to pre-check-in or booking page
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Featured Rooms & Suites
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of luxurious accommodations designed for your comfort
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onCheckAvailability={handleCheckAvailability}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button to="/rooms" variant="outline" size="lg">
            View All Rooms
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
