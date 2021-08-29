import React, { Component } from "react";

export class Sample extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.inputRef);
    console.log(this.inputRef.current.value);
  }
  componentDidUpdate() {
    console.log("component updated");
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>My Input</h2>
        <input type="text" ref={this.inputRef} onChange />
      </div>
    );
  }
}

export default Sample;
