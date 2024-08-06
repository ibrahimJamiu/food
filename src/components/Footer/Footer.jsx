import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {

    //Automatic date
    const dateFormat = new Date();
    const year = `${dateFormat.getFullYear()}`

    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <a href=""><img src={assets.logo} alt="" /></a>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, in cupiditate!</p>
                    <div className="footer-social-icons">
                        <a href="/"><img src={assets.facebook_icon} alt="" /></a>
                       <a href="/"> <img src={assets.twitter_icon} alt="" /></a>
                        <a href=""><img src={assets.linkedin_icon} alt="" /></a>
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+92-212-455-7283</li>
                        <li>contact@lorem.com</li>
                    </ul>
                </div>
            </div>

            <hr />
            <p className="footer-copyright">Copyright {year} &copy; Lorem.com - All right Reserved.</p>
        </div>
    )
}

export default Footer