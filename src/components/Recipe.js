import React from "react"
import { recipe, cleaned } from '../recipe.module.css'

function Recipe({title, calories, img, ingr}) {
    const ingredientList = ingr.map(item => (
                            <li key={Math.random()}>{item.text}</li>
                            ))
    return (
        <div className={recipe}>
            <h4>{title}</h4>
            <p>Description</p>
            <p>Total number of calories present: {Math.round(calories)}cal</p>
            <img src={img} alt="recipe_display"/>
            <ul className={cleaned}>
                {ingredientList}
            </ul>
        </div>
    )
}

export default Recipe;