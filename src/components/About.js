import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import "../css/About.css";
import images from "./Images.json";


function About() {
    useEffect(()=>{
        Aos.init({duration: 2000});
      },[])

  return (
    <div id='about'>
        <div className="container mt-3">
            <div className="row" data-aos="fade-right">
                <div className="col-md-12 text-center text-justify">
                    <h3 className='text-uppercase text-primary text-decoration-underline'>About Me</h3>
                    <p>&nbsp; &nbsp; &nbsp; I am Nawaz Danish from West Bengal district of North Dinajpur, I am a React Developer with hands-on experience in identifying web-based user interactions along with highly responsive user interface components by deploying react concepts and writing code via JavaScript and React.js workflows. Monitoring and maintaining frontend performance.</p>
                    <p>&nbsp; &nbsp; &nbsp; I always want to learn how to code and how to build a website how thins works behind the scenes. Then i join the newton school to begain my journy as a developer. As such my personal profile, I am a hard working and sincere person and always preferred with technical from different new enter Software.</p>
                </div>
            </div>

            <div className="row" data-aos="fade-right">
                <div className="col-md-4">
                    <div id='box'>
                        <h4 id='boxNo'>4</h4>
                        <h4>Project Completed</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div id='box'>
                        <h4 id='boxNo'>Fresher</h4>
                        <h4>No Experience</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div id='box'>
                        <h4 id='boxNo'>0</h4>
                        <h4>Clients</h4>
                    </div>
                </div>
            </div>

            <div class="main" data-aos="fade-right">
                    <h3 className='mt-2 text-uppercase text-primary text-decoration-underline'>My Skills</h3>
                <ul class="cards">
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image">
                                {
                                    images.map((val, ind)=>{
                                        return(
                                            <img id='imgCard' className='card-img-top ms-5 pt-2 pb-2' style={{width: "40px", margin: "0 auto"}} src={val.icon} alt="Skill icons" />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About