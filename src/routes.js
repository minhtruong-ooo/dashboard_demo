/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import TableList from "views/TableList.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Tổng Quan",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Bảng dữ liệu",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin"
  },
  
];

export default dashboardRoutes;
