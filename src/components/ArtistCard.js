import React from 'react';
import './ArtistCard.css';

const ArtistCard = ({ artist }) => {
  return (
    <div className="artist-card">
      <img src={artist.image} alt={artist.name} className="artist-image" />
      <p className="artist-name">{artist.name}</p>
    </div>
  );
};

export default ArtistCard;
