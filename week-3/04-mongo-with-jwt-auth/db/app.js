const express = require('express');
const jwt= require('jsonwebtoken');
const app = express();

const adminRoutes = require('../routes/admin.js');
const userRoutes = require('../routes/user.js');

app.use(express.json());
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);


// Other middleware and routes can go here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
