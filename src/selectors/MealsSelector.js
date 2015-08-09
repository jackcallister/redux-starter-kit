function selectMeals(store) {
  return { meals: store.meals };
}

function selectSelectedMeals(store) {
  const meals = store.meals.filter((meal) => {
    return meal.selected
  });

  return { meals: meals };
}

export {
  selectMeals,
  selectSelectedMeals
}
