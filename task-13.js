function countConsonants(string) {
    let result = 0;
    const lowerCaseString = string.toLowerCase();
    const consonants = "bcdfghjklmnpqrstvxyz";
    for (let i = 0; i < lowerCaseString.length; i++) {
        if (consonants.includes(lowerCaseString[i])) {
            result++;
        }
    }
    return result;
}
console.log(countConsonants("hello")); // 3
console.log(countConsonants("aeiou")); // 0
console.log(countConsonants("be right back")); // 8
console.log(countConsonants("JavaScript")); // 7