function reverseNumber(num) {
  if (num < 0) {
    return -reverseNumber(-num);
  }
  let Revers = num
    .toString()
    .split("")
    .reverse()
    .join("");
  return parseFloat(Revers);
}

reverseNumber(-332323222);
