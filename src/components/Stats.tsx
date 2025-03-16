import React from 'react';
import { useStore } from '../store';

export function Stats() {
  const { timer } = useStore();

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Statistics</h3>
      <div className="space-y-2">
        <p className="text-sm text-gray-600">
          Completed Sessions: {timer.completedSessions}
        </p>
        <p className="text-sm text-gray-600">
          Total Focus Time: {formatTime(timer.totalFocusTime)}
        </p>
      </div>
    </div>
  );
}