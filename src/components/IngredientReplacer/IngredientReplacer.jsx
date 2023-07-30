import React, { useState } from "react";
import axios from "axios";

function IngredientReplacer() {
  const [userInput, setUserInput] = useState("");
  const [ingredientReplacements, setIngredientReplacements] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleGenerateReplacements = async () => {
    try {
      const response = await axios.get(
        `/api/generate-replacements/${userInput}`
      );
      setIngredientReplacements(response.data.replacements);
    } catch (error) {
      console.error("Error fetching ingredient replacements:", error);
      setIngredientReplacements("Failed to fetch ingredient replacements.");
    }
  };

  return (
    <div>
      <input type="text" value={userInput} onChange={handleInputChange} />
      <button onClick={handleGenerateReplacements}>
        Generate Replacements
      </button>
      {ingredientReplacements && <p>{ingredientReplacements}</p>}
    </div>
  );
}

export default IngredientReplacer;
