import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import '../style/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
        <TelegramIcon />
        <p> &copy;2023  rollingbites.com</p>
      </div>
    </div>
  )
}

export default Footer
