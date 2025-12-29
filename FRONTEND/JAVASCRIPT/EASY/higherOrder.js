const number = [1, 2, 3, 4, 5 ,6];

// this is a higher order functions

const double = number.map( function (num) {
    return num *2;
 //  console.log(num *2);
   
});

console.log(double);
// const double = number.map((num) => {
//     return num +5;
// })
// console.log(double);


// Higher-order functions are functions that can either take  other functions as arguments or return a function as a result