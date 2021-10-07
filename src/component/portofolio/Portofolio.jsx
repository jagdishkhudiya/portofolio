import { useEffect, useState } from "react";
import PortofolioList from "../portofoliolist/PortofolioList";
import "./Portofolio.scss";
import {
  featuredPortofolio,
  virtualReality,
  Ecomerce,
  webBranding,
} from "../../data";

export default function Portofolio() {
  // DYNAMIC DATA useEffect Hook, data di src data.js
  const [selected, setSelected] = useState("virtual reality");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "virtual reality",
      title: "Virtual Reality",
    },
    {
      id: "e-commerce",
      title: "E-commerce",
    },
    {
      id: "web branding",
      title: "Web Branding",
    },
  ];

  // DYNAMIC DATA useEffect Hook, data di src data.js
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortofolio);
        break;
      case "virtual reality":
        setData(virtualReality);
        break;
      case "e-commerce":
        setData(Ecomerce);
        break;
      case "web branding":
        setData(webBranding);
        break;
      default:
        break;
    }
  }, [selected]);

  return (
    <div className='portofolio' id='portofolio'>
      <h1>Portofolio</h1>
      <ul>
        {list.map((item) => (
          <PortofolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className='container'>
        {data.map((d) => (
          <div className='item'>
            <img src={d.img} alt='' />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
