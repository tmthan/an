import * as React from "react";
import { Member } from "./types";
import { v4 } from "uuid";
import { Col, Input, Row, Table, TableProps, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
const { Title } = Typography;

type InputMemberProps = {
  memberList: Member[];
  setMemberList: React.Dispatch<React.SetStateAction<Member[]>>;
};

export const InputMember = ({
  memberList,
  setMemberList,
}: InputMemberProps) => {
  const onChangeInputName = React.useCallback(
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

  const onDeleteRow = React.useCallback(
    (index: number) => {
      const newList = memberList.filter((item, _index) => _index !== index);
      setMemberList(newList);
    },
    [memberList, setMemberList]
  );

  const columns: TableProps<Member>["columns"] = [
    {
      title: "Tên thành viên",
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
      title: "Xoá",
      dataIndex: "delete",
      key: "delete",
      width: 20,
      render(value, record, index) {
        if (index !== memberList.length - 1) {
          return <DeleteOutlined onClick={() => onDeleteRow(index)} />;
        }
        return null;
      },
    },
  ];
  return (
    <Row>
      <Col span={24}>
        <Title level={3}>Nhập danh sách thành viên</Title>
      </Col>
      <Col span={24}>
        <Table<Member>
          columns={columns}
          dataSource={memberList}
          pagination={false}
        />
      </Col>
    </Row>
  );
};
