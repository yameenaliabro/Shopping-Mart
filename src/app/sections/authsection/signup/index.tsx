"use client";
import InnerPageBanner from "@src/app/Components/Base/common/InnerPageBanner";
import SignUpForm from "@src/app/Components/auth/signupForm";
import React from "react";

function Signup() {
    return (
        <>
            <InnerPageBanner title="Sign Up" />
            <div className="flex flex-row justify-center ">
                <SignUpForm />
            </div>
        </>
    );
}

export default Signup;
