"use client";
import LoginForm from "@src/app/Components/auth/LoginForm";
import WelcomeAuth from "@src/app/Components/auth/welcome";
import React from "react";

const Login = () => {
    return (
        <div className="flex flex-row justify-center gap-x-10  items-center h-screen   w-full bg-[url('https://colorlib.com/etc/lf/Login_v5/images/bg-01.jpg')] bg-cover md:flex ">
            <div className=" flex  p-[100px] rounded-[20px] ">
                <WelcomeAuth />
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
