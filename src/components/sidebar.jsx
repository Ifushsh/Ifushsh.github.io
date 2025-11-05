import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    const { setSection } = this.props;

    return (
      <nav
  id="sidebar"
  style={{
    display: "flex",
    flexDirection: "column",
    height: "100vh", // 撑满整个视口高度
    overflow: "hidden", // 防止超出
  }}
>
  {/* 顶部头像部分 */}
  <div
    className="img bg-wrap text-center py-4"
    style={{
      backgroundImage: "url(images/bg_1.jpg)",
      flexShrink: 0,
    }}
  >
    <div className="user-logo">
      <div className="img" style={{ backgroundImage: "url(images/zp.jpg)" }}></div>
      <h3>Catriona Henderson</h3>
    </div>
  </div>

  {/* 菜单列表，可滚动 */}
  <ul
    className="list-unstyled components mb-5"
    style={{
      flex: 1, // 占剩余空间
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    }}
  >
    <li onClick={() => setSection("home")}>
      <a href="#">Introduction</a>
    </li>
    <li onClick={() => setSection("about")}>
      <a href="#">About</a>
    </li>
    <li onClick={() => setSection("projects")}>
      <a href="#">Projects</a>
    </li>
  </ul>

  {/* 社交链接 + 底部 Footer */}
  <div style={{ flexShrink: 0, padding: "10px" }}>
    <nav id="colorlib-main-menu" style={{ marginBottom: "10px" }}>
      <ul style={{ display: "flex", gap: "10px", justifyContent: "center", padding: 0, margin: 0 }}>
          <a href="https://twitter.com/ddbarochiya" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter" style={{ fontSize: "16px" }} />
          </a>
          <a href="https://www.linkedin.com/in/dbarochiya/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin" style={{ fontSize: "16px" }} />
          </a>
          <a href="#"><i className="fa fa-github" style={{ fontSize: "16px" }} /></a>
      </ul>
    </nav>

    <div className="colorlib-footer" style={{ fontSize: "12px", textAlign: "center" }}>
      <p>
        <small>
          Made with <i className="fa fa-heart" aria-hidden="true" /> and <i className="fa fa-beer" aria-hidden="true"></i>
          <br />
          Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration
        </small>
      </p>
      <p>
        <small>Something coming soon !!</small>
      </p>
    </div>
  </div>
</nav>

    );
  }
}
