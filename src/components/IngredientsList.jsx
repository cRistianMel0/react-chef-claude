export default function IngredientsList(props) {
    const ingredients = props.ingredientsList;
    const recipeShown = props.recipeShown;
    const ingredientsListItems = ingredients.map((ingredient, index) => (
        <li key={ingredient}>{ingredient} </li>
    ))

    return (
        <section>
            <h2>Ingredients Available:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {recipeShown === 'Pending' && ingredients.length >= 4 &&
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready to Cook?</h3>
                        <p>Click below to generate a recipe using your ingredients.</p>
                    </div>
                    <button type="button" onClick={props.handleRecipe}>Generate Recipe</button>
                </div>
            }
            {recipeShown === 'Generating' &&
                <div className="get-recipe-container">
                    <div>
                        <h3>Creating Your Recipe...</h3>
                        <p>Hold tight! The chef is preparing something special for you.</p>
                    </div>
                </div>
            }
            {recipeShown === 'Generated' &&
                <div className="get-recipe-container">
                    <div>
                        <h3>Recipe Ready!</h3>
                        <p>Your recipe is ready! Enjoy cooking with Chef Claude's creation.</p>
                    </div>
                    <div>
                        <button style={{ opacity: '0.5' }} disabled>Generate Recipe</button>
                    </div>
                </div>
            }
        </section>
    )
}