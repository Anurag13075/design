import jwt from "jsonwebtoken";


export const authmiddleware = async (req, res) => {
    const token = req.body.token;

    const split = token.split("")[1];


    if (!split) {
        return res.status(201).json({
            message: "invalid token"
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
        return res.status(201).json({
            message: "invalid token"
        })
    }




    res.status(201).json({
        split
    })

}