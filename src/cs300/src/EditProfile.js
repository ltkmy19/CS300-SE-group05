import React from "react"
import "./EditProfile.css";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

/*const userId = document.getElementById('userId');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phoneNum = document.getElementById('phone');
const professions = document.getElementById('profession');
const addBtn = document.getElementById('addBtn');

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

function Edit(){
    return(
        <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>QuachKhoi123</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Quách Khôi</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>quachkhoi@gmail.com</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>123 456 789</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Web Developer and Designer</p>
                                            </div>
                                        </div>
                            </div>
        </div><div class="row px-3"> <label class="mb-1">
                                <h6 class="mb-0 text-sm">Email Address</h6>
                            </label> <input class="mb-4" type="text" name="email" placeholder="Enter a valid email address" /> </div></div>
    )
    
}
export default Edit
/*const usersCollection = database.collection('users');
if(addBtn){
addBtn.addEventListener('click',e =>{
    e.preventDefault();
    usersCollection.doc(userId.value).set({
        name: name.value,
        email: email.value,
        phoneNum: phoneNum.value,
        professions: professions.value
    })
    .then( () => {console.log('Update profile successfully');})
    .catch(error => {console.log('Cannot upgrade your profile')});
});
}*/
// ba dung quan tam cai comment o tren nha

function Edit() {
    return (
        <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div class="card card0 border-0">
            <div class="row d-flex">
                <div class="col-lg-6">
                    <div class="card1 pb-5">
                        <div class="row"> <img src="https://i.imgur.com/CXQmsmF.png" class="logo" /> </div>
                        <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" class="image" /> </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card2 card border-0 px-4 py-5">
                        <div class="row mb-4 px-3">
                        </div>
                        <div class="row px-3 mb-4">
                            <div class="line"></div> <small class="or text-center">Or</small>
                            <div class="line"></div>
                        </div>
                        <div class="row px-3"> <label class="mb-1">
                                <h6 class="mb-0 text-sm">Email Address</h6>
                            </label> <input class="mb-4" type="text" name="email" placeholder="Enter a valid email address" /> </div>
                        <div class="row px-3"> <label class="mb-1">
                                <h6 class="mb-0 text-sm">Password</h6>
                            </label> <input type="password" name="password" placeholder="Enter password" /> </div>
                        <div class="row px-3 mb-4">
                            <div class="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" class="custom-control-input" /> <label for="chk1" class="custom-control-label text-sm">Remember me</label> </div> <a href="#" class="ml-auto mb-0 text-sm">Forgot Password?</a>
                        </div>
                        <div class="row mb-3 px-3" style={{color:`white`}}> <a href="/Home" class="btn btn-blue text-center" >Login</a></div>
                        <div class="row mb-4 px-3"> <small class="font-weight-bold">Don't have an account? <a class="text-danger ">Register</a></small> </div>
                    </div>
                </div>
            </div>
            <div class="bg-blue py-4">
                <div class="row px-3"> <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2021. All rights reserved.</small>
                    <div class="social-contact ml-4 ml-sm-auto"> <span class="fa fa-facebook mr-4 text-sm"></span> <span class="fa fa-google-plus mr-4 text-sm"></span> <span class="fa fa-linkedin mr-4 text-sm"></span> <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Edit