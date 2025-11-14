import React from 'react';
import { Link } from 'react-router-dom';

const RoomCard = ({ room, onCheckAvailability }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Room Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-luxury-gold text-white px-4 py-2 rounded-lg shadow-lg">
          <p className="text-sm font-medium">From</p>
          <p className="text-2xl font-bold">${room.pricePerNight}</p>
          <p className="text-xs">per night</p>
        </div>
      </div>

      {/* Room Details */}
      <div className="p-6">
        {/* Room Name & Type */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium text-luxury-gold bg-luxury-gold/10 rounded-full mb-2">
            {room.type.charAt(0).toUpperCase() + room.type.slice(1)}
          </span>
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
            {room.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {room.description}
          </p>
        </div>

        {/* Room Specs */}
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-200 my-4">
          <div className="text-center">
            <svg className="w-5 h-5 mx-auto mb-1 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <p className="text-xs text-gray-600">{room.size}</p>
          </div>
          <div className="text-center">
            <svg className="w-5 h-5 mx-auto mb-1 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-xs text-gray-600">{room.guests} Guest{room.guests > 1 ? 's' : ''}</p>
          </div>
          <div className="text-center">
            <svg className="w-5 h-5 mx-auto mb-1 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <p className="text-xs text-gray-600">{room.bedType}</p>
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {room.amenities.slice(0, 4).map((amenity, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
              >
                {amenity}
              </span>
            ))}
            {room.amenities.length > 4 && (
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                +{room.amenities.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <button
            onClick={() => onCheckAvailability && onCheckAvailability(room)}
            className="flex-1 bg-luxury-gold hover:bg-luxury-darkGold text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Check Availability
          </button>
          <Link
            to={`/rooms/${room.id}`}
            className="px-4 py-3 border border-gray-300 hover:border-luxury-gold text-gray-700 hover:text-luxury-gold rounded-lg transition-colors flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
