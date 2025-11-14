import React from 'react';
import { preCheckInSteps } from '../../data/mockData';
import Button from '../shared/Button';

const PreCheckInSteps = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-luxury-navy to-luxury-charcoal text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            How Pre-Check-In Works
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Skip the front desk and arrive ready to relax. Complete your check-in online in just 4 simple steps.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-white/20 transform -translate-y-1/2"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {preCheckInSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Step Card */}
                <div className="glass p-6 rounded-xl text-center hover:bg-white/20 transition-all duration-300 group">
                  {/* Step Number & Icon */}
                  <div className="relative inline-block mb-4">
                    <div className="w-20 h-20 mx-auto bg-luxury-gold rounded-full flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-luxury-gold rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {step.step}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (hidden on mobile and last item) */}
                {index < preCheckInSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button to="/pre-check-in" variant="primary" size="lg" className="shadow-xl">
            Start Pre-Check-In Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PreCheckInSteps;
