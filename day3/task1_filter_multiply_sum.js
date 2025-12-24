// TAsk: 
// filter all odd number muliply by 10 and find sum

        let num= [10,20,30,40,50]
        let sum= number.filter(num=>num%2==1).map(num=>num*10).reduce((acc,num)=>acc+num)
        console.log(sum)


// let num = [10, 20, 30, 40, 50];

// let sum = num.filter(n => n % 2 === 1).map(n => n * 10).reduce((acc, n) => acc + n, 0);
// console.log(sum);
