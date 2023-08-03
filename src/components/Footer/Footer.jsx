import "./Footer.scss";
import Download from "../../assets/images/download.png";
import Facebook from "../../assets/icons/facebook.png";
import Github from "../../assets/icons/github.png";
import Linkedin from "../../assets/icons/linkedin.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <div className="download">
        <h4 className="download__title">Download the app:</h4>
        <a href="https://github.com/daniel22494">
          <img
            src={Download}
            alt="Download app icons"
            className="download__content"
          />
        </a>
      </div>
      <div className="company">
        <h4 className="company__title">Company</h4>
        <p className="company__text">Other Products</p>
        <p className="company__text">FAQs</p>
        <p className="company__text">Terms of Service</p>
      </div>
      <div className="links">
        <h4 className="links__title">Contact</h4>
        <Link to="/about">
          <p className="link__about">About</p>
        </Link>
        <a className="link__email" href="mailto:daniel.umanamartinez@gmail.com">
          <p className="link__email-content">daniel.umanamartinez@gmail.com</p>
        </a>
        <div className="links__icons">
          <img
            src={Facebook}
            alt="Facebook Icon"
            className="links__icons-content"
          />
          <a href="https://github.com/daniel22494">
            <img
              src={Github}
              alt="Linkedin Icon"
              className="links__icons-content"
            />
          </a>
          <a href="https://www.linkedin.com/in/daniel-umanamartinez/">
            <img
              src={Linkedin}
              alt="GitHub Icon"
              className="links__icons-content"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
