import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        unique: true,
        sparse: true, // Allows nulls without violating uniqueness
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true, // A user signing up with phone won't have this
    },

    token:{
        type:String,
        required:true
    },
    
    name: String,
    email: {
        type: String,
        unique: true,
        sparse: true,
    },
    picture: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    versionKey: false, // Removes the __v field from documents
});

 export default userSchema;
