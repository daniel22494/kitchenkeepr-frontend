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
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/generate-replacements/${userInput}`
      );
      setIngredientReplacements(<pre>{response.data.replacements}</pre>);
    } catch (error) {
      console.error("Error fetching ingredient replacements:", error);
      setIngredientReplacements("Failed to fetch ingredient replacements.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-container">
      <div className="generate">
        <input
          className="generate__input"
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter your ingredient"
        />
        <button
          className="generate__button"
          onClick={handleGenerateReplacements}
        >
          Generate Replacements
        </button>
      </div>

      {isLoading ? (
        // Loading state
        <>
          <div className="placeholder placeholder-load">
            <div className="placeholder__img placeholder__img--load">
              <div class="loader">
                <div class="inner one"></div>
                <div div class="inner two"></div>
                <div class="inner three"></div>
              </div>
            </div>
          </div>
        </>
      ) : ingredientReplacements ? (
        // Render the ingredient replacements if available
        <div className="replacement">
          <h3 className="replacement__title">Potential Replacements:</h3>
          <p className="replacement__text">{ingredientReplacements}</p>
        </div>
      ) : (
        // Placeholder component
        <div className="placeholder">
          <img src={Hat} alt="" className="placeholder__img" />
        </div>
      )}
    </div>
  );
}

export default IngredientReplacer;
