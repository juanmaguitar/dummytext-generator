import React, { Component } from "react";

class Text extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      value: props.value
    };
  }

  onChange(e) {
    const { value } = e.target
    this.setState({ value }, () => {
      this.props.onChange(this.state.value)
    })
  }

  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}

export default Text;
