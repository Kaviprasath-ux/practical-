import React, { useState, useRef, useEffect } from 'react';
import { suggestedQuestions, getAIMockResponse } from '../data/mockData';

const AssistantPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      text: "Hello! I'm Baarez, your AI guest assistant. I'm here 24/7 to help make your stay at Glimmora Hotel exceptional. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (text = inputText) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: text.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        text: getAIMockResponse(text),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage();
  };

  const handleSuggestedQuestion = (question) => {
    handleSendMessage(question);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            AI Guest Assistant
          </h1>
          <p className="text-lg text-gray-600">
            Ask me anything about your stay, hotel amenities, or local recommendations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Chat Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl flex flex-col h-[600px]">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-luxury-navy to-luxury-charcoal text-white p-6 rounded-t-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">B</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Baarez AI</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-300">Online 24/7</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-3 ${
                      message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === 'ai'
                          ? 'bg-luxury-gold'
                          : 'bg-gray-300'
                      }`}
                    >
                      <span className={`font-bold text-sm ${
                        message.type === 'ai' ? 'text-white' : 'text-gray-700'
                      }`}>
                        {message.type === 'ai' ? 'B' : 'You'}
                      </span>
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={`flex-1 max-w-[80%] ${
                        message.type === 'user' ? 'flex justify-end' : ''
                      }`}
                    >
                      <div
                        className={`rounded-lg p-4 ${
                          message.type === 'ai'
                            ? 'bg-white border border-gray-200'
                            : 'bg-luxury-gold/20 border border-luxury-gold/30'
                        }`}
                      >
                        <p className="text-gray-800 leading-relaxed">{message.text}</p>
                        <p className="text-xs text-gray-500 mt-2">
                          {formatTime(message.timestamp)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">B</span>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-200 p-4 bg-gray-50 rounded-b-2xl">
                <form onSubmit={handleSubmit} className="flex space-x-3">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Ask anything about your stay..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50"
                  />

                  {/* Voice Button */}
                  <button
                    type="button"
                    className="p-3 rounded-lg bg-luxury-gold/10 hover:bg-luxury-gold/20 text-luxury-gold transition-colors"
                    aria-label="Voice input"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>

                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    className="px-6 py-3 bg-luxury-gold hover:bg-luxury-darkGold text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Suggested Questions */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">
                Suggested Questions
              </h3>
              <div className="space-y-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-luxury-gold/10 hover:border-luxury-gold border border-gray-200 rounded-lg text-sm text-gray-700 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-luxury-navy to-luxury-charcoal text-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-serif font-bold mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors">
                  📅 Make a Reservation
                </button>
                <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors">
                  🍽️ Order Room Service
                </button>
                <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors">
                  🧘 Book Spa Treatment
                </button>
                <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors">
                  🚕 Request Transportation
                </button>
              </div>
            </div>

            {/* AI Capabilities */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">
                I Can Help With
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-luxury-gold">✓</span>
                  <span>Hotel amenities & services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-luxury-gold">✓</span>
                  <span>Dining reservations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-luxury-gold">✓</span>
                  <span>Room service orders</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-luxury-gold">✓</span>
                  <span>Spa & wellness bookings</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-luxury-gold">✓</span>
                  <span>Local recommendations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-luxury-gold">✓</span>
                  <span>Transportation & directions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-luxury-gold">✓</span>
                  <span>Check-out & billing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-luxury-gold">✓</span>
                  <span>And much more!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantPage;
