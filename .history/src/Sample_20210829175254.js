import React, { Component } from "react";

export class Sample extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.inputRef);
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>My Input</h2>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default Sample;
