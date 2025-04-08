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
      className="app-container"
      style={{
        background: "url('/chia-tien.jpeg')",
      }}
    >
      <Card title="Chia tiền hoá đơn" className="app-card share-bill-card">
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
