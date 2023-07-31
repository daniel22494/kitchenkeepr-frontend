import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dinner from "./components/Dinner/Dinner";
import Tags from "./components/Tagged/Tagged";
import Favourites from "./components/Favourites/Favourites";
import Recipe from "./components/Recipe/Recipe";
import IngredientReplacer from "./components/IngredientReplacer/IngredientReplacer";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dinner />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/recipes/:id" element={<Recipe />} />
        <Route path="/ingredient-replacer" element={<IngredientReplacer />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
