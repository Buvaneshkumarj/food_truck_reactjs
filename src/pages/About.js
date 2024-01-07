import React from 'react';
import Aboutimg from "../assests/pg3.jpg";
import '../style/About.css';

function About() {
  return (
    <div className='about'>
        <div className='aboutTop'
         style={{ backgroundImage: `url(${Aboutimg})` }}
        ></div>
        <div className='aboveBottom'>
            <h1>ABOUT US</h1>
            <h4>Beyond the boundries of taste.</h4>
            <p>
                <h1>One Thousand Flavours In One Place</h1>
                Rolling bites is a food truck company that produces healthy food products. They offer a variety of items such as snacks, meals, and drinks. Their products are all natural and free from preservatives.
                The website for Laird Superfood is clean and simple. The design uses a lot of white space, which makes the site easy to navigate. The menu is easy to find and the products are clearly laid out. The overall design is modern and stylish.
                Our trucks are also available for any type of events and the functions.
                Holly is the writer behind the blog Spend With Pennies, where you can find home cooked recipes and videos that make following along super easy. She also has a section for kitchen tips that she shares with her audience that make life in the kitchen super simple.
            </p>
        </div>
      
    </div>
  )
}

export default About
