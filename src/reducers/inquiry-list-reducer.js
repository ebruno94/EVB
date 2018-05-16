export default (state = {}, action) => {
  let newState;
  const { name, phone, email, question, id } = action;
  switch (action.type){
  case 'ADD_INQUIRY':
    newState = Object.assign({}, state, {
      [id]: {
        name,
        phone,
        email,
        question,
        id
      }
    });
    return newState;
  case 'REMOVE_INQUIRY':
    newState = Object.assign({}, state);
    delete newState[id];
    return newState;
  default:
    return state;
  }
};
