import React, { useEffect } from 'react';
import "../css/Home.css";
import myPic from "../images/My pic.jpg";
import Resume from "../ResumeInPDF/Resume-Nawaz Danish.pdf";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words: ["React Developer", "Frontend Developer"],
    loop: 0
  });

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[]);
    
  return (
    <div id='home'>
         <div data-aos="fade-up" className="container text-center mt-md-5 mt-sm-5 mt-3 mb-md-5 mb-sm-5 mb-3">
          <div className="row">
            <div className="col-md-6">
              <img loading="lazy" id='profileImg' src={myPic} alt="myPic" />
            </div>
            <div style={{textAlign: "justify"}} className="col-md-6 mt-md-2 mt-sm-2">
              <h3 className="mt-md-5 mt-sm-5">Hi! I'm <span>Nawaz Danish</span></h3>
              <h2 className="mt-md-2 mt-sm-2 text-success">
                {text}
                <Cursor cursorColor="red" />
              </h2>
              <p className="mt-md-2 mt-sm-2">I am a React Developer with hands-on experience in identifying web-based user interactions along with highly responsive user interface components by deploying react concepts and writing code via Javascript and React.js workflows. Monitoring and maintaining frontend performance.</p>
            </div>
          </div>

          <div class="row mt-md-5 mt-5">
            <div className="col-md-6 mb-3">
              <a href="https://github.com/nawazdanish1996" target="blank"><i className="fa-brands fa-square-github"></i></a>
              <a href="https://www.linkedin.com/in/nawazdanish/" target="blank"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://twitter.com/nawazdanish1996" target="blank"><i className="fa-brands fa-square-twitter"></i></a>
              <a href="https://www.facebook.com/developerHost/" target="blank"><i className="fa-brands fa-square-facebook"></i></a>
            </div>
            <div className="col-md-6 mb-2">
              <a id="resume" href={Resume} target="blank">Get Resume<i class="fa-solid fa-download"></i></a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home