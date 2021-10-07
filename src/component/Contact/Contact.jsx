import "./Contact.scss";
import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='assets/ContactMe.svg' />
      </div>
      <div className='right'>
        <h2>Contact Me Below</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Your name mail...' />
          <textarea
            name=''
            placeholder='Give Me Some Good News :) :)'
            id=''
            cols='30'
            rows='10'
          ></textarea>
          <button type='submit'>Send Me Email </button>
          {message && <span>Thanks, I'll reply As Soon As Possible :)</span>}
        </form>
      </div>
    </div>
  );
}
