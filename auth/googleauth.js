import { GoogleAuth } from "google-auth-library";
import jwt from "jsonwebtoken";
import User from "../models/Usermodel.js"; // ✅ fixed import

const auth = new GoogleAuth();

export const googleauth = async (req, res) => {
    try {
        const { token } = req.body;

        // 1. Check if token exists
        if (!token) {
            return res.status(400).json({
                status: 400,
                message: "Google token is required",
            });
        }

        // 2. Verify Google token
        const ticket = await auth.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();

        if (!payload) {
            return res.status(400).json({
                status: 400,
                message: "Invalid Google token",
            });
        }

        const { sub, name, email, picture } = payload;

        // 3. Find or create user
        let existingUser = await User.findOne({ googleId: sub });

        if (!existingUser) {
            existingUser = await User.findOne({ email });
        }

        if (!existingUser) {
            existingUser = await User.create({
                googleId: sub,
                name,
                email,
                picture,
            });
        }

        // 4. Generate JWT
        const jwtToken = jwt.sign(
            { userId: existingUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        // 5. Response
        res.status(200).json({
            status: 200,
            message: "Google login successful",
            user: existingUser,
            token: jwtToken,
        });

    } catch (error) {
        console.error("Google Sign-In Error:", error);

        res.status(500).json({
            status: 500,
            message: "Authentication failed",
            error: error.message,
        });
    }
};