import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Olmio</h1>, root);
});

// TODO: test these
import { signup, login, logout } from './util/session_api_util';
window.signup = signup;
window.login = login;
window.logout = logout;
