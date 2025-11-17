import mongoose from "mongoose";

const DATABASE_URL = process.env.DATABASE_URL as string

async function connectDB(){
  try{
    mongoose.connect(DATABASE_URL)
    console.log("Connection To Database Was Successful");
    
  }catch(error){
    console.log("Connection to Database Failed");
  }
}

export default connectDB