import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const DBConnection = async () => {
    
    try {
        await mongoose.connect(process.env.MONGO_DB_URL,{ useNewUrlParser:true})
        console.log("connection successfull")
    } catch (error) {
        console.log("Error unable to connect the database",error);
    }
}

export default DBConnection;