function pipe(x, ...functions) {
  if (functions.length === 0) {
    return x;
  }
  const [head, ...tail] = functions;
  return pipe(
    head(x),
    ...tail
  );
}

pipe(
  1,
  x => x + 1,
  y => y + 1
);
