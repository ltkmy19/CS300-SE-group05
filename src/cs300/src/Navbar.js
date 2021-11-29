import React from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css";
import logo from "./img/logo_200x200.png";
import { VscAccount } from "react-icons/vsc";
import { BsBook } from "react-icons/bs";
import { IconContext } from 'react-icons/lib';


function Navbar() {
    const icon = { color: "white", fontSize: "1.5em" }
    
    return (
        <div class="container-fluid px-0 ">
        <nav class="navbar navbar-expand-md navbar-light bg-darkblue p-0"> 
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item"> 
                      <a class="nav-link " href="/Home" >Home</a>
                    </li>
                    <li class="nav-item"> 
                      <a class="nav-link " href="/Aboutus" >About Us</a>
                    {/* <a class="nav-link " href="/Aboutus" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About Us<span class="fa fa-angle-down"></span></a> */}
                        {/* <div class="dropdown-menu" id="dropdown-menu2" aria-labelledby="navbarDropdown2">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-folder"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">WhitePaper</h6> <small class="text-light">Marketing and report</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-question"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">FAQs</h6> <small class="text-light">Qs and answers</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-calculator"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Tools</h6> <small class="text-light">All tools</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-paper-plane"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Success Stories</h6> <small class="text-light">Experiences</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </li>
                    <li class="nav-item"> <a class="nav-link" href="/Category" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category<span class="fa fa-angle-down"></span></a>
                        <div class="dropdown-menu" id="dropdown-menu1" aria-labelledby="navbarDropdown1">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-shopping-cart"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">WearCMS</h6> <small class="text-light">For your project</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-gamepad"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Game+</h6> <small class="text-light">Monetization of games</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-video-camera"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Streetcam</h6> <small class="text-light">Keep track all year</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-comment"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Teamne</h6> <small class="text-light">Teamwork</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-briefcase"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Prospec</h6> <small class="text-light">Solutions for your business</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-bolt"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Booster</h6> <small class="text-light">Increase engagement</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* <li class="nav-item"> <a class="nav-link" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Community<span class="fa fa-angle-down"></span></a>
                        <div class="dropdown-menu" id="dropdown-menu3" aria-labelledby="navbarDropdown3">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-feed"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Feedback</h6> <small class="text-light">Opinions, complaints</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 ">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-question"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">FAQs</h6> <small class="text-light">Qs and answers</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li> */}

                    
                    <li class="nav-item"> 
                      <a class="nav-link " href="/Record" >Publish</a>
                    </li>
                </ul>
               <div class="dropdown" >
                   <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                           aria-expanded="false" >
                                    <IconContext.Provider value={{ color: "Black"}}>  <a class=" mx-1 acc"  href="/Account"  ><VscAccount  value={{ color: "blue" }} size="30px" /></a></IconContext.Provider>  
                           </button>
                   <div class="dropdown-menu" aria-labelledby="triggerId">
                       <a class="dropdown-item" href="/Account">Profile</a>
                       <div class="dropdown-divider"></div>
                       <a class="dropdown-item" href="#">My record</a>
                       <div class="dropdown-divider"></div>
                       <a class="dropdown-item" href="#">My favorite</a>
                       <div class="dropdown-divider"></div>
                       <a class="dropdown-item" href="/">Log out</a>
                       <div class="dropdown-divider"></div>
                   </div>
               </div>
       
                   
                    
               
            </div>
        </nav>
    </div>
    )
}

export default Navbar
