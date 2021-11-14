
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
let contactInfo = firebase.database().ref("signup");
  

// Listen for a submit
document.querySelector("contact").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  


// function submitForm(e) {
//   e.preventDefault();
// }

  //   Get input Values
  let fname = getInputVal("fname");
  let lname = getInputVal("lname");
  let number = getInputVal("number");  // i create another fun to get value by this var getInputVal check another fun... 
 

  
    // Save message
  saveContactInfo(fname,lname,number);
  // Show alert
  document.querySelector(".alert").style.display = "block";
 
}
  // Clear form
  document.querySelector(".contact").reset();

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save infos to Firebase
function saveContactInfo(fname,lname,number) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    fname: fname,
    lname:lname,
    number:number
  });
  
}
