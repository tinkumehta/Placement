
function cook (ing1, ing2, ing3){

    console.log(`${this.name}, is having a meal ${ing1}, ${ing2}, ${ing3}`);
    
}

const adam = {name : 'Adam'};

cook.call( adam,"Rice", "Chick", "water")
cook.apply( adam,["Rice", "Chick", "water"])

const cookForAdam =  cook.bind( adam,"Rice", "Chick", "water")

cookForAdam();

// Call :- Invokes the function immediately, with this set to this Arg, and accepts arguments one by one
// Apply :- Invokes the function immediately, with this set to this Arg,but takes arguments as an array
//  Bind :- Returns a new function with this set to thisArg, and any preset arguments, but doesn't invoke it immediately
