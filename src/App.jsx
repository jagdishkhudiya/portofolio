import Topbar from "./component/topbar/Topbar";
import Menu from "./component/menu/Menu";
import Intro from "./component/intro/Intro";
import Portofolio from "./component/portofolio/Portofolio";
import Works from "./component/Works/Works";
import Testimonials from "./component/Testimonial/Testimonial";
import Contact from "./component/Contact/Contact";
import "./App.scss";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: "ease-in-out",
      delay: 200,
    });
    AOS.refresh();
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections'>
        <Intro />
        <Portofolio />
        <Works />
        {/* <Testimonials /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
