import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import _App from './App';

const App = hot(_App);
ReactDOM.render(<App />, document.getElementById('root'));