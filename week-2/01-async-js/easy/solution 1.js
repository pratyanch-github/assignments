// counter using setInterval

let a=0;
function cb(){
   console.log(a++);
}

function count(time)
{
    let intervalId = setInterval(cb, 1000);

    setTimeout(()=>{
        clearInterval(intervalId);
        console.log("over");
    }, time*1000);

}

count(10);
