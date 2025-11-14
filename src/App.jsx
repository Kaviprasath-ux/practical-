import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import VoiceOverlay from './components/shared/VoiceOverlay';

// Pages
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import PreCheckInPage from './pages/PreCheckInPage';
import AssistantPage from './pages/AssistantPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isVoiceOverlayOpen, setIsVoiceOverlayOpen] = useState(false);

  const handleVoiceClick = () => {
    setIsVoiceOverlayOpen(true);
  };

  const handleVoiceClose = () => {
    setIsVoiceOverlayOpen(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Global Navbar */}
        <Navbar onVoiceClick={handleVoiceClick} />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/pre-check-in" element={<PreCheckInPage />} />
            <Route path="/assistant" element={<AssistantPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Placeholder routes for navbar links */}
            <Route path="/facilities" element={
              <div className="min-h-screen pt-20 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Facilities</h1>
                  <p className="text-gray-600">This page is under construction</p>
                </div>
              </div>
            } />
            <Route path="/login" element={
              <div className="min-h-screen pt-20 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">My Bookings</h1>
                  <p className="text-gray-600">Login functionality coming soon</p>
                </div>
              </div>
            } />

            {/* 404 Page */}
            <Route path="*" element={
              <div className="min-h-screen pt-20 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-6xl font-serif font-bold text-gray-900 mb-4">404</h1>
                  <p className="text-xl text-gray-600 mb-8">Page not found</p>
                  <a href="/" className="px-6 py-3 bg-luxury-gold hover:bg-luxury-darkGold text-white font-medium rounded-lg transition-colors inline-block">
                    Back to Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Voice Overlay */}
        <VoiceOverlay
          isOpen={isVoiceOverlayOpen}
          onClose={handleVoiceClose}
        />
      </div>
    </Router>
  );
}

export default App;
