import { Button, Col, Image, Row } from "antd";
import React from "react";

const GiftForUs = () => {
    return (
        <div className="flex bg-[#7fd7eb] flex-row justify-center !gap-x-[20px] p-[30px] m-[30px] rounded-[20px]">
            <div className="flex flex-row justify-around gap-x-[70px]">
                <Col className="ml-[20px] mt-[20px]">
                    <div className="flex justify-end flex-col my-[70px] mx-[50px]">
                        <h2 className="!text-[#fff] text-[30px] font-semibold">GIFTS FOR YOUR LOVED ONES</h2>
                        <p className="text-[white] font-medium text-[20px] leading-[30px]">
                            We have put a lot of lucky bag products on the shelves and
                            <br />
                            provided them with corresponding gift box packaging
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
                <Image
                    preview={false}
                    alt="savigs image"
                    className="h-[600px]"
                    src="https://beemai.com/images/gifts.png"
                />
            </div>
        </div>
    );
};

export default GiftForUs;
