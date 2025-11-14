import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedRooms from '../components/home/FeaturedRooms';
import Amenities from '../components/home/Amenities';
import PreCheckInSteps from '../components/home/PreCheckInSteps';
import AIAssistantIntro from '../components/home/AIAssistantIntro';
import Testimonials from '../components/home/Testimonials';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedRooms />
      <Amenities />
      <PreCheckInSteps />
      <AIAssistantIntro />
      <Testimonials />
    </div>
  );
};

export default HomePage;
