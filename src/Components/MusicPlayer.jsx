import React from 'react';

const MusicPlayer = (props) => (

  <div className="music-player">
    <h2 className="music-player-title">{props.currentSong}</h2>
  </div>

);

export default MusicPlayer;