// import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/home/Home";
import Bot from "./components/bottom/Bot";
import Service from "./components/service/Service";
import About from "./components/about/About";
//import Form from "./components/form/Form";
import Contact from "./components/contact/Contact";
import Project from "./components/Project/Project";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/project" element={<Project/>} />
        </Routes>
        <Bot />
      </BrowserRouter>
    </>
  );
};

export default App;
