import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';
import { useStore } from '../store';

export function Settings() {
  const { settings, updateSettings } = useStore();

  return (
    <div className="absolute top-4 right-4">
      <details className="bg-white rounded-lg shadow-lg p-4">
        <summary className="list-none cursor-pointer">
          <SettingsIcon className="text-gray-600 hover:text-gray-800" />
        </summary>
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Focus Duration (minutes)
            </label>
            <input
              type="number"
              value={settings.focusDuration / 60}
              onChange={(e) =>
                updateSettings({ focusDuration: Number(e.target.value) * 60 })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Break Duration (minutes)
            </label>
            <input
              type="number"
              value={settings.breakDuration / 60}
              onChange={(e) =>
                updateSettings({ breakDuration: Number(e.target.value) * 60 })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="autoStartBreaks"
              checked={settings.autoStartBreaks}
              onChange={(e) =>
                updateSettings({ autoStartBreaks: e.target.checked })
              }
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="autoStartBreaks"
              className="ml-2 block text-sm text-gray-900"
            >
              Auto-start breaks
            </label>
          </div>
        </div>
      </details>
    </div>
  );
}