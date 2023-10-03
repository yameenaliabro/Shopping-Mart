"use client";
import { EllipsisOutlined, SettingOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { UseGetProduct } from "@src/app/apis/product";
import { Button, Card, Image, Rate, Typography } from "antd";
import React from "react";

const LatestProducts = () => {
    const { data } = UseGetProduct();
    console.log("🚀 ~ file: latestproduct.tsx:8 ~ LatestProducts ~ data:", data);

    const { Meta } = Card;
    const { Title } = Typography;

    return (
        <div>
            <div className="!flex !justify-center !items-center  !text-center !mt-[100px]">
                <Title className="!flex !text-center !items-center font-semibold text-[40px] leading-normal">
                    LATEST PRODUCT
                </Title>
            </div>
            <div className="flex justify-center gap-x-10 flex-wrap">
                {data?.product.length &&
                    data?.product.slice(0, 6).map((item) => {
                        console.log("🚀 ~ file: latestproduct.tsx:13 ~ LatestProducts ~ item:", item);
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
                                        <ShoppingCartOutlined key="edit" size={40} className="w-[40px] h-full" />,
                                        <EllipsisOutlined key="ellipsis" size={40} className="w-[40px] h-full" />,
                                    ]}
                                >
                                    <Meta
                                        title={item.title}
                                        description={item.description}
                                        className="!leading-[25px]"
                                    />
                                    <p className="text-[20px] font-medium leading-[20px] !mt-[10px]">
                                        Price ${item.price}
                                    </p>
                                    <div className="mt-[10px]">
                                        <Rate defaultValue={item.rating} disabled />
                                    </div>
                                </Card>
                            </div>
                        );
                    })}
            </div>
            <div className="!flex !justify-center !items-center ">
                <Button type="primary" className="mt-[100px]">
                    All Product
                </Button>
            </div>
        </div>
    );
};

export default LatestProducts;
