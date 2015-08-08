import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import * as MealsActions from '../actions/MealsActions';
import Meal from './Meal';

export default class Meals {

  render() {
    const meals = this.props.meals.map((meal, index) =>
      <Connector key={index}>
        {({ dispatch }) =>
          <Meal {...meal}
                {...bindActionCreators(MealsActions, dispatch)} />
        }
      </Connector>
    );

    return (
      <div>
        <h1>Select your meals</h1>
        <ul>
         {meals}
        </ul>
      </div>
    );
  }
}

