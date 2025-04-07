import * as React from "react";
import { Food } from "./types";
import {
  Col,
  Input,
  InputNumber,
  Row,
  Table,
  TableProps,
  Typography,
} from "antd";
import { v4 } from "uuid";
import { DeleteOutlined } from "@ant-design/icons";
import "./style.css";
const { Title } = Typography;

type InputFoodProps = {
  foodList: Food[];
  setFoodList: React.Dispatch<React.SetStateAction<Food[]>>;
};

export const InputFood = ({ foodList, setFoodList }: InputFoodProps) => {
  const onChangeInputName = React.useCallback(
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
          price: 0,
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
          price: price ?? 0,
        });
      }
      setFoodList(newList);
    },
    [foodList, setFoodList]
  );

  const onDeleteRow = React.useCallback(
    (index: number) => {
      const newList = foodList.filter((item, _index) => _index !== index);
      setFoodList(newList);
    },
    [foodList, setFoodList]
  );

  const columns: TableProps<Food>["columns"] = [
    {
      title: "Tên món",
      dataIndex: "name",
      key: "name",
      render(value, record, index) {
        return (
          <Input
            value={value}
            placeholder="Tab để sang ô kế tiếp"
            onChange={(event) => onChangeInputName(event.target.value, index)}
          />
        );
      },
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render(value, record, index) {
        return (
          <InputNumber
          style={{ width: "100%" }}
            value={value}
            formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            placeholder="Tab để sang ô kế tiếp"
            onChange={(value: number | null) => onChangeInputPrice(value, index)}
            suffix="đ"
            step={1000}
          />
        );
      },
    },
    {
      title: "Xoá",
      dataIndex: "delete",
      key: "delete",
      width: 20,
      render(value, record, index) {
        if (index !== foodList.length - 1) {
          return <DeleteOutlined onClick={() => onDeleteRow(index)} />;
        }
        return null;
      },
    },
  ];
  return (
    <Row>
      <Col span={24}>
        <Title level={3}>Nhập danh sách món</Title>
      </Col>
      <Col span={24}>
        <Table<Food>
          columns={columns}
          dataSource={foodList}
          pagination={false}
          className="share-bill-table"
        />
      </Col>
    </Row>
  );
};
