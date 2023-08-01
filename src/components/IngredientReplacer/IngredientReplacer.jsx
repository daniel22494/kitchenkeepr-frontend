import React, { useState } from "react";
import axios from "axios";
import "./IngredientReplacer.scss";
import Hat from "../../assets/icons/hat.svg";

function IngredientReplacer() {
  const [userInput, setUserInput] = useState("");
  const [ingredientReplacements, setIngredientReplacements] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleGenerateReplacements = async () => {
    setIsLoading(true); // Set loading state to true before making the API call
    try {
      const response = await axios.get(
        `http://localhost:8080/api/generate-replacements/${userInput}`
      );
      setIngredientReplacements(<pre>{response.data.replacements}</pre>);
    } catch (error) {
      console.error("Error fetching ingredient replacements:", error);
      setIngredientReplacements("Failed to fetch ingredient replacements.");
    } finally {
      setIsLoading(false); // Set loading state to false after the API call (whether successful or not)
    }
  };

  //Old code

  // const handleGenerateReplacements = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8080/api/generate-replacements/${userInput}`
  //     );
  //     setIngredientReplacements(<pre>{response.data.replacements}</pre>);
  //   } catch (error) {
  //     console.error("Error fetching ingredient replacements:", error);
  //     setIngredientReplacements("Failed to fetch ingredient replacements.");
  //   }
  // };

  return (
    <div className="ai-container">
      {
        isLoading ? (
          // Loading state
          <div className="loading">
            <p>Loading...</p>
          </div>
        ) : ingredientReplacements ? (
          // Render the ingredient replacements if available
          <p>{ingredientReplacements}</p>
        ) : (
          // Placeholder component
          <div className="placeholder">
            <img src={Hat} alt="" className="placeholder__img" />
          </div>
        )

        //Old Code

        // (ingredientReplacements && <p>{ingredientReplacements}</p>) || (
        //   <div className="placeholder">
        //     <img src={Hat} alt="" className="placeholder__img" />
        //   </div>
        // )
      }

      <div className="generate">
        <input
          className="generate__input"
          type="text"
          value={userInput}
          onChange={handleInputChange}
        />
        <button
          className="generate__button"
          onClick={handleGenerateReplacements}
        >
          Generate Replacements
        </button>
      </div>
    </div>
  );
}

export default IngredientReplacer;
