import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: [true, "Username must be sent"]
    },
    email:{
        type: String,
        required: [true, "Email must be sent"],
        unique: [true, "Email must be unique"]
    },
    password:{
        type: String, //String is the combination of both alphabet and numeric 
        required: [true, "Password must be sent"],
    },
    gender:{
        type:String,
        required: false //Optional ma rakhdencha
    },
    phoneNumber:{
        type: Number,
        required: [true, "Phone Number must be sent"],
    },
    isVerified:{
    type: Boolean,
    required: [true],
    default: false  
    },
    role:{
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    address:{
        type: String,
        required: [true, "Address must be sent"]
    }
});

export const User = mongoose.model("User", userSchema)