import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from "../assests/bg.jpg";
import "../style/Home.css";
function Home() {
  return(
  <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className="headerContainer" >
      <h1>Rolling Bites</h1>
      <p>Have a bliss with every bite of our food</p>
      <Link to='/menu'>
        <button>ORDER NOW</button>
      </Link>
    </div>
  </div>
  );
}

export default Home;

