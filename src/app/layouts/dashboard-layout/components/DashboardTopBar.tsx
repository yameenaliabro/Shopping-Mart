import { Col, Row, theme, Typography, Menu, Badge } from "antd";
// import "./Header.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import useAuth from "@src/app/hooks/useAuth";

const loggedOutHeaderMenu = [
    { label: "Home", key: "" },
    { label: "AllProduct", key: "allproduct" },
    { label: "Cart", key: "cart" },
    { label: "Sign In", key: "signin" },
    { label: "History", key: "history" },
];
const loggedInHeaderMenu = [
    { label: "Home", key: "" },
    { label: "AllProduct", key: "allproduct" },
    { label: "Cart", key: "cart" },
    { label: "Orders", key: "orders" },
];

const Header = () => {
    const { isAuthenticated } = useAuth();
    const { token } = theme.useToken();
    const { push } = useRouter();
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
                            Daraz App
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
                <Col xs={1} lg={1}>
                    <Badge
                        color={token.colorSuccess}
                        style={{ borderColor: token.colorSuccess }}
                        // count={cart.length}
                    >
                        <HiOutlineShoppingBag style={{ color: token.colorSuccess }} size={30} />
                    </Badge>
                </Col>
            </Row>

            {/* </Container> */}
        </header>
    );
};

export default Header;
