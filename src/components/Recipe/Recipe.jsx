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
    });
  }, []);

  if (!recipeCard) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>One Recipe</h1>
      <ul>{recipeCard.title}</ul>
    </div>
  );
}

export default Recipe;
