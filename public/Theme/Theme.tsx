"use client";
import { ConfigProvider } from "antd";
import * as theme from "./theme.json";
import "antd/dist/reset.css";
import { type ReactNode } from "react";

const Theme = ({ children }: { children: ReactNode }) => {
    return (
        <ConfigProvider theme={theme} componentSize="large">
            {children}
        </ConfigProvider>
    );
};
export default Theme;
