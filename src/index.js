import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header_class";
import "./styles/styles.css";
import JSON from "./db.json";
import NewsList from "./components/newslist";
import Footer from "./components/footer";

class App extends Component {
  state = {
    news: JSON,
    footerText: 'I am happy footer'
  };
  render() {
    // console.log(this.state)
    return (
      <>
      <div className="hey">
        <Header />
        <NewsList
            news = {this.state.news}>
                <br/>
                <h1>I am children</h1>
                </NewsList>  
        </div>
        <Footer text = {this.state.footerText}/>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
