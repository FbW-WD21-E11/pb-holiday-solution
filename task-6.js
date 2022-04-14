function wordsThatEndWithIng(strings) {
  const result = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].slice(-3) === "ing") {
      result.push(strings[i]);
    }
  }
  return result;
}
console.log(
  wordsThatEndWithIng(["table", "jeans", "working", "ping", "small"])
); // ["working", "ping"]
console.log(wordsThatEndWithIng(["table", "jeans", "small"])); // []
console.log(wordsThatEndWithIng(["walking", "ing"])); // ["walking", "ing"]
