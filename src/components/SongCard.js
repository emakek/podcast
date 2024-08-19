import React from 'react';
import './SongCard.css';

const SongCard = ({ song }) => {
  return (
    <div className="song-card">
      <img src={song.albumArt} alt={song.title} className="album-art" />
      <div className="song-info">
        <p className="song-title">{song.title}</p>
        <p className="song-artist">{song.artist}</p>
      </div>
    </div>
  );
};

export default SongCard;
