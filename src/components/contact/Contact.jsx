import React from 'react'
import './Contact.css'
import { CgProfile } from "react-icons/cg";
import { FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import './Contact.css'
const Form = () => {
    return (
        <>
            <h1 id='head'><span>Contact </span> Us</h1>
            <div className="container">
                <div className="form1">
                    <form >
                        <label>Name:</label>
                        <input type="text" name="name" placeholder="Enter your name" />

                        <label>Email:</label>
                        <input type="email" name="email" placeholder="Enter your email" />

                        <label>Mobile No:</label>
                        <input type="tel" name="mobile" placeholder="Enter your mobile number" />

                        <label>Message:</label>
                        <textarea name="message" placeholder="Enter your message"></textarea>

                        <button type="submit">Send <IoSend /></button>
                    </form>
                </div>
                <div className="form2">
                    <div className="profile">
                        <CgProfile />
                        <p>:-SANNI KUMAR GUPTA</p>
                    </div>
                    <div className="mobile">
                        <IoCall />
                        <p>:-8579037260</p>
                    </div>
                    <div className="email">
                        <MdEmail />
                        <p>:-sannikumargupta43@gmail.com</p>
                    </div>

                    <div className="location">
                        <FaLocationArrow />
                        <p>:-Muzaffarpur,Bihar</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Form
