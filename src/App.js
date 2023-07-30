import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dinner from "./components/Dinner/Dinner";
import Tags from "./components/Tagged/Tagged";
import Favourites from "./components/Favourites/Favourites";
import Recipe from "./components/Recipe/Recipe";
import IngredientReplacer from "./components/IngredientReplacer/IngredientReplacer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dinner />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/recipes/:id" element={<Recipe />} />
        <Route path="/ingredient-replacer" element={<IngredientReplacer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
