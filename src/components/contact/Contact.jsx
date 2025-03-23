import React from 'react';
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';
import { CgProfile } from "react-icons/cg";
import { FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall, IoSend } from "react-icons/io5";

const Form = () => {
  const [state, handleSubmit] = useForm("https://formspree.io/f/meoagpkl"); // Use your correct Formspree ID here
  
  if (state.succeeded) {
    return <p>Thanks for contacting us!</p>;
  }

  return (
    <>
      <h1 id='head'><span>Contact </span> Us</h1>
      <div className="container">
        <div className="form1">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" name="name" placeholder="Enter your name" required />

            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" placeholder="Enter your email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label htmlFor="mobile">Mobile No:</label>
            <input id="mobile" type="tel" name="mobile" placeholder="Enter your mobile number" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting}>Send <IoSend /></button>
          </form>
        </div>

        <div className="form2">
          <div className="profile">
            <CgProfile />
            <p>:- SANNI KUMAR GUPTA</p>
          </div>
          <div className="mobile">
            <IoCall />
            <p>:- 8579037260</p>
          </div>
          <div className="email">
            <MdEmail />
            <p>:- sannikumargupta43@gmail.com</p>
          </div>
          <div className="location">
            <FaLocationArrow />
            <p>:- Muzaffarpur, Bihar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
