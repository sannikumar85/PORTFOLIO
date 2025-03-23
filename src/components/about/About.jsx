import React from 'react'
import './About.css'
import Image from './Image'
import pro from './sanni-pro.jpg'
import { FaDownload } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiAdobephotoshop } from "react-icons/si";
import maa from './maa.avif'
import ten from './ten.jpg'
import twelve from './twelve.jpg'
import cricket from './cricket.jpg'
const About = () => {
  return (
    <>
      <div className="about">
        <h1>ABOUT <span>ME</span></h1>
    
      </div>

      <div className="main">
        <div className="main-left">

          <img src={pro} alt="" />
        </div>
        <div className="main-right">
          <h2>SANNI KUMAR GUPTA</h2>
          <h4 id='pi'>A MERN-STACK DEVELOPER</h4>
          <p>
            My name is Sanni Kumar Gupta. I am pursuing a B.Tech in Computer Science and Engineering.
            I am a passionate full-stack MERN developer. I have experience in building web applications using
            React, Node.js, Express, and MongoDB. I am currently learning Data Structures and Algorithms in Java.
            I enjoy solving coding problems and optimizing performance. I have a strong interest in backend
            development and database management. I am also skilled in front-end technologies like HTML, CSS,
            and JavaScript. I love exploring new technologies and improving my coding skills. My goal is to become
            a proficient software developer and work on innovative projects. 🚀
          </p>
          <div className="h3">
            <h3><span>Name:</span> Sanni kumar gupta</h3>
            <h3><span>Phone:</span>+91 8579037260</h3>
            <h3><span>Email:</span>sannikumargupta43@gmail.com</h3>
            <h3><span>Address:</span>Muzaffarpur, Bihar, India</h3>
            <button><a href="https://drive.google.com/file/d/1JJhZf4gy3hqgKWs_6X5lmLZsh3AN-VvW/view?usp=sharing" download> RESUME <FaDownload /></a></button>
          </div>

        </div>
      </div>

      <h1 className='so'>My <span>Skill</span> </h1> <hr />
      
      
      <div className="skill">
        <div className="skill-left">
          <div className="lang ">
            <p className='p1'>Languge:</p>
            <div className="icon">
              <div className="icon1 no"><FaJava /></div>
              <div className="icon2 no"><FaPython /></div>
              <div className="icon3 no"><FaHtml5 /></div>
              <div className="icon4 no"><FaCss3 /></div>
              <div className="icon5 no"><IoLogoJavascript /></div>

            </div>

          </div>

          <div className="framework">
            <p className='p1'>Framework:</p>
            <div className="fr">
              <div className="fr1 no"><FaReact /></div>
              <div className="fr2 no"><RiTailwindCssFill /></div>
              <div className="fr3 no"><SiExpress /></div>
              <div className="fr4 no"><FaNodeJs /></div>
              <div className="fr5 no"><FaBootstrap /></div>
            </div>
          </div>

          <div className="tool">
            <p className='p1'>Required Tool:</p>

            <div className="t">
              <div className="t1 no"><DiMongodb /></div>
              <div className="t2 no"><DiMysql /></div>
              <div className="t3 no"><FaGithub /></div>
              <div className="t4 no"><VscVscode /></div>
              <div className="t5 no"><SiAdobephotoshop /></div>
            </div>

          </div>
        </div>


        <div className="skill-right">
        <div className="imgge">
        <Image/>
        </div>
        </div>
      </div>

      <div className="q">
        <h1>My Qualification</h1>
        <hr />
      </div>

      <div className="marks">
        <div className="basic left btn">
          <div className="bas-img ">
            <img src={maa} alt="" />
          </div>
          <div className="bas-p">
          I completed my schooling from RSS Saraswati Shishu Mandir, studying from class 1 to 10. The school provided me with a strong foundation in academics, discipline, and moral values. 
          </div>
        </div>


        <div className="basic right">
          <div className="bas-img">
            <img src={ten} alt="" />
          </div>
          <div className="bas-p">
          I completed my 10th from Bihar Board with 88%. I worked hard to achieve a strong academic score. This milestone helped build my educational foundation.
          </div>
        </div>

        <div className="basic left btn ">
          <div className="bas-img">
            <img src={twelve} alt="" />
          </div>
          <div className="bas-p">
          I completed my 12th from Bihar Board (ISC) with 80%. I focused on academics and worked hard to achieve this score. This helped me build a strong base for my higher studies.
          </div>
        </div>

        <div className="basic right">
          <div className="bas-img">
            <img src={cricket} alt="" />
          </div>
          <div className="bas-p">
          I am passionate about sports and actively play cricket, kabaddi, kho-kho, football, volleyball, and badminton. Engaging in multiple sports keeps me physically fit and enhances my teamwork and strategy skills.
          </div>
        </div>
      </div>
    </>
  )
}

export default About






        

        
