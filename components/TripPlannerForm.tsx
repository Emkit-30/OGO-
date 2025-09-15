import React from 'react';
import MapPinIcon from './icons/MapPinIcon';
import CalendarIcon from './icons/CalendarIcon';

interface TripPlannerFormProps {
  from: string;
  setFrom: (value: string) => void;
  to: string;
  setTo: (value: string) => void;
  duration: string;
  setDuration: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const TripPlannerForm: React.FC<TripPlannerFormProps> = ({ from, setFrom, to, setTo, duration, setDuration, onSubmit, isLoading }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
      <div className="md:col-span-4">
        <label htmlFor="from" className="block text-sm font-medium text-gray-300 mb-1">From</label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
             <MapPinIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            placeholder="e.g., San Francisco"
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="md:col-span-4">
        <label htmlFor="to" className="block text-sm font-medium text-gray-300 mb-1">To</label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
             <MapPinIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            placeholder="e.g., New York City"
            disabled={isLoading}
          />
        </div>
      </div>
      
       <div className="md:col-span-2">
        <label htmlFor="duration" className="block text-sm font-medium text-gray-300 mb-1">Duration (days)</label>
        <div className="relative">
             <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                 <CalendarIcon className="h-5 w-5 text-gray-400" />
             </div>
            <input
                type="number"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="e.g., 7"
                min="1"
                max="30"
                disabled={isLoading}
            />
        </div>
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
        >
          {isLoading ? 'Building...' : 'Create Trip'}
        </button>
      </div>
    </form>
  );
};

export default TripPlannerForm;