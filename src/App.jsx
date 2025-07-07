import "./App.css";

export default function App() {
  return (
    <div className="the-site">
      <div className="heading-text">
        <div className="heading-test">
          <h2>Your Instant AI Financial Assistant on WhatsApp</h2>
          <p>
            Effortlessly manage your money on WhatsApp with Swifta — secure,
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
          <img src="/images/phone.png" alt="" />
          <div className="first">
            <img src="/images/001.png" alt="" />
          </div>
          <div className="arrow-01">
            <img src="/images/Arrow_03.png" alt="" />
          </div>
          <div className="frame">
            <img src="/images/Frame 600.png" alt="" />
          </div>
          <div className="arrow-11">
            <img src="/images/Arrow_11.png" alt="" />
          </div>
          <div className="frame2">
            <img src="/images/Frame 602.png" alt="" />
          </div>
        </div>
      </div>

      <div className="send-money">
        <h4>Send money to any account</h4>
        <div className="send-image">
          <div className="scroll-track">
            {[
              "Rectangle 1.png",
              "Rectangle 2.png",
              "Rectangle 3 (2).png",
              "Rectangle 4.png",
              "Rectangle 5.png",
              "Rectangle 2 (1).png",
              "Rectangle 3 (3).png",
              "Rectangle 4 (1).png",
              "Rectangle 5 (1).png",
            ]
              .concat([
                "Rectangle 1.png",
                "Rectangle 2.png",
                "Rectangle 3 (2).png",
                "Rectangle 4.png",
                "Rectangle 5.png",
              ])
              .map((src, idx) => (
                <div className="bank" key={idx}>
                  <img src={`/images/${src}`} alt="" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
