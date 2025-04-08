"use client";
import * as React from "react";
import { BillItem, CalculateMode, Food, Member } from "./types";
import { Button, Col, Form, InputNumber, Radio, Row, Space, Table } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";
import "./style.css";
import { useIsDesktop } from "../share/hooks";
import Paragraph from "antd/es/typography/Paragraph";

type ShareBillConfigProps = {
  foodList: Food[];
  memberList: Member[];
  billItems: BillItem[];
  setBillItems: React.Dispatch<React.SetStateAction<BillItem[]>>;
  shippingFee: number;
  setShippingFee: React.Dispatch<React.SetStateAction<number>>;
  discountAmount: number;
  setDiscountAmount: React.Dispatch<React.SetStateAction<number>>;
  calculatorMode: CalculateMode;
  setCalculatorMode: React.Dispatch<React.SetStateAction<CalculateMode>>;
};

export const ShareBillConfig = ({
  foodList,
  memberList,
  billItems,
  setBillItems,
  shippingFee,
  setShippingFee,
  discountAmount,
  setDiscountAmount,
  calculatorMode,
  setCalculatorMode,
}: ShareBillConfigProps) => {
  const isDesktop = useIsDesktop();
  function onChangeInputNumber(
    value: number,
    foodId: string,
    memberId: string
  ) {
    const newList = billItems.map((item) => {
      if (item.food === foodId && item.member === memberId) {
        return {
          ...item,
          quantity: value,
        };
      }
      return item;
    });
    setBillItems(newList);
  }

  function onSubQuantity(foodId: string, memberId: string) {
    const newList = billItems.map((item) => {
      if (item.food === foodId && item.member === memberId) {
        return {
          ...item,
          quantity: Math.max(item.quantity - 1, 0),
        };
      }
      return item;
    });
    setBillItems(newList);
  }

  function onAddQuantity(foodId: string, memberId: string) {
    const newList = billItems.map((item) => {
      if (item.food === foodId && item.member === memberId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setBillItems(newList);
  }
  const columns = [
    { title: "Tên món", dataIndex: "foodName", key: "foodName" },
  ].concat(
    memberList
      .filter((item) => item.name)
      .map((member) => ({
        title: member.name,
        dataIndex: member.id,
        key: member.id,
        render(value: number, record: Record<string, unknown>) {
          return (
            <Space>
              {value > 0 && (
                <Button
                  shape="circle"
                  onClick={() =>
                    onSubQuantity(record.foodId as string, member.id)
                  }
                  icon={<MinusOutlined />}
                  size="small"
                ></Button>
              )}
              {value > 0 && (
                <InputNumber
                  value={value}
                  onChange={(_val) =>
                    onChangeInputNumber(
                      _val ?? 0,
                      record.foodId as string,
                      member.id
                    )
                  }
                  style={{ width: 50 }}
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                />
              )}
              <Button
                shape="circle"
                icon={<PlusOutlined />}
                size="small"
                onClick={() =>
                  onAddQuantity(record.foodId as string, member.id)
                }
              ></Button>
            </Space>
          );
        },
      }))
  );
  const dataSource = React.useMemo(() => {
    const data: Record<string, unknown>[] = [];
    for (const food of foodList.filter((item) => item.name)) {
      const item: Record<string, unknown> = {
        key: food.id,
        foodName: food.name,
        foodId: food.id,
        quantity: 0,
      };
      for (const member of memberList.filter((item) => item.name)) {
        const billItem = billItems.find(
          (item) => item.food === food.id && item.member === member.id
        );
        item[member.id] = billItem ? billItem.quantity : 0;
      }
      data.push(item);
    }
    return data;
  }, [foodList, memberList, billItems]);
  return (
    <Row>
      <Col span={24}>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
        >
          <Row gutter={[20, 20]}>
            <Col span={24} md={12}>
              <FormItem label="Phí vận chuyện + phụ phí">
                <InputNumber
                  value={shippingFee}
                  onChange={(val) => setShippingFee(val ?? 0)}
                  suffix="đ"
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  step={1000}
                  style={{ width: "100%" }}
                />
              </FormItem>
            </Col>
            <Col span={24} md={12}>
              <FormItem label="Giảm giá">
                <InputNumber
                  value={discountAmount}
                  onChange={(val) => setDiscountAmount(val ?? 0)}
                  suffix="đ"
                  step={1000}
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  style={{ width: "100%" }}
                />
              </FormItem>
            </Col>
          </Row>
          <Row gutter={[20, 20]}>
            <Col span={24} md={12}>
              <Form.Item name="radio-button" label="Cách chia">
                <Radio.Group
                  onChange={(e) => setCalculatorMode(e.target.value)}
                  value={calculatorMode}
                >
                  <Radio value={CalculateMode.ShareByMember}>
                    Chia theo đầu người
                  </Radio>
                  <Radio value={CalculateMode.ShareByFood}>Chia theo món</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
      {!isDesktop && (
        <Paragraph>
          Giao diện dành riêng cho điện thoại sẽ sớm được cập nhật
        </Paragraph>
      )}
      <Col span={24}>
        <Table
          scroll={{ y: 55 * 5, x: "max-content" }}
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          className="share-bill-table"
        />
      </Col>
    </Row>
  );
};
