import { useContext } from "react";
import { CartContext } from "../context";
const useCart = () => {
    const value = useContext(CartContext);
    if (!value) {
        throw new Error("some thing went wrong in the Cart Context");
    }
    return value;
};

export default useCart;
