import axios from "axios";
import "./Dinner.scss";
import { useEffect, useState } from "react";

function Dinner() {
  const [caption, setCaption] = useState("");

  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/recipes`).then(({ data }) => {
      setRecipes(data);
      console.log(data);
    });
  }, []);

  if (!recipes) {
    return <div>loading...</div>;
  }

  return (
    <div className="gallery">
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id} className="gallery__frame">
            <iframe
              src={`${recipe.link}embed/captioned`}
              className="gallery__frame-content"
            ></iframe>
            <div className="gallery__frame-button">
              <button
                onClick={() => {
                  axios
                    .post(`${process.env.REACT_APP_API_URL}/favourites`, {
                      id: recipe.id,
                    })
                    .then(({ data }) => {
                      console.log(data);
                      alert("Recipe added to favourites!");
                    })
                    .catch((error) => {
                      if (error.response && error.response.status === 400) {
                        alert("Recipe already added to favourites");
                      } else {
                        console.log(error);
                      }
                    });
                }}
                className="gallery__frame-button-content"
              >
                KEEP
              </button>
            </div>
          </div>
        );
      })}
      {caption && <pre>{caption}</pre>}
    </div>
  );
}

export default Dinner;
