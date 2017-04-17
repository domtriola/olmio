import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Olmio</h1>, root);
});

// TODO: for checking the store
import configureStore from './store/store';
window.store = configureStore();
