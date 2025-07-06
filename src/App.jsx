import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  return (
    <div className="the-site">
      <div className="heading-text">
        <div className="heading-test">
          <h2>Your Instant AI Financial Assistant on WhatsApp</h2>
          <p>
            Effortlessly manage your money on WhatsApp with Swifta secure,
            instant, and always ready to help you make smarter financial
            decisions anytime, anywhere. Get early access and exclusive benefits
            when you join our waitlist.
          </p>
        </div>

        <div className="form-container">
          <div className="formm">
            <input placeholder="Your email" type="email" />

            <button>Join waiting list</button>
          </div>
        </div>
      </div>
      <div className="phone-area">
        <div className="phonee">
          <img src="/src/images/phone.png" alt="" />
          <div className="first">
            <img src="/src/images/001.png" alt="" />
          </div>
          <div className="arrow-01">
            <img src="/src/images/Arrow_03.png" alt="" />
          </div>
          <div className="frame">
            <img src="/src/images/Frame 600.png" alt="" />
          </div>
          <div className="arrow-11">
            <img src="/src/images/Arrow_11.png" alt="" />
          </div>
          <div className="frame2">
            <img src="/src/images/Frame 602.png" alt="" />
          </div>
        </div>
      </div>

      <div className="send-money">
        <h4>Send money to any account </h4>
        <div className="send-image">
          <div className="bank">
            <img src="/src/images/Rectangle 1.png" alt="" />
          </div>
          <div className="bank">
            <img src="/src/images/Rectangle 2.png" alt="" />
          </div>
          <div className="bank">
            <img src="/src/images/Rectangle 3 (2).png" alt="" />
          </div>
          <div className="bank">
            <img src="/src/images/Rectangle 4.png" alt="" />
          </div>
          <div className="bank">
            <img src="/src/images/Rectangle 5.png" alt="" />
          </div>
          <div className="bank">
            <img src="/src/images/Rectangle 2 (1).png" alt="" />
          </div>
          <div className="bank">
            <img src="/src/images/Rectangle 3 (3).png" alt="" />
          </div>
          <div className="bank">
            <img src="/src/images/Rectangle 4 (1).png" alt="" />
          </div>
          <div className="bank">
            <img src="/src/images/Rectangle 5 (1).png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
