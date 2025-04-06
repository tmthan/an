"use client";
import * as React from "react";
import { Button } from "antd";
import ShareBillTransaction from "./ShareBillTransaction";
import History from "./History";

export const ShareBill: React.FC = () => {
  const [startTransaction, setStartTransaction] = React.useState(false);

  if (startTransaction) {
    return <ShareBillTransaction setStartTransaction={setStartTransaction} />;
  }
  return (
    <div>
      <h1>Chia tiền</h1>
      <Button
        type="primary"
        onClick={() => {
          setStartTransaction(true);
        }}
      >
        Bắt đầu
      </Button>
      <History />
    </div>
  );
};

export default ShareBill;
