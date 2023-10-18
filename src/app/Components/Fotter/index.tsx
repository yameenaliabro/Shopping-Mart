"use client";
import { Col, Typography } from "antd";
import React from "react";

function Fotter() {
    return (
        <div className="flex justify-around  p-[50px] bg-[#f85606] p">
            <Col className="flex flex-col cursor-pointer">
                <Typography.Title level={3} className="text-[#FFF]">
                    ContactUs
                </Typography.Title>
                <Typography.Text className="text-[#FFF] my-[5px]">Mango Ecommerce</Typography.Text>
                <Typography.Text className="text-[#FFF] my-[5px]">Main Bazar Labour Square</Typography.Text>
                <Typography.Text className="text-[#FFF] my-[5px]">Pakistan</Typography.Text>
                <Typography.Text className="text-[#FFF] my-[5px]">+92 3468976628</Typography.Text>
            </Col>
            <Col className="flex flex-col cursor-pointer">
                <Typography.Title level={3} className="text-[#FFF]">
                    Help
                </Typography.Title>
                <Typography.Text className="text-[#FFF] my-[5px]">About us</Typography.Text>
                <Typography.Text className="text-[#FFF] my-[5px]">Privacy Policy</Typography.Text>
                <Typography.Text className="text-[#FFF] my-[5px]">We believe we can</Typography.Text>
            </Col>
            <Col className="flex flex-col mx-[10px] cursor-pointer">
                <Typography.Title level={3} className="text-[#FFF]">
                    Quick Links
                </Typography.Title>
                <Typography.Text className="text-[#FFF] my-[5px]">Delivery Information</Typography.Text>
                <Typography.Text className="text-[#FFF] my-[5px]">Refund Policy</Typography.Text>
            </Col>
        </div>
    );
}

export default Fotter;
