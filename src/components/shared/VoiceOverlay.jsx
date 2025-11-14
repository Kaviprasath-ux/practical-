import React, { useState, useEffect } from 'react';

const VoiceOverlay = ({ isOpen, onClose }) => {
  const [isListening, setIsListening] = useState(false);
  const [status, setStatus] = useState('ready'); // ready, listening, processing, response
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Simulate voice interaction
  const handleMicClick = () => {
    if (status === 'ready' || status === 'response') {
      setStatus('listening');
      setIsListening(true);
      setTranscript('');
      setResponse('');

      // Simulate listening for 2 seconds
      setTimeout(() => {
        const mockTranscripts = [
          "What time is breakfast served?",
          "Can I get a late checkout?",
          "Book a spa appointment for tomorrow",
          "What's the WiFi password?",
          "I'd like to order room service"
        ];
        const randomTranscript = mockTranscripts[Math.floor(Math.random() * mockTranscripts.length)];
        setTranscript(randomTranscript);
        setStatus('processing');
        setIsListening(false);

        // Simulate processing for 1 second
        setTimeout(() => {
          const mockResponses = {
            "What time is breakfast served?": "Breakfast is served daily from 7:00 AM to 11:00 AM in our main restaurant.",
            "Can I get a late checkout?": "I can arrange late checkout for you until 3:00 PM for $50. Shall I proceed?",
            "Book a spa appointment for tomorrow": "I'd be happy to book a spa appointment. What time would you prefer?",
            "What's the WiFi password?": "The WiFi network is 'Glimmora_Guest' with no password required.",
            "I'd like to order room service": "I can help with that. What would you like to order?"
          };
          setResponse(mockResponses[randomTranscript] || "I'm here to help. How may I assist you today?");
          setStatus('response');
        }, 1000);
      }, 2000);
    }
  };

  const handleTextSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.voiceInput.value;
    if (input.trim()) {
      setTranscript(input);
      setStatus('processing');

      setTimeout(() => {
        setResponse("I understand your request. I'm processing that for you now.");
        setStatus('response');
      }, 1000);

      e.target.reset();
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'listening':
        return 'Listening...';
      case 'processing':
        return 'Processing...';
      case 'response':
        return 'Here\'s what I found';
      default:
        return 'Tap to speak';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Overlay Content */}
      <div className="relative w-full max-w-lg mx-4 glass rounded-2xl shadow-2xl p-8 animate-slide-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-white mb-2">Baarez AI</h2>
          <p className="text-gray-200 text-sm">Voice Command Assistant</p>
        </div>

        {/* Mic Visual */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            {/* Pulsing Rings */}
            {isListening && (
              <>
                <div className="pulse-ring bg-luxury-gold/30"></div>
                <div className="pulse-ring bg-luxury-gold/20" style={{ animationDelay: '0.5s' }}></div>
              </>
            )}

            {/* Main Mic Button */}
            <button
              onClick={handleMicClick}
              className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                isListening
                  ? 'bg-red-500 shadow-lg shadow-red-500/50 scale-110'
                  : 'bg-luxury-gold hover:bg-luxury-darkGold shadow-lg shadow-luxury-gold/50'
              }`}
              aria-label="Voice command"
            >
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </button>
          </div>

          {/* Status Text */}
          <p className="mt-6 text-white font-medium text-lg">{getStatusText()}</p>
        </div>

        {/* Transcript & Response */}
        {(transcript || response) && (
          <div className="space-y-4 mb-6">
            {transcript && (
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-xs text-gray-300 mb-1">You said:</p>
                <p className="text-white">{transcript}</p>
              </div>
            )}
            {response && (
              <div className="bg-luxury-gold/20 rounded-lg p-4 border border-luxury-gold/30">
                <p className="text-xs text-gray-200 mb-1">Baarez AI:</p>
                <p className="text-white">{response}</p>
              </div>
            )}
          </div>
        )}

        {/* Text Input Alternative */}
        <form onSubmit={handleTextSubmit} className="mt-6">
          <div className="flex space-x-2">
            <input
              type="text"
              name="voiceInput"
              placeholder="Or type your request..."
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-luxury-gold hover:bg-luxury-darkGold rounded-lg text-white font-medium transition-colors"
            >
              Send
            </button>
          </div>
        </form>

        {/* Helpful Hint */}
        <p className="text-center text-gray-300 text-xs mt-6">
          Try: "Book a table" • "Set wake-up call" • "Order room service"
        </p>
      </div>
    </div>
  );
};

export default VoiceOverlay;
