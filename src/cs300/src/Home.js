import React from 'react'
import {BiSearchAlt} from "react-icons/bi"
function Home() {
    return (
        <div class="input-group rounded" >
  <input type="search" class="form-control rounded" width="80%" placeholder="Search" aria-label="Search"
  aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
      <a href="#"> <BiSearchAlt /></a>
    
  </span>
</div>
    )
}

export default Home
