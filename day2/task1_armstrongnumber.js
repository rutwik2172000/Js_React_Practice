const isArmstrong = (num) => {
  let sum = 0;
  let temp = num;
  let count = num.toString().length;

  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** count;
    temp = Math.floor(temp / 10);
  }

  return sum === num;
};

for (let i = 1; i <= 1000; i++) {
  if (isArmstrong(i)) {
    console.log(i);
  } 
}


