import React from 'react'
import "./footer.css"
import tubeicon from "../../netflix_react_assets/youtube_icon.png"
import twittericon from "../../netflix_react_assets/twitter_icon.png"
import instaicon from "../../netflix_react_assets/instagram_icon.png"
import fbicon from "../../netflix_react_assets/facebook_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={fbicon} />
        <img src={instaicon} />
        <img src={twittericon} />
        <img src={tubeicon} />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Legal Notices</li>
        <li>Privacy</li>
        <li>Cookie Preferences</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright'>Netflix-Clone</p>
    </div>
  )
}

export default Footer