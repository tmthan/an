import * as React from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { BillItem, CalculateMode, Food, Member } from "./types";
import {
  Badge,
  Button,
  Col,
  Form,
  InputNumber,
  List,
  Modal,
  Radio,
  Row,
  Space,
  Tag,
} from "antd";
import FormItem from "antd/es/form/FormItem";
import _ from "lodash";

type ShareBillConfigMobileProps = {
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

export function ShareBillConfigMobile({
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
}: ShareBillConfigMobileProps) {
  const [edittingMember, setEdittingMember] = React.useState<Member>();
  const [isOpen, setIsOpen] = React.useState(false);

  const getFoodOfMember = React.useCallback(
    (member: string) => {
      const foodById = _.keyBy(foodList, "id");
      return (
        <Space size="large">
          {billItems
            .filter((item) => item.member === member && item.quantity > 0)
            .map((item) => (
              <Tag bordered={false} color="blue" key={item.id}>
                {item.quantity > 1 ? (
                  <>
                    <Badge count={item.quantity} color="green" />
                    {foodById[item.food]?.name}
                  </>
                ) : (
                  foodById[item.food]?.name
                )}
              </Tag>
            ))}
        </Space>
      );
    },
    [billItems, foodList]
  );

  function onEditMember(member: Member) {
    setEdittingMember(member);
    setIsOpen(true);
  }

  const renderSelectList = React.useMemo(() => {
    return (
      <List
        dataSource={memberList.filter((item) => item.name)}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                key={"edit"}
                type="primary"
                onClick={() => onEditMember(item)}
              >
                Sửa
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={item.name}
              description={getFoodOfMember(item.id)}
            ></List.Item.Meta>
          </List.Item>
        )}
      />
    );
  }, [getFoodOfMember, memberList]);
  const onChangeInputNumber = React.useCallback(
    (value: number, foodId: string, memberId: string) => {
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
    },
    [billItems, setBillItems]
  );

  const onSubQuantity = React.useCallback(
    (foodId: string, memberId: string) => {
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
    },
    [billItems, setBillItems]
  );

  const onAddQuantity = React.useCallback(
    (foodId: string, memberId: string) => {
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
    },
    [billItems, setBillItems]
  );
  const renderEditFood = React.useMemo(() => {
    return (
      <List
        dataSource={foodList.filter((food) => food.name)}
        renderItem={(item) => {
          const record = billItems.find(
            (billItem) =>
              billItem.food === item.id &&
              billItem.member === edittingMember?.id
          );
          const value = record?.quantity ?? 0;
          return (
            <List.Item
              actions={[
                <Space key="change-quantity">
                  {value > 0 && (
                    <Button
                      shape="circle"
                      onClick={() =>
                        onSubQuantity(
                          record?.food ?? "",
                          edittingMember?.id ?? ""
                        )
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
                          record?.food ?? "",
                          edittingMember?.id ?? ""
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
                      onAddQuantity(
                        record?.food ?? "",
                        edittingMember?.id ?? ""
                      )
                    }
                  ></Button>
                </Space>,
              ]}
            >
              <List.Item.Meta title={item.name} />
            </List.Item>
          );
        }}
      />
    );
  }, [
    billItems,
    edittingMember?.id,
    foodList,
    onAddQuantity,
    onChangeInputNumber,
    onSubQuantity,
  ]);

  return (
    <div>
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} autoComplete="off">
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
      {renderSelectList}
      <Modal
        open={isOpen}
        title={edittingMember?.name}
        closeIcon={false}
        footer={
          <Button type="primary" onClick={() => setIsOpen(false)}>
            Xong
          </Button>
        }
      >
        {renderEditFood}
      </Modal>
    </div>
  );
}

export default ShareBillConfigMobile;
