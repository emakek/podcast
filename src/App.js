import React from 'react';
import Header from './components/Header';
import SongCard from './components/SongCard';
import AlbumCard from './components/AlbumCard';
import ArtistCard from './components/ArtistCard';
import PlaybackBar from './components/PlaybackBar';
import { data } from './data/data';
import './styles.css';



const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <section className="listen-again">
          <h2>Escuchados recientes</h2>
          <div className="card-container">
            {data.listenAgain.map((song, index) => (
              <SongCard key={index} song={song} />
            ))}
          </div>
        </section>
        <section className="quick-picks">
          <h2>Selecciones rapidas</h2>
          <div className="card-container">
            {data.quickPicks.map((song, index) => (
              <SongCard key={index} song={song} />
            ))}
          </div>
        </section>
        <section className="recommended-albums">
          <h2>Albums recomendado</h2>
          <div className="card-container">
            {data.recommendedAlbums.map((album, index) => (
              <AlbumCard key={index} album={album} />
            ))}
          </div>
        </section>
        <section className="similar-artists">
          <h2>Artista similar [Artista]</h2>
          <div className="card-container">
            {data.similarArtists.map((artist, index) => (
              <ArtistCard key={index} artist={artist} />
            ))}
          </div>
        </section>
      </main>
      <PlaybackBar />
    </div>
  );
};

export default App;
