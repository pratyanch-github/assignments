const {User}=require('../db');


async function userMiddleware(req, res, next) {

// Implement user auth logic
// You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const {username,password}=req.headers;
    const VerifiedUser= await User.findOne({username:username,password:password});    

 if(!VerifiedUser){
    res.status(401).send("Unauthorized");
    return;
 }else{
       req.user=VerifiedUser;
    next();
 } 
}

module.exports = userMiddleware;