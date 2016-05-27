/**
 * Created by leiyouwho on 5/25/16.
 */

let KnightPosition = [0, 0];
let observer = null;

function emitChange() {
  observer(KnightPosition);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }
  observer = o;
  emitChange();
}

export function moveKnight(toX, toY) {
  KnightPosition = [toX, toY];
  emitChange();
}
