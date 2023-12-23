const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
app.post('/signup', (req, res) => {
    // Implement user signup logic
    let {username, password} =req.body;

    User.create({username: username, password: password});
    res.json({message: 'User created successfully'});
});

app.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses=await Course.find({});
     res.status(200).json({course:[courses]});
});

app.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

app.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});
