import React from "react";
import Carousels from "../sections/homesection/banner";
import LatestProducts from "../sections/homesection/products/latestproduct";
import Savings from "../sections/homesection/saving";

function MainHome() {
    return (
        <div>
            <Carousels />
            <div>
                <LatestProducts />
            </div>
            <div className="mt-[100px] mb-[20px]">
                <Savings />
            </div>
        </div>
    );
}

export default MainHome;
