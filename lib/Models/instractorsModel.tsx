import mongoose, { Schema } from "mongoose";

const instructorsSchema = new Schema({
  thumbnail : {type : String} ,
  name : {type : String} ,
  skill : {type : Array} ,
  raiting : {type : Number},
  studends : {type : Number} 
})



const instructorModel = mongoose.models.instructors || mongoose.model("instructors" , instructorsSchema)

export default instructorModel