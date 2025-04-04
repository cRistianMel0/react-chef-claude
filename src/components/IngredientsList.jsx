export default function IngredientsList(props) {
    const ingredients = props.ingredientsList;
    const recipeShown = props.recipeShown;
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {(ingredients.length >= 4 && !recipeShown) &&
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={() => props.handleRecipe()}>Get a recipe</button>
                </div>
            }
            {recipeShown &&
                <div className="get-recipe-container">
                    <div>
                        <h3>Recipe generated!</h3>
                        <p>The chef has created a recipe for you. Enjoy cooking!</p>
                    </div>
                    <div>
                        <button onClick={() => props.handleRecipe()}>Get another recipe</button>
                    </div>
                </div>
            }
        </section>
    )
}