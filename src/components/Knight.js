/**
 * Created by leiyouwho on 5/25/16.
 */

import React, { PropTypes } from 'react';
import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';

const knightSource = {
  beginDrag(props) {
    return {};
  },
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

@DragSource(ItemTypes.KNIGHT, knightSource, collect)
export default class Knight extends React.Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
  };
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: '1em',
          fontWeight: 'bold',
          cursor: 'move',
        }}
      >
        ♘
      </div>
    );
  }
}
