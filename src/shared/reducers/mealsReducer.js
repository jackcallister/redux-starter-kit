import union from 'lodash/array/union'
import { SELECT_MEAL } from '../constants/MealsConstants'

const initialState = [{
  id: 1,
  name: 'Butter Chicken',
  ingredientIds: [1, 2],
  selected: false
}, {
  id: 2,
  name: 'Tikka Misala',
  ingredientIds: [1, 3],
  selected: false
}];

export default function meals(state = initialState, action) {
  switch (action.type) {
    case SELECT_MEAL:

      return state.map((meal) => {
        if (meal.id === action.payload) {
          return { ...meal, selected: true }
        } else {
          return meal;
        }
      });

    default:
      return state;
  }
}