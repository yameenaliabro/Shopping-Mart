import { useContext } from "react";
import { AuthContext } from "../context";

const useAuth = () => {
    const value = useContext(AuthContext);
    if (!value) {
        throw new Error("useAuth can only be used in AuthProvider!");
    }
    return value;
};

export default useAuth;
