"use client";
import {
  Button,
  Col,
  Drawer,
  Row,
  Table,
  TableProps,
  Typography,
  Input,
  Form,
  List,
  Divider,
} from "antd";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { Food } from "./types";
import { BarsOutlined, DeleteOutlined } from "@ant-design/icons";
import { v4 } from "uuid";
import { useGetRandomListQuery } from "./useRandomListQuery";
import {
  useAddRandomListMutation,
  useDeleteRandomListMutation,
} from "./useRandomListMutation";
import ImportRandomList from "./Import";
import "./style.css";

const { Title } = Typography;
type SelectFoodProps = {
  setFoodList: Dispatch<SetStateAction<Food[]>>;
};

export function SelectFood({ setFoodList }: SelectFoodProps) {
  const [open, setOpen] = useState(false);
  const [randomListName, setRandomListName] =
    useState<string>("Menu chưa đặt tên");
  const [listTemp, setListTemp] = useState<Food[]>([{ id: v4(), name: "" }]);
  const { data: randomList } = useGetRandomListQuery();
  const { mutate: addRandomListMutation } = useAddRandomListMutation();
  const { mutate: deleteRandomListMutation } = useDeleteRandomListMutation();
  const onChangeInput = useCallback(
    (name: string, index: number) => {
      const newList = listTemp.map((item, _index) => {
        if (index === _index) {
          return {
            ...item,
            name,
          };
        }
        return item;
      });
      if (index === listTemp.length - 1) {
        newList.push({
          id: v4(),
          name: "",
        });
      }
      setListTemp(newList);
    },
    [listTemp]
  );

  const onDeleteRow = useCallback(
    (index: number) => {
      const newList = listTemp.filter((item, _index) => _index !== index);
      setListTemp(newList);
    },
    [listTemp]
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
            placeholder="Tab để sang dòng kế tiếp"
            onChange={(event) => onChangeInput(event.target.value, index)}
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
        if (index !== listTemp.length - 1) {
          return <DeleteOutlined onClick={() => onDeleteRow(index)} />;
        }
        return null;
      },
    },
  ];

  function resetForm() {
    setRandomListName("Danh sách chưa đặt tên");
    setListTemp([
      {
        id: v4(),
        name: "",
      },
    ]);
  }

  function onOk() {
    const listItem = listTemp.filter((item) => item.name);
    addRandomListMutation({
      name: randomListName,
      list: listItem,
    });
    setFoodList(listItem);
    resetForm();
    setOpen(false);
  }

  return (
    <>
      <Button
        size="small"
        onClick={() => setOpen(true)}
        icon={<BarsOutlined />}
      >
        Menu
      </Button>
      <Drawer
        title="Menu"
        onClose={() => setOpen(false)}
        open={open}
        width="80%"
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
        }}
        footer={
          <Row justify="end">
            <Col>
              <Button type="primary" onClick={onOk}>
                Xong
              </Button>
            </Col>
          </Row>
        }
      >
        <Row gutter={[20, 0]}>
          <Col span={24} md={12}>
            <Title level={3}>Nhập Menu</Title>
            <Table<Food>
              columns={columns}
              dataSource={listTemp}
              pagination={false}
              className="random-table"
            />
          </Col>
          <Col span={24} md={12}>
            <Title level={3}>Lưu Menu</Title>
            <Form>
              <Form.Item label="Tên Menu">
                <Input
                  allowClear
                  value={randomListName}
                  onChange={(event) => setRandomListName(event.target.value)}
                  style={{
                    background: "rgba(255,255,255,0.3)",
                    border: "none",
                  }}
                />
              </Form.Item>
            </Form>
            <ImportRandomList setListTemp={setListTemp} />
            <Divider />
            <Title level={3}>Menu đã lưu</Title>
            <List
              itemLayout="horizontal"
              dataSource={randomList ?? []}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <a
                      key="delete"
                      onClick={() => {
                        deleteRandomListMutation(item.id);
                      }}
                    >
                      <DeleteOutlined />
                    </a>,
                  ]}
                >
                  <List.Item.Meta
                    title={
                      <a
                        onClick={() => {
                          setFoodList(item.items);
                          setOpen(false);
                        }}
                      >
                        {item.name}
                      </a>
                    }
                    description={item.items.map((food) => food.name).join(", ")}
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Drawer>
    </>
  );
}
