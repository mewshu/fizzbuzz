/* 
prompt user for number 
if the number is % 3 == 0 return Fizz
else if the number is % 5 == 0 return Buzz
else if the number is % 3 && # 5 == 0 return FizzBuzz
*/

let answer = parseInt(prompt("What number do you wanna fizzbuzz?"))


let FizzBuzz = (num) => {
    for (i=1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else console.log(i);
    }
}

console.log(FizzBuzz(answer));