function isBigger(a, b) {
  return a > b;
}

function isSmaller(c, d) {
  return !isBigger(c, d) && c !== d;
}

isSmaller(1, 2);
