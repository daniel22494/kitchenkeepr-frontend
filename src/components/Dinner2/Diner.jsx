import axios from "axios";
import { useState } from "react";

function Diner() {
  //   const [caption, setCaption] = useState("");
  const [recipeArray, setRecipeArray] = useState([]);

  useEffect(() => {
    axios
      .get("https://kitchenkeepr-d3710e35161a.herokuapp.com/recipes")
      .then((response) => {
        setRecipeArray(response.data);
      })
      .catch((response) => {
        console.log(response);
      });
  }, []);
  if (!recipeArray) {
    return <>Loading...</>;
  }

  return (
    <div className="Diner">
      <iframe src={`${dinner1}/embed/captioned`}></iframe>
      <button
        onClick={() => {
          axios
            .get(
              `https://kitchenkeepr-d3710e35161a.herokuapp.com/?url=${dinner1}`
            )
            .then(({ data }) => {
              setCaption(data.caption);
            });
        }}
      >
        KEEP
      </button>
    </div>
    //   {caption && <pre>{caption}</pre>}
  );
}

export default Diner;
