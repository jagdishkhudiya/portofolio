import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#intro'> Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#portofolio'> protofolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#works'>Certificate</a>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <a href='#testimonial'> testimonial</a>
        </li> */}
        <li onClick={() => setMenuOpen(false)}>
          <a href='#contact'> contact</a>
        </li>
      </ul>
    </div>
  );
}
