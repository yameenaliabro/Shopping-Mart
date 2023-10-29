import React from "react";
import Container from "./Container";
import { Col, Row, Space } from "antd";
import Link from "next/link";

function InnerPageBanner({ title }: { title: string }) {
    return (
        <section className="inner_banner">
            <Container>
                <Row>
                    <Col span={24}>
                        <Space direction="vertical">
                            <div>
                                <Link href="/">
                                    <span style={{ color: "white" }}>Home</span>/
                                    <span>{(title && title) || "Page Title"}</span>
                                </Link>
                            </div>
                        </Space>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default InnerPageBanner;
