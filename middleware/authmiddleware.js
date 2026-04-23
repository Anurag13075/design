import jwt from "jsonwebtoken";

import express  from "express"



export const authmiddleware = async (req, res) => {

    const token = req.body.token;

    const split  = token.split("")[0];


   


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


    req.id = decoded.sub;   
    







    res.status(201).json({
        
        split,

    })

}