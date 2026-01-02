
function* infiniteSequence() {
    let num =1;
    while(true){
        yield num;
        num++;
    }
}

const seq = infiniteSequence();
console.log(seq.next().value);
