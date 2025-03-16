import React, { useRef, useState } from 'react';
import {
  Volume2,
  VolumeX,
  Cloud,
  Coffee,
  Trees,
  Waves,
  Wind,
} from 'lucide-react';
import { Sound } from '../types';

const sounds: Sound[] = [
  {
    name: 'Rain',
    url: 'https://assets.mixkit.co/active_storage/sfx/2515/2515-preview.mp3',
    icon: 'Cloud',
  },
  {
    name: 'Cafe',
    url: 'https://assets.mixkit.co/active_storage/sfx/2514/2514-preview.mp3',
    icon: 'Coffee',
  },
  {
    name: 'Forest',
    url: 'https://assets.mixkit.co/active_storage/sfx/2516/2516-preview.mp3',
    icon: 'Trees',
  },
  {
    name: 'Ocean',
    url: 'https://assets.mixkit.co/active_storage/sfx/2517/2517-preview.mp3',
    icon: 'Waves',
  },
  {
    name: 'White Noise',
    url: 'https://assets.mixkit.co/active_storage/sfx/2518/2518-preview.mp3',
    icon: 'Wind',
  },
];

const IconComponent: Record<string, React.ElementType> = {
  Cloud,
  Coffee,
  Trees,
  Waves,
  Wind,
};

export function Sounds() {
  const [playing, setPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleSound = (sound: Sound) => {
    if (playing === sound.name) {
      audioRef.current?.pause();
      setPlaying(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(sound.url);
      audioRef.current.loop = true;
      audioRef.current.play();
      setPlaying(sound.name);
    }
  };

  return (
    <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Background Sounds
      </h3>
      <div className="flex space-x-2">
        {sounds.map((sound) => {
          const Icon = IconComponent[sound.icon];
          return (
            <button
              key={sound.name}
              onClick={() => toggleSound(sound)}
              className={`p-2 rounded-full ${
                playing === sound.name
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              title={sound.name}
            >
              <Icon size={20} />
            </button>
          );
        })}
        {playing && (
          <button
            onClick={() => {
              audioRef.current?.pause();
              setPlaying(null);
            }}
            className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600"
            title="Mute"
          >
            <VolumeX size={20} />
          </button>
        )}
      </div>
    </div>
  );
}