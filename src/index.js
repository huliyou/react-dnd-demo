import React from 'react';
import { render } from 'react-dom';

const rootElement = document.getElementById('app');

import Board from './components/Board';
import { observe } from './state/Game';


observe(knightPosition =>
  render(
    <Board knightPosition={knightPosition} />,
    rootElement
  )
);
