"use client";
import * as React from "react";
import { Button, message, Steps, theme } from "antd";
import { InputFood } from "./InputFood";
import { InputMember } from "./InputMember";
import { ShareBillConfig } from "./ShareBillConfig";
import { Result } from "./Result";
import { BillItem, CalculateMode, Food, Member } from "./types";
import { v4 } from "uuid";
import { useAddShareBillMutation } from "./useShareBillMutation";
import dayjs from "dayjs";

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
      price: 0,
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

  const steps = [
    {
      title: "Nhập danh sách món",
      content: <InputFood foodList={foodList} setFoodList={setFoodList} />,
    },
    {
      title: "Nhập danh sách thành viên",
      content: (
        <InputMember memberList={memberList} setMemberList={setMemberList} />
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
    for (const food of foodList) {
      for (const member of memberList) {
        _billItems.push({
          id: v4(),
          food: food.id,
          member: member.id,
          quantity: 0,
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
        price: 0,
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
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
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
    </>
  );
}

export default ShareBillTransaction;
