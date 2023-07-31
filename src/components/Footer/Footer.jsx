import "./Footer.scss";
import Download from "../../assets/images/download.png";
import Facebook from "../../assets/icons/facebook.png";
import Github from "../../assets/icons/github.png";
import Linkedin from "../../assets/icons/linkedin.png";

function Footer() {
  return (
    <section className="footer">
      <div className="download">
        <h4 className="download__title">Download the app:</h4>
        <img
          src={Download}
          alt="Download app icons"
          className="download__content"
        />
      </div>
      <div className="company">
        <h4 className="company__title">Company</h4>
        <p className="company__text">Other Products</p>
        <p className="company__text">FAQs</p>
        <p className="company__text">Terms of Service</p>
      </div>
      <div className="links">
        <h4 className="links__title">Contact</h4>
        <p className="link__about">About</p>
        <p className="link__email">daniel.umanamartinez@gmail.com</p>
        <div className="links__icons">
          <img
            src={Facebook}
            alt="Facebook Icon"
            className="links__icons-content"
          />
          <img
            src={Github}
            alt="Linkedin Icon"
            className="links__icons-content"
          />
          <img
            src={Linkedin}
            alt="GitHub Icon"
            className="links__icons-content"
          />
        </div>
      </div>
    </section>
  );
}

export default Footer;
