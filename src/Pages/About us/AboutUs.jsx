import React from 'react'
import "./AboutUs.css";
import slika1 from "./slika1.jpg";
import slika2 from "./slika2.jpg";
import slika3 from "./slika3.jpg";
import slika4 from "./slika4.jpg";
import { FaFacebookF,FaTwitter,FaGooglePlusG,FaLinkedin,FaInstagram } from "react-icons/fa";
function AboutUs() {
    return (
        <div>
            <div id='aboutUsWrap'>
                <div id='aboutUsContainer'>
                    <div className='clip clip1'>
                        <div className='aboutUsContent'>
                            <h2>Post Title 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, et corporis! Harum recusandae voluptas ea nobis at, accusamus iste dolores aliquam obcaecati, neque assumenda cupiditate maxime magni! Doloribus, quasi! Autem.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum quam, eaque dicta soluta quas. Maiores, pariatur molestias magni est itaque quaerat nemo, optio quae vitae eius dolore aperiam fugiat.
                            </p>
                        </div>
                    </div>
                    <div className='clip clip2'>
                        <div className='aboutUsContent'>
                            <h2>Post Title 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, et corporis! Harum recusandae voluptas ea nobis at, accusamus iste dolores aliquam obcaecati, neque assumenda cupiditate maxime magni! Doloribus, quasi! Autem.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum quam, eaque dicta soluta quas. Maiores, pariatur molestias magni est itaque quaerat nemo, optio quae vitae eius dolore aperiam fugiat.
                            </p>
                        </div>
                    </div>
                    <div className='clip clip3'>
                        <div className='aboutUsContent'>
                            <h2>Post Title 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, et corporis! Harum recusandae voluptas ea nobis at, accusamus iste dolores aliquam obcaecati, neque assumenda cupiditate maxime magni! Doloribus, quasi! Autem.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum quam, eaque dicta soluta quas. Maiores, pariatur molestias magni est itaque quaerat nemo, optio quae vitae eius dolore aperiam fugiat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='teamWrap'>
                <section id='team'>
                    <div id='teamContainer'>
                        <div className='teamRow'>
                            <h1>Our Team</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                                elit. Dolorem ullam quod ipsa consectetur, aspernatur 
                                incidunt velit, eligendi ad quibusdam iure soluta nostrum 
                                voluptate quaerat impedit, blanditiis eveniet asperiores odio veniam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Perferendis labore eaque libero excepturi tenetur, 
                                quaerat earum deserunt repudiandae quam ut fuga nesciun
                                t nobis laborum ducimus cumque, saepe at assumenda debitis.</p>
                        </div>
                        <div className='teamRow mgt50px'>
                            <div className='teamColumn'>
                                <div className='teamImgBox'>
                                    <img src={slika1} alt="" />
                                </div>
                                <div className='teamDetails'>
                                    <h3>Member name<br/><span>CEO and Founder</span></h3>
                                    <ul>
                                        <li><a href="#"><FaFacebookF/></a></li>
                                        <li><a href="#"><FaTwitter/></a></li>
                                        <li><a href="#"><FaGooglePlusG/></a></li>
                                        <li><a href="#"><FaLinkedin/></a></li>
                                        <li><a href="#"><FaInstagram/></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='teamColumn'>
                                <div className='teamImgBox'>
                                    <img src={slika2} alt="" />
                                </div>
                                <div className='teamDetails'>
                                    <h3>Member name<br/><span>CEO and Founder</span></h3>
                                    <ul>
                                        <li><a href="#"><FaFacebookF/></a></li>
                                        <li><a href="#"><FaTwitter/></a></li>
                                        <li><a href="#"><FaGooglePlusG/></a></li>
                                        <li><a href="#"><FaLinkedin/></a></li>
                                        <li><a href="#"><FaInstagram/></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='teamColumn'>
                                <div className='teamImgBox'>
                                    <img src={slika3} alt="" />
                                </div>
                                <div className='teamDetails'>
                                    <h3>Member name<br/><span>CEO and Founder</span></h3>
                                    <ul>
                                        <li><a href="#"><FaFacebookF/></a></li>
                                        <li><a href="#"><FaTwitter/></a></li>
                                        <li><a href="#"><FaGooglePlusG/></a></li>
                                        <li><a href="#"><FaLinkedin/></a></li>
                                        <li><a href="#"><FaInstagram/></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='teamColumn'>
                                <div className='teamImgBox'>
                                    <img src={slika4} alt="" />
                                </div>
                                <div className='teamDetails'>
                                    <h3>Member name<br/><span>CEO and Founder</span></h3>
                                    <ul>
                                        <li><a href="#"><FaFacebookF/></a></li>
                                        <li><a href="#"><FaTwitter /></a></li>
                                        <li><a href="#"><FaGooglePlusG /></a></li>
                                        <li><a href="#"><FaLinkedin /></a></li>
                                        <li><a href="#"><FaInstagram /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div style={{clear:"both"}}></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AboutUs
