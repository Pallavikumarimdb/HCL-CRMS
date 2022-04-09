// import mongoose from "mongoose"
//
//
//
// const FIRSchema = new mongoose.Schema({
//   State: String,
//   District: String,
//   PoliceStation: String,
//   FIRno: String,
//   Date: String,
//
//   Act1: String,
//   Sections1: String,
//   Act2: String,
//   Sections2: String,
//   Act3: String,
//   Sections3: String,
//   OtherActsAndSections: String,
//
//   OccurenceDay: String,
//   OccurenceDate: String,
//   OccurenceTime: String,
//   InformatioReceivedDate: String,
//   InformatioReceivedTime: String,
//   DiaryReferenceEntryNo: String,
//   DiaryReferenceTime: String,
//
//   Written: String,
//   Oral: String,
//
//   DirectionAndDistncefromPS: String,
//   BeatNo: String,
//   Address: String,
//   OutsideNameofPSAndDistrict: String,
//
//   ComplainantName: String,
//   ComplainantFatherorHusbandName: String,
//   ComplainantDateOfBirth: String,
//   ComplainantNationality: String,
//   ComplainantOccupation: String,
//   ComplainantPassportNo: String,
//   ComplainantDateofIssue: String,
//   ComplainantPlaceOfIssue: String,
//   ComplainantAddress: String,
//
//   DetailsOfSuspected: String,
//   ReasonsforDelay: String,
//   articularsOfPropertiesStolenInvolved: String
// })
//
//
//
// const FIRUser = new mongoose.model("User", FIRSchema)





// Post Routes
// app.post("/FIRform", (req, res)=> {
//   console.log(req.body);
//     const { State, District, PoliceStation, FIRno, Date, Act1, Sections1, Act2, Sections2, Act3, Sections3, OtherActsAndSections, OccurenceDay, OccurenceDate, OccurenceTime, InformatioReceivedDate, InformatioReceivedTime,
//            DiaryReferenceEntryNo, DiaryReferenceTime, Written, Oral, DirectionAndDistncefromPS, BeatNo, Address, OutsideNameofPSAndDistrict, ComplainantName, ComplainantFatherorHusbandName, ComplainantDateOfBirth, ComplainantNationality,
//            ComplainantOccupation, ComplainantPassportNo, ComplainantDateofIssue, ComplainantPlaceOfIssue, ComplainantAddress, DetailsOfSuspected, ReasonsforDelay, ParticularsOfPropertiesStolenInvolved} = req.body
//     User.findOne({FIRno: FIRno}, (err, user) => {
//         if(user){
//             res.send({message: "FIR No already registerd"})
//         } else {
//             const user = new User({
//               State,
//               District,
//               PoliceStation,
//               FIRno,
//               Date,
//
//               Act1,
//               Sections1,
//               Act2,
//               Sections2,
//               Act3,
//               Sections3,
//               OtherActsAndSections,
//
//               OccurenceDay,
//               OccurenceDate,
//               OccurenceTime,
//               InformatioReceivedDate,
//               InformatioReceivedTime,
//               DiaryReferenceEntryNo,
//               DiaryReferenceTime,
//
//               Written,
//               Oral,
//
//               DirectionAndDistncefromPS,
//               BeatNo,
//               Address,
//               OutsideNameofPSAndDistrict,
//
//               ComplainantName,
//               ComplainantFatherorHusbandName,
//               ComplainantDateOfBirth,
//               ComplainantNationality,
//               ComplainantOccupation,
//               ComplainantPassportNo,
//               ComplainantDateofIssue,
//               ComplainantPlaceOfIssue,
//               ComplainantAddress,
//
//               DetailsOfSuspected,
//               ReasonsforDelay,
//               articularsOfPropertiesStolenInvolved
//             })
//             user.save(err => {
//                 if(err) {
//                     res.send(err)
//                 } else {
//                     res.send( { message: "Successfully Registered, Please login now." })
//                 }
//             })
//         }
//     })
//
// })


// export const mongooseMatch = mongoose.model('match', matchSchema)

// module.exports = mongoose.model('posts', FIRSchema);
