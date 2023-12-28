const { Router } = require("express");
const express = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt= require('jsonwebtoken');
const { jwtPassword } = require("../../02-jwt");
const { Admin, Course } = require("../db/index.js");




// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    
    let username= req.body.username;
    let password= req.body.password;

 
    // if username not already exist create that user
    let doc = await Admin.findOne({username});
    if(!doc){
        await Admin.create({username,password});
        res.status(200).json({message: "Admin created successfully"});
    }
    else {
        console.log("doc is here " + doc);
        res.status(500).json({message : "username already taken"});
    }

});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    let {username,password} = req.body ;
    let payload= {username,password};
    let token= jwt.sign(payload , jwtPassword);
    if(jwt.decode(token)){
        return res.status(200).json({token, "success": true});
    }
    else{
        return res.status(500).json({message: "problem with token genration"});
    }
    

});

router.post('/courses', adminMiddleware, adminMiddleware, async (req, res) => {
    // Implement course creation logic
    let { title, description, price, imageLink } = req.body;
    try {
        // Use async/await to wait for the course creation
        const createdCourse = await Course.create({ title, description, price, imageLink });

        // Retrieve the id from the created course
        const courseId = createdCourse.id;

        res.status(200).json({ courseId });
    } catch (error) {
        // Handle errors, e.g., database connection issues
        console.error(error);
        res.status(500).json({ message: "Problem with course creation" });
    }
});


router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    console.log(req.body);
    try {
        let allCourses = await Course.find();
        res.status(200).json(allCourses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Problem with fetching all courses" });
    }
});


module.exports = router;