import './App.css';
import React, {useEffect, useState} from "react";
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import About from "./components/About";
import Home from './components/Home';
import { HashLoader } from "react-spinners";
import NavBars from './components/NavBars';
import RedirectButton from './components/RedirectButton';

function App() {
  let [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div>
      {
        loading ?
        <div id='loader'>
          <HashLoader color={"black"} loading={loading} size={70} />
        </div>
      :
        <div className="App">
          <NavBars />
          <Home />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
          <RedirectButton />
        </div>
      }
    </div>
  );
}

export default App;
