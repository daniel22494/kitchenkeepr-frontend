import { useEffect, useState } from "react";
import axios from "axios";
import "./Favourites.scss";
import { Link } from "react-router-dom";

function Favourites() {
  const [favs, setFavs] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/favourites`).then(({ data }) => {
      setFavs(data);
      console.log(data);
    });
  }, [recipes]);

  if (!favs) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>Favourites</h1>
      <ul>
        {favs.map((fav) => {
          return (
            <Link to={`/recipes/${fav.recipe_id}`}>
              <p key={fav.id}>{fav.title}</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Favourites;
