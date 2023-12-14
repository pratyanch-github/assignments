// For today -
// 1. Create a counter in Javascript (counts down from 30 to 0)
// 2. Calculate the time it takes between a setTimeout call and the inner function actually running
// 3. Create a terminal clock (HH:MM:SS)

let callback_returner=(t)=>{
    return ()=>{
        console.clear();
        console.log(t);
    }
}
console.log("HI");
for(let i=1; i<=30; i++)
{
    setTimeout(callback_returner(i), i*1000);
}