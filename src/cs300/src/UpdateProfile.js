import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const userId = document.getElementById('userId');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const phoneNum = document.getElementById('phoneNum');
const professions = document.getElementById('professions');
const updateBtn = document.getElementById('updateBtn');

const firebaseConfig = {
    apiKey: "AIzaSyBrwCV5VZMrYP53rUd0RLpLpxUqQSPY6jE",
    authDomain: "rebook-4261f.firebaseapp.com",
    projectId: "rebook-4261f",
    storageBucket: "rebook-4261f.appspot.com",
    messagingSenderId: "302684411026",
    appId: "1:302684411026:web:be876d0ac01f1b51bd424b",
    measurementId: "G-WD7MNZX6ZJ"
  };
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();



const usersCollection = database.collection('users');
function update(){
if(updateBtn){
updateBtn.addEventListener('click',e => {
    e.preventDefault();
    usersCollection.doc(userId.value).set({
        userName: userName.value,
        phoneNum: phoneNum.value,
        email: email.value,
        professions:professions.value
    })
    .then( () => {console.log('Update profile successfully');})
    .catch(error => {console.log('Cannot upgrade your profile')});
    return e.preventDefault();
});
}
}
export default update;