const express = require('express');

let app= express();



app.listen(5432, ()=>{
    console.log('listening on port 5432');
});