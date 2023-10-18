import { Col, Row, theme, Typography, Menu, Badge, Dropdown, Avatar, MenuProps, Space } from "antd";
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
    const loggedDropDownmenu: MenuProps["items"] = useMemo(
        () => [
            { label: "Signout", key: "signout", icon: <FaSignOutAlt /> },
            { label: "Signout", key: "signout", icon: <FaSignOutAlt /> },
        ],
        []
    );
    const unloggedDropDownMenu: MenuProps["items"] = useMemo(
        () => [
            { label: "Signin", key: "signin", icon: <FaSignInAlt /> },
            { label: "Profile", key: "profile", icon: <FaUser /> },
            { label: "Setting", key: "setting", icon: <AiTwotoneSetting /> },
        ],
        []
    );
    const { isAuthenticated } = useAuth();
    const { token } = theme.useToken();
    const { push } = useRouter();
    const { cart } = useCart();
    console.log("🚀 ~ file: DashboardTopBar.tsx:28 ~ Header ~ cart:", cart.item);
    // const cart = useSelector((state) => state.cart);
    // const dispatch = useDispatch();
    // const removeToken = useRemoveToken();
    // const isLoggedIn = useIsLoggedIn();
    const signOutUser = () => {
        // removeToken();
        // dispatch(logoutUser());
        // navigate("/");
    };
    const menuClickHandler = ({ key }: { key: string }) => {
        if (key !== "signout") return push(`/${key}`);
        signOutUser();
    };
    return (
        <header style={{ background: token.colorPrimary }}>
            <div className="flex flex-row justify-around">
                <div
                    style={{
                        backgroundColor: token.colorSuccess,
                        textAlign: "center",
                    }}
                >
                    <Link href="/">
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
                        <span>
                            <RiShoppingCartFill />
                        </span>
                    </Badge>
                    <Dropdown
                        arrow
                        placement="bottomRight"
                        menu={isAuthenticated ? (loggedDropDownmenu as MenuProps) : (unloggedDropDownMenu as MenuProps)}
                    >
                        <Space>
                            <Avatar src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" />
                        </Space>
                    </Dropdown>
                </div>
            </div>
        </header>
    );
};

export default Header;
