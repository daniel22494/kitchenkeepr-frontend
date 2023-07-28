import axios from "axios";
import "./Dinner.scss";
import { useEffect, useState } from "react";

function Dinner() {
  const [caption, setCaption] = useState("");

  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/recipes`).then(({ data }) => {
      // setCaption(data.caption);
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
                    .get(`http://localhost:8080/?url=${recipe.link}`)
                    .then(({ data }) => {
                      setCaption(data.caption);
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
