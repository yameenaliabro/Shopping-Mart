import React from "react";
interface paraProps {
    title: string;
    whitecolor?: boolean;
}
function Paragraph({ title, whitecolor }: paraProps) {
    return (
        <div className={`font-semibold text-[30px] leading-normal ${whitecolor ? "text-[#fff]" : "text-blue"}`}>
            {title}
        </div>
    );
}

export default Paragraph;
