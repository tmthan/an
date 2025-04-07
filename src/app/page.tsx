import { Card, Col, Flex, Row } from "antd";
import Link from "next/link";
import { PieChartOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Ăn uống - Tại sao vậy em",
    description: "Ăn uống và chia hoá đơn",
  };
}

export default function Home() {
  return (
    <Row
      justify="center"
      align="middle"
      gutter={[40, 40]}
      style={{
        height: "100vh",
        backgroundImage: "url('/khu-pho.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Col>
        <Card
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Link href="/random">
            <Flex gap="middle" align="center" vertical>
              <div>
                <QuestionCircleOutlined
                  style={{
                    fontSize: "80px",
                  }}
                />
              </div>
              <div>Hôm nay ăn gì?</div>
            </Flex>
          </Link>
        </Card>
      </Col>
      <Col>
        <Card
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Link href="/share-bill">
            <Flex gap="middle" align="center" vertical>
              <div>
                <PieChartOutlined
                  style={{
                    fontSize: "80px",
                  }}
                />
              </div>
              <div>Chia tiền hoá đơn</div>
            </Flex>
          </Link>
        </Card>
      </Col>
    </Row>
  );
}
