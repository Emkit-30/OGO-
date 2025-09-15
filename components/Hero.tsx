import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10"></div>
        <img
            src="https://images.unsplash.com/photo-1534430480872-7404b8d45cee?q=80&w=2070&auto=format&fit=crop"
            alt="A winding road through mountains at dusk"
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Gemini Voyage</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300">
                Your AI Trip Architect for Unforgettable Adventures.
            </p>
        </div>
    </div>
  );
};

export default Hero;