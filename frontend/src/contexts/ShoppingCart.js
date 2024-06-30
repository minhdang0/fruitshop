import React, { createContext, useReducer } from 'react';

export const ShoppingCartContext = createContext();

const initialState = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state.map(item => 
          item.id === action.payload.id 
            ? { ...item, quantity: item.quantity + action.payload.quantity } 
            : item
        );
      } else {
        return [...state, action.payload];
      }
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, initialState);

  return (
    <ShoppingCartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
