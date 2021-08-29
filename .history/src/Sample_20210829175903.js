import React, { Component } from "react";

export class Sample extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      name: ""
    };
  }

  componentDidMount() {
    console.log(this.inputRef);
    console.log(this.inputRef.current.value);
  }
  componentDidUpdate() {
    console.log("component updated", this.inputRef);
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>My Input</h2>
        <input
          type="text"
          ref={this.inputRef}
          onChange={(event) =>
            this.setState({ name: event.target.current.value })
          }
        />
      </div>
    );
  }
}

export default Sample;
