import React from 'react'
import './Home.css'

import bg from './sanni3.jpg'
import Home3 from '../Project/Home3'
import Home2 from './Home2'
import Form from '../form/Form'

const Home = () => {
  return (
    <>
      <div className="main">

        <div className="main-text">
          <h1>I'm SANNI <span>GUPTA</span></h1>
          {/* <p>This is my official  portfolio website  to  show all  <br />
            Details and work experience of web development</p> */}
          <button className="btn"><a download href=""> ABOUT  ME</a></button>
          <button className="btn"><a download href=""> DOWNLOAD CV</a></button>
        </div>

        <div className="main-image ">
          
        <img src={bg} alt="" />
        </div>

      </div>
      <Home2 />

      <Home3 />
      <Form />





    </>
  )
}

export default Home
