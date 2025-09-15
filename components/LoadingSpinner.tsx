import React from 'react';

const LoadingSpinner: React.FC = () => {
    const messages = [
        "Charting your epic journey...",
        "Consulting with master chefs...",
        "Fueling the virtual jet...",
        "Discovering hidden gems...",
        "Synchronizing with travel spirits..."
    ];
    const [message, setMessage] = React.useState(messages[0]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setMessage(messages[Math.floor(Math.random() * messages.length)]);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

  return (
    <div className="text-center p-8 flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-600 border-t-purple-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-medium text-gray-300">{message}</p>
    </div>
  );
};

export default LoadingSpinner;