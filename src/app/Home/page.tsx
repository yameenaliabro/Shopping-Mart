import React from "react";
import Carousels from "../sections/homesection/banner";
import LatestProducts from "../sections/homesection/products/latestproduct";

function MainHome() {
    return (
        <div>
            <Carousels />
            <div>
                <LatestProducts />
            </div>
        </div>
    );
}

export default MainHome;
