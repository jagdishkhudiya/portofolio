import "./Works.scss";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      title: "Sertifikasi",
      desc: "Loresit amet consectetur adipism ipsum dolor, sit amet consectetur adipisicing elit. Dolore vitae mollitia ut deleniti qui recusandae explicabobeatae quis facere omnis, sit amet consectetur adipisicing elit. Dolore vitae mollitia ut deleniti  sit amet consectetur adipisicing elit. Dolore vitae mollitia ut deleniti similique magnam eligendi. Dolorumfacere praesentium repellendus dicta quo possimus",
      img: "assets/Contact.jpg",
    },
    {
      id: "2",
      title: "Seminar Digital",
      desc: "Lorem ipsum dosit amet consectetur adipislor, sit amet consectetur adipisicing elit. Dolore vitae mollitia ut deleniti  sit amet consectetur adipisicing elit. Dolore vitae mollitia ut deleniti qui recusandae explicabobeatae quis facere omnis, similique magnam eligendi. Dolorumfacere praesentium repellendus dicta  sit amet consectetur adipisicing elit. Dolore vitae mollitia ut deleniti quo possimus",
      img: "assets/Contact.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className='works' id='Wroks'>
      <div
        className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className='container'>
            <div className='item'>
              <div className='left'>
                <div className='leftContainer'>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className='right'>
                <img src={d.img} alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src='assets/arrow.png'
        className='arrow left'
        alt=''
        onClick={() => handleClick("left")}
      />
      <img
        src='assets/arrow.png'
        className='arrow right'
        alt=''
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
