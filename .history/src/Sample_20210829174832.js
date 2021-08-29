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
        <input type="text" useRef={this.inputRef} />
      </div>
    );
  }
}

export default Sample;
