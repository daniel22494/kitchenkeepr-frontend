import axios from "axios";
import "./Dinner.scss";
import { useEffect, useState } from "react";

const dinner1 = "https://www.instagram.com/reel/CjNyrK-KpFy";

const dinner2 = "https://www.instagram.com/reel/CjG3cefrx6n";

const dinner3 = "https://www.instagram.com/reel/CjBFITDAcqz";

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
    <div>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <iframe src={`${recipe.link}embed/captioned`}></iframe>
            <button
              onClick={() => {
                axios
                  .get(`http://localhost:8080/?url=${recipe.link}`)
                  .then(({ data }) => {
                    setCaption(data.caption);
                  });
              }}
            >
              KEEP
            </button>
          </div>
        );
      })}
      {caption && <pre>{caption}</pre>}
    </div>
  );

  return (
    <div className="App">
      <div
        className="wrapper"
        // onClick={() => {
        //   axios.get(`http://localhost:8080/?url=${reel}`).then(({ data }) => {
        //     setCaption(data.caption);
        //   });
        // }}
      >
        {/* <div className="overlay"></div> */}
        <iframe src={`${dinner1}/embed/captioned`}></iframe>
        <button
          onClick={() => {
            axios
              .get(`http://localhost:8080/?url=${dinner1}`)
              .then(({ data }) => {
                setCaption(data.caption);
              });
          }}
        >
          KEEP
        </button>
      </div>
      <div>
        <iframe src={`${dinner2}/embed/captioned`}></iframe>
        <button
          onClick={() => {
            axios
              .get(`http://localhost:8080/?url=${dinner2}`)
              .then(({ data }) => {
                setCaption(data.caption);
              });
          }}
        >
          KEEP
        </button>
      </div>
      <div>
        <iframe src={`${dinner3}/embed/captioned`}></iframe>
        <button
          onClick={() => {
            axios
              .get(`http://localhost:8080/?url=${dinner3}`)
              .then(({ data }) => {
                setCaption(data.caption);
              });
          }}
        >
          KEEP
        </button>
      </div>
      {caption && <pre>{caption}</pre>}
    </div>
  );
}

export default Dinner;
