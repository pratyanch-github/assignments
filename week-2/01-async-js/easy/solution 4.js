const fs = require("fs");

fs.writeFile("D:\\chohort2\\assignments-master\\assignments-master\\week-2\\01-async-js\\easy\\temp.txt",
 "file content update test","utf-8",(err)=>{
    if(err)console.log("failed to update test");
    else console.log("file updated");
 }
)

