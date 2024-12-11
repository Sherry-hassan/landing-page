import React from 'react'
import fbImg from '../../src/assets/images/fb.png'
import inImg from '../../src/assets/images/in.png'
import twitterImg from '../../src/assets/images/twitter.png'
import utubeImg from '../../src/assets/images/utube.png'
import instaImg from '../../src/assets/images/Instagram.png'

const NewFooter = () => {
    return (
        <div className='footer-section'>
            <div className="footer-container">
                <div className="footer-wrapper">
                    <p> new Company</p>
                    <h2>Landing</h2>
                    <button>Purchase Now</button>
                </div>
                <div className="footer-wrapper">
                    <div className="footer-wrapper-content">
                        <ul class="">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className='footer-icons-list'>
                        <a href="#">
                            <img src={fbImg} alt="fb-icon" />
                        </a>
                        <a href="#">
                            <img src={inImg} alt="fb-icon" />
                        </a>
                        <a href="#">
                            <img src={twitterImg} alt="fb-icon" />
                        </a>
                        <a href="#">
                            <img src={utubeImg} alt="fb-icon" />
                        </a>
                        <a href="#">
                            <img src={instaImg} alt="fb-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewFooter