import jwt from "jsonwebtoken";

export const authmiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        let token;
        
        if (authHeader && authHeader.startsWith('Bearer ')) {
            token = authHeader.split(" ")[1];
        } else {
            token = req.body.token;
        }

        if (!token) {
            return res.status(401).json({ message: "No token provided, unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user payload to request
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};