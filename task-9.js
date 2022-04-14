function addLeadingZero(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    let string = "";
    if (numbers[i] <= 9) {
      string = `0${numbers[i]}`;
    } else {
      string = `${numbers[i]}`;
    }
    result.push(string);
  }
  return result;
}
console.log(addLeadingZero([0, 1, 2, 3, 10, 11, 12])); // ["00", "01", "02", "03", "10", "11", "12"]
console.log(addLeadingZero([1, 100])); // ["01", "100"]
console.log(addLeadingZero([1, 2, 3])); // ["01", "02", "03"]
