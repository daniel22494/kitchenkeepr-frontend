import "./Header.scss";
import Pot from "../../assets/icons/download.svg";

function Header() {
  return (
    <header className="header">
      <div className="header-box">
        <div className="header-box__logo">
          <img src={Pot} alt="" className="header-box__logo-icon" />
          <h3 className="header-box__logo-text">KitchenKeepr</h3>
        </div>
        <div className="header-box__user">
          <p className="header-box__user-name">Barbara B</p>
          <div className="header-box__user-picture"></div>
        </div>
      </div>
      <div className="header__actions">
        <p className="header__actions-nav">All Recipes</p>
        <p className="header__actions-nav">Categories</p>
        <p className="header__actions-nav">Favourites</p>
        <p className="header__actions-nav">Ingredient Replacer</p>
        <p className="header__actions-nav">About</p>
      </div>
    </header>
  );
}

export default Header;
