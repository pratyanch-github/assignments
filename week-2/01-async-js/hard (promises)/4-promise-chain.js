/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
   let prom= new Promise((resolve, reject)=>{
         let timeout= setTimeout(()=>{
              resolve("resolved w1 called");
         },2000);
        
   })
}

function wait2(t) {
    let prom= new Promise((resolve, reject)=>{
        let timeout= setTimeout(()=>{
             resolve("resolved w2 called");
        },2000);
       
  })
}

function wait3(t) {
    let prom= new Promise((resolve, reject)=>{
        let timeout= setTimeout(()=>{
             resolve("resolved w3 called");
        },2000);
       
  })
}

function calculateTime(t1, t2, t3) {
     return wait1(t1)
               .then((resultOfCalculateTimeResolve)=>{

               })
}

module.exports = calculateTime;
