import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import todoApp from './reducers';
import './index.css';
import 'firebaseui/dist/firebaseui.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger(),
)

const store = createStore(
  todoApp,
  middleware,
);
const ConnectedApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

window.store = store;
render(ConnectedApp, document.getElementById('root'));
registerServiceWorker();