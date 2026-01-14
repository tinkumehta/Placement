const arr = [1, 2, 3, 4, 5, 6,7];
 
const sum = arr.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
}, 0)

console.log(sum);
