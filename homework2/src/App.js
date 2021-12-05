import {Component} from "react";
import NumbersList from "./NumbersList";
import List from "./List";
import Button from "./Button";

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: this.RandomArray()
    }
  }

  OneRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  }

  RandomArray = () => {
    const arrayNumber = [];
    const random = this.OneRandomNumber()
    for (let i = 0; i <= random; i++) {
      arrayNumber.push(this.OneRandomNumber())
    }
    return arrayNumber
  }

  addNumber = () => {
    const {value} = this.state;
    value.push(this.OneRandomNumber())
    this.setState({
      value: value,
    });
  };

  render() {
    const {value} = this.state;

    return (<>
      <NumbersList value={value.length}/>
      <List value={value}/>
      <Button text="Add number" onClick={this.addNumber}/>
    </>)
  }
}

export default App;
