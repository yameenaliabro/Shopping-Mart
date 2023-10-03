import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
    return <div className="flex  ml-[10%] items-center">{children}</div>;
};

export default Container;
