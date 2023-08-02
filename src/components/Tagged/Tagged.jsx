import { useEffect, useState } from "react";
import axios from "axios";
import "./Tagged.scss";

function Tags() {
  const [tags, setTags] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/tags`).then(({ data }) => {
      setTags(data);
      console.log(data);
    });
  }, [recipes]);

  if (!tags) {
    return <div>loading...</div>;
  }

  return (
    <div className="sort">
      <h1 className="sort__title">Choose a Category:</h1>
      <div className="sort__tags">
        {tags.map((tag) => {
          return (
            <p
              className="sort__tags-item"
              key={tag.id}
              onClick={() => {
                console.log(tag.id);
                axios
                  .get(`http://localhost:8080/taggedRecipes?tag_id=${tag.id}`)
                  .then(({ data }) => {
                    console.log(data);
                    setRecipes(data);
                  });
              }}
            >
              {tag.tag}
            </p>
          );
        })}
      </div>

      <div className="gallery">
        {/* {recipes &&
          recipes.map((recipe) => {
            return (
              <div key={recipe.id} className="gallery__frame">
                <iframe
                  src={`${recipe.link}embed/captioned`}
                  className="gallery__frame-content"
                ></iframe>
                <div className="gallery__frame-button">
                  <button className="gallery__frame-button-content">
                    KEEP
                  </button>
                </div>
              </div>
            );
          })} */}
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className="gallery__frame">
              <iframe
                src={`${recipe.link}embed/captioned`}
                className="gallery__frame-content"
              ></iframe>
              <div className="gallery__frame-button">
                <button className="gallery__frame-button-content">KEEP</button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-categories"></div>
        )}
      </div>
    </div>
  );
}

export default Tags;
