import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dinner from "./components/Dinner/Dinner";
import Tags from "./components/Tagged/Tagged";
import Favourites from "./components/Favourites/Favourites";
import Recipe from "./components/Recipe/Recipe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dinner />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/recipes/:id" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
