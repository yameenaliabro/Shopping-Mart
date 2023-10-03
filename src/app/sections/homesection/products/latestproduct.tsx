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
                <Title className="!flex !text-center !items-center font-semibold text-[30px] leading-normal">
                    Latest Product
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
                                        <SettingOutlined key="setting" />,
                                        <ShoppingCartOutlined key="edit" />,
                                        <EllipsisOutlined key="ellipsis" />,
                                    ]}
                                >
                                    <Meta title={item.title} description={item.description} />
                                    <div className="mt-[10px]">
                                        <Rate defaultValue={item.rating} disabled />
                                    </div>
                                </Card>
                            </div>
                        );
                    })}
            </div>
            <div className="!flex !justify-center !items-center ">
                <Button type="primary" className="mt-[100px] bg-[#fff] text-[#000] border-[1px solid #000]">
                    All Product
                </Button>
            </div>
        </div>
    );
};

export default LatestProducts;
