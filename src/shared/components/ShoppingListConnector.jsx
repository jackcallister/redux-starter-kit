import React from 'react';
import { Connector } from 'react-redux';
import { selectShoppingList } from '../selectors/ShoppingListSelector';
import ShoppingList from './ShoppingList';

export default class ShoppingListConnector {

  render() {

    return (
      <Connector select={selectShoppingList}>
        {({ meals, ingredients }) =>
          <ShoppingList meals={meals} ingredients={ingredients} />
        }
      </Connector>
    );
  }
}
