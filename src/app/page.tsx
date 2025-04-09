import { Card, Col, Flex, Row } from "antd";
import Link from "next/link";
import { Metadata, Viewport } from "next";
import Image from "next/image";

export function generateMetadata(): Metadata {
  return {
    title: "Ăn uống - Tại sao vậy em",
    description: "Ăn uống và chia hoá đơn",
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Home() {
  return (
    <Row
      justify="center"
      align="middle"
      gutter={[40, 40]}
      style={{
        backgroundImage: "url('/khu-pho.jpeg')",
      }}
      className="app-container"
    >
      <Col>
        <Card className="menu-item">
          <Link href="/random">
            <Flex gap="small" align="center" vertical>
              <Image
                src="/suy-nghi-hom-nay-an-gi.jpg"
                alt="Hôm nay ăn gì"
                width={120}
                height={120}
                className="img"
              />
              <div>Hôm nay ăn gì?</div>
            </Flex>
          </Link>
        </Card>
      </Col>
      <Col>
        <Card className="menu-item">
          <Link href="/share-bill">
            <Flex gap="small" align="center" vertical>
              <Image
                src="/chia-tien-cung-nhau.jpeg"
                alt="Chia tiền hoá đơn"
                width={120}
                height={120}
                className="img"
              />
              <div>Chia tiền hoá đơn</div>
            </Flex>
          </Link>
        </Card>
      </Col>
    </Row>
  );
}
