// function otuerFunction () {
//     let a = "This is form the outside!"
//     function innerFunction(){
//         console.log(a);
        
//     }
//     return innerFunction;
// }

// const closuerFunction = otuerFunction();
// closuerFunction();

// any other

function counter(){
    let count =0;
    return {
        increment: function(){
            count++;
            return count
        },
        decrement: function() {
             count--;
             return count;
        },
        display : function() {
            let mes = "Current count: " + count;
            return mes;
        }
    }
}

const myCount = counter();
console.log(myCount.increment());
console.log(myCount.display());
// console.log(counter().display());
