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
} from "antd";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { Food } from "./types";
import { DeleteOutlined } from "@ant-design/icons";
import { v4 } from "uuid";
import { useGetRandomListQuery } from "./useRandomListQuery";
import {
  useAddRandomListMutation,
  useDeleteRandomListMutation,
} from "./useRandomListMutation";
import ImportRandomList from "./Import";

const { Title } = Typography;
type SelectFoodProps = {
  setFoodList: Dispatch<SetStateAction<Food[]>>;
};

export function SelectFood({ setFoodList }: SelectFoodProps) {
  const [open, setOpen] = useState(false);
  const [randomListName, setRandomListName] = useState<string>(
    "Danh sách chưa đặt tên"
  );
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
      <Button onClick={() => setOpen(true)}>Chọn món</Button>
      <Drawer
        title="Chọn món"
        onClose={() => setOpen(false)}
        open={open}
        width="80%"
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
        <Row gutter={[10, 10]}>
          <Col span={24} md={12}>
            <Title level={3}>Nhập danh sách món</Title>
            <Form>
              <Form.Item label="Tên danh sách">
                <Input
                  allowClear
                  value={randomListName}
                  onChange={(event) => setRandomListName(event.target.value)}
                />
              </Form.Item>
            </Form>
            <ImportRandomList setListTemp={setListTemp} />
            <Table<Food>
              columns={columns}
              dataSource={listTemp}
              pagination={false}
            />
          </Col>
          <Col span={24} md={12}>
            <Title level={3}>Danh sách món đã lưu</Title>
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
                      Xoá
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
