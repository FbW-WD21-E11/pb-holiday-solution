function countByColor(array) {
  const result = [0, 0, 0];
  for (let i = 0; i < array.length; i++) {
    const object = array[i].toLowerCase();
    if (object.includes("red")) {
      result[0]++;
    } else if (object.includes("yellow")) {
      result[1]++;
    } else if (object.includes("green")) {
      result[2]++;
    }
  }
  return result;
}

console.log(countByColor(["Red pen", "Yellow shirt"])); // [1, 1, 0]
console.log(countByColor(["Red pen", "Yellow shirt", "Green salad"])); // [1, 1, 1]
console.log(countByColor(["Pink hair", "Blue sky"])); // [0, 0, 0]
console.log(countByColor(["Yellow table", "Yellow piano", "Green guitar"])); // [0, 2, 1]
