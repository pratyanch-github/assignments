// Middleware for handling auth
const { jwtPassword } = require("../../02-jwt/index.js");
const {Admin} = require("../db/index.js");
const jwt= require('jsonwebtoken');

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  
 //NEW WAY OF AUTHENTICATION
   let token = (req.headers.authorization);
   token= token.split(" ")[1];

   try{
        await jwt.verify(token,jwtPassword,function(err,decoded){
            if(err)return res.status(404).json({message: err});
            // console.log(decoded);
        })
        next();
   }
   catch(err){
      res.status(400).json({message:"unauthorized", error:err.message});
      return;
   }
   
}

module.exports = adminMiddleware;