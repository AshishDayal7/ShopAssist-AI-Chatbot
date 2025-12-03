import React from 'react';
import { ChatInterface } from './components/ChatInterface';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center md:p-6 font-sans">
       <ChatInterface />
    </div>
  );
};

export default App;
