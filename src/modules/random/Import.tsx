import { Typography } from "antd";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { UploadProps } from "antd/es/upload";
import ExcelJS from "exceljs";
import _ from "lodash";
import { Food } from "./types";
import { v4 } from "uuid";

const { Dragger } = Upload;
const { Paragraph } = Typography;

type ImportRandomListProps = {
  setListTemp: (listTemp: Food[]) => void;
};

export function ImportRandomList({ setListTemp }: ImportRandomListProps) {
  const handleFile = async (file: File) => {
    try {
      const workbook = new ExcelJS.Workbook();
      const arrayBuffer = await file.arrayBuffer();
      await workbook.xlsx.load(arrayBuffer);
      const worksheet = workbook.worksheets[0]; // lấy sheet đầu tiên

      const foodNames: string[] = [];
      worksheet.eachRow((row, rowNumber) => {
        if (rowNumber > 1) {
          foodNames.push(_.get(row.values, 1) as string);
        }
      });
      setListTemp(foodNames.concat("").map((name) => ({ id: v4(), name })));
      message.success("Đọc file thành công!");
    } catch (err) {
      console.error("Error reading Excel file", err);
      message.error("Không đọc được file Excel");
    }
  };

  const props: UploadProps = {
    name: "file",
    multiple: false,
    beforeUpload(file) {
      handleFile(file as File);
      return false; // Ngăn AntD upload tự động
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
    accept: ".xlsx",
  };

  return (
    <div className="pb-4">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <Paragraph>Nhập từ file excel hoặc nhập thủ công từng món</Paragraph>
      </Dragger>
      <a href="/mon-an-ngau-nhien.xlsx" target="_blank">Tải file mẫu</a>
    </div>
  );
}

export default ImportRandomList;
