import React, { useState, useEffect } from 'react'
import Recipe from './components/Recipe'
import './App.css';

function App() {
  const [ recipes, setRecipes ] = useState([]);
  const [ search, setSearch ] = useState("");
  const [ query, setQuery ] = useState("chicken");

  const APP_ID = "c2e75e52";
  const APP_KEY = "103c2bf8a898a082913573ebfa96bd68"
  const sampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(() => {
    fetchRecipe()
  }, [query]);

  async function fetchRecipe() {
    const response = await fetch(sampleReq);
    const result = await response.json();
    setRecipes(result.hits);
    console.log(result.hits);
  }

  function displayText(e) {
    setSearch(e.target.value)
  }

  function getSearch(event) {
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