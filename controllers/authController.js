import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

export const authenticateToken = (request,response,next) => {
    const token = request.headers['authorization']
    if(token == null){
        return response.status(401).json({msg:"token is missing"})
    }
    jwt.verify(token,process.env.ACCESS_SECRET_TOKEN,(error,user) => {
        if(error){
            return response.status(403).json({msg:"Unathourized, Invalid Token"})
        }
        request.user = user
    next()
    })
}

