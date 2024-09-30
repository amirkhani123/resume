"use client";
import { Fade } from "react-awesome-reveal";
import AboutMe from "../modules/AboutMe";
import Profile from "../modules/Profile";
import Projects from "../modules/Projects";
import Skills from "../modules/Skills";

function HomePage() {
  return (
    <div className="dark:text-second font-vazir">
      <Fade>
        <Profile />
        <AboutMe />
        <Skills />
        <Projects />
      </Fade>
    </div>
  );
}

export default HomePage;
