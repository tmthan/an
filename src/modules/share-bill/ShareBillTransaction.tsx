"use client";
import * as React from "react";
import { Button, Card, Divider, Flex, message, Steps, theme } from "antd";
import { ShareBillConfig } from "./ShareBillConfig";
import { Result } from "./Result";
import { BillItem, CalculateMode, Food, Member } from "./types";
import { v4 } from "uuid";
import { useAddShareBillMutation } from "./useShareBillMutation";
import dayjs from "dayjs";
import PrepareData from "./PrepareData";
import { useIsDesktop } from "../share/hooks";

type ShareBillTransactionProps = {
  setStartTransaction: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ShareBillTransaction({
  setStartTransaction,
}: ShareBillTransactionProps) {
  const { token } = theme.useToken();
  const [current, setCurrent] = React.useState(0);
  const [foodList, setFoodList] = React.useState<Food[]>([
    {
      id: v4(),
      name: "",
      price: null,
    },
  ]);
  const [memberList, setMemberList] = React.useState<Member[]>([
    {
      id: v4(),
      name: "",
    },
  ]);
  const [billItems, setBillItems] = React.useState<BillItem[]>([]);
  const [shippingFee, setShippingFee] = React.useState(0);
  const [discountAmount, setDiscountAmount] = React.useState(0);
  const [calculatorMode, setCalculatorMode] = React.useState<CalculateMode>(
    CalculateMode.ShareByMember
  );
  const { mutate: saveShareBillLogMutation } = useAddShareBillMutation();
  const isDesktop = useIsDesktop();
  const steps = [
    {
      title: "Nhập dữ liệu",
      content: (
        <PrepareData
          foodList={foodList}
          setFoodList={setFoodList}
          memberList={memberList}
          setMemberList={setMemberList}
        />
      ),
    },
    {
      title: "Chia tiền",
      content: (
        <ShareBillConfig
          foodList={foodList}
          memberList={memberList}
          billItems={billItems}
          setBillItems={setBillItems}
          shippingFee={shippingFee}
          setShippingFee={setShippingFee}
          discountAmount={discountAmount}
          setDiscountAmount={setDiscountAmount}
          calculatorMode={calculatorMode}
          setCalculatorMode={setCalculatorMode}
        />
      ),
    },
    {
      title: "Kết quả",
      content: (
        <Result
          foodList={foodList}
          billItems={billItems}
          calculatorMode={calculatorMode}
          shippingFee={shippingFee}
          discountAmount={discountAmount}
          memberList={memberList}
        />
      ),
    },
  ];

  const initCalculator = () => {
    const _billItems: BillItem[] = [];
    for (const [foodIndex, food] of foodList
      .filter((item) => item.name)
      .entries()) {
      for (const [memberIndex, member] of memberList
        .filter((item) => item.name)
        .entries()) {
        _billItems.push({
          id: v4(),
          food: food.id,
          member: member.id,
          quantity: foodIndex === memberIndex ? 1 : 0,
        });
      }
    }
    setBillItems(_billItems);
  };

  const next = () => {
    if (current === steps.length - 3) {
      initCalculator();
    }
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onDone = () => {
    saveShareBillLogMutation({
      foodList,
      memberList,
      billItems,
      shippingFee,
      discountAmount,
      calculatorMode,
      created_at: new Date(),
      id: v4(),
      name: `Chia tiền ngày ${dayjs().format("DD/MM/YYYY HH:mm:ss")}`,
    });
    setFoodList([
      {
        id: v4(),
        name: "",
        price: null,
      },
    ]);
    setMemberList([
      {
        id: v4(),
        name: "",
      },
    ]);
    setBillItems([]);
    setShippingFee(0);
    setCurrent(0);
    setDiscountAmount(0);
    setCalculatorMode(CalculateMode.ShareByMember);
    setStartTransaction(false);
  };
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    color: token.colorTextTertiary,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <Flex
      justify="center"
      align="center"
      style={{
        height: "100vh",
        background: "url('/ban-tiec.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: 20,
        overflow: "auto",
      }}
    >
      <Card
        style={{
          width: "100%",
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
        }}
        styles={{
          body: {
            overflow: "auto",
            height: "calc(100vh - 100px)",
          },
        }}
      >
        <Steps current={current} items={items} />
        {!isDesktop && <Divider />}
        <div style={contentStyle} className="transaction-wrapper">
          {steps[current].content}
        </div>
        <Divider />
        <div>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Tiếp
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => {
                message.success("Processing complete!");
                onDone();
              }}
            >
              Xong
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Trước
            </Button>
          )}
        </div>
      </Card>
    </Flex>
  );
}

export default ShareBillTransaction;
