import React from 'react';
import { Connector } from 'react-redux';
import { selectMeals } from '../selectors/MealsSelector';
import Meals from './Meals';

export default class MealsConnector {

  render() {
    return (
      <Connector select={selectMeals}>
        {({ meals }) =>
          <Meals meals={meals} />
        }
      </Connector>
    );
  }
}
