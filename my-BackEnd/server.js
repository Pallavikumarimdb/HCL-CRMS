import express from "express"
import cors from "cors"
import mongoose from "mongoose"


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myFIR-LoginRegister", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})


const userSchema = new mongoose.Schema({
    name: String,
    userid: String,
    email:String,
    password: String
})

const User = new mongoose.model("User", userSchema)


// app.get("/", (req, res)=>{
//   res.send("My-API");
// })





app.post("/AdminSignUP", (req, res)=> {
  console.log(req.body);
    const { name, userid, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                userid,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })

})










app.listen(9002,() => {
    console.log("BE started at port 9002")
})
