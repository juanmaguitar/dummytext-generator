import React, { Component } from "react";
import axios from "axios";

import Output from "./Output";

import Select from "./Controls/Select";
import Text from "./Controls/Text";

class App extends Component {
  constructor() {
    super();
    this.state = {
      paras: 4,
      html: true,
      text: ""
    };
  }

  componentWillMount() {
    this.getText();
  }

  getText() {
    const { html, paras } = this.state;
    console.log(html, paras);
    console.log(`http://api-lorem.herokuapp.com/${paras}${!html ? "/plaintext" : ""}`);
    axios
      .get(
        `http://api-lorem.herokuapp.com/${paras}${!html ? "/plaintext" : ""}`
      )
      .then(({ data: text }) => {
        this.setState({ text }, () => console.log(this.state));
      })
      .catch(err => {
        console.log(err);
      });
  }

  changeParas(paras) {
    this.setState({ paras }, this.getText)
  }

  showHtml(isHtml) {
    this.setState({ html: isHtml }, this.getText)
  }

  render() {
    return (
      <div className="container">
        <h1>Dummy Text Generator</h1>
        <Output value={this.state.text} />
        <h3>Realtime options</h3>
        <form action="">
          <div>
            <label htmlFor="">Paragraphs:</label>
            <Text
              value={this.state.paras}
              onChange={this.changeParas.bind(this)}
            />
          </div>
          <div>
            <label htmlFor="">Include HTML:</label>
            <Select value={this.state.html} onChange={this.showHtml.bind(this)}/>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
