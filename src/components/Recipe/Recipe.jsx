import { useEffect, useState } from "react";
import axios from "axios";
import "./Recipe.scss";
import { useParams } from "react-router-dom";

function Recipe() {
  const [recipeCard, setRecipeCard] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/recipes/${id}`).then(({ data }) => {
      setRecipeCard(data);
      console.log(data);
      return data;
    });
  }, []);

  if (!recipeCard) {
    return <div>loading...</div>;
  }

  return (
    <section className="recipe-container">
      <div className="card">
        <div className="card__title">
          <h4 className="card__title-content">{recipeCard.title}</h4>
        </div>
        <div className="card__text">
          <h5 className="card__text-author">Authour: {recipeCard.author}</h5>
          <p className="card__text-caption">
            <pre>{recipeCard.caption}</pre>
          </p>
        </div>
        <div className="card__iframe">
          <iframe
            src={`${recipeCard.link}embed/captioned`}
            className="card__iframe-content"
          ></iframe>
          <h4 className="card__iframe-src">source: {recipeCard.link}</h4>
        </div>
        {/* <div className="card__src">
          <h4 className="card__src-content">source: {recipeCard.link}</h4>
        </div> */}
      </div>
    </section>
  );
}

export default Recipe;
