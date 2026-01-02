
// Shallow copy

const original = {name : "Jhon", address : {city : "Ranchi"}};

// object assingn

const shallowCopy = Object.assign({}, original);

// spread operator
// const shallowCopy2 = {...original};
// console.log(shallowCopy2.address.city);


// shallowCopy2.address.city= "New city"
// console.log(shallowCopy2.address.city);

// DeepCopy

const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.address.city = "Delhi";
// console.log(deepCopy.address.city);

console.log(original.address.city);
