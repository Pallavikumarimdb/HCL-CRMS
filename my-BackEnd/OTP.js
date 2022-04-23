import express from "express"
import cors from "cors"
import mongoose from "mongoose"


const OTPSchema = mongoose.Schema({

    Email: {
    type: String,
    require: true,
        // lowercase: true,
        // unique: true,
        // required: 'Email address is required',
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  code:String,
  expireIn:Number
},{
  timestamps:true;
});





module.exports = mongoose.model('posts', OTPSchema);
