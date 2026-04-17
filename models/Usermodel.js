import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        unique: true,
        sparse: true,
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true,
    },
    token: {
        type: String,
        required: false
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
    versionKey: false,
});

const User = mongoose.model("User", userSchema);
export default User;
