import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoApp from './reducers';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoApp);
const ConnectedApp = (
  <Provider store={store}>
    <App />
  </Provider>
);


window.store = store;

render(ConnectedApp, document.getElementById('root'));
registerServiceWorker();
