import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';


const rootElement = document.getElementById('app');

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(
  reduxRouterMiddleware,
  thunkMiddleware
)(createStore);


const store = createStoreWithMiddleware(
  reducers,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

reduxRouterMiddleware.listenForReplays(store);

import Board from './components/Board';
import { observe } from './state/Game';

// observe(KnightPosition => {
//   render(
//     <Board KnightPosition={KnightPosition} />,
//     rootElement
//   );
// });

observe(knightPosition =>
  render(
    <Board knightPosition={knightPosition} />,
    rootElement
  )
);
