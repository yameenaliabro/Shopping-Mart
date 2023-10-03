import React from "react";
import { Heading, Paragraph } from "../..";

const WelcomeAuth = () => {
    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-col items-center justify-center text-center w-[100%] p-[100px] bg-[url('https://colorlib.com/etc/regform/colorlib-regform-3/images/bg-heading-03.jpg')] bg-cover">
                <Heading heading="Welcome back!" colorwhite={true} />
                <Paragraph title="you sign in to access with your existing account" whitecolor={true} />
            </div>
        </div>
    );
};

export default WelcomeAuth;
