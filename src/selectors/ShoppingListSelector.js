import reduce from 'lodash/collection/reduce';
import includes from 'lodash/collection/includes';

function selectShoppingList(store) {

  const meals = store.meals.filter((meal) => {
    return meal.selected;
  });

  const ingredients = reduce(meals, (ingredients, meal) => {
    meal.ingredientIds.forEach((id) => {

      const ingredient = store.ingredients.find((ingredient) => {
        return ingredient.id === id;
      });

      if (ingredient) {
        ingredients.push(ingredient);
      }
    });

    return ingredients;
  }, []);

  return { meals: meals, ingredients: ingredients };
}

export {
  selectShoppingList
}
