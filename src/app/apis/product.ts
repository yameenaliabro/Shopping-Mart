import { useQuery } from "@tanstack/react-query";
import { IProduct } from "../types";
import axios from "../utlis/axios";

export const UseGetProduct = () =>
    useQuery<IProduct, string>({
        queryKey: ["products"],
        queryFn: async () => (await axios.get("/products")).data,
    });
