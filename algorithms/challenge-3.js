function isDivisbleByN(arr, n) {
  let newArray = [];
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] % n === 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

module.exports = isDivisbleByN;
