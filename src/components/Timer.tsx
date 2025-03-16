import React, { useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { useStore } from '../store';

export function Timer() {
  const { timer, startTimer, pauseTimer, resetTimer, tick } = useStore();

  useEffect(() => {
    let interval: number;
    if (timer.isRunning) {
      interval = setInterval(() => tick(), 1000);
    }
    return () => clearInterval(interval);
  }, [timer.isRunning, tick]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="text-8xl font-bold text-gray-800">
        {formatTime(timer.timeLeft)}
      </div>
      <div className="text-2xl font-medium text-gray-600 capitalize">
        {timer.mode} Session
      </div>
      <div className="flex space-x-4">
        {!timer.isRunning ? (
          <button
            onClick={startTimer}
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full"
          >
            <Play size={24} />
          </button>
        ) : (
          <button
            onClick={pauseTimer}
            className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full"
          >
            <Pause size={24} />
          </button>
        )}
        <button
          onClick={resetTimer}
          className="bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-full"
        >
          <RotateCcw size={24} />
        </button>
      </div>
    </div>
  );
}