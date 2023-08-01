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
import About from "./pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipes" element={<Dinner />} />
        <Route path="/recipes/:id" element={<Recipe />} />
        <Route path="/categories" element={<Tags />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/ingredient-replacer" element={<IngredientReplacer />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
