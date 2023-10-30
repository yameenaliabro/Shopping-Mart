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
        case "INCREMENT_QUNATITY":
            const itemToIncrement = state.item.find((item) => item.id === action.payload.id);
            if (itemToIncrement) {
                itemToIncrement.quantity!++;
                state.totalItems++;
                state.totalPrice += itemToIncrement.price;
            }
            return { ...state };

        case "DECREMENTQUANTITY":
            const itemToDecrement = state.item.find((item) => item.id === action.payload.id);
            if (itemToDecrement && itemToDecrement.quantity! > 1) {
                itemToDecrement.quantity!--;
                state.totalItems--;
                state.totalPrice -= itemToDecrement.price;
            }
            return { ...state };

        case "ADD_TO_CART":
            const productToAdd = action.payload;
            const existingProduct = state.item.findIndex((item) => item.id === productToAdd.id);
            if (existingProduct !== -1) {
                state.totalPrice += productToAdd.price;
            } else {
                state.item.push({ ...productToAdd, quantity: 1 });
                state.totalPrice += productToAdd.price;
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
