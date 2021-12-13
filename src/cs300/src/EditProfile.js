import React from "react"
import {Route, Link} from "react-router-dom";
import "./EditProfile.css";
import "./UpdateProfile";


function Edit() {
    return (
        <div class="container emp-profile">
        <form method="post">
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-work">
                        <p>WORK LINK</p>
                        <a href="">Website Link</a><br/>
                        <a href="">Bootsnipp Profile</a><br/>
                        <a href="">Bootply Profile</a>
                        <p>SKILLS</p>
                        <a href="">Web Designer</a><br/>
                        <a href="">Web Developer</a><br/>
                        <a href="">WordPress</a><br/>
                        <a href="">WooCommerce</a><br/>
                        <a href="">PHP, .Net</a><br/>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label id="userId">User Id</label>
                                            <input id="userId" type="text" name="userId" placeholder="Enter your user ID" />
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6"> 
                                            <label id="userName">User Name</label>
                                            <input id="userName" type="text" name="userName" placeholder="Enter your name" />       
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6"> 
                                            <label id="email">Email</label>
                                            <input id="email" type="text" name="email" placeholder="Enter your email" />       
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <label id="phoneNum">Phone</label>
                                            <input id="phoneNum" type="text" name="phoneNum" placeholder="Enter your phone number" />
                                            </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <label id="professions">Profession</label>
                                            <input id="professions" type="text" name="professions" placeholder="Enter your profession" />
                                        </div>
                                    </div>

                                    <div class="row-md-2">
                                        <button id="updateBtn">
                                            <Link to="/UpdateProfile"></Link>Update Profile</button>   
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>           
    </div>
    )
}

export default Edit
