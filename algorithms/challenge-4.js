function highestSum(x, y) {
  function sum(a) {
    let length = a.length;
    let summation = 0;
    for (let i = 0; i < length; i++) {
      summation += a[i];
    }
    return summation;
  }
  let firstSum = sum(x);
  let secondSum = sum(y);

  if (firstSum > secondSum) {
    return firstSum;
  } else {
    return secondSum;
  }
}

module.exports = highestSum;
