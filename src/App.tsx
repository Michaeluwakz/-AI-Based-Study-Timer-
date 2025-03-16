import React from 'react';
import { Timer } from './components/Timer';
import { Settings } from './components/Settings';
import { Stats } from './components/Stats';
import { Sounds } from './components/Sounds';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl relative">
        <Settings />
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          <Timer />
        </div>
        <Stats />
        <Sounds />
      </div>
    </div>
  );
}

export default App;