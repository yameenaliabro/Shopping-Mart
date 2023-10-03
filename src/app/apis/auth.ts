"use client";
import { useMutation } from "@tanstack/react-query";
import axios from "../utlis/axios";
import { Login, register } from "../types";

export const UseLogin = () =>
    useMutation<string, Error, Login>({
        mutationFn: async (props) => (await axios.post("/login", props)).data,
    });

export const UseRegister = () =>
    useMutation<string, Error, register>({
        mutationFn: async (props) => (await axios.post("/register", props)).data,
    });
