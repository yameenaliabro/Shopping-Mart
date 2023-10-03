"use client";
import { Layout } from "antd";
import React, { ReactNode } from "react";
import { DashboardSideBar, DashboardTopBar } from "./components";

const { Content } = Layout;

type DashboardLayoutProps = {
    children: ReactNode;
};

function DashboardLayout(props: DashboardLayoutProps) {
    const { children } = props;

    return (
        <Layout className="min-h-[100vh]">
            <DashboardSideBar />
            <Layout>
                <DashboardTopBar />
                <Content>{children}</Content>
            </Layout>
        </Layout>
    );
}

const WithAuth = (props: DashboardLayoutProps) => {
    return (
        // <AuthGuard>
        <DashboardLayout {...props} />
        // </AuthGuard>
    );
};

export default WithAuth;
