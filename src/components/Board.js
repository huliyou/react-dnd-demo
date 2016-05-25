/**
 * Created by leiyouwho on 5/25/16.
 */

import React, { Component, PropTypes } from 'react';
import Square from './Square';
import Knight from './Knight';

export default class Board extends Component {
  static propTypes = {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired,
    ).isRequired,
  };
  render() {
    return (
      <div>
        <Square black>
          <Knight />
        </Square>
      </div>
    );
  }
}


