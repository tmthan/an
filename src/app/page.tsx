"use client";
import { Col, Row } from "antd";
import Link from "next/link";
import { PieChartOutlined, QuestionCircleOutlined } from "@ant-design/icons";

export default function Home() {
  return (
    <Row
      justify="center"
      align="middle"
      gutter={[20, 20]}
      style={{ height: "100vh" }}
    >
      <Col>
        <Link href="/random">
          <QuestionCircleOutlined
            style={{
              fontSize: "40px",
            }}
          />
          <br />
          Hôm nay ăn gì?
        </Link>
      </Col>
      <Col>
        <Link href="/share-bill">
          <PieChartOutlined
            style={{
              fontSize: "40px",
            }}
          />
          <br />
          Chia tiền
        </Link>
      </Col>
    </Row>
  );
}
