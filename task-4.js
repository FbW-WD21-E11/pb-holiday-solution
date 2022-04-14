function isFirstLetterUpperCase(string) {
  let firstLetter = string[0];
  if (firstLetter && firstLetter === firstLetter.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
console.log(isFirstLetterUpperCase("hello")); // false
console.log(isFirstLetterUpperCase("Hello")); // true
console.log(isFirstLetterUpperCase("Bianca")); // true
console.log(isFirstLetterUpperCase("jim")); // false
console.log(isFirstLetterUpperCase("")); // false
console.log(isFirstLetterUpperCase("A")); // true
