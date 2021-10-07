import "./Topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div data-aos='fade-down' className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            JK.
          </a>
          <div className='itemcontainer'>
            <Person className='icon' />
            <span>+91 8209 6674 459 </span>
          </div>
          <div className='itemcontainer'>
            <Mail className='icon' />
            <span>jkhudiya@gmail.com</span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
}
