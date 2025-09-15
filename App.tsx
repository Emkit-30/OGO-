import React, { useState } from 'react';
import type { ItineraryPlan } from './types';
import { generateItinerary } from './services/geminiService';
import TripPlannerForm from './components/TripPlannerForm';
import ItineraryDisplay from './components/ItineraryDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [from, setFrom] = useState<string>('Paris, France');
  const [to, setTo] = useState<string>('Rome, Italy');
  const [duration, setDuration] = useState<string>('7');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [itinerary, setItinerary] = useState<ItineraryPlan | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePlanTrip = async () => {
    if (!from || !to || !duration) {
      setError('Please fill in all fields.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setItinerary(null);
    try {
      const result = await generateItinerary(from, to, parseInt(duration, 10));
      setItinerary(result);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <main className="relative z-10">
        <Hero />
        <div className="relative -mt-20 md:-mt-24 lg:-mt-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-6 md:p-8 form-container-glow">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">Craft Your Next Epic Journey</h2>
                <p className="text-center text-gray-400 mb-6 md:mb-8">From starting point to destination, let AI be your guide.</p>
                <TripPlannerForm
                    from={from}
                    setFrom={setFrom}
                    to={to}
                    setTo={setTo}
                    duration={duration}
                    setDuration={setDuration}
                    onSubmit={handlePlanTrip}
                    isLoading={isLoading}
                />
            </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {isLoading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          {itinerary && !isLoading && <ItineraryDisplay plan={itinerary} />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;