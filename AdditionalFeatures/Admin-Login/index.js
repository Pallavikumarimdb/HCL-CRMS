const form = document.getElementById('form');
const userid = document.getElementById('userid');
const password = document.getElementById('password');

//Show input error message
function showError(input, message) {
  //gets the parent div
  const formControl = input.parentElement;
  //applies error class and reapplies form-control class
  formControl.className = 'form-control error';
  //finds the small tag within this div
  const small = formControl.querySelector('small');
  //inserts the message parameter into the small tag
  small.innerText = message;
}

//Show success outline
function showSuccess(input) {
  //gets the parent div
  const formControl = input.parentElement;
  //applies success class and reapplies form-control class
  formControl.className = 'form-control success';
}

// //Check to see if email is valid
// function checkEmail(input) {
//   const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//
//   //if (regular expression representing a valid email, then true else false)
//   if (regExEmail.test(input.value.trim())) {
//     showSuccess(input);
//   } else {
//     showError(input, 'Not a real email bub');
//   }
// }

//check required fields
function checkRequired(inputArr) {
  //iterate through each slot in inputArr
  inputArr.forEach(function(input) {
    //if not null, show success
    if (input.value.trim() === '') {
      console.log(input.id);
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//check whether an input is between a min and max length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)}'s should be over ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)}'s should be under ${max} characters`
    );
  }
}

// // Check if the passwords match
// function checkPasswords(input1, input2) {
//   if (input1.value !== input2.value) {
//     showError(input2, 'Those dont match');
//   } else {
//     showSuccess(input);
//   }
// }

//Get the fieldname
//finds first letter and uppercases it, then slices off the old first letter and concatenates
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listeners
form.addEventListener('submit', function(e) {
  // use preventDefault to keep the page from refreshing everytime you hit submit
  e.preventDefault();

  checkRequired([userid, password]);
  checkLength(userid, 3, 15);
  checkLength(password, 6, 25);
  checkPasswords(password);
});
