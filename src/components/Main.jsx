import { useState } from "react";

function Main() {
    const [ingredients, setNewIngredient] = useState([]);

    const ingredientsList = ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>
    })

    function submitHandler(event) {
        event.preventDefault();
        console.log('submitting form');
        const form = new FormData(event.target);
        let newIngredient = form.get('ingredient');
        setNewIngredient(prevIngredients => [
            ...prevIngredients,
            newIngredient]);
    }

    return (
        <main>
            <form action="" onSubmit={submitHandler} className="recipe-form">
                <input type="text"
                    placeholder="e.g. 1 cup of flour"
                    aria-label="Add ingredient"
                    name="ingredient"
                />

                <button type="submit">Add Ingredient</button>
            </form>
            <ol>
                {ingredientsList}
            </ol>

        </main>
    )
}

export default Main;