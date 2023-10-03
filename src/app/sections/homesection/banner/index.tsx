"use client";
import { useRouter } from "next/navigation";
import { Button, Carousel, Col, Row } from "antd";
import Container from "@src/app/Components/Base/Container";
import { Heading } from "@src/app/Components";

const Banner = () => {
    const { push } = useRouter();
    return (
        <section>
            <Carousel autoplay>
                <div className="banner banner-slide-1">
                    <Container>
                        <Row>
                            <Col span={24} className="content">
                                <Heading heading="Online Shopping Store" colorwhite={true} />
                                <p className="food-detail">
                                    perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus
                                    <br />
                                    error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio
                                    <br />
                                    esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium
                                    <br />
                                    perferendis.
                                </p>
                            </Col>
                            <Col className="col-button">
                                <Button
                                    type="default"
                                    size="large"
                                    className="contact-us"
                                    onClick={() => push("/contactus")}
                                >
                                    CONTACT US
                                </Button>
                                <Button type="primary" size="large">
                                    Read More
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="banner banner-slide-2">
                    <Container>
                        <Row>
                            <Col span={24} className="content">
                                <Heading heading="Online Shopping Store" colorwhite={true} />
                                <p className="food-detail">
                                    perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus
                                    <br />
                                    error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio
                                    <br />
                                    esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium
                                    <br />
                                    perferendis.
                                </p>
                            </Col>
                            <Col className="col-button">
                                <Button type="default" size="large" className="contact-us">
                                    CONTACT US
                                </Button>
                                <Button type="primary" size="large">
                                    Read More
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="banner banner-slide-3">
                    <Container>
                        <Row>
                            <Col span={24} className="content">
                                <Heading heading="Online Shopping Store" colorwhite={true} />
                                <p className="food-detail">
                                    perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus
                                    <br />
                                    error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio
                                    <br />
                                    esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium
                                    <br />
                                    perferendis.
                                </p>
                            </Col>
                            <Col className="col-button">
                                <Button type="default" size="large" className="contact-us">
                                    CONTACT US
                                </Button>
                                <Button type="primary" size="large">
                                    Read More
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="banner banner-slide-4">
                    <Container>
                        <Row>
                            <Col span={24} className="content">
                                <Heading heading="Online Shopping Store" colorwhite={true} />
                                <p className="food-detail">
                                    perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus
                                    <br />
                                    error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio
                                    <br />
                                    esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium
                                    <br />
                                    perferendis.
                                </p>
                            </Col>
                            <Col className="col-button">
                                <Button type="default" size="large" className="contact-us">
                                    CONTACT US
                                </Button>
                                <Button type="primary" size="large">
                                    Read More
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="banner banner-slide-5">
                    <Container>
                        <Row>
                            <Col span={24} className="content">
                                <Heading heading="Online Shopping Store" colorwhite={true} />
                                <p className="food-detail">
                                    perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus
                                    <br />
                                    error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio
                                    <br />
                                    esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium
                                    <br />
                                    perferendis.
                                </p>
                            </Col>
                            <Col className="col-button">
                                <Button type="default" size="large" className="contact-us">
                                    CONTACT US
                                </Button>
                                <Button type="primary" size="large">
                                    Read More
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Carousel>
        </section>
    );
};

export default Banner;
