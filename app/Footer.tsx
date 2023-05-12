export default function Footer() {
  const mobileNum = process.env.CONTACT_NO;
  return (
    <section id="contact">
      <div className="footer">
        <div className="main">
          <div className="list">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">About us</a>
              </li>
              <li>
                <a href="#home">Terms & Conditions</a>
              </li>
              <li>
                <a href="#home">Privacy Policy</a>
              </li>
              <li>
                <a href="#home">Help</a>
              </li>
              <li>
                <a href="#home">Tour</a>
              </li>
            </ul>
          </div>

          <div className="list">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <a href="#home">Athviha Tours</a>
              </li>
              <li>
                <a href="#home">Talawakelle, Sri Lanka</a>
              </li>
              <li>
                <a href={"tel:" + { mobileNum }}>{mobileNum}</a>
              </li>
              <li>
                <a href="mailto:athvihatours@gmail.com">
                  athvihatours@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/athvihatourslk"
                  target="_blank"
                >
                  www.facebookcom/athvihatourslk
                </a>
              </li>
            </ul>
          </div>

          <div className="list">
            <h4>Connect</h4>
            <div className="social">
              <a href="https://www.facebook.com/athvihatourslk" target="_blank">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://www.instagram.com/athvihatours/" target="_blank">
                <i className="bx bxl-instagram-alt"></i>
              </a>
              <a href="https://www.facebook.com/athvihatourslk" target="_blank">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="https://www.instagram.com/athvihatours/" target="_blank">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="end-text ">
        <p>
          Copyright @2022 All rights reserved | Made with{" "}
          <i className="bx bxs-heart" style={{ color: "red" }}></i> by{" "}
          <a href="https://www.facebook.com/iAbu94/" target="_blank">
            Abdullah Mansoor
          </a>
        </p>
      </div>
    </section>
  );
}
