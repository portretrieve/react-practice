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
      <div>
        <h2>My Input</h2>
        <input type="text" useRef={this.inputRef} />
      </div>
    );
  }
}

export default Sample;
