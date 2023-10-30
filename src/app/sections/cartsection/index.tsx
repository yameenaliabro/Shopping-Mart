"use client";
import useCart from "@src/app/hooks/useCart";
import { Button, Card, Image, Typography, Input, Row, Col, Popconfirm, Divider, Alert } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { AiFillCar } from "react-icons/ai";

function Cart() {
    const { cart, dispatch } = useCart();
    const { push } = useRouter();
    console.log("🚀 ~ file: index.tsx:8 ~ Cart ~ cart:", cart);
    const incrementQuantity = (productId: number) => {
        dispatch({ type: "INCREMENT_QUNATITY", payload: { id: productId } });
    };

    const decrementQuantity = (productId: number) => {
        dispatch({ type: "DECREMENTQUANTITY", payload: { id: productId } });
    };
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
                                        <Typography.Title level={4} className="heading4">
                                            {item.title}
                                        </Typography.Title>
                                        <p className="w-[50%] heading5">{item.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="flex flex-col justify-center mb-[10px]">
                                        <div className="flex flex-col  text-center">
                                            <Typography.Title className="flex text-center">Quantity</Typography.Title>
                                        </div>
                                        <div className="flex flex-row items-center">
                                            <Button type="primary" onClick={() => incrementQuantity(item.id)}>
                                                +
                                            </Button>
                                            <Input value={cart.item.length} className="w-[100px]" />
                                            <Button
                                                className="primary"
                                                danger
                                                onClick={() => decrementQuantity(item.id)}
                                            >
                                                -
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <Row>
                                    <Col>
                                        <Typography.Title className="heading3">Price</Typography.Title>
                                        <Typography.Text className="heading5">${item.price}</Typography.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Popconfirm title="are you sure you want to delete the product?">
                                        <Button type="primary" className="heading4">
                                            Remove
                                        </Button>
                                    </Popconfirm>
                                </Row>
                            </div>
                        </div>
                    );
                })}
                <Divider />
            </Card>
            <div className="flex justify-between w-[90%] m-10">
                <div>
                    <Button type="primary" onClick={() => push("/products")} className="heading4">
                        Continue Shopping
                    </Button>
                </div>
                <div>
                    <Button className="heading4" danger>
                        Make Purchase
                    </Button>
                </div>
            </div>
            <div className="w-[90%] m-10">
                <Alert
                    message="Free Delevery in 1 to 2 Days"
                    type="success"
                    showIcon
                    icon={<AiFillCar />}
                    className="p-5 !bg-[#ccf0d1]  pl-5 heading5"
                />
            </div>
        </div>
    );
}

export default Cart;
