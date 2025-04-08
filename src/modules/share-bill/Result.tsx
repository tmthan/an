import * as React from "react";
import { List, Table, TableProps } from "antd";
import { BillItem, CalculateMode, Food, Member } from "./types";
import _ from "lodash";
type ResultItemTable = {
  member: string;
  money: number;
};

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
  const getFoodOfMember = React.useCallback(
    (member: string) => {
      const foodById = _.keyBy(foodList, "id");
      return billItems
        .filter((item) => item.member === member && item.quantity > 0)
        .map((item) => foodById[item.food]?.name)
        .join(", ");
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
      title: "Tiền",
      dataIndex: "money",
      key: "money",
      render(value) {
        return new Intl.NumberFormat("en-US").format(value);
      },
    },
  ];

  const dataSource = React.useMemo(() => {
    const billItemsValue = billItems.filter(
      (item) => item.quantity > 0 && item.member && item.food
    );
    const billItemByMember = _.groupBy(billItemsValue, "member");
    const foodById = _.keyBy(foodList, "id");
    const countMember = Object.keys(billItemByMember).length;
    const countFood = _.sumBy(billItemsValue, "quantity");

    const avrageByMember = _.round(
      (shippingFee - discountAmount) / countMember
    );
    const avrageByFood = _.round((shippingFee - discountAmount) / countFood);

    if (calculatorMode === CalculateMode.ShareByMember) {
      return Object.entries(billItemByMember).map(([memberId, billItem]) => {
        const food = foodById[billItem[0].food];
        const total = _.sumBy(
          billItem,
          (item) => (food?.price ?? 0) * item.quantity
        );

        return {
          key: memberId,
          member: memberId,
          money: _.round(total + avrageByMember),
        };
      });
    }

    return Object.entries(billItemByMember).map(([memberId, billItem]) => {
      const food = foodById[billItem[0].food];
      const total = _.sumBy(
        billItem,
        (item) => (food?.price ?? 0) * item.quantity
      );
      return {
        key: memberId,
        member: memberById[memberId]?.name ?? "",
        money: _.round(total + avrageByFood),
      };
    });
  }, [
    billItems,
    calculatorMode,
    discountAmount,
    foodList,
    memberById,
    shippingFee,
  ]);

  return <Table columns={columns} dataSource={dataSource} pagination={false} />;
};
