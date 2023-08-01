import "./Header.scss";
import Pot from "../../assets/icons/download.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-box">
        <Link to="/">
          <div className="header-box__logo">
            <img src={Pot} alt="" className="header-box__logo-icon" />
            <h3 className="header-box__logo-text">KitchenKeepr</h3>
          </div>
        </Link>
        {/* <div className="header-box__logo">
          <img src={Pot} alt="" className="header-box__logo-icon" />
          <h3 className="header-box__logo-text">KitchenKeepr</h3>
        </div> */}
        <div className="header-box__user">
          <p className="header-box__user-name">Barbara B.</p>
          <div className="header-box__user-picture"></div>
        </div>
      </div>
      <div className="header__actions">
        <Link to="/recipes">
          <p className="header__actions-nav">All Recipes</p>
        </Link>
        <Link to="/categories">
          <p className="header__actions-nav">Categories</p>
        </Link>
        <Link to="/favourites">
          <p className="header__actions-nav">Favourites</p>
        </Link>
        <Link to="/ingredient-replacer">
          <p className="header__actions-nav">Ingredient Replacer</p>
        </Link>
        <Link to="/about">
          <p className="header__actions-nav">About</p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
