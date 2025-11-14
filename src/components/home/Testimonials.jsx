import React from 'react';
import { testimonials } from '../../data/mockData';

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our delighted guests
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-luxury-gold fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 bg-luxury-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-luxury-gold font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="text-center">
            <p className="text-4xl font-bold text-luxury-gold mb-2">4.9</p>
            <p className="text-sm text-gray-600">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-luxury-gold mb-2">2,500+</p>
            <p className="text-sm text-gray-600">Happy Guests</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-luxury-gold mb-2">98%</p>
            <p className="text-sm text-gray-600">Would Recommend</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-luxury-gold mb-2">24/7</p>
            <p className="text-sm text-gray-600">AI Assistance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
