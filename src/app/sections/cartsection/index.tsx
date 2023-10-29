"use client";
import useCart from "@src/app/hooks/useCart";
import { Button, Card, Image, Typography, Input, Row, Col, Popconfirm } from "antd";
import React from "react";

function Cart() {
    const { cart } = useCart();
    console.log("🚀 ~ file: index.tsx:8 ~ Cart ~ cart:", cart);
    return (
        <div>
            <div className="m-10 bg-[#efefef] w-[90%] p-10 rounded-md">
                <Typography.Title>Shoping cart</Typography.Title>
            </div>
            <Card className="flex  w-[90%] m-10 ">
                {cart.item.map((item) => {
                    return (
                        <div key={item.id} className="flex">
                            <div key={item.id} className="flex flex-row gap-x-20 mb-[10px]  items-start w-[100%]">
                                <div className="flex flex-row items-start gap-x-10 w-[50%]">
                                    <Image
                                        src={item.thumbnail}
                                        alt="productImage"
                                        width={500}
                                        height={350}
                                        className="w-[400px] h-[350px]"
                                    />
                                    <div className="flex flex-col justify-start items-start w-full">
                                        <Typography.Title level={4}>{item.title}</Typography.Title>
                                        <Typography.Title level={5} className="w-[50%]">
                                            {item.description}
                                        </Typography.Title>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="flex flex-col justify-center mb-[10px]">
                                        <div className="flex flex-col  text-center">
                                            <Typography.Title className="flex text-center">Quantity</Typography.Title>
                                        </div>
                                        <div className="flex flex-row items-center">
                                            <Button type="primary">+</Button>
                                            <Input value={cart.item.length} className="w-[100px]" />
                                            <Button className="primary" danger>
                                                -
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <Row>
                                    <Col>
                                        <Typography.Title>Price</Typography.Title>
                                        <Typography.Text>${item.price}</Typography.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Popconfirm title="are you sure you want to delete the product?">
                                        <Button type="primary">Remove</Button>
                                    </Popconfirm>
                                </Row>
                            </div>
                        </div>
                    );
                })}
            </Card>
        </div>
    );
}

export default Cart;
