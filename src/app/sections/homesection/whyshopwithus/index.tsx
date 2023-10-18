"use client";
import { Card, Col, Image, Row } from "antd";
import React from "react";

const WhyShopWithUs = () => {
    return (
        <div className="flex justify-center items-center text-cente flex-col">
            <h2 className="font-semibold text-[30px] pb-[30px]">Why Shop With Us</h2>
            <Row gutter={16}>
                <Col span={8} className="flex flex-col justify-center items-center text-center">
                    <Card bordered={false} className="bg-[#efefef] h-[100%] w-full">
                        <Image
                            className="w-[200px] h-[140px]"
                            alt="whychoseusiamge"
                            src="https://static.vecteezy.com/system/resources/thumbnails/005/261/209/small_2x/fast-delivery-icon-free-vector.jpg"
                        />
                        <h2 className="text-[23px] font-medium leading-normal mt-[10px]">Fast Delivery</h2>
                        <p className="text-[18px] font-normal leading-normal flex">
                            variations passages of Lorem Ipsum available
                        </p>
                    </Card>
                </Col>
                <Col span={8} className="flex flex-col justify-center items-center text-center">
                    <Card bordered={false} className="bg-[#efefef] h-[100%]">
                        <Image
                            alt="whychoseusiamge"
                            src="https://cdn-icons-png.flaticon.com/512/4947/4947265.png"
                            className="w-[200px] h-[140px]"
                        />
                        <h2 className="text-[23px] font-medium leading-normal mt-[10px]">Free Shiping</h2>
                        <p className="text-[18px] font-normal leading-normal">
                            variations passages of Lorem Ipsum available
                        </p>
                    </Card>
                </Col>
                <Col span={8} className="flex flex-col justify-center items-center text-center">
                    <Card bordered={false} className="bg-[#efefef] h-[100%]">
                        <Image
                            className="w-[200px] h-[140px]"
                            alt="whychoseusiamge"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR0P2lkHF6N2k6BnWzv3KQiNBFuiol9rd5-w&usqp=CAU"
                        />
                        <h2 className="text-[23px] font-medium leading-normal mt-[10px]">Best Quality</h2>
                        <p className="text-[18px] font-normal leading-normal">
                            variations of passages of Lorem Ipsum available
                        </p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default WhyShopWithUs;
