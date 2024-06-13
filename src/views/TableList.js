import React, {useState} from "react";
import ExportExcel from "components/HandleFile/ExportExcel";
import ImportExcel from "components/HandleFile/ImportExcel";
import { CSVLink, CSVDownload } from "react-csv";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";

const initialData = [
  {
    "ID": "1",
    "Tên vật tư": "Máy quạt WC",
    "Đơn giá": "$200.00",
    "Số lượng": "1200",
    "Nhà cung cấp": "Công ty TNHH ABCF"
  },
  {
    "ID": "2",
    "Tên vật tư": "Chậu rửa mặt",
    "Đơn giá": "$150.00",
    "Số lượng": "1000",
    "Nhà cung cấp": "Công ty TNHH ABC"
  },
  {
    "ID": "3",
    "Tên vật tư": "Kính chắn gió",
    "Đơn giá": "$56,142",
    "Số lượng": "1900",
    "Nhà cung cấp": "Công ty TNHH ABCTF"
  },
  {
    "ID": "4",
    "Tên vật tư": "Thùng rác",
    "Đơn giá": "$38,735",
    "Số lượng": "1000",
    "Nhà cung cấp": "Công ty TNHH ABCBG"
  },
  {
    "ID": "5",
    "Tên vật tư": "Giấy ăn",
    "Đơn giá": "$63,542",
    "Số lượng": "1000",
    "Nhà cung cấp": "Công ty TNHH ABCFE"
  },
  {
    "ID": "6",
    "Tên vật tư": "Kính chắn gió",
    "Đơn giá": "$56,142",
    "Số lượng": "1900",
    "Nhà cung cấp": "Công ty TNHH ABCTF"
  },
  {
    "ID": "7",
    "Tên vật tư": "Thùng rác",
    "Đơn giá": "$38,735",
    "Số lượng": "1000",
    "Nhà cung cấp": "Công ty TNHH ABCBG"
  },
  {
    "ID": "8",
    "Tên vật tư": "Giấy ăn",
    "Đơn giá": "$63,542",
    "Số lượng": "1000",
    "Nhà cung cấp": "Công ty TNHH ABCFE"
  },
  {
    "ID": "9",
    "Tên vật tư": "Kính chắn gió",
    "Đơn giá": "$56,142",
    "Số lượng": "1900",
    "Nhà cung cấp": "Công ty TNHH ABCTF"
  },
  {
    "ID": "10",
    "Tên vật tư": "Thùng rác",
    "Đơn giá": "$38,735",
    "Số lượng": "1000",
    "Nhà cung cấp": "Công ty TNHH ABCBG"
  },
];


function TableList() {
  const [data, setData] = useState(initialData);

  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card className="strpied-tabled-with-hover">
            <Card.Header>
              <Row>
                <Col>
                  <Card.Title as="h4">Danh Sách Vật Tư</Card.Title>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                  <ImportExcel setData={setData}></ImportExcel>
                  <ExportExcel data={data} sheet_name="Danh sách vật tư" file_name={"exportdata_" + new Date().toLocaleDateString() + ".xlsx"}></ExportExcel>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body className="table-full-width table-responsive px-0">
              <Table className="table-hover table-striped">
                <thead>
                  <tr>
                    <th className="border-0">ID</th>
                    <th className="border-0">Tên vật tư</th>
                    <th className="border-0">Đơn giá</th>
                    <th className="border-0">Số lượng</th>
                    <th className="border-0">Nhà cung cấp</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.ID}</td>
                      <td>{item["Tên vật tư"]}</td>
                      <td>{item["Đơn giá"]}</td>
                      <td>{item["Số lượng"]}</td> 
                      <td>{item["Nhà cung cấp"]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TableList;
