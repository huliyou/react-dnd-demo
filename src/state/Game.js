/**
 * Created by leiyouwho on 5/25/16.
 */

export const observe = (receive) => {
  setInterval(() => receive([
    Math.floor(Math.random() * 8),
    Math.floor(Math.random() * 8),
  ]), 500);
};
