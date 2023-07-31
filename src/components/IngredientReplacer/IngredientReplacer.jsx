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
        `http://localhost:8080/api/generate-replacements/${userInput}`
      );
      setIngredientReplacements(<pre>{response.data.replacements}</pre>);
    } catch (error) {
      console.error("Error fetching ingredient replacements:", error);
      setIngredientReplacements("Failed to fetch ingredient replacements.");
    }
  };

  return (
    <div>
      {ingredientReplacements && <p>{ingredientReplacements}</p>}
      <input type="text" value={userInput} onChange={handleInputChange} />
      <button onClick={handleGenerateReplacements}>
        Generate Replacements
      </button>
    </div>
  );
}

export default IngredientReplacer;
