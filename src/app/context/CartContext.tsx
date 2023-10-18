"use client";
import { ReactNode, createContext, useReducer } from "react";
import { CartAction, CartContextProp, CartState } from "../types/common";

const initialState: CartState = {
    item: [],
    totalItems: 0,
    totalPrice: 0,
    length: undefined,
};

export const CartContext = createContext<CartContextProp | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const productToAdd = action.payload;
            const existingProduct = state.item.findIndex((item) => item.id === productToAdd.id);
            if (existingProduct !== -1) {
                // If the product is already in the cart, update the quantity and price
                // state.item[existingProduct]?.quantity++;
                state.totalPrice += productToAdd.price; // Update the total price
            } else {
                // If the product is not in the cart, add it with a quantity of 1
                state.item.push({ ...productToAdd, quantity: 1 });
                state.totalPrice += productToAdd.price; // Update the total price
            }
            return { ...state, totalItems: state.totalItems + 1 };
        case "REMOVE_CART":
            const updateCart = state.item.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                items: updateCart,
                totalItems: state.totalItems - 1,
                totalPrice: state.totalPrice - action.payload.price,
            };
        case "CLEAR_CART":
            return initialState;
        default:
            return state;
    }
};

const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState);

    return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;
};
export default CartProvider;
