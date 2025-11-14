import React, { useState } from 'react';
import { upsells } from '../data/mockData';

const PreCheckInPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingFound, setBookingFound] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Booking Retrieval
    email: '',
    confirmationNumber: '',

    // Booking details (populated after retrieval)
    bookingDetails: null,

    // Step 2: Guest Details
    firstName: '',
    lastName: '',
    phone: '',
    country: '',
    specialNotes: '',
    idFile: null,

    // Step 3: Preferences
    bedPreference: 'king',
    floorPreference: 'high',
    viewPreference: 'city',
    selectedUpsells: [],

    // Step 4: Confirmation
    agreeToTerms: false,
    digitalSignature: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { number: 1, title: 'Retrieve Booking', icon: '🔍' },
    { number: 2, title: 'Guest Details', icon: '📋' },
    { number: 3, title: 'Preferences', icon: '⚙️' },
    { number: 4, title: 'Confirmation', icon: '✓' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleUpsellToggle = (upsellId) => {
    setFormData(prev => ({
      ...prev,
      selectedUpsells: prev.selectedUpsells.includes(upsellId)
        ? prev.selectedUpsells.filter(id => id !== upsellId)
        : [...prev.selectedUpsells, upsellId]
    }));
  };

  // Step 1: Find Booking
  const handleFindBooking = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Mock booking data
      const mockBooking = {
        hotelName: 'Glimmora Hotel AI - Marina Bay',
        confirmationNumber: formData.confirmationNumber,
        checkInDate: '2024-02-15',
        checkOutDate: '2024-02-18',
        roomType: 'Deluxe Ocean View Suite',
        guests: 2,
        nights: 3
      };

      setFormData(prev => ({ ...prev, bookingDetails: mockBooking }));
      setBookingFound(true);
      setIsSubmitting(false);
      setCurrentStep(2);
    }, 1500);
  };

  // Step 2: Submit Guest Details
  const handleGuestDetailsSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(3);
  };

  // Step 3: Submit Preferences
  const handlePreferencesSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(4);
  };

  // Step 4: Final Submit
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeToTerms || !formData.digitalSignature) {
      alert('Please agree to terms and provide your signature');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(5); // Success screen
    }, 2000);
  };

  const calculateTotal = () => {
    return formData.selectedUpsells.reduce((total, upsellId) => {
      const upsell = upsells.find(u => u.id === upsellId);
      return total + (upsell?.price || 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Pre-Check-In
          </h1>
          <p className="text-lg text-gray-600">
            Complete your check-in online and skip the front desk
          </p>
        </div>

        {/* Progress Steps */}
        {currentStep <= 4 && (
          <div className="mb-12">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-2 transition-all ${
                        currentStep >= step.number
                          ? 'bg-luxury-gold text-white shadow-lg'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {step.icon}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 h-1 mx-4 mb-8">
                      <div
                        className={`h-full rounded ${
                          currentStep > step.number ? 'bg-luxury-gold' : 'bg-gray-200'
                        }`}
                      ></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Step Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Step 1: Retrieve Booking */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Find Your Booking
              </h2>
              <form onSubmit={handleFindBooking} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Booking / Confirmation Number
                  </label>
                  <input
                    type="text"
                    value={formData.confirmationNumber}
                    onChange={(e) => handleInputChange('confirmationNumber', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50"
                    placeholder="GLM123456"
                    required
                  />
                </div>

                {bookingFound && formData.bookingDetails && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-medium mb-2">✓ Booking Found!</p>
                    <div className="text-sm text-green-700 space-y-1">
                      <p><strong>Hotel:</strong> {formData.bookingDetails.hotelName}</p>
                      <p><strong>Room:</strong> {formData.bookingDetails.roomType}</p>
                      <p><strong>Check-in:</strong> {formData.bookingDetails.checkInDate}</p>
                      <p><strong>Check-out:</strong> {formData.bookingDetails.checkOutDate}</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-luxury-gold hover:bg-luxury-darkGold text-white font-medium rounded-lg transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Searching...' : 'Find My Booking'}
                </button>
              </form>
            </div>
          )}

          {/* Step 2: Guest Details & ID */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Guest Information
              </h2>
              <form onSubmit={handleGuestDetailsSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload ID (Passport or Driver's License)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-luxury-gold transition-colors">
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleInputChange('idFile', e.target.files[0])}
                      className="hidden"
                      id="id-upload"
                    />
                    <label htmlFor="id-upload" className="cursor-pointer">
                      <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-gray-600">
                        {formData.idFile ? formData.idFile.name : 'Click to upload or drag and drop'}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">PNG, JPG or PDF (max 5MB)</p>
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    OCR will automatically extract your information for faster processing
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Notes or Requests (Optional)
                  </label>
                  <textarea
                    value={formData.specialNotes}
                    onChange={(e) => handleInputChange('specialNotes', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50"
                    placeholder="Let us know if you have any special requests..."
                  ></textarea>
                </div>

                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-luxury-gold hover:bg-luxury-darkGold text-white font-medium rounded-lg transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 3: Preferences & Upsells */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Room Preferences & Add-Ons
              </h2>
              <form onSubmit={handlePreferencesSubmit} className="space-y-8">
                {/* Room Preferences */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Room Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bed Preference
                      </label>
                      <select
                        value={formData.bedPreference}
                        onChange={(e) => handleInputChange('bedPreference', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50"
                      >
                        <option value="king">King Bed</option>
                        <option value="queen">Queen Bed</option>
                        <option value="twin">Twin Beds</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Floor Preference
                      </label>
                      <select
                        value={formData.floorPreference}
                        onChange={(e) => handleInputChange('floorPreference', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50"
                      >
                        <option value="high">High Floor</option>
                        <option value="mid">Mid Floor</option>
                        <option value="low">Low Floor</option>
                        <option value="any">No Preference</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        View Preference
                      </label>
                      <select
                        value={formData.viewPreference}
                        onChange={(e) => handleInputChange('viewPreference', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50"
                      >
                        <option value="city">City View</option>
                        <option value="sea">Sea View</option>
                        <option value="garden">Garden View</option>
                        <option value="any">No Preference</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Upsells */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Enhance Your Stay</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {upsells.map((upsell) => (
                      <label
                        key={upsell.id}
                        className={`relative flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.selectedUpsells.includes(upsell.id)
                            ? 'border-luxury-gold bg-luxury-gold/5'
                            : 'border-gray-200 hover:border-luxury-gold/50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.selectedUpsells.includes(upsell.id)}
                          onChange={() => handleUpsellToggle(upsell.id)}
                          className="mt-1 mr-3 accent-luxury-gold"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-1">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl">{upsell.icon}</span>
                              <h4 className="font-semibold text-gray-900">{upsell.name}</h4>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-luxury-gold">${upsell.price}</p>
                              <p className="text-xs text-gray-500">{upsell.per}</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">{upsell.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Total */}
                {formData.selectedUpsells.length > 0 && (
                  <div className="bg-luxury-gold/10 border border-luxury-gold/30 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Total Add-Ons:</span>
                      <span className="text-2xl font-bold text-luxury-gold">${calculateTotal()}</span>
                    </div>
                  </div>
                )}

                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-luxury-gold hover:bg-luxury-darkGold text-white font-medium rounded-lg transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Review & Confirm
              </h2>
              <form onSubmit={handleFinalSubmit} className="space-y-6">
                {/* Booking Summary */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Booking Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Guest Name:</span>
                      <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="font-medium">{formData.phone}</span>
                    </div>
                    {formData.bookingDetails && (
                      <>
                        <div className="flex justify-between pt-2 border-t">
                          <span className="text-gray-600">Room:</span>
                          <span className="font-medium">{formData.bookingDetails.roomType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Check-in:</span>
                          <span className="font-medium">{formData.bookingDetails.checkInDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Check-out:</span>
                          <span className="font-medium">{formData.bookingDetails.checkOutDate}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Preferences Summary */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Your Preferences</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Bed:</strong> {formData.bedPreference}</p>
                    <p><strong>Floor:</strong> {formData.floorPreference}</p>
                    <p><strong>View:</strong> {formData.viewPreference}</p>
                    {formData.selectedUpsells.length > 0 && (
                      <div className="pt-2 border-t">
                        <strong>Selected Add-Ons:</strong>
                        <ul className="mt-2 space-y-1">
                          {formData.selectedUpsells.map(id => {
                            const upsell = upsells.find(u => u.id === id);
                            return upsell ? (
                              <li key={id} className="flex justify-between">
                                <span>{upsell.name}</span>
                                <span className="font-medium">${upsell.price}</span>
                              </li>
                            ) : null;
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Digital Signature */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Digital Signature *
                  </label>
                  <input
                    type="text"
                    value={formData.digitalSignature}
                    onChange={(e) => handleInputChange('digitalSignature', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50 font-serif text-xl"
                    placeholder="Type your full name as signature"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    By signing, you agree to the terms and conditions
                  </p>
                </div>

                {/* Terms Agreement */}
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                    className="mt-1 accent-luxury-gold"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the hotel's{' '}
                    <a href="#" className="text-luxury-gold hover:underline">terms and conditions</a>
                    {' '}and{' '}
                    <a href="#" className="text-luxury-gold hover:underline">privacy policy</a>
                  </span>
                </label>

                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-luxury-gold hover:bg-luxury-darkGold text-white font-medium rounded-lg transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Processing...' : 'Complete Pre-Check-In'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 5: Success */}
          {currentStep === 5 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                You're All Set!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Pre-check-in completed successfully. We'll send a confirmation to {formData.email}
              </p>

              <div className="bg-luxury-gold/10 border border-luxury-gold/30 rounded-lg p-6 max-w-md mx-auto mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Your Arrival Details</h3>
                <div className="space-y-2 text-sm text-left">
                  {formData.bookingDetails && (
                    <>
                      <p><strong>Check-in:</strong> {formData.bookingDetails.checkInDate} from 3:00 PM</p>
                      <p><strong>Room:</strong> {formData.bookingDetails.roomType}</p>
                    </>
                  )}
                  {formData.selectedUpsells.length > 0 && (
                    <p><strong>Add-ons:</strong> {formData.selectedUpsells.length} selected</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.print()}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Download Confirmation
                </button>
                <button
                  onClick={() => window.location.href = '/'}
                  className="px-6 py-3 bg-luxury-gold hover:bg-luxury-darkGold text-white font-medium rounded-lg transition-colors"
                >
                  Back to Home
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreCheckInPage;
