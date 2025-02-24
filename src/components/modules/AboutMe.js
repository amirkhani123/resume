"use client"
import { Fade } from "react-awesome-reveal";

function AboutMe() {
  return (
    <div id="about-me" className="mt-[85px]">
      <Fade direction="down" cascade  delay={1750} triggerOnce> 
      <h3 className="text-center text-2xl font-medium ">About Me</h3>
      <p className="text-center max-w-[1150px] mt-3 font-medium text-xl " >
        Hi, my name is Amir Mohammad Khani Farashah. I was born in 2005 in
        Tehran. Since childhood, I have been passionate about computers. For
        over a year, I have been learning front-end development with Mr. Milad
        Azami. I watch tutorials every day.
      </p>
      </Fade>
    </div>
  );
}

export default AboutMe;
