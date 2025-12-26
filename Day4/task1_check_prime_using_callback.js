function prime(...numbers) {  
  for (let i = 0; i < numbers.length; i++) {
    let n = numbers[i];
    let count = 0;

    for (let j = 1; j <= n; j++) {
      if (n % j === 0) {
        count++;
      }
    }

    if (count === 2) {
      console.log(n + " is Prime");
    }
  }
}

prime(18, 45, 17, 31, 63);

