const initialState = {
  products: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { product } = action.payload;

      return {
        products: [...state.products, product]
      };
    case 'REMOVE_FROM_CART':
      console.log(action);
      return {
        products: action.payload.products
      };
    case 'UPDATE_CART_ITEM':
      console.log(action);
      return {
        products: action.payload.products
      };
    default:
      return state;
  }
};
