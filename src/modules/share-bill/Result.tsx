import * as React from "react";
import { List, Table, TableProps, Badge, Tag, Space, Typography } from "antd";
import {
  BillItem,
  CalculateMode,
  Food,
  Member,
  ResultItemTable,
} from "./types";
import _ from "lodash";
import { numify } from "numify";
import { useIsDesktop } from "../share/hooks";
import ResultMobile from "./ResultMobile";
import { formatNumber } from "../share/helper";
const { Text } = Typography;

type ResultProps = {
  billItems: BillItem[];
  calculatorMode: CalculateMode;
  shippingFee: number;
  discountAmount: number;
  foodList: Food[];
  memberList: Member[];
};

export const Result = ({
  foodList,
  billItems,
  memberList,
  calculatorMode,
  discountAmount,
  shippingFee,
}: ResultProps) => {
  const memberById = _.keyBy(memberList, "id");
  const isDesktop = useIsDesktop();
  const getFoodOfMember = React.useCallback(
    (member: string) => {
      const foodById = _.keyBy(foodList, "id");
      return (
        <Space size="large">
          {billItems
            .filter((item) => item.member === member && item.quantity > 0)
            .map((item) => (
              <Badge
                key={item.id}
                count={numify(foodById[item.food].price ?? 0)}
                color="pink"
              >
                <Tag bordered={false} color="blue">
                  {item.quantity > 1 ? (
                    <>
                      <Badge count={item.quantity} color="green" />
                      {foodById[item.food]?.name}
                    </>
                  ) : (
                    foodById[item.food]?.name
                  )}
                </Tag>
              </Badge>
            ))}
        </Space>
      );
    },
    [billItems, foodList]
  );

  const columns: TableProps<ResultItemTable>["columns"] = [
    {
      title: "Tên thành viên",
      dataIndex: "member",
      key: "member",
      render: (memberId) => {
        return (
          <List.Item.Meta
            title={memberById[memberId]?.name ?? ""}
            description={getFoodOfMember(memberId)}
          />
        );
      },
    },
    {
      title: "Tổng phải trả",
      dataIndex: "money",
      key: "money",
      align: "right",
      render(value) {
        return (
          <Text strong>{formatNumber(value)}</Text>
        );
      },
    },
    {
      title: "Tổng tiền món",
      dataIndex: "totalFood",
      align: "right",
      render(value) {
        return formatNumber(value);
      },
    },
    {
      title: "Phí Ship",
      dataIndex: "shippingFee",
      align: "right",
      render(value) {
        return formatNumber(value);
      },
    },
    {
      title: "Giảm giá",
      dataIndex: "discountAmount",
      align: "right",
      render(value) {
        return "-" + formatNumber(value);
      },
    },
  ];

  const dataSource = React.useMemo((): ResultItemTable[] => {
    const billItemsValue = billItems.filter(
      (item) => item.quantity > 0 && item.member && item.food
    );
    const billItemByMember = _.groupBy(billItemsValue, "member");
    const foodById = _.keyBy(foodList, "id");
    const countMember = Object.keys(billItemByMember).length;
    const countFood = _.sumBy(billItemsValue, "quantity");
    const shippingFeePerMemberByMember = _.round(shippingFee / countMember);
    const shippingFeePerMemberByFood = _.round(shippingFee / countFood);
    const discountAmountPerMemberByMember = _.round(
      discountAmount / countMember
    );
    const discountAmountPerMemberByFood = _.round(discountAmount / countFood);

    const avrageByMember = _.round(
      (shippingFee - discountAmount) / countMember
    );
    const avrageByFood = _.round((shippingFee - discountAmount) / countFood);

    if (calculatorMode === CalculateMode.ShareByMember) {
      return Object.entries(billItemByMember).map(([memberId, billItem]) => {
        const total = _.sumBy(billItem, (item) => {
          const food = foodById[item.food];
          return (food?.price ?? 0) * item.quantity;
        });

        return {
          key: memberId,
          member: memberId,
          totalFood: total,
          shippingFee: shippingFeePerMemberByMember,
          discountAmount: discountAmountPerMemberByMember,
          money: _.round(total + avrageByMember),
        };
      });
    }

    return Object.entries(billItemByMember).map(([memberId, billItem]) => {
      const total = _.sumBy(billItem, (item) => {
        const food = foodById[item.food];
        return (food?.price ?? 0) * item.quantity;
      });
      const countQuantity = _.sumBy(
        billItem.filter((item) => item.member === memberId),
        "quantity"
      );
      return {
        key: memberId,
        member: memberId,
        totalFood: total,
        shippingFee: shippingFeePerMemberByFood * countQuantity,
        discountAmount: discountAmountPerMemberByFood * countQuantity,
        money: _.round(total + avrageByFood),
      };
    });
  }, [billItems, calculatorMode, discountAmount, foodList, shippingFee]);

  if (!isDesktop)
    return (
      <ResultMobile
        billItems={billItems}
        dataSource={dataSource}
        memberList={memberList}
        foodList={foodList}
      />
    );
  return <Table columns={columns} dataSource={dataSource} pagination={false} />;
};
