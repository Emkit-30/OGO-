import React from 'react';
import type { DayPlan } from '../types';
import ActivityIcon from './icons/ActivityIcon';
import BedIcon from './icons/BedIcon';
import FoodIcon from './icons/FoodIcon';
import TransportIcon from './icons/TransportIcon';

interface ItineraryDayCardProps {
  dayPlan: DayPlan;
}

const ItineraryDayCard: React.FC<ItineraryDayCardProps> = ({ dayPlan }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-purple-500/20 hover:scale-[1.02] border border-gray-700">
      <div className="p-6 md:p-8">
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full h-12 w-12 flex-shrink-0 flex items-center justify-center font-bold text-xl mr-4">
            {dayPlan.day}
          </div>
          <div>
            <p className="text-sm font-medium text-purple-400">Day {dayPlan.day}</p>
            <h3 className="text-xl md:text-2xl font-bold text-white">{dayPlan.title}</h3>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                 <h4 className="flex items-center text-lg font-semibold text-gray-100 mb-3">
                    <ActivityIcon className="h-5 w-5 mr-2 text-purple-400" />
                    Activities
                </h4>
                <ul className="space-y-3">
                    {dayPlan.activities.map((activity, index) => (
                        <li key={index} className="bg-gray-900 p-4 rounded-lg">
                            <p className="font-semibold text-gray-200">{activity.name}</p>
                            <p className="text-gray-400 text-sm mt-1">{activity.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="space-y-6">
                <div>
                    <h4 className="flex items-center text-lg font-semibold text-gray-100 mb-3">
                        <FoodIcon className="h-5 w-5 mr-2 text-purple-400" />
                        Local Flavors
                    </h4>
                    <ul className="space-y-3">
                        {dayPlan.foodSuggestions.map((food, index) => (
                           <li key={index} className="bg-gray-900 p-4 rounded-lg">
                                <p className="font-semibold text-gray-200">{food.name}</p>
                                <p className="text-gray-400 text-sm mt-1">{food.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="flex items-center text-lg font-semibold text-gray-100 mb-3">
                        <TransportIcon className="h-5 w-5 mr-2 text-purple-400" />
                        Transportation
                    </h4>
                    <div className="bg-gray-900 p-4 rounded-lg">
                        <p className="text-gray-300">{dayPlan.transportation}</p>
                    </div>
                </div>

                <div>
                    <h4 className="flex items-center text-lg font-semibold text-gray-100 mb-3">
                        <BedIcon className="h-5 w-5 mr-2 text-purple-400" />
                        Accommodation
                    </h4>
                    <div className="bg-purple-900/40 p-4 rounded-lg border-l-4 border-purple-500">
                        <p className="font-semibold text-gray-200">{dayPlan.accommodation.name}</p>
                        <p className="text-gray-400 text-sm mt-1">{dayPlan.accommodation.reason}</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ItineraryDayCard;
