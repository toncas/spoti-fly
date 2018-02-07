import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import MusicPlayer from './Components/MusicPlayer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSong: {},
      songList: {},
    }

  }
  

  render() {
    return (
      <div className="App">
      <header>
        <h1>Spoti-fly</h1>
      </header><br/>

      <MusicPlayer currentSong={this.state.currentSong} />

      </div>
    );
  }
}

export default App;
