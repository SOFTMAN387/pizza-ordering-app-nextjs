import mongoose from 'mongoose'

//const MONGODB_URL = "mongodb+srv://softman:softman@cluster0.fmrkcad.mongodb.net/pizza?retryWrites=true&w=majority";
const dbUrl = process.env.MONGODB_URL;
const dbConn = async() => {
    await mongoose.connect(dbUrl)
    console.log("Database connected..");
}
export default dbConn;