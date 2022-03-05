var alphaNum = Math.random().toString(12).slice(2);
document.getElementById("alphaNumric").innerHTML = alphaNum;
setTimeout(function () {
  window.location.href= 'http://localhost:3000/'; // the redirect goes here

},3500);
