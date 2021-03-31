import React from 'react';
import "./Footer.css";
import f9 from './Assets/f9.jpg';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer_icons">
                <div><MailOutlineIcon className="footer1"/></div>
                    <div className="footer_email">NEWS & OFFERS</div>
                </div>
                <div className="footer_form">
                    <form className="footer_form">
                        <input className="footer_input" type="text" placeholder="Enter Your Email Here"></input>
                        <button className="footer_subscribeButton">SUBSCRIBE</button>
                    </form>
                </div>
                <div className="footer_social">
                   <div className="footer_social1"> <FacebookIcon fontSize="small"/></div>
                   <div className="footer_social1">  <PinterestIcon fontSize="small" /></div>
                   <div className="footer_social1">   <TwitterIcon  fontSize="small"/></div>
                   <div className="footer_social1">  <GTranslateIcon  fontSize="small"/></div>
                   <div className="footer_social1">  <InstagramIcon fontSize="small"/></div>
                </div>
            </div>
            <div className="footer_bottom">
                <div>
                    <img src={f9} alt='food'/>
                </div>
                <div className="footer_contact">
                   <div className="footer_location"><LocationOnIcon className="footer_location1"/><p className="footer_location2"> Plot 1415 Adetokunbo Ademola Street, PMB 12724, Victoria Island, Lagos Nigeria</p></div>
                   <div className="footer_location"><CallIcon className="footer_location1"/><p className="footer_location2">  +234 1 2772700-25 , +234 1 460610 (ext.6125, 6203, 6079, 6297, 6215, 6124</p></div>
                   <div className="footer_location"><CallIcon className="footer_location1"/><p className="footer_location2">  Fax: +234 1 2704071</p></div>
                    <div className="footer_location"><MailOutlineIcon className="footer_location1"/><p className="footer_location3">   sales@chowpages.com, reservation@chowpages.com,<br></br>
                        banquet@chowpages.com</p></div>
                </div>
                <div className="footer_links">
                    <h3>PAGE SITE</h3>
                    <p>Terms & Condition</p>
                    <p> Gallery</p>
                    <p>OutDoor Events</p>
                    <p>Grill 'n' Eat</p>
                </div>
                <div className="footer_links">
                    <h3>HOT LINKS</h3>
                    <p>About</p>
                    <p> Our Vision & Mission</p>
                    <p>Contact Us</p>
                    <p>Our Values</p>
                </div>
            </div>
            <div className="footer_copyright">
                    <p className="footer_copyrightText">Copyright © 2021 ChowPages & Events</p>
            </div>
        </div>
    )
}

export default Footer
