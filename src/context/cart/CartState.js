import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, VIEW_DETAILS } from "../Types";

const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: [],
    cartDetails:[],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const viewDetails = (item) => {
    dispatch({ type: VIEW_DETAILS, payload: item });
  };

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        cartDetails: state.cartDetails,
        addToCart,
        showHideCart,
        removeItem,
        viewDetails
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
