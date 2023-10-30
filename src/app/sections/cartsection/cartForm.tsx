import { Button, Card, Input } from "antd";
import React from "react";

function CartForm() {
    return (
        <div className="flex flex-col">
            <Card className="flex flex-col gap-y-[10px]">
                <p>Have coupon?</p>
                <div className="flex flex-row">
                    <Input type="text" placeholder="Coupon code" />
                    <Button className="heading4" type="primary">
                        Apply
                    </Button>
                </div>
            </Card>
        </div>
    );
}

export default CartForm;
