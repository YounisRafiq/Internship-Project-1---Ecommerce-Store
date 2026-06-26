import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  name : [
    {
        firstName : {
            type : String,
            required : true
        },
        secondName : {
            type : String,
            required : true
        }
    }
  ],
  email : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true
  },
  confirmPassword : {
    type : String,
    required : true
  }
});

const User = mongoose.model("User" , userSchema);
export default User;
