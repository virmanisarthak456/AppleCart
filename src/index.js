import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import * as firebase from 'firebase';
import firebase from 'firebase/app'

import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBcazzXpBw7JsLqrkUWrKPXwrEd8r66Yls",
  authDomain: "cart-bd046.firebaseapp.com",
  projectId: "cart-bd046",
  storageBucket: "cart-bd046.appspot.com",
  messagingSenderId: "637075779174",
  appId: "1:637075779174:web:b0edcf02f0a0f14b8d07a7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

