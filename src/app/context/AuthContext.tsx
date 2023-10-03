"use client";
import React, { ReactNode, createContext, useCallback, useMemo, useState, useEffect } from "react";
import { AuthContetType, Login, register } from "../types";
import { UseLogin, UseRegister } from "../apis/auth";
import { removeaxiostoken } from "../utlis/axios";

const AuthContext = createContext<AuthContetType | null>(null);
const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setloading] = useState<boolean>(false);
    const [isAuthenticated, setisAuthenticated] = useState(false);
    const { mutateAsync: signin } = UseLogin();
    const { mutateAsync: createUser } = UseRegister();

    const registerUser = useCallback(
        async ({ dob, email, passwrord, phoneNumber, username }: register) => {
            setloading(true);
            try {
                await createUser(
                    { email, passwrord, phoneNumber, username, dob },
                    {
                        onSuccess: (token) => {
                            localStorage.setItem("token", token as string);
                            if (token) {
                                setisAuthenticated(true);
                            } else {
                                setisAuthenticated(false);
                            }
                        },
                    }
                );
                setloading(false);
            } catch (error) {
                console.log("🚀 ~ file: AuthContext.tsx:15 ~ register ~ error:", error);
            }
            setloading(false);
        },
        [createUser]
    );
    const login = useCallback(
        async ({ password, username }: Login) => {
            setloading(true);
            try {
                await signin(
                    { password, username },
                    {
                        onSuccess: (token) => {
                            localStorage.setItem("token", token);
                            if (token) {
                                setisAuthenticated(true);
                            }
                        },
                    }
                );
                setloading(false);
            } catch (err) {
                console.log("🚀 ~ file: AuthContext.tsx:13 ~ login ~ rr:", err);
                setloading(false);
            }
        },
        [signin]
    );

    const signout = useCallback(() => {
        setloading(true);
        try {
            removeaxiostoken();
            localStorage.removeItem("token");
            setisAuthenticated(false);
            setloading(false);
        } catch (error) {
            console.log("🚀 ~ file: AuthContext.tsx:39 ~ signout ~ error:", error);
            setloading(false);
        }
    }, []);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setisAuthenticated(false);
        }
        setloading(false);
        return () => {};
    }, []);

    const value = useMemo(
        () => ({
            login,
            registerUser,
            loading,
            isAuthenticated,
            signout,
        }),
        [login, registerUser, loading, isAuthenticated, signout]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
