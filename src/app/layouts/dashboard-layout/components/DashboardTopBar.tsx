import { Col, theme, Typography, Menu, Badge, Dropdown, Avatar, MenuProps } from "antd";
import { FaUser, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { RiShoppingCartFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useAuth from "@src/app/hooks/useAuth";
import useCart from "@src/app/hooks/useCart";
import { useMemo } from "react";

const loggedOutHeaderMenu = [
    { label: "Home", key: "" },
    { label: "Products", key: "products" },
];
const loggedInHeaderMenu = [
    { label: "Home", key: "" },
    { label: "Product", key: "products" },
];

const Header = () => {
    const { isAuthenticated } = useAuth();
    const { token } = theme.useToken();
    const { push } = useRouter();
    const { cart } = useCart();
    const signOutUser = () => {
        // removeToken();
        // dispatch(logoutUser());
        // navigate("/");
    };
    const menuClickHandler = ({ key }: { key: string }) => {
        if (key !== "signout") return push(`/${key}`);
        signOutUser();
    };
    const loggedDropDownmenu: MenuProps["items"] = useMemo(
        () => [
            { label: "Signout", key: "signout", icon: <FaSignOutAlt /> },
            { label: "Signout", key: "signout", icon: <FaSignOutAlt /> },
        ],
        []
    );
    const unloggedDropDownMenu: MenuProps["items"] = useMemo(
        () => [
            { label: "Signin", key: "signin", icon: <FaSignInAlt />, onClick: () => push("/auth/signin") },
            { label: "Profile", key: "profile", icon: <FaUser /> },
            { label: "Setting", key: "setting", icon: <AiTwotoneSetting /> },
        ],
        [push]
    );
    return (
        <header style={{ background: token.colorPrimary }}>
            <div className="flex flex-row justify-around">
                <div
                    style={{
                        backgroundColor: token.colorSuccess,
                        textAlign: "center",
                        width: "100%",
                    }}
                >
                    <Link href="/" className="w-full">
                        <Typography.Title level={3} style={{ marginTop: 10 }} className="text-[#FFF]">
                            Lounge Store
                        </Typography.Title>
                    </Link>
                </div>
                <Col xs={11} lg={17}>
                    <Menu
                        mode="horizontal"
                        items={isAuthenticated ? loggedInHeaderMenu : loggedOutHeaderMenu}
                        onClick={menuClickHandler}
                        style={{
                            backgroundColor: "transparent",
                            color: "white",
                            justifyContent: "flex-end",
                        }}
                    />
                </Col>
                <div className="flex flex-row  flex-4  items-center gap-x-[40px]">
                    <Badge
                        color={token.colorSuccess}
                        style={{ borderColor: token.colorSuccess }}
                        count={cart.totalItems}
                        className="!w-[40px] text-[30px]"
                    >
                        <span onClick={() => push("/cart")} className="cursor-pointer">
                            <RiShoppingCartFill />
                        </span>
                    </Badge>
                    <Dropdown
                        menu={{ items: isAuthenticated ? loggedDropDownmenu : unloggedDropDownMenu }}
                        placement="bottom"
                    >
                        <Avatar src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" />
                    </Dropdown>
                </div>
            </div>
        </header>
    );
};

export default Header;
