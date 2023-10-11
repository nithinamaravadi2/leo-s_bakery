import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import DefaultPage from "./components/pages/DefaultPage";
import Recipes from "./components/pages/Recipes";
import RecipeDetails from "./components/pages/RecipeDetails";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/recipes" element={<Recipes></Recipes>} />
          <Route exact path="/recipes/:recipe_id" element={<RecipeDetails></RecipeDetails>} />
          <Route element={DefaultPage} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
