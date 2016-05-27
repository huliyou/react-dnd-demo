/**
 * Created by leiyouwho on 5/25/16.
 */

let KnightPosition = [1, 7];
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

export function canMoveKnight(toX, toY) {
  const [x, y] = KnightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

export function moveKnight(toX, toY) {
  KnightPosition = [toX, toY];
  emitChange();
}
