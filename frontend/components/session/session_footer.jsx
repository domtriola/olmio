import React from 'react';
import { Link } from 'react-router-dom';

const SessionFooter = ({ text, demoLogin }) => {
  const link = text === 'Log In' ? "/signup" : "/login";
  const title = text === 'Log In' ? "New to Olmio?" : "Have an account?";
  const oppositeText = text === 'Sign Up' ? "Log In" : "Sign Up";

  return (
    <footer>
      <h3>{title}</h3>

      <Link to={link}>{oppositeText}</Link>
    </footer>
  );
};

export default SessionFooter;
