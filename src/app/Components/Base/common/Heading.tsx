import React from "react";

interface HeadingProps {
    heading: string;
    colorwhite?: boolean;
}

function Heading({ heading, colorwhite }: HeadingProps) {
    return (
        <div className={`font-semibold text-[30px] leading-normal ${colorwhite ? "text-[#fff]" : "text-black"}`}>
            {heading}
        </div>
    );
}

export default Heading;
