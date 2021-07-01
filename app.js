// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAylp2qteWCHwJj4Q95AgVHQwOuHVzRdtE',
  authDomain: 'generic-submit-button.firebaseapp.com',
  databaseURL:
    'https://generic-submit-button-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'generic-submit-button',
  storageBucket: 'generic-submit-button.appspot.com',
  messagingSenderId: '379879067492',
  appId: '1:379879067492:web:49e0ac73c870a575a6b471',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref('infos');

// Listen for a submit
document.querySelector('.contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector('.name').value;
  let email = document.querySelector('.email').value;
  let message = document.querySelector('.message').value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector('.contact-form').reset();

  sendEmail(name, email, message);
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}

// //Send Email info
// function sendEmail(name, email, message) {
//   Email.send({
//     Host: ".....",
//     Username: '.....',
//     Password: ".....",
//     To: '....',
//     From: '....',
//     Subject: `${name} sent you a message`,
//     Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,

//   }).then((message) => alert("Mail sent successfully."))

// }
