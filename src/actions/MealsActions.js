import { createAction } from 'redux-actions';

import {
  SELECT_MEAL
} from '../constants/MealsConstants';

export const selectMeal = createAction(SELECT_MEAL);
