function durationInHours(durations) {
  const result = [];
  for (let i = 0; i < durations.length; i++) {
    result.push(Math.floor(durations[i] / 60));
  }
  return result;
}
console.log(durationInHours([120, 60, 80, 90, 100])); // [2, 1, 1, 1, 1]
console.log(durationInHours([50, 20, 180])); // [0, 0, 3]
