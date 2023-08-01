import "./Homepage.scss";
import Chef from "../../assets/images/chef-cooking.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <section className="hero">
      <div className="hero__text">
        <h3 className="hero__text-title">Enjoy Cooking at Home!</h3>
        <p>
          Browser through our catalogue of Instagram recipes and save them so
          you can cook them with ease.
        </p>
        <p>
          Our sourced recipes will be alternate by bi-weekly but your favourites
          will stay safe in your folder
        </p>
        <p>
          To get started, just click on the keep button below the recipe of your
          choice and it will be stored in your favourites for you to access any
          time
        </p>
        <div className="actions">
          <Link to="/recipes">
            <button className="actions_button">Get Started</button>
          </Link>
          <Link to="/ingredient-replacer">
            <button className="actions_button">Replace Ingredient</button>
          </Link>
        </div>
      </div>
      <div className="hero__img">
        <img src={Chef} alt="Image of a chef" className="hero__img-content" />
      </div>
    </section>
  );
}

export default Homepage;
