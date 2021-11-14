

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAQ_bUsH927T6BO67_qS288dPAcHeypPe4",
    authDomain: "feedback-2bf95.firebaseapp.com",
    databaseURL: "https://feedback-2bf95-default-rtdb.firebaseio.com",
    projectId: "feedback-2bf95",
    storageBucket: "feedback-2bf95.appspot.com",
    messagingSenderId: "678237014586",
    appId: "1:678237014586:web:58e60b865bf9b782b6c303",
    measurementId: "G-X44HMPKDWN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



// Refernece contactInfo collections
let contactInfo = firebase.database().ref("Payment");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();


  //   Get input Values
  let fname = getInputVal("fname");  // i create another fun to get value by this var getInputVal check another fun... 
  let email = getInputVal("email");
  let address = getInputVal("address");
  let city = getInputVal("city");
  let state = getInputVal("state");
  let zip = getInputVal("zip");
  let cardname = getInputVal("cardname");
  let ccnum = getInputVal("ccnum");
  let expmonth = getInputVal("expmonth");
  let expyear = getInputVal("expyear");


  

    // Save message
  saveContactInfo(fname, email, address,city,state,zip,cardname,ccnum,expmonth,expyear);
  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  document.querySelector(".contact-form").reset();

}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save infos to Firebase
function saveContactInfo(fname, email, address,city,state,zip,cardname,ccnum,expmonth,expyear) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    fname: fname,
    email: email,
    address:address,
    city:city,
    state:state,
    zip:zip,
    cardname:cardname,
    ccnum:ccnum,
    expmonth:expmonth,
    expyear:expyear,

  });
  
}
