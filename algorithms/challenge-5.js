function replaceDivisible(x, y) {
  let length = x.length;
  for (let i = 0; i < length; i++) {
    if (x[i] % y === 0) {
      x[i] = "isDivisible";
    }
  }
  return x;
}

module.exports = replaceDivisible;
