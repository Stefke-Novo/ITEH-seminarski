import React from 'react'
import "./Contact.css"
import { MdLocationOn,MdPhone,MdEmail } from "react-icons/md";
function Contact() {
    var size="50px";
    return (
        <div id='contactPage'>
            <div id='contactFormAll'>
                <div id='contHeadContent'>
                    <h1>Contact us</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus sed tempora accusamus id incidunt nesciunt doloribus dolores totam ratione, ut quae sunt veniam, sit numquam error qui ipsa! Placeat, sit.</p>
                </div>
                <div id='contactForm'>
                    <div id='conLeft'>
                        <div className='conLeftItem'>
                            <div className='iconCircle'>
                                <MdLocationOn size={size}/>
                            </div>
                            <div className='conLeftInfo'>
                                <h1>Phone</h1>
                                <p>info</p>
                            </div>
                        </div>
                        <div className='conLeftItem'>
                            <div className='iconCircle'>
                                <MdPhone size={size}/>
                            </div>
                            <div className='conLeftInfo'>
                                <h1>Phone</h1>
                                <p>info</p>
                            </div>
                        </div>
                        <div className='conLeftItem'>
                            <div className='iconCircle'>
                                <MdEmail size={size}/>
                            </div>
                            <div className='conLeftInfo'>
                                <h1>Phone</h1>
                                <p>info</p>
                            </div>
                        </div>
                    </div>
                    <form action="">
                        <div className='formData'>
                            <label htmlFor="fullName">Full name</label>
                            <input name="fullname" type='text'/>
                        </div>
                        <div className='formData'>
                            <label htmlFor="email">E-mail</label>
                            <input name="email" type='text'/>
                        </div>
                        <div className='formData'>
                            <label htmlFor="">Message</label>
                            <textarea type='text'/>
                        </div>
                        <button id='formDataBtn'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
