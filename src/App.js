import React, { Component } from 'react';
import './App.css';

import MusicPlayer from './Components/MusicPlayer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSong: 'This is (a test) by A. Castro',
      songList: '',
    }

  }
  

  render() {
    return (
      <div className="App">
      <header>
        <h1>Spoti-fly</h1>
        <em>under construction</em>
      </header><br/>

      <MusicPlayer currentSong={this.state.currentSong} />

      <div>
        <p>Debug logs from App.js:</p>
        <pre>{this.state.currentSong}</pre>
      </div>
      </div>
    );
  }
}

export default App;
