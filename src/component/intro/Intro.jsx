import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Front-End Developer", " With React.js"],
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div data-aos='fade-right' className='imageContainer'>
          <img src='./assets/foto.jpeg' alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2 data-aos='fade-left'>Hi There, I'm</h2>
          <h1 data-aos='fade-left'>Jagdish Kumawat</h1>
          <h3 data-aos='fade-left'>
            Sr. <span ref={textRef}></span>
          </h3>
        </div>
        <a href='#portofolio'>
          <img src='assets/down.png' alt='' />
        </a>
      </div>
    </div>
  );
}
