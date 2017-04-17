import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, IndexRoute, Route } from 'react-router-dom';

import App from './App.jsx';
import SessionFormContainer from './session/session_form_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <div>
        <Route component={ App } />
        <Route path="/login"
          component={SessionFormContainer} />
        <Route path="/signup"
          component={SessionFormContainer} />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
