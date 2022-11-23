import "../css/Portfoli.css";
import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

function Portfolio() {

    useEffect(()=>{
        Aos.init({duration: 2000});
      },[])

  return (
    <div id="portfolio">
        <div className="container" data-aos="fade-left">
            <div className="row">
                <div className="col-md-12 mt-3">
                    <h3 className='text-uppercase text-primary text-decoration-underline'>My Projects</h3>
                    <p>Here are some project i build during learning journey.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 col-lg-3 col-sm-6 text-center">
                    <div className="proj pt-5 pb-5 mt-3">
                        <h4 className="mt-3 text-primary">University Website</h4>
                        <a href="https://nawazdanish1996.github.io/HTML-CSS-Project---HTML-CSS-Mini-Project---hmvp5eqhxlv0/" target="blank">
                            <i class="fab fa-github mt-4"></i>
                        </a>
                    </div>
                </div>

                <div className="col-md-3 col-lg-3 col-sm-6 text-center">
                    <div className="proj pt-5 pb-5 mt-3">
                        <h4 className="mt-3 text-primary">TV Maze</h4>
                        <a href="https://fabulous-selkie-de609f.netlify.app/" target="blank">
                            <i class="fab fa-github mt-4"></i>
                        </a>
                    </div>
                </div>

                <div className="col-md-3 col-lg-3 col-sm-6 text-center">
                    <div className="proj pt-5 pb-5 mb-md-5 mt-3">
                        <h4 className="mt-3 text-primary">eCom Website</h4>
                        <a href="https://nawazdanish1996.github.io/JS-Mini-Project/" target="blank">
                            <i class="fab fa-github mt-4"></i>
                        </a>
                    </div>
                </div>

                <div className="col-md-3 col-lg-3 col-sm-6 text-center">
                    <div className="proj pt-5 pb-5 mb-md-5 mt-3">
                        <h4 className="mt-3 text-primary">Increment Decrement App</h4>
                        <a href="https://nawazdanish1996.github.io/counter-using-React/" target="blank">
                            <i class="fab fa-github mt-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio;