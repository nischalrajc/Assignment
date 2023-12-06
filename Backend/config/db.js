import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const dbURI = process.env.MONGO_URI;

        const options = {
            serverSelectionTimeoutMS: 10000,
          };

        const conn = await mongoose.connect(dbURI,options)

        console.log(`Database connected to ${conn.connection.host}`);
    }catch(error){
        console.log(`Error in database connection: ${error.message}`)
    }
}

export default connectDB