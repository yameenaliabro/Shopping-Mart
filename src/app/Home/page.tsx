import Carousels from "../sections/homesection/banner";
import LatestProducts from "../sections/homesection/products/latestproduct";
import Savings from "../sections/homesection/saving";
import WhyShopWithUs from "../sections/homesection/whyshopwithus";
import GiftForUs from "../sections/homesection/gifts";
import Testimonials from "../sections/homesection/Testmonial";
import "aos/dist/aos.css";

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
            <div className="mt-[100px] mb-[40px]">
                <WhyShopWithUs />
            </div>
            <div>
                <GiftForUs />
            </div>
            <div className="flex justify-around">
                <Testimonials />
            </div>
        </div>
    );
}

export default MainHome;
