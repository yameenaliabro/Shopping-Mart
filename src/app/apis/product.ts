import { useQuery } from "@tanstack/react-query";
import { IProduct } from "../types";
import axios from "axios";

export const UseGetProduct = () =>
    useQuery<IProduct, string>({
        queryKey: ["product"],
        queryFn: async () => (await axios.get("/products")).data,
    });
