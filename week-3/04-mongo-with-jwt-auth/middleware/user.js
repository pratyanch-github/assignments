const { jwtPassword } = require("../../02-jwt/index.js");
const {User}= require("../db/index.js");
const jwt= require('jsonwebtoken')

async function userMiddleware(req, res, next) {
    // Implement user auth logic

    let token= req.headers.authorization.split(" ")[1];
    await jwt.verify(token,jwtPassword, (err,decoded)=>{
        if(err)res.json({message: "unauthorized"});
        else {
            next();
        }
    })

}

module.exports = userMiddleware;