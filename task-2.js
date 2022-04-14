function containsVowel(string) {
  const vowels = "aeiou";
  const lowerCaseString = string.toLowerCase();
  for (let i = 0; i < lowerCaseString.length; i++) {
    if (vowels.includes(lowerCaseString[i])) {
      return true;
    }
  }
  return false;
}

console.log(containsVowel("table")); // true
console.log(containsVowel("bcdfg")); // false
console.log(containsVowel("a")); // true
console.log(containsVowel("aeiou")); // true
console.log(containsVowel("AEIOU")); // true
console.log(containsVowel("")); // false
console.log(containsVowel("Abc")); // true
