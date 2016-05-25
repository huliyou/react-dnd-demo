/**
 * Created by leiyouwho on 5/25/16.
 */

import React, { PropTypes, Component } from 'react';

export default class Square extends Component {
  static propTypes = {
    black: PropTypes.bool,
    children: PropTypes.node,
  };
  render() {
    const { black } = this.props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';
    return (
      <div style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%',
        fontSize: '5em',
      }}
      >
        {this.props.children}
      </div>
    );
  }
}
