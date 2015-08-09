import React from 'react';
import Meals from './MealsConnector';
import ShoppingList from './ShoppingListConnector';

export default class App {

  render() {
    return (
      <main>
        <Meals />
        <ShoppingList />
      </main>
    );
  }
}
