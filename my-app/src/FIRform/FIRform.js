import React from 'react';
import "./FIRformstyle.css"

export default function FIRform(){
  let url="../adminSignUP/AdminSignUP";
  return(
    <>
    <div className="FIR-container container">
      <form id="form" className="FIR-form">
        <div className="FIR-head-sign">

          <h2 className="FIR-head-h2">FIRST INFORMATION REPORT (FIR)</h2>
          <p>
            (Under Section 154 Cr. P.C)
          </p>
        </div>
        <hr className="FIR-center-ball" />

        <div>
        <span className="FIR-simp-text2">1</span>
        <div className="FIR-form-control FIR-add-pre-sub">
          <label for="inputState" className="FIR-form-label FIR-small-label">State</label>
          <select id="inputState" className="FIR-form-select FIR-form-control1 FIR-state-input">
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
          <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="text" pattern="[0-9]*" />
        </div>

        <div className="FIR-form-control FIR-add-pre-sub">
          <label for="inputZip" className="FIR-form-label FIR-small-label">Police Station</label>
          <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="text" pattern="[0-9]*" />
        </div>

        <div className="FIR-form-control FIR-add-pre-sub">
          <label for="inputZip" className="FIR-form-label FIR-small-label">FIR No</label>
          <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="text" pattern="[0-9]*" />
        </div>

        <div className="FIR-form-control FIR-add-pre-sub">
          <label for="inputZip" className="FIR-form-label FIR-small-label">Date</label>
          <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="Date" pattern="[0-9]*" />
        </div>

       </div>


          {/*<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SECTION 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->*/}

        <div>
        <span className="FIR-simp-text2">2</span>
        <div className="FIR-form-control  FIR-add-pre-sub1"><span className="FIR-simp-text">(i)</span>
          <label for="inputZip" className="FIR-one-line FIR-form-label FIR-small-label">*Act</label>
          <input id="inputZip" className="FIR-form-control2 FIR-zip-input1" name="zip" type="text" pattern="[0-9]*" />
        </div>

        <div className="FIR-form-control FIR-add-pre-sub1">
          <label for="inputZip" className="FIR-one-line FIR-form-label FIR-small-label">*Sections</label>
          <input id="inputZip" className="FIR-form-control2 FIR-zip-input2" name="zip" type="text" pattern="[0-9]*" />
        </div>


        <div className="FIR-form-control  FIR-add-pre-sub1 FIR-div-sec-section"><span className="FIR-simp-text">(ii)</span>
          <label for="inputZip" className="FIR-one-line FIR-form-label FIR-small-label">*Act</label>
          <input id="inputZip" className="FIR-form-control2 FIR-zip-input1" name="zip" type="text" pattern="[0-9]*" />
        </div>

        <div className="FIR-form-control FIR-add-pre-sub1">
          <label for="inputZip" className="FIR-one-line FIR-form-label FIR-small-label">*Sections</label>
          <input id="inputZip" className="FIR-form-control2 FIR-zip-input2" name="zip" type="text" pattern="[0-9]*" />
        </div>




        <div className="FIR-form-control  FIR-add-pre-sub1 FIR-div-sec-section"><span className="FIR-simp-text">(iii)</span>
          <label for="inputZip" className="FIR-one-line FIR-form-label FIR-small-label">*Act</label>
          <input id="inputZip" className="FIR-form-control2 FIR-zip-input1" name="zip" type="text" pattern="[0-9]*" />
        </div>

        <div className="FIR-form-control FIR-add-pre-sub1">
          <label for="inputZip" className="FIR-one-line FIR-form-label FIR-small-label">*Sections</label>
          <input id="inputZip" className="FIR-form-control2 FIR-zip-input2" name="zip" type="text" pattern="[0-9]*" />
        </div>




        <div className="FIR-form-control  FIR-add-pre-sub2"><span className="FIR-simp-text">(iii)</span>
          <label for="inputZip" className="FIR-one-line FIR-form-label FIR-small-label">*Other Acts & Sections</label>
          <input id="inputZip" className="FIR-form-control2 FIR-zip-input1" name="zip" type="text" pattern="[0-9]*" />
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
          <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="day" pattern="[0-9]*" />
        </div>

        <div className="FIR-form-control FIR-add-pre-sub3">
          <label for="inputZip" className="FIR-form-label FIR-small-label">Date</label>
          <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="date" pattern="[0-9]*" />
        </div>

        <div className="FIR-form-control FIR-add-pre-sub3">
          <label for="inputZip" className="FIR-form-label FIR-small-label">Time</label>
          <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="time" pattern="[0-9]*" />
        </div>




        <div className="FIR-">
          <span className="FIR-simp-text4">(b)</span>
          <div className="FIR-form-control FIR-add-pre-sub">
            <label for="inputZip" className="FIR-form-label FIR-small-label">Informatio received at P.S. </label>
          </div>


          <div className="FIR-form-control FIR-add-pre-sub3">
            <label for="inputZip" className="FIR-form-label FIR-small-label">Date</label>
            <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="date" pattern="[0-9]*" />
          </div>

          <div className="FIR-form-control FIR-add-pre-sub3">
            <label for="inputZip" className="FIR-form-label FIR-small-label">Time</label>
            <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="time" pattern="[0-9]*" />
          </div>
        </div>





                <div className="FIR-">
                  <span className="FIR-simp-text4">(c)</span>
                  <div className="FIR-form-control FIR-add-pre-sub">
                    <label for="inputZip" className="FIR-form-label FIR-small-label">General Diary Reference:  </label>
                  </div>


                  <div className="FIR-form-control FIR-add-pre-sub3">
                    <label for="inputZip" className="FIR-form-label FIR-small-label">Entry No(s)</label>
                    <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="text" pattern="[0-9]*" />
                  </div>

                  <div className="FIR-form-control FIR-add-pre-sub3">
                    <label for="inputZip" className="FIR-form-label FIR-small-label">Time</label>
                    <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="time" pattern="[0-9]*" />
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
            <input className="FIR-form-check-input" type="checkbox" id="gridCheck" />
            <label for="inputZip" className="FIR-form-label1 FIR-small-label">*Written (or)</label>
          </div>
          <div className="FIR-form-control FIR-add-pre-sub4">
            <input className="FIR-form-check-input" type="checkbox" id="gridCheck" />
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
            <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="text" pattern="[0-9]*" />
          </div>

          <div className="FIR-form-control FIR-add-pre-sub5">
            <label for="inputZip" className="FIR-form-label FIR-small-label">Beat No.</label>
            <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="text" pattern="[0-9]*" />
          </div>
        </div>



        <div className="FIR-addr-text-main">

          <div className="FIR-form-control ">
            <label for="inputZip" className="FIR-form-label FIR-small-label"><span className="FIR-simp-text7">(b)</span>Address</label>
            <textarea className="FIR-addr-text" name="textarea" rows="8" cols="80" id="inputAddress" placeholder="Enter detailed location of place of occurence  "></textarea>
          </div>

        </div>


        <div className="FIR-addr-text-dist">

          <div className="FIR-form-control FIR-add-pre-sub6">
            <label for="inputZip" className="FIR-form-label FIR-small-label"><span className="FIR-simp-text7">(c)</span>In case outside limit of this Police Station, then enter the name of P.S and District</label>
            <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="textarea" pattern="[0-9]*" />
          </div>

        </div>




      {/*  <!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SECTION 6s >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->*/}





        <div className="FIR-">
          <span className="FIR-simp-text5">6</span>
          <div className="FIR-form-control FIR-add-pre-sub51">
            <label for="inputZip" className="FIR-form-label FIR-small-label">Complaint / Information</label>
          </div>
        </div>


        <div className="FIR-form-control FIR-form-control6"><span className="FIR-simp-text3">(a)</span>
          <label for="Name" className="FIR-desc-label">Name</label>
          <input className="FIR-name-input" type="text" id="name" placeholder="Enter your name" />
          <small>Error message</small>
        </div>
        <div className="FIR-form-control FIR-form-control6"><span className="FIR-simp-text3">(b)</span>
          <label for="Name" className="FIR-desc-label">Father's/Husband's Name</label>
          <input type="text" id="name" placeholder="Enter Father's/Husband's Name " />
          <small>Error message</small>
        </div>
        <div className="FIR-">
          <div className="FIR-form-control FIR-add-pre-sub">
            <label for="inputZip" className="FIR-form-label FIR-small-label"><span className="FIR-simp-text8">(c)</span>Date Of Birth </label>
            <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="date" pattern="[0-9]*" />
          </div>


          <div className="FIR-form-control FIR-add-pre-sub3">
            <label for="inputZip" className="FIR-form-label FIR-small-label"><span className="FIR-simp-text8">(d)</span>Nationality</label>
            <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="text" pattern="[0-9]*" />
          </div>

          <div className="FIR-form-control FIR-add-pre-sub3">
            <label for="inputZip" className="FIR-form-label FIR-small-label"><span className="FIR-simp-text8">(e)</span>Occupation</label>
            <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="text" pattern="[0-9]*" />

          </div>

          <div className="FIR-">
            <div className="FIR-form-control FIR-add-pre-sub">
              <label for="inputZip" className="FIR-form-label FIR-small-label"><span className="FIR-simp-text8">(f)</span>Passport No. </label>
              <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="text" pattern="[0-9]*" />
            </div>


            <div className="FIR-form-control FIR-add-pre-sub3">
              <label for="inputZip" className="FIR-form-label FIR-small-label">Date of Issue</label>
              <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="date" pattern="[0-9]*" />
            </div>

            <div className="FIR-form-control FIR-add-pre-sub3">
              <label for="inputZip" className="FIR-form-label FIR-small-label">Place Of Issue</label>
              <input id="inputZip" className="FIR-form-control1 FIR-zip-input" name="zip" type="text" pattern="[0-9]*" />

            </div> </div>
            <div className="FIR-">

              <div className="FIR-form-control">
                <label for="inputZip" className="FIR-form-label FIR-small-label"><span className="FIR-simp-text8">(g)</span>Address</label>
                <textarea className="FIR-addr-info" name="textarea" rows="8" cols="80" id="inputAddress" placeholder="Enter your address"></textarea>

              </div>
            </div>
            </div>

        {/*<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> */}

            <div className="FIR-">


              <div className="FIR-form-control FIR-add-pre-sublast">
                <label for="inputZip" className="FIR-form-label FIR-small-label"> <span className="FIR-simp-text5">7</span>Details of known / suspected / unknown / accused with full particulars (Attach separate sheet if necessary):</label>
              </div>
              <div className="FIR-form-control ">
                <textarea className="FIR-addr-info" name="textarea" rows="8" cols="80" id="inputAddress" placeholder="Enter a brief details here..."></textarea>

              </div>
            </div>


            <div className="FIR-">


              <div className="FIR-form-control FIR-add-pre-sublast">
                <label for="inputZip" className="FIR-form-label FIR-small-label"> <span className="FIR-simp-text5">8</span>Reasons for delay in reporting by the complaint / Informant:</label>
              </div>
              <div className="FIR-form-control ">
                <textarea className="FIR-addr-info" name="textarea" rows="8" cols="80" id="inputAddress" placeholder="Enter brief detail here..."></textarea>

              </div>
            </div>
            <div className="FIR-">


              <div className="FIR-form-control FIR-add-pre-sublast">
                <label for="inputZip" className="FIR-form-label FIR-small-label"> <span className="FIR-simp-text5">9</span>Particulars of properties stolen / involved (Attach separate sheet if necessary):</label>
              </div>
              <div className="FIR-form-controls">
                <textarea className="FIR-addr-info" name="textarea" rows="8" cols="80" id="inputAddress" placeholder="Enter brief detail here..."></textarea>

              </div>
            </div>
          {/* <button className="FIR-print-button " onClick={window.print}> Print complaint </button>*/}
           <button className="FIR-print-button " onClick={window.print}> Print complaint </button>
            <button type="submit">SUBMIT</button>
      </form>

    </div>
    </>
  )
}
