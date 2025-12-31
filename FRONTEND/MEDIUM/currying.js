
function double(a) {
    return function (b){
        return a *b;
    }
}

const double2 = double(2);
console.log(double2(5));
console.log(double2(0));

// Currying is used because it makes your code more flexible and reusable.