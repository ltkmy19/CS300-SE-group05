import React from 'react'
import {BiSearchAlt} from "react-icons/bi"
import Background from "./img/book-wallpaper-22142-22699-hd-wallpapers.jpg";
import "./Page.css"
function Home() {
    return (
<body  > 
  <div  style={{backgroundImage: `url(${Background})`,  opacity: `0.8`}}>
    <div class="input-group bg-img"  style={{paddingTop:`50%`,paddingLeft:`35%`, paddingRight:`35%`,}}>
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
  aria-describedby="search-addon" />
  <a type="button" class="btn btn-outline-primary" href="/Aboutus">search</a> </div>
  </div>
  <h1 class="headline">
	  Widget Inc.

    hihihihihihihdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    hihihihihihihdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    hihihihihihihdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    hihihihihihihdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    hihihihihihihdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    hihihihihihihdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    hihihihihihihdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    </h1>
    ScrollReveal().reveal('.headline');

  </body>


    )
}

export default Home
