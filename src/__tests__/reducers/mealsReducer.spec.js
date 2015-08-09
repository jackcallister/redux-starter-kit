import assert from 'assert';
import meals from '../../reducers/mealsReducer';
import { SELECT_MEAL } from '../../constants/MealsConstants';

describe('meals reducer', () => {

  const initialState = [{
    name: 'Butter chicken',
    id: 1,
    selected: false
  }];

  describe('selectMeal', () => {

    let expectedState = [{
      name: 'Butter chicken',
      id: 1,
      selected: true
    }];

    let action = {
      payload: 1,
      type: SELECT_MEAL
    }

    let state = meals(initialState, action);

    it('selects the meal', () => {
      assert.deepEqual(expectedState, state);
    });
  });
});
