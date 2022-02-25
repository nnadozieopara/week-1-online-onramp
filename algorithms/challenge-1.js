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

console.log((noOfElements([2,3,0,1,7],4,8)));


module.exports = noOfElements;
