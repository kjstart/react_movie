import React from "react";
import ReactDom from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import styles from "./css/antdesign.scss";

import HomeContainer from "@/components/home/HomeContainer";
import MovieContainer from "@/components/movie/MovieContainer";
import AboutContainer from "@/components/about/AboutContainer";

const { Header, Content, Footer } = Layout;

ReactDom.render(
  <HashRouter>
    <Layout className="layout" style={{ height: "100%" }}>
      <Header>
        <div className={styles.logo} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[window.location.hash.split("/")[1]]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="home">
            <Link to="/home">首页</Link>
          </Menu.Item>
          <Menu.Item key="movie">
            <Link to="/movie">电影</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">关于</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ background: "#fff", padding: 24, height: "100%" }}>
        <Route path="/home" component={HomeContainer}></Route>
        <Route path="/movie" component={MovieContainer}></Route>
        <Route path="/about" component={AboutContainer}></Route>
      </Content>
      <Footer style={{ textAlign: "center" }}>Ant Design ©2020 Hello</Footer>
    </Layout>
  </HashRouter>,
  document.getElementById("app")
);
