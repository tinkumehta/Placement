
let weakMap = new WeakMap();

let obj = {name : "Adam"};
weakMap.set(obj, "Employee");

obj = null;

console.log(weakMap.has(obj));
