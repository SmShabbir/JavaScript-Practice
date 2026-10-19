const numbers = Math.min(45, 11, 89, 23, 56, -12, -56);
console.log(numbers);

const max = Math.max(21, 35, 67);
console.log(max);

//Math.round....................................................................
console.log(Math.round(7.6))
console.log(Math.round(7.2))

//Math.floor....................................................................
console.log(Math.floor(9.8))
console.log(Math.floor(5.3))

//Math.ceil.....................................................................
console.log(Math.ceil(6.9))

//Math.abs()....................................................................
console.log(Math.abs(-34))


function calculate(num) {
    console.log(Math.round(num));
    console.log(Math.floor(num));
    console.log(Math.ceil(num));

}
calculate(45.6);