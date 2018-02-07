import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import APIKEY from './config/spotifyAPI'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App apiKey={APIKEY.clientID}/>, document.getElementById('root'));
registerServiceWorker();
