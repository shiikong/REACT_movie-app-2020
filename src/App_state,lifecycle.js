import React from "react";
// import PropTypes from "prop-types";

class App extends React.Component {
  // = class App extends Component {
  //필수단계. "리액트 컴포넌트인 클래스 App". "baby extends human" 느낌

  // constructor(props) {
  //   super(props);
  //   console.log("constructor");
  // }
  state = {
    count: 0,
  };

  //setState 호출할 때마다 리렌더링(rerendering)
  add = () => {
    this.setState((current) => ({ count: current.count + 1 })); //지향
  };
  minus = () => {
    this.setState({ count: this.state.count - 1 }); //지양
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}

export default App;
