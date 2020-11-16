import React, { useState, useEffect } from 'react'
import Recipe from './components/Recipe'
import './App.css';
import dotenv from "dotenv";

dotenv.config()

function App() {
  const [ recipes, setRecipes ] = useState([]);
  const [ search, setSearch ] = useState("");
  const [ query, setQuery ] = useState("chicken");
  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = `${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    fetchRecipe()
    // eslint-disable-next-line
  }, [query]);

  const fetchRecipe = async () => {
    const sampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    const response = await fetch(sampleReq);
    const result = await response.json();
    setRecipes(result.hits);
  }

  function displayText(e) {
    setSearch(e.target.value)
  }

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("")
  }

  const disp = recipes.map(recipe => (
    <Recipe
      key={Math.random()}
      title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      img={recipe.recipe.image}
      ingr={recipe.recipe.ingredients}
    />
  ))

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={displayText} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {disp}
      </div>
    </div>
  );
}

export default App;