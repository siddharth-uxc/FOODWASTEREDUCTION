const firebaseConfig = {
    apiKey: "AIzaSyBWiD3bTh61WpZWilsXzBxTiblpgaD-7fw",
    authDomain: "food-waste-reduction-17428.firebaseapp.com",
    databaseURL: "https://food-waste-reduction-17428-default-rtdb.firebaseio.com",
    projectId: "food-waste-reduction-17428",
    storageBucket: "food-waste-reduction-17428.firebasestorage.app",
    messagingSenderId: "1009691624296",
    appId: "1:1009691624296:web:5f98f16415995c691f0cdd",
    measurementId: "G-RS7JQY67FJ"
  };

firebase.initializeApp(firebaseConfig);

var food_reduction_db =  firebase.database().ref('food-waste-reduction_d');
document.getElementById('formid').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    var name = getElementVal('itemName');
    
    console.log(name);
}

const getElementVal = (id) => {
    return document.getElementById(id).ariaValueMax;

};