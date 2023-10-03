import { Form, Input, Button } from "antd";
import Link from "next/link";
import React from "react";
import { Heading } from "@src/app/Components";

const LoginForm = () => {
    return (
        <div className="flex flex-col mx-auto w-full bg-[#494D5F] text-[#FFF] p-[30px]">
            <div className="pb-[40px] text-center">
                <Heading heading="Login" colorwhite={true} />
            </div>
            <Form>
                <Form.Item rules={[{ required: true, message: "please enter the user name !" }]}>
                    <Input type="text" placeholder="enter a username" />
                </Form.Item>
                <Form.Item
                    rules={[
                        { required: true, message: "Pleasee enter the password !" },
                        { min: 4, message: "must be the 6 character " },
                    ]}
                >
                    <Input.Password placeholder="enter the password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Login
                    </Button>
                </Form.Item>
                <Link href="/auth/signin" className="text-center">
                    <Form.Item className="text-center">
                        <Link href="/auth/signup" className="!text-[#FFF] hover:text-[#efefefaa]">
                            Create a New Account
                            <Button type="link" className="pl-1 text-[#FFF] hover:text-[#efefefaa]">
                                Singup?
                            </Button>
                        </Link>
                    </Form.Item>
                </Link>
            </Form>
        </div>
    );
};

export default LoginForm;
