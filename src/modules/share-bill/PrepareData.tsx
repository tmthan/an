import * as React from "react";
import { Food, Member } from "./types";
import { Col, Divider, Input, InputNumber, Modal, Row, Typography } from "antd";
import { v4 } from "uuid";
import { useIsDesktop } from "../share/hooks";
const { Title, Paragraph } = Typography;

type PrepareDataProps = {
  foodList: Food[];
  setFoodList: React.Dispatch<React.SetStateAction<Food[]>>;
  memberList: Member[];
  setMemberList: React.Dispatch<React.SetStateAction<Member[]>>;
};

export function PrepareData({
  foodList,
  setFoodList,
  memberList,
  setMemberList,
}: PrepareDataProps) {
  const maxLength = Math.max(foodList.length, memberList.length);
  const isDesktop = useIsDesktop();
  const [isOpenHelp, setIsOpenHelp] = React.useState(false);

  const onChangeInputMemberName = React.useCallback(
    (name: string, index: number) => {
      const newList = memberList.map((item, _index) => {
        if (index === _index) {
          return {
            ...item,
            name,
          };
        }
        return item;
      });
      if (index === memberList.length - 1) {
        newList.push({
          id: v4(),
          name: "",
        });
      }
      setMemberList(newList);
    },
    [memberList, setMemberList]
  );

  const onChangeInputFoodName = React.useCallback(
    (name: string, index: number) => {
      const newList = foodList.map((item, _index) => {
        if (index === _index) {
          return {
            ...item,
            name,
          };
        }
        return item;
      });
      if (index === foodList.length - 1) {
        newList.push({
          id: v4(),
          name: "",
          price: null,
        });
      }
      setFoodList(newList);
    },
    [foodList, setFoodList]
  );

  const onChangeInputPrice = React.useCallback(
    (price: number | null, index: number) => {
      const newList = foodList.map((item, _index) => {
        if (index === _index) {
          return {
            ...item,
            price: price ?? 0,
          };
        }
        return item;
      });
      if (index === foodList.length - 1) {
        newList.push({
          id: v4(),
          name: "",
          price: price ?? null,
        });
      }
      setFoodList(newList);
    },
    [foodList, setFoodList]
  );

  const renderRow = React.useMemo(() => {
    const row = [];
    for (let i = 0; i < maxLength; i++) {
      row.push(
        <>
          <Row
            key={memberList[i]?.id ?? foodList[i].id ?? i}
            gutter={[10, 10]}
            style={{ marginBottom: 8 }}
          >
            <Col span={24} md={10}>
              {memberList[i] && (
                <Input
                  value={memberList[i]?.name ?? null}
                  placeholder={
                    isDesktop ? "Tab để sang ô kế tiếp" : "Tên thành viên"
                  }
                  onChange={(event) =>
                    onChangeInputMemberName(event.target.value, i)
                  }
                />
              )}
            </Col>
            {foodList[i] ? (
              <>
                <Col span={24} md={10}>
                  <Input
                    value={foodList[i]?.name ?? null}
                    placeholder={
                      isDesktop ? "Tab để sang ô kế tiếp" : "Tên món"
                    }
                    onChange={(event) =>
                      onChangeInputFoodName(event.target.value, i)
                    }
                  />
                </Col>
                <Col span={24} md={4}>
                  <InputNumber
                    style={{ width: "100%" }}
                    value={foodList[i]?.price ?? null}
                    formatter={(value) =>
                      `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                    placeholder={
                      isDesktop ? "Tab để sang ô kế tiếp" : "Giá tiền"
                    }
                    onChange={(value: number | null) =>
                      onChangeInputPrice(value, i)
                    }
                    suffix="đ"
                    step={1000}
                  />
                </Col>
              </>
            ) : null}
          </Row>
          {i < maxLength - 1 && !isDesktop && <Divider />}
        </>
      );
    }
    return row;
  }, [
    foodList,
    isDesktop,
    maxLength,
    memberList,
    onChangeInputFoodName,
    onChangeInputMemberName,
    onChangeInputPrice,
  ]);

  return (
    <>
      {isDesktop && (
        <Row gutter={[10, 10]}>
          <Col span={24} md={10}>
            <Title level={5}>Tên thành viên</Title>
          </Col>
          <Col span={24} md={10}>
            <Title level={5}>Tên món</Title>
          </Col>
          <Col span={24} md={4}>
            <Title level={5}>Giá tiền</Title>
          </Col>
        </Row>
      )}
      {renderRow}
      <Row>
        <Col span={24}>
          <a onClick={() => setIsOpenHelp(true)}>Có nhiều người đặt món giống nhau?</a>
        </Col>
      </Row>
      <Modal footer={null} open={isOpenHelp} onCancel={() => setIsOpenHelp(false)}>
        <Title level={4}>Có nhiều hơn một người cùng đặt món giống nhau?</Title>
        <Paragraph>
          Đừng lo. Bạn chỉ cần nhập tên những người ấy vào ô tên thành viên ở cuối
          danh sách và bỏ trống các cột tên món và giá. Giao diện ở bước tiếp
          theo sẽ cho bạn lựa chọn những người nào đặt món ấy.
        </Paragraph>
        <Title level={4}>Có một người đặt nhiều món?</Title>
        <Paragraph>
          Cũng tương tự như trên. Bạn chỉ việc nhập tên và giá của món đó ở cột
          tên và món vào cuối danh sách. Giao diện ở bước tiếp theo sẽ giúp bạn
          lựa chọn người nào đặt những món nào.
        </Paragraph>
      </Modal>
    </>
  );
}

export default PrepareData;
