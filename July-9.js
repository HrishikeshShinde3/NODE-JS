let a=10;
let b=2;
console.log(a+b)

console.log("first")

setTimeout(() => {       // executed at last due to async nature of node 
    console.log("hrishi")
    b=3
}, 2000);

console.log(a+b)
console.log("second")

console.log("third")  // drawback