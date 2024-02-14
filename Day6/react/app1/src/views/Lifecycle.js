import { React, Component } from "react";
class Lifecycle extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    //state
    this.state = {
      data: 0,
    };
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  componentWillMount() {
    console.log("Component WILL MOUNT! parent");
  }
  componentDidMount() {
    console.log("Component DID MOUNT!parent ");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID UPDATE!");
  }
  setNewNumber(action) {
    if (action === "increment") {
      this.setState({ data: this.state.data + 1 });
    }
    if (action === "decrement") {
      this.setState({ data: this.state.data - 1 });
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setNewNumber("increment")}>
          INCREMENT
        </button>
        <br />
        <br />
        <button onClick={() => this.setNewNumber("decrement")}>
          DECREMENT
        </button>
        <br />
        <br />
        <p>From current class - Lifecycle component: {this.state.data}</p>
        <div>
          From Childclass Content :{" "}
          <Content myNumber={this.state.data}></Content>
        </div>
      </div>
    );
  }
}
class Content extends Component {
  componentWillMount() {
    console.log("Component WILL MOUNT! child");
  }
  componentDidMount() {
    console.log("Component DID MOUNT! child");
  }
  componentWillReceiveProps(newProps) {
    console.log("Component WILL RECIEVE PROPS!");
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL UPDATE!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID UPDATE!");
  }
  componentWillUnmount() {
    console.log("Component WILL UNMOUNT!");
  }
  render() {
    return (
      <div>
        <span>{this.props.myNumber}</span>
      </div>
    );
  }
}

export default Lifecycle;
