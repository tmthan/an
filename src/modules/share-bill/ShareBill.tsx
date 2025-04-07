"use client";
import * as React from "react";
import { Button, Card, Flex } from "antd";
import ShareBillTransaction from "./ShareBillTransaction";
import History from "./History";

export const ShareBill: React.FC = () => {
  const [startTransaction, setStartTransaction] = React.useState(false);

  if (startTransaction) {
    return <ShareBillTransaction setStartTransaction={setStartTransaction} />;
  }
  return (
    <Flex
      justify="center"
      align="center"
      style={{
        height: "100vh",
        background: "url('/chia-tien.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Card
        title="Chia tiền hoá đơn"
        style={{
          width: 800,
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Flex justify="center" align="center">
          <Button
            size="large"
            type="primary"
            onClick={() => {
              setStartTransaction(true);
            }}
          >
            Bắt đầu
          </Button>
        </Flex>

        <History />
      </Card>
    </Flex>
  );
};

export default ShareBill;
