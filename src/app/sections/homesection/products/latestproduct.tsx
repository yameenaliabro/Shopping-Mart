"use client";
import { EllipsisOutlined, SettingOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { UseGetProduct } from "@src/app/apis/product";
import { Button, Card, Image, Rate, Typography } from "antd";
import Link from "next/link";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddtoCart = () => {
    toast.success("Product Added to Cart!", {
        position: "top-right",
        autoClose: 2000,
    });
};
const LatestProducts = () => {
    const { data } = UseGetProduct();

    const { Meta } = Card;
    const { Title } = Typography;

    return (
        <div>
            <ToastContainer key="toastContainer" />,
            <div className="!flex !justify-center !items-center  !text-center !mt-[100px]">
                <Title className="!flex !text-center !items-center font-semibold text-[40px] leading-normal">
                    LATEST PRODUCT
                </Title>
            </div>
            <div className="flex justify-center gap-x-10 flex-wrap">
                {data?.product.length &&
                    data?.product.slice(0, 8).map((item) => {
                        return (
                            <div key={item.id} className="mt-[100px]">
                                <Card
                                    hoverable
                                    className="w-[350px] h-[100%]"
                                    bordered={false}
                                    cover={
                                        <Image
                                            alt="latest product"
                                            src={item.thumbnail}
                                            className="w-[350px] h-[300px]"
                                        />
                                    }
                                    actions={[
                                        <SettingOutlined key="setting" size={40} className="!w-[40px] ! h-full" />,
                                        <ShoppingCartOutlined
                                            key="edit"
                                            size={40}
                                            className="w-[40px] h-full"
                                            onClick={AddtoCart}
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
            <div className="!flex !justify-center !items-center ">
                <Link href="/products">
                    <Button type="primary" className="mt-[100px] w-[230px] ">
                        All Product
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default LatestProducts;
