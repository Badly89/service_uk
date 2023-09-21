import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          className="sticky-top"
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          className="sticky-top"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="demo-logo" />
          <div className="text-white">вывести меню или аватара</div>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Esse magna fugiat nulla esse tempor cupidatat eiusmod fugiat
            consequat ullamco in. Reprehenderit aute aliqua anim irure ea quis
            ad laborum est ipsum proident ullamco. Ea dolore id ad deserunt
            voluptate ad dolor est excepteur ad. Duis exercitation anim deserunt
            nostrud ut laboris elit Lorem dolore et quis. Nulla ullamco commodo
            reprehenderit ut cillum aliqua elit pariatur aliquip commodo irure
            non fugiat. Do velit aute deserunt ullamco officia anim. Non magna
            ea nisi non. Cillum ad aliqua minim amet sit sit do irure elit in
            esse ad. Duis elit eiusmod eiusmod Lorem elit et tempor anim
            reprehenderit tempor ea enim adipisicing. Culpa aute officia
            exercitation nisi deserunt eu aliquip id. Magna et cillum nulla et
            culpa ullamco eiusmod labore aute. Irure Lorem sit nisi eu dolor
            aliqua tempor sunt officia exercitation sunt quis. Officia eiusmod
            proident sit quis reprehenderit Lorem eiusmod proident esse tempor
            culpa quis. Eu anim laborum cillum ex aute occaecat proident est eu
            incididunt ipsum adipisicing adipisicing nostrud. Mollit non anim
            mollit ut cupidatat duis. Non do esse non in est incididunt id
            laboris culpa consequat. Adipisicing esse labore consequat proident
            fugiat commodo. Exercitation deserunt sit adipisicing ipsum magna
            et. Tempor incididunt Lorem culpa reprehenderit ut irure non sint
            sint ea aliquip irure. Excepteur pariatur aliqua non laborum
            exercitation. Adipisicing laborum deserunt ad dolor velit aliqua
            officia tempor aliqua voluptate et. Sint aute amet cupidatat nulla
            ipsum. Mollit adipisicing enim do consectetur cillum laboris est
            mollit duis esse. Cillum sit laborum magna Lorem anim elit. Magna
            pariatur ullamco sint aliquip sint proident incididunt occaecat nisi
            dolor cupidatat occaecat deserunt. Deserunt minim cillum commodo
            eiusmod sint nostrud ipsum. Amet ullamco consectetur officia laboris
            proident mollit cillum dolor ea sit sint aliqua ex cillum. Esse
            magna fugiat nulla esse tempor cupidatat eiusmod fugiat consequat
            ullamco in. Reprehenderit aute aliqua anim irure ea quis ad laborum
            est ipsum proident ullamco. Ea dolore id ad deserunt voluptate ad
            dolor est excepteur ad. Duis exercitation anim deserunt nostrud ut
            laboris elit Lorem dolore et quis. Nulla ullamco commodo
            reprehenderit ut cillum aliqua elit pariatur aliquip commodo irure
            non fugiat. Do velit aute deserunt ullamco officia anim. Non magna
            ea nisi non. Cillum ad aliqua minim amet sit sit do irure elit in
            esse ad. Duis elit eiusmod eiusmod Lorem elit et tempor anim
            reprehenderit tempor ea enim adipisicing. Culpa aute officia
            exercitation nisi deserunt eu aliquip id. Magna et cillum nulla et
            culpa ullamco eiusmod labore aute. Irure Lorem sit nisi eu dolor
            aliqua tempor sunt officia exercitation sunt quis. Officia eiusmod
            proident sit quis reprehenderit Lorem eiusmod proident esse tempor
            culpa quis. Eu anim laborum cillum ex aute occaecat proident est eu
            incididunt ipsum adipisicing adipisicing nostrud. Mollit non anim
            mollit ut cupidatat duis. Non do esse non in est incididunt id
            laboris culpa consequat. Adipisicing esse labore consequat proident
            fugiat commodo. Exercitation deserunt sit adipisicing ipsum magna
            et. Tempor incididunt Lorem culpa reprehenderit ut irure non sint
            sint ea aliquip irure. Excepteur pariatur aliqua non laborum
            exercitation. Adipisicing laborum deserunt ad dolor velit aliqua
            officia tempor aliqua voluptate et. Sint aute amet cupidatat nulla
            ipsum. Mollit adipisicing enim do consectetur cillum laboris est
            mollit duis esse. Cillum sit laborum magna Lorem anim elit. Magna
            pariatur ullamco sint aliquip sint proident incididunt occaecat nisi
            dolor cupidatat occaecat deserunt. Deserunt minim cillum commodo
            eiusmod sint nostrud ipsum. Amet ullamco consectetur officia laboris
            proident mollit cillum dolor ea sit sint aliqua ex cillum. Esse
            magna fugiat nulla esse tempor cupidatat eiusmod fugiat consequat
            ullamco in. Reprehenderit aute aliqua anim irure ea quis ad laborum
            est ipsum proident ullamco. Ea dolore id ad deserunt voluptate ad
            dolor est excepteur ad. Duis exercitation anim deserunt nostrud ut
            laboris elit Lorem dolore et quis. Nulla ullamco commodo
            reprehenderit ut cillum aliqua elit pariatur aliquip commodo irure
            non fugiat. Do velit aute deserunt ullamco officia anim. Non magna
            ea nisi non. Cillum ad aliqua minim amet sit sit do irure elit in
            esse ad. Duis elit eiusmod eiusmod Lorem elit et tempor anim
            reprehenderit tempor ea enim adipisicing. Culpa aute officia
            exercitation nisi deserunt eu aliquip id. Magna et cillum nulla et
            culpa ullamco eiusmod labore aute. Irure Lorem sit nisi eu dolor
            aliqua tempor sunt officia exercitation sunt quis. Officia eiusmod
            proident sit quis reprehenderit Lorem eiusmod proident esse tempor
            culpa quis. Eu anim laborum cillum ex aute occaecat proident est eu
            incididunt ipsum adipisicing adipisicing nostrud. Mollit non anim
            mollit ut cupidatat duis. Non do esse non in est incididunt id
            laboris culpa consequat. Adipisicing esse labore consequat proident
            fugiat commodo. Exercitation deserunt sit adipisicing ipsum magna
            et. Tempor incididunt Lorem culpa reprehenderit ut irure non sint
            sint ea aliquip irure. Excepteur pariatur aliqua non laborum
            exercitation. Adipisicing laborum deserunt ad dolor velit aliqua
            officia tempor aliqua voluptate et. Sint aute amet cupidatat nulla
            ipsum. Mollit adipisicing enim do consectetur cillum laboris est
            mollit duis esse. Cillum sit laborum magna Lorem anim elit. Magna
            pariatur ullamco sint aliquip sint proident incididunt occaecat nisi
            dolor cupidatat occaecat deserunt. Deserunt minim cillum commodo
            eiusmod sint nostrud ipsum. Amet ullamco consectetur officia laboris
            proident mollit cillum dolor ea sit sint aliqua ex cillum. Esse
            magna fugiat nulla esse tempor cupidatat eiusmod fugiat consequat
            ullamco in. Reprehenderit aute aliqua anim irure ea quis ad laborum
            est ipsum proident ullamco. Ea dolore id ad deserunt voluptate ad
            dolor est excepteur ad. Duis exercitation anim deserunt nostrud ut
            laboris elit Lorem dolore et quis. Nulla ullamco commodo
            reprehenderit ut cillum aliqua elit pariatur aliquip commodo irure
            non fugiat. Do velit aute deserunt ullamco officia anim. Non magna
            ea nisi non. Cillum ad aliqua minim amet sit sit do irure elit in
            esse ad. Duis elit eiusmod eiusmod Lorem elit et tempor anim
            reprehenderit tempor ea enim adipisicing. Culpa aute officia
            exercitation nisi deserunt eu aliquip id. Magna et cillum nulla et
            culpa ullamco eiusmod labore aute. Irure Lorem sit nisi eu dolor
            aliqua tempor sunt officia exercitation sunt quis. Officia eiusmod
            proident sit quis reprehenderit Lorem eiusmod proident esse tempor
            culpa quis. Eu anim laborum cillum ex aute occaecat proident est eu
            incididunt ipsum adipisicing adipisicing nostrud. Mollit non anim
            mollit ut cupidatat duis. Non do esse non in est incididunt id
            laboris culpa consequat. Adipisicing esse labore consequat proident
            fugiat commodo. Exercitation deserunt sit adipisicing ipsum magna
            et. Tempor incididunt Lorem culpa reprehenderit ut irure non sint
            sint ea aliquip irure. Excepteur pariatur aliqua non laborum
            exercitation. Adipisicing laborum deserunt ad dolor velit aliqua
            officia tempor aliqua voluptate et. Sint aute amet cupidatat nulla
            ipsum. Mollit adipisicing enim do consectetur cillum laboris est
            mollit duis esse. Cillum sit laborum magna Lorem anim elit. Magna
            pariatur ullamco sint aliquip sint proident incididunt occaecat nisi
            dolor cupidatat occaecat deserunt. Deserunt minim cillum commodo
            eiusmod sint nostrud ipsum. Amet ullamco consectetur officia laboris
            proident mollit cillum dolor ea sit sint aliqua ex cillum. Esse
            magna fugiat nulla esse tempor cupidatat eiusmod fugiat consequat
            ullamco in. Reprehenderit aute aliqua anim irure ea quis ad laborum
            est ipsum proident ullamco. Ea dolore id ad deserunt voluptate ad
            dolor est excepteur ad. Duis exercitation anim deserunt nostrud ut
            laboris elit Lorem dolore et quis. Nulla ullamco commodo
            reprehenderit ut cillum aliqua elit pariatur aliquip commodo irure
            non fugiat. Do velit aute deserunt ullamco officia anim. Non magna
            ea nisi non. Cillum ad aliqua minim amet sit sit do irure elit in
            esse ad. Duis elit eiusmod eiusmod Lorem elit et tempor anim
            reprehenderit tempor ea enim adipisicing. Culpa aute officia
            exercitation nisi deserunt eu aliquip id. Magna et cillum nulla et
            culpa ullamco eiusmod labore aute. Irure Lorem sit nisi eu dolor
            aliqua tempor sunt officia exercitation sunt quis. Officia eiusmod
            proident sit quis reprehenderit Lorem eiusmod proident esse tempor
            culpa quis. Eu anim laborum cillum ex aute occaecat proident est eu
            incididunt ipsum adipisicing adipisicing nostrud. Mollit non anim
            mollit ut cupidatat duis. Non do esse non in est incididunt id
            laboris culpa consequat. Adipisicing esse labore consequat proident
            fugiat commodo. Exercitation deserunt sit adipisicing ipsum magna
            et. Tempor incididunt Lorem culpa reprehenderit ut irure non sint
            sint ea aliquip irure. Excepteur pariatur aliqua non laborum
            exercitation. Adipisicing laborum deserunt ad dolor velit aliqua
            officia tempor aliqua voluptate et. Sint aute amet cupidatat nulla
            ipsum. Mollit adipisicing enim do consectetur cillum laboris est
            mollit duis esse. Cillum sit laborum magna Lorem anim elit. Magna
            pariatur ullamco sint aliquip sint proident incididunt occaecat nisi
            dolor cupidatat occaecat deserunt. Deserunt minim cillum commodo
            eiusmod sint nostrud ipsum. Amet ullamco consectetur officia laboris
            proident mollit cillum dolor ea sit sint aliqua ex cillum.
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
};
export default App;
