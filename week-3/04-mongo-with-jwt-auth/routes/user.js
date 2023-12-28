const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index.js");
const jwt=  require('jsonwebtoken');
const { jwtPassword } = require("../../02-jwt");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    let {username, password}= req.body;
    let payload={username, password};
    try{
         await User.create({username: username, password: password});
         let token= await jwt.sign(payload,jwtPassword);
         res.status(200).json({message: "USER CTEATED SUCCESSFUL", token});
    }
    catch(e){
        res.status(404).json({message: e.message});
    }

});

router.post('/signin',userMiddleware, (req, res) => {
    // Implement admin signup logic
   return res.send("you are logged in ...");
});

router.get('/courses',userMiddleware, async(req, res) => {
    // Implement listing all courses logic
    let allCourses =  await Course.find();
    console.log(allCourses);
    res.json({allCourses});
    
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic

    let decoded=await jwt.decode(req.headers.authorization.split(" ")[1]);
    let username= decoded.username;
    console.log(username);
    let userCourses= User.find({username}).courses;
    console.log(userCourses);
    // let updatedCourses=  userCourses.push(req.params.courseId);
    // User.updateOne({userCourses}, { $set: {courses: updatedCourses} })
    return res.send("came control");
    
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router