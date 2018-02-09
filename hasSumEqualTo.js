const hasSumEqualTo = (array, n) => {
  let size = array.length
  for ( let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (array[i] + array[j] === n) return true
    }
  }
  return false;
}

module.exports = hasSumEqualTo
