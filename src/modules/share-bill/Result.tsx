import * as React from "react";
import { Table, TableProps, Typography } from "antd";
import { BillItem, CalculateMode, Food, Member } from "./types";
import _ from "lodash";
const { Title } = Typography;
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
  const columns: TableProps<ResultItemTable>["columns"] = [
    {
      title: "Tên thành viên",
      dataIndex: "member",
      key: "member",
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
    const billItemsValue = billItems.filter((item) => item.quantity > 0);
    const billItemByMember = _.groupBy(billItemsValue, "member");
    const foodById = _.keyBy(foodList, "id");
    const countMember = Object.keys(billItemByMember).length;
    const countFood = _.sumBy(billItemsValue, "quantity");
    const memberById = _.keyBy(memberList, "id");

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
          member: memberById[memberId]?.name ?? "",
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
    memberList,
    shippingFee,
  ]);

  return (
    <>
      <Title level={3}>Kết Quả</Title>
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    </>
  );
};
