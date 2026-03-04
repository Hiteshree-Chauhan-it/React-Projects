import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileImage from "./components/ProfileImage"
import NameTitle from "./components/NameTitle";
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";
import Skills from "./components/Skills";


function App() {
  return (
  <div className="card">
    <ProfileImage></ProfileImage>
    <NameTitle name="Hiteshree" title="Frontend Developer"></NameTitle>
    <ContactInfo email="hiteshreechauhanit@gmail.com"></ContactInfo>
    <Education></Education>
    <Skills></Skills>
  </div>

  );
}

export default App;
