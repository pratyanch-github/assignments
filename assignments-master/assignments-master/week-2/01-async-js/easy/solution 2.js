function cb(i)
{
    return ()=>{
        console.clear();  
        console.log(i);
    }
}

let count= (time)=>{
      for(var i=0; i<time; i++)
      {
          setTimeout(cb(i),i*1000);
      }
}

count(10);