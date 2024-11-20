import mongoose , {Schema} from "mongoose";

const userSchema = new Schema (
{
    name : String,
    email : String,
    password : String
},
{
  timestamps: true,
}

);

const user = mongoose.models.user  || mongoose.model("user" , userSchema);
export default user;