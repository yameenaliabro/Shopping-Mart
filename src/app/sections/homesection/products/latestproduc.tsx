"use client";
import { UseGetProduct } from "@src/app/apis/product";
import { Card } from "antd";
import React from "react";

const LatestProducts = () => {
    const { data } = UseGetProduct();
    return (
        <div>
            {data?.product.map((item) => {
                return (
                    <div key={item.id}>
                        <Card></Card>
                    </div>
                );
            })}
        </div>
    );
};

export default LatestProducts;
