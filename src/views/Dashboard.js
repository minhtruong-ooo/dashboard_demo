import React from "react";
import ChartistGraph from "react-chartist";
import ChartistBar from "react-chartist";
import ProgressBar from 'react-bootstrap/ProgressBar';

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
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Tổng số tài sản</p>
                      <Card.Title as="h2">4</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Tổng số vật tư</p>
                      <Card.Title as="h2">0</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Tổng số dự án</p>
                      <Card.Title as="h2">75</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-air-baloon text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Công ty & đối tác</p>
                      <Card.Title as="h2">20</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Thống kê theo nhóm tài sản</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistBar
                    data={{
                      labels: [
                        "Tài sản chung",
                        "Thiết bị vệ sinh",
                      ],
                      series: [
                        [3, 1],
                      ],
                    }}
                    type="Bar"
                    options={{
                      low: 0,
                      high: 3,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Thống kê theo vị trí</Card.Title>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["1", "1", "1", "1"],
                      series: [25, 25, 25, 25],
                    }}
                    type="Pie"
                  />
                </div>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Thống kê theo đơn vị tiền tệ</Card.Title>
              </Card.Header>
              <Card.Body>
               <Table>
                <thead>
                    <tr>
                      <th className="border-0">Type</th>
                      <th className="border-0">Value</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>USD</td>
                    <td>20,000,000,00 $</td>
                  </tr>
                  <tr>
                    <td>VND</td>
                    <td>25,000,000 đ</td>
                  </tr>
                </tbody>
               </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">Thống kê theo người dùng</Card.Title>
              </Card.Header>
              <Card.Body>
              <Table>
                <thead>
                    <tr>
                      <th className="border-0">Name</th>
                      <th className="border-0">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bùi Thanh Sơn</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Trang IT</td>
                    <td>1</td>
                  </tr>
                </tbody>
               </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
