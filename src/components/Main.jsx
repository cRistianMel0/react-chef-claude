import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"


export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)

    function addIngredient(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        event.target.reset();
    }

    function getRecipe() {
        setRecipeShown(true);
    }

    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    required
                    autoComplete="off"
                    autoFocus
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 &&
                <IngredientsList ingredientsList={ingredients} recipeShown={recipeShown} handleRecipe={getRecipe}></IngredientsList>
            }
            {recipeShown &&
                <ClaudeRecipe ></ClaudeRecipe>
            }
        </main>
    )
}