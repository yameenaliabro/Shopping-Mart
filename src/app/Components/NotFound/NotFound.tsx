"use client";
import { Button, Result } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

function NotFounds() {
    const { push } = useRouter();
    return (
        <div className="flex justify-center h-screen-[30%] items-center flex-col">
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Button type="primary" onClick={() => push("/")}>
                        Back Home
                    </Button>
                }
            />
        </div>
    );
}

export default NotFounds;
