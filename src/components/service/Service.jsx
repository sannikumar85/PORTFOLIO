import React from 'react'
import './Service.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { SiPhp } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobelightroom } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiDavinciresolve } from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";
import { AiFillFilePpt } from "react-icons/ai";
const Home2 = () => {
    return (
        <>
            <div className="para">

                <h1>My <span> Service </span></h1>
            </div>
            <div className="top">
                <div className="box box1 btn">
                    <div className="logo1">

                        <FaHtml5 />
                        <FaCss3 />
                        <RiTailwindCssFill />
                        <FaJs />
                        <FaReact />
                        <FaBootstrap />
                    </div>
                    <div className="tag1">
                        <h1> Front End development</h1>
                        <p>I build fast, responsive web apps with React.js, delivering modern and scalable solutions. 🚀</p>
                    </div>
                </div>
                <div className="box box2 btn">
                    <div className="logo2">

                        <TbBrandJavascript />
                        <RiNodejsLine />
                        <SiExpress />
                        <DiMongodb />
                        <DiMysql />
                        <SiPhp />
                    </div>
                    <div className="tag2">
                        <h1>MERN Stack Developer</h1>
                        <p>I am a MERN Stack Developer, specializing in MongoDB, Express.js, React.js, and Node.js. 🚀</p>
                    </div>


                </div>
                <div className="box box3 btn">
                    <div className="logo3">
                        <SiAdobephotoshop />
                        <SiAdobelightroom />
                        <SiCanva />
                        <SiAdobepremierepro />
                        <SiDavinciresolve />
                        <FaFileExcel />
                        <AiFillFilePpt />
                    </div>
                    <div className="tag3">
                        <h1>Video & Photo Editing </h1>
                        <p>I deliver stunning video and photo edits with pro tools for a polished, creative look. 🎬📸🚀</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home2
