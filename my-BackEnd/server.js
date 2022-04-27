import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import 'dotenv/config'
// const FIRData = require('/FIRformServer');
// console.log(process.env)

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect(process.env.DB_CONNECTION, {
  // mongodb://localhost:27017/myFIR-LoginRegister
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

// app.get("/", (req, res)=>{
//   res.send("My-API");
// })



/////////////////////////////////////////////   REGISTER-LOGIN SERVER  SIDE  //////////////////////////////////////////////////////////



const userSchema = new mongoose.Schema({
    name: String,
    userid: String,
    email:String,
    password: String
})

const User = new mongoose.model("User", userSchema)


// Post Routes
app.post("/AdminLogin", (req, res)=> {
  console.log(req.body);
    const {userid, password} = req.body
    User.findOne({ userid: userid}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
                console.log(user);
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
})


app.post("/AdminSignUP", (req, res)=> {
  console.log(req.body);
    const { name, userid, email, password} = req.body
    User.findOne({userid: userid}, (err, user) => {
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

////////////////////////////////////////////////////////    END     //////////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////   FIR FORM SERVER  SIDE  //////////////////////////////////////////////////////////

const fIRSchema = new mongoose.Schema({
  state: String,
  district: String,
  policeStation: String,
  fIRno: String,
  date: String,

  act1: String,
  sections1: String,
  act2: String,
  sections2: String,
  act3: String,
  sections3: String,
  otherActsAndSections: String,

  occurenceDay: String,
  occurenceDate: String,
  occurenceTime: String,
  informatioReceivedDate: String,
  informatioReceivedTime: String,
  diaryReferenceEntryNo: String,
  diaryReferenceTime: String,

  written: String,
  oral: String,

  directionAndDistncefromPS: String,
  beatNo: String,
  address: String,
  outsideNameofPSAndDistrict: String,

  complainantName: String,
  complainantFatherorHusbandName: String,
  complainantDateOfBirth: String,
  complainantNationality: String,
  complainantOccupation: String,
  complainantPassportNo: String,
  complainantDateofIssue: String,
  complainantPlaceOfIssue: String,
  complainantAddress: String,

  detailsOfSuspected: String,
  reasonsforDelay: String,
  particularsOfPropertiesStolenInvolved: String
})



const FIRUser = new mongoose.model("FIRUser", fIRSchema)




app.post("/FIRform", (req, res)=> {
  console.log(req.body);
    const { state, district, policeStation, fIRno, date, act1, sections1, act2, sections2, act3, sections3, otherActsAndSections, occurenceDay, occurenceDate, occurenceTime, informatioReceivedDate, informatioReceivedTime,
           diaryReferenceEntryNo, diaryReferenceTime, written, oral, directionAndDistncefromPS, beatNo, address, outsideNameofPSAndDistrict, complainantName, complainantFatherorHusbandName, complainantDateOfBirth, complainantNationality,
           complainantOccupation, complainantPassportNo, complainantDateofIssue, complainantPlaceOfIssue, complainantAddress, detailsOfSuspected, reasonsforDelay, particularsOfPropertiesStolenInvolved} = req.body
    FIRUser.findOne({fIRno: fIRno}, (err, firDetails) => {
        if(firDetails){
            res.send({message: "FIR Number already registerd"})
        } else {
            const firDetails = new FIRUser({
              state,
              district,
              policeStation,
              fIRno,
              date,

              act1,
              sections1,
              act2,
              sections2,
              act3,
              sections3,
              otherActsAndSections,

              occurenceDay,
              occurenceDate,
              occurenceTime,
              informatioReceivedDate,
              informatioReceivedTime,
              diaryReferenceEntryNo,
              diaryReferenceTime,

              written,
              oral,

              directionAndDistncefromPS,
              beatNo,
              address,
              outsideNameofPSAndDistrict,

              complainantName,
              complainantFatherorHusbandName,
              complainantDateOfBirth,
              complainantNationality,
              complainantOccupation,
              complainantPassportNo,
              complainantDateofIssue,
              complainantPlaceOfIssue,
              complainantAddress,

              detailsOfSuspected,
              reasonsforDelay,
              particularsOfPropertiesStolenInvolved
            })
            firDetails.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "fIR Record Added Successfully" })
                }
            })
        }
    })

})

/////////////////////////////////////////////////////////  END   /////////////////////////////////////////////////////////////////



app.listen(9002,() => {
    console.log("BE started at port 9002")
})
