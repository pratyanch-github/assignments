/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

let caltime=(n)=>{
    let startTime= performance.now();
    let sum=0; 
    for(let i=0; i<n; i++)
    {
        sum++;
    }
    let endTime= performance.now();
    return endTime-startTime;
}

function calculateTime(n) {
   console.log("time taken for 100 operatons : " + caltime(100));
   console.log("time taken for 100000 operatons : " + caltime(100000));
   console.log("time taken for 100000000 operatons : " + caltime(100000000));
}

calculateTime();