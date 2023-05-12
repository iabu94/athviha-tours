export default function Footer() {
  const name = process.env.NAME;
  const address = process.env.ADDRESS;
  const email = `mailto:${process.env.EMAIL}`;
  const emailTitle = process.env.EMAIL;
  const fbLink = process.env.FB_LINK;
  const fbTitle = process.env.FB_TITLE;
  const instaLink = process.env.INSTA_LINK;
  const twitterLink = process.env.TWITTER_LINK;
  const linkedinLink = process.env.LINKEDIN_LINK;
  const contactNo = `tel:${process.env.CONTACT_NO}`;
  const contactNoTitle = process.env.CONTACT_NO_TITLE;

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
                <a href="#home">{name}</a>
              </li>
              <li>
                <a href="#home">{address}</a>
              </li>
              <li>
                <a href={contactNo}>{contactNoTitle}</a>
              </li>
              <li>
                <a href={email}>{emailTitle}</a>
              </li>
              <li>
                <a href={fbLink} target="_blank">
                  {fbTitle}
                </a>
              </li>
            </ul>
          </div>

          <div className="list">
            <h4>Connect</h4>
            <div className="social">
              <a href={fbLink} target="_blank">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href={instaLink} target="_blank">
                <i className="bx bxl-instagram-alt"></i>
              </a>
              <a href={twitterLink} target="_blank">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href={linkedinLink} target="_blank">
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
