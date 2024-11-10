import React from 'react'
import footer from '../assets/footer.png'
import { InstagramOutlined, YoutubeOutlined, TwitterOutlined, FacebookOutlined, LinkedinOutlined } from '@ant-design/icons';
import './styles.scss'


function Footer() {
  return (
    <div>

        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul >
                            <li> <img src={footer} alt=""  style={{width: '10rem', height: '4rem'}}/></li>
                            <li>About Us</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy & Cookies</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li><h4>ORGANISATIONS</h4></li>
                            <li> Contro Panel</li>
                            <li>Discover The MarketPlace</li>
                            <li> Create Organisation Account</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li><h4>YOUR ACCOUNT</h4></li>
                            <li> Library</li>
                            <li>Profile</li>
                            <li>Projects</li>
                            <li>Help</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul> <li><h4>EXPLORE</h4></li>
                        <li>Metrics</li>
                        <li>Networks</li>
                        <li>Strategies</li>
                        <li>Projects</li>
                        <li>Studies</li>
                        <li>Surveys</li>
                        <li>Tips</li>
                        <li>Vouchers</li>
                            </ul>
                    </div>
                    <div className="col">
                    <h4 style={{fontSize:'15px', fontWeight: '700', color:'#b43b3b'}}>FOLLOW THE MAKERABLE STORY</h4>
                        <ul style={{display: 'flex', gap: '20px'}}>
                           
                            <li> <InstagramOutlined style={{ color: "#0e76a8" }} /></li>
                            <li> <YoutubeOutlined style={{ color: "#FF0000" }} /></li>
                            <li> <TwitterOutlined  style={{ color: "#E1306C" }} /></li>
                            <li>   <FacebookOutlined  style={{ color: "#4267B2" }} /></li>
                            <li> <LinkedinOutlined  style={{ color: "#1DA1F2" }} /></li>
                        </ul>

                    </div>
                </div>
            </div>
          </div>
      
    </div>
  )
}

export default Footer
