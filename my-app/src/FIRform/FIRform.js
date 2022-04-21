import React, { useState } from "react"
import "./FIRformstyle.css"
import Navbar  from '../Navbar';
import axios from "axios"
import { useNavigate } from "react-router-dom"



export default function FIRForm(){
  let url="../adminSignUP/AdminSignUP";





  const history = useNavigate()

  const [ user, setUser] = useState({


          state: "",
          district: "",
          policeStation: "",
          fIRno: "",
          date: "",

          act1: "",
          sections1: "",
          act2: "",
          sections2: "",
          act3: "",
          sections3: "",
          otherActsAndSections: "",

          occurenceDay: "",
          occurenceDate: "",
          occurenceTime: "",
          informatioReceivedDate: "",
          informatioReceivedTime: "",
          diaryReferenceEntryNo: "",
          diaryReferenceTime: "",

          written: "",
          oral: "",

          directionAndDistncefromPS: "",
          beatNo: "",
          address: "",
          outsideNameofPSAndDistrict: "",

          complainantName: "",
          complainantFatherorHusbandName: "",
          complainantDateOfBirth: "",
          complainantNationality: "",
          complainantOccupation: "",
          complainantPassportNo: "",
          complainantDateofIssue: "",
          complainantPlaceOfIssue: "",
          complainantAddress: "",

          detailsOfSuspected: "",
          reasonsforDelay: "",
          particularsOfPropertiesStolenInvolved: ""
      })


  const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}

const FIRform = () => {
    const { state, district, policeStation, fIRno, date, act1, sections1, act2, sections2, act3, sections3, otherActsAndSections, occurenceDay, occurenceDate, occurenceTime, informatioReceivedDate, informatioReceivedTime,
           diaryReferenceEntryNo, diaryReferenceTime, written, oral, directionAndDistncefromPS, beatNo, address, outsideNameofPSAndDistrict, complainantName, complainantFatherorHusbandName, complainantDateOfBirth, complainantNationality,
           complainantOccupation, complainantPassportNo, complainantDateofIssue, complainantPlaceOfIssue, complainantAddress, detailsOfSuspected, reasonsforDelay, particularsOfPropertiesStolenInvolved } = user
    if(district && policeStation && fIRno && act1 && sections1 && act2 && sections2 && act3 && sections3 && otherActsAndSections && occurenceDay && informatioReceivedDate && informatioReceivedTime &&
           diaryReferenceEntryNo &&  directionAndDistncefromPS && beatNo && address && outsideNameofPSAndDistrict && complainantName && complainantFatherorHusbandName && complainantDateOfBirth && complainantNationality &&
           complainantOccupation && complainantPassportNo  && complainantPlaceOfIssue && complainantAddress && detailsOfSuspected && reasonsforDelay && particularsOfPropertiesStolenInvolved){
        axios.post("http://localhost:9002/FIRform", user)
        .then( res => {
            alert(res.data.message)
            history.push("/Footer")
        })
    } else {
        alert("invalid input")
    }

}









  return(
    <>
    <Navbar />
    {console.log("FIRUser", user)}
    <div className="FIR-container ">
      <form id="form" className="FIR-form">
        <div className="FIR-head-sign">

          <h2 className="FIR-head-h2">FIRST INFORMATION REPORT (FIR)</h2>
          <p className="FIR-head-p">
            (Under Section 154 Cr. P.C)
          </p>
        </div>
        <hr className="FIR-center-ball" />

        <div>
        <span className="FIR-simp-text2">1</span>
        <div className="FIR-form-control FIR-add-pre-sub">
          <label for="inputState" className="FIR-form-label FIR-small-label">State</label>
          <select id="inputState" className="FIR-form-select FIR-form-control1 FIR-state-input" name="state" value={user.state} onChange={ handleChange }>
            <option selected>Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>



        <div className="FIR-form-control FIR-add-pre-sub">
          <label for="inputZip" className="FIR-form-label FIR-small-label">District</label>
          <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="district" value={user.district} onChange={ handleChange } type="text"  />
        </div>

        <div className="FIR-form-control FIR-add-pre-sub">
          <label for="inputZip" className="FIR-form-label FIR-small-label">Police Station</label>
          <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="policeStation" value={user.policeStation} onChange={ handleChange } type="text"  />
        </div>

        <div className="FIR-form-control FIR-add-pre-sub">
          <label for="inputZip" className="FIR-form-label FIR-small-label">FIR No</label>
          <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="fIRno" value={user.fIRno} onChange={ handleChange } type="text"  />
        </div>

        <div className="FIR-form-control FIR-add-pre-sub">
          <label for="inputZip" className="FIR-form-label FIR-small-label">Date</label>
          <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="date" value={user.date} onChange={ handleChange } type="Date"  />
        </div>

       </div>


          {/*<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SECTION 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->*/}

        <div>
        <span className="FIR-simp-text2">2</span>
        <div className="FIR-form-control  FIR-add-pre-sub1"><span className="FIR-simp-text">(i)</span>
          <label for="inputZip" className="FIR-one-line FIR-form-label FIR-small-label">*Act</label>
          <input id="inputZip" className="FIR-form-control2 FIR-zip-input1" name="act1" value={user.act1} onChange={ handleChange } type="text"  />
        </div>

        <div className="FIR-form-control FIR-add-pre-sub1">
          <label for="inputZip" className="FIR-one-line FIR-form-label FIR-small-label">*Sections</label>
          <input id="inputZip" className="FIR-form-control2 FIR-zip-input2" name="sections1" value={user.sections1} onChange={ handleChange } type="text"  />
        </div>


        <div className="FIR-form-control  FIR-add-pre-sub1 FIR-div-sec-section"><span className="FIR-simp-text">(ii)</span>
          <label for="inputZip" className="FIR-one-line FIR-form-label FIR-small-label">*Act</label>
          <input id="inputZip" className="FIR-form-control2 FIR-zip-input1" name="act2" value={user.act2} onChange={ handleChange } type="text"  />
        </div>

        <div className="FIR-form-control FIR-add-pre-sub1">
          <label for="inputZip" className="FIR-one-line FIR-form-label FIR-small-label">*Sections</label>
          <input id="inputZip" className="FIR-form-control2 FIR-zip-input2" name="sections2" value={user.sections2} onChange={ handleChange } type="text"  />
        </div>




        <div className="FIR-form-control  FIR-add-pre-sub1 FIR-div-sec-section"><span className="FIR-simp-text">(iii)</span>
          <label for="inputZip" className="FIR-one-line FIR-form-label FIR-small-label">*Act</label>
          <input id="inputZip" className="FIR-form-control2 FIR-zip-input1" name="act3" value={user.act3} onChange={ handleChange } type="text" />
        </div>

        <div className="FIR-form-control FIR-add-pre-sub1">
          <label for="inputZip" className="FIR-one-line FIR-form-label FIR-small-label">*Sections</label>
          <input id="inputZip" className="FIR-form-control2 FIR-zip-input2" name="sections3" value={user.sections3} onChange={ handleChange } type="text" />
        </div>




        <div className="FIR-form-control  FIR-add-pre-sub2"><span className="FIR-simp-text">(iii)</span>
          <label for="inputZip" className="FIR-one-line FIR-form-label FIR-small-label">*Other Acts & Sections</label>
          <input id="inputZip" className="FIR-form-control2 FIR-zip-input1" name="otherActsAndSections" value={user.otherActsAndSections} onChange={ handleChange } type="text"  />
        </div>

       </div>







        {/*  <!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SECTION 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->*/}



        <div>

        <span className="FIR-simp-text2">3</span>

        <span className="FIR-simp-text3">(a)</span>
        <div className="FIR-form-control FIR-add-pre-sub">
          <label for="inputZip" className="FIR-form-label FIR-small-label">*Occurence of Offence: </label>
        </div>

        <div className="FIR-form-control FIR-add-pre-sub3">
          <label for="inputZip" className="FIR-form-label FIR-small-label">Day</label>
          <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="occurenceDay" value={user.occurenceDay} onChange={ handleChange } type="day"  />
        </div>

        <div className="FIR-form-control FIR-add-pre-sub3">
          <label for="inputZip" className="FIR-form-label FIR-small-label">Date</label>
          <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="occurenceDate" value={user.occurenceDate} onChange={ handleChange } type="date" />
        </div>

        <div className="FIR-form-control FIR-add-pre-sub3">
          <label for="inputZip" className="FIR-form-label FIR-small-label">Time</label>
          <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="occurenceTime" value={user.occurenceTime} onChange={ handleChange } type="time"  />
        </div>




        <div className="FIR-">
          <span className="FIR-simp-text4">(b)</span>
          <div className="FIR-form-control FIR-add-pre-sub">
            <label for="inputZip" className="FIR-form-label FIR-small-label">Informatio received at P.S. </label>
          </div>


          <div className="FIR-form-control FIR-add-pre-sub3">
            <label for="inputZip" className="FIR-form-label FIR-small-label">Date</label>
            <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="informatioReceivedDate" value={user.informatioReceivedDate} onChange={ handleChange } type="date"  />
          </div>

          <div className="FIR-form-control FIR-add-pre-sub3">
            <label for="inputZip" className="FIR-form-label FIR-small-label">Time</label>
            <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="informatioReceivedTime" value={user.informatioReceivedTime} onChange={ handleChange } type="time" />
          </div>
        </div>





                <div className="FIR-">
                  <span className="FIR-simp-text4">(c)</span>
                  <div className="FIR-form-control FIR-add-pre-sub">
                    <label for="inputZip" className="FIR-form-label FIR-small-label">General Diary Reference:  </label>
                  </div>


                  <div className="FIR-form-control FIR-add-pre-sub3">
                    <label for="inputZip" className="FIR-form-label FIR-small-label">Entry No(s)</label>
                    <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="diaryReferenceEntryNo" value={user.diaryReferenceEntryNo} onChange={ handleChange } type="text" />
                  </div>

                  <div className="FIR-form-control FIR-add-pre-sub3">
                    <label for="inputZip" className="FIR-form-label FIR-small-label">Time</label>
                    <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="diaryReferenceTime" value={user.diaryReferenceTime} onChange={ handleChange } type="time"  />
                  </div>
                </div>

               </div>


          {/*<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SECTION 4 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->*/}





        <div className="FIR-">
          <span className="FIR-simp-text5">4</span>
          <div className="FIR-form-control FIR-add-pre-sub41">
            <label for="inputZip" className="FIR-form-label FIR-small-label">Type of Information : </label>
          </div>

          <div className="FIR-form-control FIR-add-pre-sub4">
            <input className="FIR-form-check-input" type="checkbox" id="gridCheck" name="written" value={user.written} onChange={ handleChange }/>
            <label for="inputZip" className="FIR-form-label1 FIR-small-label">*Written (or)</label>
          </div>
          <div className="FIR-form-control FIR-add-pre-sub4">
            <input className="FIR-form-check-input" type="checkbox" id="gridCheck" name="oral" value={user.oral} onChange={ handleChange }/>
            <label for="inputZip" className="FIR-form-label1 FIR-small-label">Oral</label>
          </div>
        </div>




          {/*<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SECTION 5 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->*/}





        <div className="FIR-">
          <span className="FIR-simp-text5">5</span>
          <div className="FIR-form-control FIR-add-pre-sub51">
            <label for="inputZip" className="FIR-form-label FIR-small-label">Place of Occurrence: </label>
          </div>
          <span className="FIR-simp-text6">(a)</span>
          <div className="FIR-form-control FIR-add-pre-sub5">
            <label for="inputZip" className="FIR-form-label FIR-small-label">Direction and Distnce from P.S</label>
            <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="directionAndDistncefromPS" value={user.directionAndDistncefromPS} onChange={ handleChange } type="text"  />
          </div>

          <div className="FIR-form-control FIR-add-pre-sub5">
            <label for="inputZip" className="FIR-form-label FIR-small-label">Beat No.</label>
            <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="beatNo" value={user.beatNo} onChange={ handleChange } type="text"  />
          </div>
        </div>



        <div className="FIR-addr-text-main">

          <div className="FIR-form-control ">
            <label for="inputZip" className="FIR-form-label FIR-small-label"><span className="FIR-simp-text7">(b)</span>Address</label>
            <textarea className="FIR-addr-text" rows="8" cols="80" id="inputAddress" name="address" value={user.address} onChange={ handleChange } placeholder="Enter detailed location of place of occurence  "></textarea>
          </div>

        </div>


        <div className="FIR-addr-text-dist">

          <div className="FIR-form-control FIR-add-pre-sub6">
            <label for="inputZip" className="FIR-form-label FIR-small-label"><span className="FIR-simp-text7">(c)</span>In case outside limit of this Police Station, then enter the name of P.S and District</label>
            <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="outsideNameofPSAndDistrict" value={user.outsideNameofPSAndDistrict} onChange={ handleChange } type="textarea"  />
          </div>

        </div>




      {/*  <!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SECTION 6s >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->*/}





        <div className="FIR-">
          <span className="FIR-simp-text5">6</span>
          <div className="FIR-form-control FIR-add-pre-sub51">
            <label for="inputZip" className="FIR-form-label FIR-small-label">Complainant / Information</label>
          </div>
        </div>


        <div className="FIR-form-control FIR-form-control6"><span className="FIR-simp-text3">(a)</span>
          <label for="Name" className="FIR-desc-label">Name</label>
          <input className="FIR-name-input" type="text" id="name" placeholder="Enter your name"  name="complainantName" value={user.complainantName} onChange={ handleChange } />
          <small>Error message</small>
        </div>
        <div className="FIR-form-control FIR-form-control6"><span className="FIR-simp-text3">(b)</span>
          <label for="Name" className="FIR-desc-label">Father's/Husband's Name</label>
          <input type="text" id="name" placeholder="Enter Father's/Husband's Name " name="complainantFatherorHusbandName" value={user.complainantFatherorHusbandName} onChange={ handleChange } />
          <small>Error message</small>
        </div>
        <div className="FIR-">
          <div className="FIR-form-control FIR-add-pre-sub">
            <label for="inputZip" className="FIR-form-label FIR-small-label"><span className="FIR-simp-text8">(c)</span>Date Of Birth </label>
            <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="complainantDateOfBirth" value={user.complainantDateOfBirth} onChange={ handleChange } type="date"  />
          </div>


          <div className="FIR-form-control FIR-add-pre-sub3">
            <label for="inputZip" className="FIR-form-label FIR-small-label"><span className="FIR-simp-text8">(d)</span>Nationality</label>
            <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="complainantNationality" value={user.complainantNationality} onChange={ handleChange } type="text"  />
          </div>

          <div className="FIR-form-control FIR-add-pre-sub3">
            <label for="inputZip" className="FIR-form-label FIR-small-label"><span className="FIR-simp-text8">(e)</span>Occupation</label>
            <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="complainantOccupation" value={user.complainantOccupation} onChange={ handleChange } type="text"  />

          </div>

          <div className="FIR-">
            <div className="FIR-form-control FIR-add-pre-sub">
              <label for="inputZip" className="FIR-form-label FIR-small-label"><span className="FIR-simp-text8">(f)</span>Passport No. </label>
              <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="complainantPassportNo" value={user.complainantPassportNo} onChange={ handleChange } type="text"  />
            </div>


            <div className="FIR-form-control FIR-add-pre-sub3">
              <label for="inputZip" className="FIR-form-label FIR-small-label">Date of Issue</label>
              <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="complainantDateofIssue" value={user.complainantDateofIssue} onChange={ handleChange } type="date"  />
            </div>

            <div className="FIR-form-control FIR-add-pre-sub3">
              <label for="inputZip" className="FIR-form-label FIR-small-label">Place Of Issue</label>
              <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="complainantPlaceOfIssue" value={user.complainantPlaceOfIssue} onChange={ handleChange } type="text"  />

            </div> </div>
            <div className="FIR-">

              <div className="FIR-form-control">
                <label for="inputZip" className="FIR-form-label FIR-small-label"><span className="FIR-simp-text8">(g)</span>Address</label>
                <textarea className="FIR-addr-info" rows="8" cols="80" id="inputAddress" placeholder="Enter your address"  name="complainantAddress" value={user.complainantAddress} onChange={ handleChange } ></textarea>

              </div>
            </div>
            </div>

        {/*<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> */}

            <div className="FIR-">


              <div className="FIR-form-control FIR-add-pre-sublast">
                <label for="inputZip" className="FIR-form-label FIR-small-label"> <span className="FIR-simp-text5">7</span>Details of known / suspected / unknown / accused with full particulars (Attach separate sheet if necessary):</label>
              </div>
              <div className="FIR-form-control ">
                <textarea className="FIR-addr-info" rows="8" cols="80" id="inputAddress" name="detailsOfSuspected" value={user.detailsOfSuspected} onChange={ handleChange } placeholder="Enter a brief details here..."></textarea>

              </div>
            </div>


            <div className="FIR-">


              <div className="FIR-form-control FIR-add-pre-sublast">
                <label for="inputZip" className="FIR-form-label FIR-small-label"> <span className="FIR-simp-text5">8</span>Reasons for delay in reporting by the complaint / Informant:</label>
              </div>
              <div className="FIR-form-control ">
                <textarea className="FIR-addr-info"  rows="8" cols="80" id="inputAddress" name="reasonsforDelay" value={user.reasonsforDelay} onChange={ handleChange } placeholder="Enter brief detail here..."></textarea>

              </div>
            </div>
            <div className="FIR-">


              <div className="FIR-form-control FIR-add-pre-sublast">
                <label for="inputZip" className="FIR-form-label FIR-small-label"> <span className="FIR-simp-text5">9</span>Particulars of properties stolen / involved (Attach separate sheet if necessary):</label>
              </div>
              <div className="FIR-form-controls">
                <textarea className="FIR-addr-info" rows="8" cols="80" id="inputAddress" name="particularsOfPropertiesStolenInvolved" value={user.particularsOfPropertiesStolenInvolved} onChange={ handleChange } placeholder="Enter brief detail here..."></textarea>

              </div>
            </div>
          {/* <button className="FIR-print-button " onClick={window.print}> Print complaint </button>
           <button className="FIR-print-button button" onClick={window.print}> Print complaint </button>*/}
           <div className="FIR-print-button button" onClick={window.print}> Print complaint</div>
            {/* <button type="submit">SUBMIT</button> */}
            <div className="button" onClick={FIRform}>SUBMIT</div>
      </form>

    </div>
    </>
  )
}
