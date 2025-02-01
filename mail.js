// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvLBVt_kl46WLcEAAk3TRReOIThEeyxAY",
    authDomain: "food-waste-reduction-458dd.firebaseapp.com",
    databaseURL: "https://food-waste-reduction-458dd-default-rtdb.firebaseio.com",
    projectId: "food-waste-reduction-458dd",
    storageBucket: "food-waste-reduction-458dd.firebasestorage.app",
    messagingSenderId: "81338702570",
    appId: "1:81338702570:web:ea43805648793730bad593",
    measurementId: "G-3429MVTSP4"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var PinCode = getInputVal('PinCode');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var Address = getInputVal('Address');
  
    // Save message
    saveMessage(name, PinCode, email, phone, Address);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, PinCode, email, phone, Address){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      PinCode:PinCode,
      email:email,
      phone:phone,
      Address:Address
});
}