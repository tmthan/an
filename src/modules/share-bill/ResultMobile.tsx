import * as React from "react";
import { Divider, List, Modal, Typography } from "antd";
import { BillItem, Food, Member, ResultItemTable } from "./types";
import _ from "lodash";
import { formatNumber } from "../share/helper";
const { Text } = Typography;

type ResultMobileProp = {
  billItems: BillItem[];
  dataSource: ResultItemTable[];
  memberList: Member[];
  foodList: Food[];
};

export function ResultMobile({
  dataSource,
  memberList,
  foodList,
  billItems,
}: ResultMobileProp) {
  const memberById = _.keyBy(memberList, "id");
  const foodById = _.keyBy(foodList, "id");
  const [selectedDetail, setSelectedDetail] = React.useState<ResultItemTable>();
  const [isOpenDetail, setIsOpenDetail] = React.useState(false);

  const foodOfMember = React.useMemo(() => {
    return billItems
      .filter(
        (item) => item.member === selectedDetail?.member && item.quantity > 0
      )
      .map((item, index) => (
        <div key={item.id}>
          {index !== 0 && <Divider />}
          Tên món: {foodById[item.food]?.name}
          <br />
          Số lượng: {item.quantity}
          <br />
          Giá tiền: {formatNumber(foodById[item.food]?.price ?? 0)}
        </div>
      ));
  }, [billItems, foodById, selectedDetail?.member]);
  return (
    <>
      <List
        dataSource={dataSource}
        itemLayout="horizontal"
        renderItem={(item) => (
          <List.Item
            actions={[
              <a
                key="detail"
                onClick={() => {
                  setIsOpenDetail(true);
                  setSelectedDetail(item);
                }}
              >
                Chi tiết
              </a>,
            ]}
          >
            <List.Item.Meta title={memberById[item.member]?.name} />
            <div>{formatNumber(item.money)}</div>
          </List.Item>
        )}
      />
      <Modal
        onCancel={() => setIsOpenDetail(false)}
        open={isOpenDetail}
        title={_.get(memberById, [selectedDetail?.member ?? "", "name"])}
        footer={null}
      >
        Tổng phải trả: <Text strong>{formatNumber(selectedDetail?.money)}</Text>
        <Divider />
        {foodOfMember}
        <Divider />
        Tổng tiền: <Text strong>{formatNumber(selectedDetail?.totalFood)}</Text>
        <br />
        Phí ship:{" "}
        <Text strong>{formatNumber(selectedDetail?.shippingFee)}</Text>
        <br />
        Giảm giá:{" "}
        <Text strong>{formatNumber(selectedDetail?.discountAmount)}</Text>
      </Modal>
    </>
  );
}

export default ResultMobile;
