//Unique Firebase Object
const firebaseConfig = {
  apiKey: "AIzaSyCQ6pcQa5b36IWKVUJ_zA9sYAT-rjiH3E4",
  authDomain: "portfoliotest-caee6.firebaseapp.com",
  databaseURL: "https://portfoliotest-caee6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfoliotest-caee6",
  storageBucket: "portfoliotest-caee6.appspot.com",
  messagingSenderId: "546304933700",
  appId: "1:546304933700:web:81671343e2039f8141e111",
  measurementId: "G-01TP6KHZHL"
};


//Initialize Firebase 
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("formData")

//Get Submit Form

let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //Get Form Values
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let message = document.getElementById('message').value

  //Save Form Data To Firebase
  db.doc().set({
    name: name,
    email: email,
    message: message
  }).then( () => {
    console.log("Data saved")
  }).catch((error) => {
    console.log(error)
  })

  //alert
  alert("Your Form Has Been Submitted Successfully")
})