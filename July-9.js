//handing of async data by promises

let a=10;
let b=2;
console.log(a+b)

console.log("first")//12

let waitingData= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(3)
    }, 2000);
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b)//13
   })    


                    //drawbacks==> here expected output is 13 but due to async nature it gives 13 
                    // to handle this drawbacks we use promises
   
  
                    

                    

console.log("second")

console.log("third")  