import mongoose from 'mongoose';

mongoose.connect("connection string");

let todoSchema= new mongoose.Schema({
    title: {
        type: "string",
        required: true,
    },
    description: {
        type: "string",
        required: true,
    },
    

})