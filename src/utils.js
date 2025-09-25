function BigBrush(i) {
  const size = 16;
  const indicesToColor = [];
  if (i === 0) {
    indicesToColor.push(i, i + 1, i + size, i + size + 1); // top-left corner
  } else if (i === size - 1) {
    indicesToColor.push(i, i - 1, i + size, i + size - 1); // top-right corner
  } else if (i === size * (size - 1)) {
    indicesToColor.push(i, i + 1, i - size, i - size + 1); // bottom-left corner
  } else if (i === size * size - 1) {
    indicesToColor.push(i, i - 1, i - size, i - size - 1); // bottom-right corner
  } else if (i < size) {
    indicesToColor.push(i, i - 1, i + 1, i + size, i + size - 1, i + size + 1); // top edge
  } else if (i > size * (size - 1)) {
    indicesToColor.push(i, i - 1, i + 1, i - size, i - size - 1, i - size + 1); // bottom edge
  } else if (i % size === 0) {
    indicesToColor.push(
      i,
      i - size,
      i - size + 1,
      i + 1,
      i + size,
      i + size + 1
    ); // left edge
  } else if (i % size === size - 1) {
    indicesToColor.push(
      i,
      i - size,
      i - size - 1,
      i - 1,
      i + size,
      i + size - 1
    ); // right edge
  } else {
    indicesToColor.push(
      i,
      i + 1,
      i + size + 1,
      i + size,
      i + size - 1,
      i - 1,
      i - size - 1,
      i - size,
      i - size + 1
    ); // center
  }
  return indicesToColor;
}
export { BigBrush };
