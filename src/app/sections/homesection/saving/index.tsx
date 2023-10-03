"use client";
import { Button, Col, Image, Row } from "antd";
import React from "react";

const Savings = () => {
    return (
        <div className="flex bg-[#7fd7eb] flex-row justify-center !gap-x-[20px] p-[30px] m-[30px] rounded-[20px]">
            <div className="flex flex-row justify-center gap-x-[20px]">
                <Image
                    preview={false}
                    alt="savigs image"
                    className="h-full"
                    src="http://127.0.0.1:5500/giftos-html/images/saving-img.png"
                />
                <Col>
                    <div className="flex justify-end flex-col my-[70px] mx-[50px]">
                        <h2 className="!text-[#fff] text-[30px] font-semibold">BEST SAVINGS ON NEW ARRIVALS</h2>
                        <p className="text-[white] font-medium text-[20px] leading-[30px]">
                            Qui ex dolore at repellat, quia neque doloribus omnis adipisci, ipsum eos odio <br />
                            fugit ut eveniet blanditiis praesentium totam non nostrum dignissimos nihil
                            <br />
                            eius facere et eaque. Qui, animi obcaecati.
                        </p>
                    </div>
                    <Row className="!flex !gap-x-[10px] !my-[50px] mx-[53px]">
                        <Button type="primary" className="w-[140px]">
                            Buy Now
                        </Button>
                        <Button
                            type="primary"
                            className="text-[#000] w-[140px] bg-[#fff] hover:bg-[#f85606] border-[1px]"
                        >
                            See More
                        </Button>
                    </Row>
                </Col>
            </div>
        </div>
    );
};

export default Savings;
