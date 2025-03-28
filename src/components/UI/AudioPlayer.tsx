
import React from 'react';

interface AudioPlayerProps {
  src: string;
  title: string;
}

const AudioPlayer = ({ src, title }: AudioPlayerProps) => {
  return (
    <div className="audio-player bg-card">
      <div className="p-4">
        <h4 className="font-serif text-lg mb-2">{title}</h4>
      </div>
      <audio controls className="w-full">
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
