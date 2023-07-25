import axios from "axios";
import "./RecipeNav.scss";
import { useState } from "react";

const reel = "https://www.instagram.com/reel/CjxmT0oJkJH";

function RecipeNav() {
  const [caption, setCaption] = useState("");
  return (
    <div className="App">
      <div
        className="wrapper"
        onClick={() => {
          axios.get(`http://localhost:8080/?url=${reel}`).then(({ data }) => {
            setCaption(data.caption);
          });
        }}
      >
        <div className="overlay"></div>
        <iframe src={`${reel}/embed/captioned`}></iframe>
      </div>
      {caption && <pre>{caption}</pre>}
    </div>
  );
}

export default RecipeNav;