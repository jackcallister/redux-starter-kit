import React from 'react';

export default class ShoppingList extends React.Component {
  render() {
    const meals = this.props.meals.map((meal, index) => {
      return (
        <li key={index}>
          {meal.name}
        </li>
      )
    });

    const ingredients = this.props.ingredients.map((ingredient, index) => {
      return (
        <li key={index}>
          {ingredient.name}
        </li>
      )
    });

    return (
      <div>
        <h1>Your meals</h1>
        <ul>
          {meals}
        </ul>

        <h1>Your shopping list</h1>
        <ul>
          {ingredients}
        </ul>
      </div>
    );
  }
}
