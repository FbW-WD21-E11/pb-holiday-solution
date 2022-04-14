function containsNumber(string) {
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i]))) {
      return true;
    }
  }
  return false;
}

console.log(containsNumber("123")); // true
console.log(containsNumber("abc")); // false
console.log(containsNumber("a2c")); // true
console.log(containsNumber("100px")); // true
console.log(containsNumber("1")); // true
console.log(containsNumber("0")); // true
console.log(containsNumber("$23.00")); // true
console.log(containsNumber("T-shirts x2")); // true
