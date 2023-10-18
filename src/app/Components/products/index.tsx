"use client";
import { EllipsisOutlined, SettingOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { UseGetProduct } from "@src/app/apis/product";
import useCart from "@src/app/hooks/useCart";
import { productProps } from "@src/app/types";
import { Card, Image, Rate, Typography } from "antd";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllProducts = () => {
    const { data } = UseGetProduct();
    const { dispatch, cart } = useCart();
    const ProductAddtoCart = (product: productProps) => {
        dispatch({ type: "ADD_TO_CART", payload: product });
        toast.success("Product Add to Cart!", {
            position: "top-right",
            autoClose: 2000,
        });
        console.log("🚀 ~ file: index.tsx:22 ~ ProductAddtoCart ~  cart:", cart);
    };

    const { Meta } = Card;
    const { Title } = Typography;

    return (
        <div className="bg-gradient p-[30px] ">
            <ToastContainer />
            <div className="!flex !justify-center !items-center  !text-center !mt-[100px]">
                <Title className="!flex !text-center !items-center font-semibold text-[40px] leading-normal text-[#fff]">
                    All Products
                </Title>
            </div>
            <div className="flex justify-center gap-x-10 flex-wrap">
                {data?.product.length &&
                    data?.product.map((item) => {
                        return (
                            <div key={item.id} className="mt-[100px]">
                                <Card
                                    hoverable
                                    className="w-[350px] h-[100%]"
                                    bordered={false}
                                    cover={
                                        <Image
                                            alt="product"
                                            src={item.thumbnail}
                                            className="w-[350px] h-[300px] text-[#000]"
                                        />
                                    }
                                    actions={[
                                        <SettingOutlined key="setting" size={40} className="!w-[40px] ! h-full" />,
                                        <ShoppingCartOutlined
                                            key="edit"
                                            size={40}
                                            className="w-[40px] h-full"
                                            onClick={() => ProductAddtoCart(item)}
                                        />,
                                        <EllipsisOutlined key="ellipsis" size={40} className="w-[40px] h-full" />,
                                    ]}
                                >
                                    <Meta
                                        title={item.title}
                                        description={item.description}
                                        className="!leading-[25px] w-full h-[100px]"
                                    />
                                    <div className="text-[20px] font-medium leading-[20px] !mt-[10px] flex justify-between">
                                        <p>Price</p>
                                        <Typography.Text> ${item.price}</Typography.Text>
                                    </div>
                                    <div className="mt-[10px]">
                                        <Rate defaultValue={item.rating} disabled />
                                    </div>
                                </Card>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default AllProducts;
