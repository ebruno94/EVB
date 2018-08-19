export default (state = {}, action) => {
  let newState;
  const { name, image, quantity, id } = action;
  switch (action.type){
    case 'ADD_ITEM':
      newState = Object.assign({}, state, {
        [id]: {
          name,
          image,
          quantity,
          id
        }
      });
      return newState;
    case 'REMOVE_ITEM':
      newState = Object.assign({}, state);
      delete newState[id];
      return newState;
    case 'RECEIVE_ITEM':
      newState = Object.assign({}, state);
      newState[action.item.id] = action.item;
      return newState;
    default:
      return state;
  }
};
