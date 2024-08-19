import React from 'react';
import './AlbumCard.css';

const AlbumCard = ({ album }) => {
  return (
    <div className="album-card">
      <img src={album.cover} alt={album.title} className="album-cover" />
      <p className="album-title">{album.title}</p>
    </div>
  );
};

export default AlbumCard;
