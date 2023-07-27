import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dinner from "./components/Dinner/Dinner";
import Tags from "./components/Tagged/Tagged";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dinner />} />
        <Route path="/tags" element={<Tags />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
