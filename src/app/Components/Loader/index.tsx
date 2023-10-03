"use client";
import { Spin } from "antd";
import React from "react";

function Loader() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Spin />
        </div>
    );
}

export default Loader;
