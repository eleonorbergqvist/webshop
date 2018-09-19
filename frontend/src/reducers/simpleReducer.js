export default (state = { name: 'gurkan' }, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      console.log(action);
      return {
        name: action.payload.name
      };
    default:
      return state;
  }
};
