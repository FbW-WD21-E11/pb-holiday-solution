function onlyLongWords(string) {
  const words = string.split(" ");
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      result.push(words[i]);
    }
  }
  return result.join(" ");
}
console.log(
  onlyLongWords(
    "Welcome to Wikipedia the free encyclopedia that anyone can edit"
  )
); // "Welcome Wikipedia encyclopedia anyone"
console.log(onlyLongWords("The cat is on the table")); // "table"
console.log(onlyLongWords("not many long ones here")); // ""
