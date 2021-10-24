import React from 'react'
import {BiSearchAlt} from "react-icons/bi"
import Background from "./img/book-wallpaper-22142-22699-hd-wallpapers.jpg";

function Home() {
    return (
<body className="bg-img" style={{backgroundImage:{Background}}}> 
    <div class="input-group bg-img" style={{paddingTop:`10%`,paddingLeft:`35%`, paddingRight:`35%`}}>
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
  aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary">search</button> </div>
  
  </body>


    )
}

export default Home
