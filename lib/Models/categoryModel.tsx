import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  title : {type : String},
  mount : {type : Number},
  bg : {type : String},
  accent : {type : String},
  icon : {type : String}
})


const categoryModel = mongoose.models.category || mongoose.model("category" , categorySchema)


export default categoryModel