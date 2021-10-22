import React from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css";
import logo from "./img/logo_200x200.png";
import { VscAccount } from "react-icons/vsc";

function Navbar() {
    return (
        <div class="container-fluid px-0 ">
        <nav class="navbar navbar-expand-md navbar-light bg-white p-0"> <a class="navbar-brand mr-4" href="/Home"><img src={logo} alt="logo"  width="130px" height="50px"/></a> <button class="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                 
                    <li class="nav-item"> <a class=" btn nav-link " href="/Aboutus" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About Us<span class="fa fa-angle-down"></span></a>
                        <div class="dropdown-menu" id="dropdown-menu2" aria-labelledby="navbarDropdown2">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-folder"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">WhitePaper</h6> <small class="text-muted">Marketing and report</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-question"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">FAQs</h6> <small class="text-muted">Qs and answers</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-calculator"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Tools</h6> <small class="text-muted">All tools</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-paper-plane"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Success Stories</h6> <small class="text-muted">Experiences</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item"> <a class="nav-link" href="/Category" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category<span class="fa fa-angle-down"></span></a>
                        <div class="dropdown-menu" id="dropdown-menu1" aria-labelledby="navbarDropdown1">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-shopping-cart"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">WearCMS</h6> <small class="text-muted">For your project</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-gamepad"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Game+</h6> <small class="text-muted">Monetization of games</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-video-camera"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Streetcam</h6> <small class="text-muted">Keep track all year</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-comment"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Teamne</h6> <small class="text-muted">Teamwork</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-briefcase"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Prospec</h6> <small class="text-muted">Solutions for your business</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-bolt"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Booster</h6> <small class="text-muted">Increase engagement</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item"> <a class="nav-link" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Community<span class="fa fa-angle-down"></span></a>
                        <div class="dropdown-menu" id="dropdown-menu3" aria-labelledby="navbarDropdown3">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-feed"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Feedback</h6> <small class="text-muted">Opinions, complaints</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-question"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">FAQs</h6> <small class="text-muted">Qs and answers</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                 
                </ul>
           
                <a class=" mx-1"  href="/Account" ><VscAccount size="35px"/></a>
                   
                    
               
            </div>
        </nav>
    </div>
    )
}

export default Navbar
