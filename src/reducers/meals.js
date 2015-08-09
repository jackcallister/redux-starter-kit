const initialState = [{
  id: 1,
  name: 'Butter Chicken'
}, {
  id: 2,
  name: 'Tikka Misala'
}];

export default function meals(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}
