function checkArmstrong(num, callback) {
  let temp = num;
  let digits = num.toString().length;
  let sum = 0;

  while (temp > 0) {
    let rem = temp % 10;
    sum += rem ** digits;
    temp = Math.floor(temp / 10);
  }

  callback(sum === num, num);
}

function result(isArmstrong, number) {
  if (isArmstrong) {
    console.log(number + " is an Armstrong number");
  } else {
    console.log(number + " is NOT an Armstrong number");
  }
}

checkArmstrong(153, result);
checkArmstrong(123, result);
