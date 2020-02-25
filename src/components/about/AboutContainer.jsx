import React from "react";
import ReactDom from "react-dom";

export default class AboutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log(this.props);
  }

  render() {
    return <div>About</div>;
  }
}
