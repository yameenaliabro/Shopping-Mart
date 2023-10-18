import { Col, Row, theme, Typography, Menu, Badge, Dropdown, Avatar, MenuProps } from "antd";
import { FaUser, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useAuth from "@src/app/hooks/useAuth";
import useCart from "@src/app/hooks/useCart";
import { ShoppingCartOutlined } from "@ant-design/icons";
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
            {/* <Container> */}
            <Row justify="center" align="middle">
                <Col
                    xs={12}
                    lg={6}
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
                </Col>
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
                <Col xs={10} lg={1}>
                    <Badge
                        color={token.colorSuccess}
                        style={{ borderColor: token.colorSuccess }}
                        count={cart.totalItems}
                    >
                        <ShoppingCartOutlined style={{ color: token.colorSuccess }} size={100} />
                    </Badge>
                </Col>
                <Dropdown
                    arrow
                    placement="bottomRight"
                    menu={isAuthenticated ? (loggedDropDownmenu as MenuProps) : (unloggedDropDownMenu as MenuProps)}
                >
                    <Avatar src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" />
                </Dropdown>
            </Row>

            {/* </Container> */}
        </header>
    );
};

export default Header;
