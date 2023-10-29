"use client";
import { Button, Form, Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

function SignUpForm() {
    const { push } = useRouter();
    return (
        <div className="bg-cyan-900 mt-[100px] p-[20px] rounded-[10px] mb-[40px]">
            <Typography.Title className="text-center mb-[10px] text-[#fff]">SignUP</Typography.Title>
            <Form className="w-full max-w-[100%] min-w-[550px] flex justify-center flex-col mb-[10px]">
                <Form.Item name="username" rules={[{ required: true, message: "please enter the user name!" }]}>
                    <Input type="text" placeholder="enter the username" />
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, message: "please enter the email address" }]}>
                    <Input type="email" placeholder="enter the email Address?" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: "please enter the password!" }]}>
                    <Input.Password type="password" placeholder="enter the password" />
                </Form.Item>
                <Form.Item
                    name="phoneNumber"
                    rules={[
                        { required: true, message: "Please enter the phone Number" },
                        { max: 11, message: "Must be the 11 character!" },
                        { min: 11, message: "Must be the 11 character!" },
                    ]}
                >
                    <Input type="number" placeholder="Enter the Phone Number!" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" block>
                        Signin
                    </Button>
                </Form.Item>
                <Form.Item className="flex justify-center items-center gap-x-[10px]">
                    <Typography.Text
                        className="text-[20px] font-medium text-[#fff] leading-[20px] cursor-pointer"
                        onClick={() => push("/auth/signin")}
                    >
                        I have Already Account<span className="ml-[3px]">Signin</span>
                    </Typography.Text>
                </Form.Item>
            </Form>
        </div>
    );
}

export default SignUpForm;
