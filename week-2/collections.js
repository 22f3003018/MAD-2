let x = [1,2,3];
console.log(`${typeof(x)}: ${x} with length= ${x.length}`)

//Array with mixed data
let y = [1,'b',a => a+1];
console.log(`${typeof(y)}: ${y} with length = ${y.length}`)

// Deleting
// x =[];
// console.log(`${typeof(x)}: ${x} with length= ${x.length}`)

// Holes
y.length =10
console.log(`${typeof(y)}: ${y} with length = ${y.length}`)

// Iterations
for(let i=0;i<x.length;i++){
    console.log(`${x[i]} with the type: ${typeof(x[i])}`);
}

// another way
// in skips all the undefined values
for(const i in y){
    console.log(`${y[i]} with the type: ${typeof(y[i])}`);
}