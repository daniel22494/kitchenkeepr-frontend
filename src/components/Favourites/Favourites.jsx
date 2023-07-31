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
    <section className="favourites">
      <div className="favourites__title">
        <h1 className="favourites__title-content">Favourites!</h1>
      </div>
      <ul>
        {favs.map((fav) => {
          return (
            <Link to={`/recipes/${fav.recipe_id}`}>
              <div className="favourites__recipe">
                <p className="favourites__recipe-content" key={fav.id}>
                  {fav.title}
                </p>
              </div>
            </Link>
          );
        })}
      </ul>
    </section>
  );
}

export default Favourites;
