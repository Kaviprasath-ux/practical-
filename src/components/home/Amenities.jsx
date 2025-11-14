import React from 'react';
import { amenities } from '../../data/mockData';

const Amenities = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            World-Class Facilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience exceptional amenities designed to elevate your stay
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl border border-gray-200 hover:border-luxury-gold hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {amenity.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-luxury-gold transition-colors">
                {amenity.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
