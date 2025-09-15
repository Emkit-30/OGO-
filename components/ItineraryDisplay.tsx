import React from 'react';
import type { ItineraryPlan } from '../types';
import ItineraryDayCard from './ItineraryDayCard';

interface ItineraryDisplayProps {
  plan: ItineraryPlan;
}

const ItineraryDisplay: React.FC<ItineraryDisplayProps> = ({ plan }) => {
  return (
    <div className="mt-10 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{plan.tripTitle}</h2>
        <p className="mt-2 text-lg text-purple-400 font-semibold">{plan.totalDuration}</p>
      </div>
      
      <div className="bg-gray-800/50 rounded-xl p-6 mb-8 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-2">Route Overview</h3>
        <p className="text-gray-300">{plan.routeDescription}</p>
      </div>

      <div className="space-y-8">
        {plan.itinerary.map((dayPlan) => (
          <ItineraryDayCard key={dayPlan.day} dayPlan={dayPlan} />
        ))}
      </div>
    </div>
  );
};

export default ItineraryDisplay;