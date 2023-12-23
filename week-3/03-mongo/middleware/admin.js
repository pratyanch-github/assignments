// Middleware for handling auth
import { Admin, User, Courses} from "../db/index.js";

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let usern= req.headers.username;
    let userpass= req.headers.password;

    Admin.find({username : usern, password : userpass}, (err, received_admin_doc)=>{
        if(err){
            console.log("unauthorized");
            return ;
        }
        else
        {
            console.log(received_admin_doc);
            next();  
        } 
    })
}

module.exports = adminMiddleware;