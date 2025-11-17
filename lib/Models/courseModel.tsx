import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema ({
  _id : {type : Number},
  title : {type : String},
  category : {type : String},
  prise : {type : Number},
  discount : {type : Number},
  thumbnail : {type : String},
  raiating : {type : String},
  students : {type : Number},
  level : {type : String},
  courseTime : {type : Number},
  teacher : {type : String},
  veiwerMount : {type : Number}
})

const courseModel = mongoose.models.course || mongoose.model("course" , courseSchema)

export default courseModel