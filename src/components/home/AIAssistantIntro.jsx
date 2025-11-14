import React from 'react';
import Button from '../shared/Button';

const AIAssistantIntro = () => {
  const features = [
    {
      icon: '💬',
      title: '24/7 Availability',
      description: 'Get instant answers anytime, day or night'
    },
    {
      icon: '🎯',
      title: 'Personalized Service',
      description: 'AI learns your preferences for tailored recommendations'
    },
    {
      icon: '🗣️',
      title: 'Voice & Text',
      description: 'Interact naturally via chat or voice commands'
    },
    {
      icon: '⚡',
      title: 'Instant Actions',
      description: 'Book services, order food, and more in seconds'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-luxury-gold/10 text-luxury-gold rounded-full text-sm font-medium mb-4">
              Powered by AGI Technology
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Meet Baarez,
              <span className="block mt-2 text-luxury-gold">
                Your AI Guest Assistant
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience hospitality reimagined with Baarez, our intelligent AI assistant.
              From simple queries to complex requests, Baarez is always ready to make your
              stay effortless and memorable.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button to="/assistant" size="lg">
                Try AI Assistant
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/20 to-blue-500/20 rounded-3xl transform rotate-3"></div>

            {/* Main Card */}
            <div className="relative glass p-8 rounded-2xl shadow-2xl">
              {/* Chat Preview */}
              <div className="space-y-4">
                {/* AI Message */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">B</span>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-800">
                      Hello! I'm Baarez, your AI assistant. How can I help make your stay exceptional today?
                    </p>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex items-start space-x-3 justify-end">
                  <div className="flex-1 bg-luxury-gold/20 p-4 rounded-lg">
                    <p className="text-sm text-gray-800 text-right">
                      What time is breakfast served?
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-700 font-bold">You</span>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">B</span>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-800">
                      Breakfast is served daily from 7:00 AM to 11:00 AM in our main restaurant. Would you like me to make a reservation for you?
                    </p>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">B</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Voice Wave Indicator */}
              <div className="mt-6 pt-6 border-t border-white/20 flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                <span className="text-sm text-gray-600">Voice commands available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistantIntro;
