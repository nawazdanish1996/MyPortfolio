import "../css/Portfoli.css";
import React, {useEffect, useState} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import ProjectImg from "../images/Projects.jpg";

function Portfolio() {
    var classes = {
        active: "proj mb-md-5 mt-2",
        deactivate: "projDeactivate mb-md-5 mt-2",
        ishow : "fab fa-github mt-4",
        ideactivate: "",
    }

    const [show, setShow] = useState(classes.active);
    const [iconShow, setIconHide] = useState(classes.ideactivate);


    const Show = () =>{
        if(show === classes.active){
            setShow(classes.deactivate)
            setIconHide(classes.ishow);
        }else if(classes.deactivate){
            setShow(classes.active);
            setIconHide(classes.ideactivate);
        }
    }

    useEffect(()=>{
        Aos.init({duration: 2000});
      },[])

  return (
    <div id="portfolio">
        <div className="container" data-aos="fade-up">
            <div className="row">
                <div className="col-md-12 mt-3">
                    <h3 className='text-uppercase text-primary text-decoration-underline'>My Projects</h3>
                    <p>Here are some project i build during learning journey.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 col-lg-3 col-sm-6 text-center mb-sm-5 mb-5">
                    <h5 className="mt-3 text-primary">University Website</h5>
                    <div onClick={Show} className={show}>
                        <img src={ProjectImg} alt="Projec4" />
                        <a href="https://nawazdanish1996.github.io/HTML-CSS-Project---HTML-CSS-Mini-Project---hmvp5eqhxlv0/" target="blank">
                            <i class={iconShow}></i>
                        </a>
                    </div>
                </div>

                <div className="col-md-3 col-lg-3 col-sm-6 text-center mb-sm-5 mb-5">
                    <h5 className="mt-3 text-primary">TV Maze</h5>
                    <div onClick={Show} className={show}>
                        <img src={ProjectImg} alt="Projec4" />
                        <a href="https://fabulous-selkie-de609f.netlify.app/" target="blank">
                            <i class={iconShow}></i>
                        </a>
                    </div>
                </div>

                <div className="col-md-3 col-lg-3 col-sm-6 text-center mb-sm-5 mb-5">
                    <h5 className="mt-3 text-primary">eCom Website</h5>
                    <div onClick={Show} className={show}>
                        <img src={ProjectImg} alt="Projec4" />
                        <a href="https://nawazdanish1996.github.io/JS-Mini-Project/" target="blank">
                            <i class={iconShow}></i>
                        </a>
                    </div>
                </div>

                <div className="col-md-3 col-lg-3 col-sm-6 text-center mb-sm-5 mb-5">
                    <h5 className="mt-3 text-primary">Inc. & Dec. App</h5>
                    <div onClick={Show} className={show}>
                        <img src={ProjectImg} alt="Projec4" />
                        <a href="https://nawazdanish1996.github.io/counter-using-React/" target="blank">
                            <i class={iconShow}></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio;