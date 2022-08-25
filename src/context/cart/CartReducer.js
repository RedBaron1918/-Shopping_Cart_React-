import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, VIEW_DETAILS } from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      const itemExists = state.cartItems.find(
        (item) => item._id === action.payload._id 
    )
    
        
    if (!itemExists)
     return {         
      ...state, 
      cartItems: [...state.cartItems, action.payload]
  }
  else{
    return{
      ...state,
    }
  }
    };
    case VIEW_DETAILS:{
      const itemExists = state.cartDetails.length
      if(itemExists === 0){
        return{
          ...state,
          cartDetails: [...state.cartDetails, action.payload]
        }
      }
      else{
        return{
          ...state,
          cartDetails:[action.payload]
        }
      }
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    }
   


    default:
      return state;
  }
};

export default CartReducer;
