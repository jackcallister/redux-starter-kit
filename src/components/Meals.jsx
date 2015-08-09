import React from 'react';

export default class Meals {

  render() {
    const meals = this.props.meals.map((meal, index) =>
      <li key={meal.id}>{meal.name}</li>
    );

    return (
      <div>
        <h1>Your meals</h1>
        <ul>
         {meals}
        </ul>
      </div>
    );
  }
}

