import assert from 'assert';
import * as MealsSelector from '../../selectors/MealsSelector';

describe('MealsSelector', () => {

  describe('selectMeals', () => {

    const store = {
      meals: [{
        id: 1,
        ingredientIds: [1]
      }],
      ingredients: []
    }

    const expectedState = {
      meals: [{
        id: 1,
        ingredientIds: [1]
      }]
    }

    const state = MealsSelector.selectMeals(store)

    it('returns meals', () => {
      assert.deepEqual(expectedState, state)
    })
  })

  describe('selectSelectedMeals', () => {

    const store = {
      meals: [{
        id: 1,
        selected: true
      }, {
        id: 2,
        selected: false
      }],
      ingredients: []
    }

    const expectedState = {
      meals: [{
        id: 1,
        selected: true
      }]
    }

    const state = MealsSelector.selectSelectedMeals(store);

    it('returns selected meals', () => {
      assert.deepEqual(expectedState, state);
    });
  });
});
