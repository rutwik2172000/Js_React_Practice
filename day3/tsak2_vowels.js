// Task:
// Take the string "virat kohli" and print how many vowels are present in the string.

function countVowels(str) {
  const match = str.match(/[aeiou]/gi);
  return match ? match.length : 0;
}

const name = "virat kohli";
const vowelsCount = countVowels(name);

console.log(`The string "${name}" has ${vowelsCount} vowels.`);
