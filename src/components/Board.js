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
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black: boolean = (x + y) % 2 === 1;
    const [KnightX, KnightY] : [number, number] = this.props.knightPosition;
    const piece = (x === KnightX && y === KnightY) ? <Knight /> : null;
    return (
      <div
        key={i}
        style={{
          width: '12.5%',
          height: '12.5%',
        }}
      >
        <Square black={black} >
          {piece}
        </Square>
      </div>
    );
  }
  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {squares}
      </div>
    );
  }
}