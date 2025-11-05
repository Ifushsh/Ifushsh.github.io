import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Projects from "./components/projects";

class App extends Component {
  state = {
    section: "home" // 默认显示 Introduction
  };

  // 用来切换右侧显示内容
  setSection = (section) => {
    this.setState({ section });
  };

  renderContent = () => {
    const { section } = this.state;
    switch (section) {
      case "home":
        return <Introduction />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      default:
        return <Introduction />;
    }
  };

  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap" className="d-flex">
          <Sidebar setSection={this.setSection} />
          <div id="colorlib-main" style={{ flex: 1 ,padding: "20px", }}>
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
