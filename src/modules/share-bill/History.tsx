import * as React from "react";
import { Modal, Table, TableProps, Typography } from "antd";
import { useGetShareBillQuery } from "./useShareBillQuery";
import { ShareBillLog } from "./types";
import { Result } from "./Result";

const { Title } = Typography;
export function History() {
  const { data } = useGetShareBillQuery();
  const [selectedLog, setSelectedLog] = React.useState<ShareBillLog | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const columns: TableProps<ShareBillLog>["columns"] = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render(value, record) {
        return (
          <a
            onClick={() => {
              setSelectedLog(record);
              setIsOpen(true);
            }}
          >
            {value}
          </a>
        );
      },
    },
  ];

  return (
    <>
      <Title level={3}>Lịch sử</Title>
      <Table<ShareBillLog>
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <Modal
        footer={false}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
      >
        {selectedLog && (
          <Result
            billItems={selectedLog.billItems}
            calculatorMode={selectedLog.calculatorMode}
            shippingFee={selectedLog.shippingFee}
            discountAmount={selectedLog.discountAmount}
            foodList={selectedLog.foodList}
            memberList={selectedLog.memberList}
          />
        )}
      </Modal>
    </>
  );
}

export default History;
