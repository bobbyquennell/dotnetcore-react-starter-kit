import './css/site.css';
import 'bootstrap';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
//react-router-redux 4.x, which is only compatible with react-router 2.x and 3.x
//5.x, which is for react-router 4.x is not ready yet
//see: https://github.com/reactjs/react-router-redux
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import configureStore from './configureStore';
import { ApplicationState }  from './store';
import Routes from './Routes';


// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

const renderApp = ()=>{
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history}>
          <Routes/>
        </Router>
      </Provider>
    </AppContainer>, document.getElementById('react-app'));
};

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
  module.hot.accept('./Routes', () => {
    //Routes = require('./Routes');
    renderApp();
  });
}
