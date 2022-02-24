function noOfElements(x, y, z) {
  let count = 0;
  let length = x.length;

  for (let i = 0; i < length; i++) {
    if (x[i] >= y && x[i] <= z) {
      count++;
    }
  }

  return count;
}

module.exports = noOfElements;
