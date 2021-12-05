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
    const random = this.OneRandomNumber();
    for (let i = 0; i <= random; i++) {
      arrayNumber.push(this.OneRandomNumber());
    }
    return arrayNumber
  }

  addNumber = () => {
    const {value} = this.state;
    value.push(this.OneRandomNumber());
    this.setState({
      value: value,
    });
  };

  sortNumber = (event) => {
    const {value} = this.state;
    const {id} = event.target;
    if (id === 'ascending') {
      value.sort((a, b) => {
        return a - b;
      });
    }
    if (id === 'waning') {
      value.sort((a, b) => {
        return b - a;
      });
    }
    if (id === 'alphabet') {
      value.sort();
    }
    this.setState({
      value: value,
    });
  }

  resetNumber = () => {
    this.setState({
      value: this.RandomArray()
    })
  }

  render() {
    const {value} = this.state;

    return (<>
      <NumbersList value={value.length}/>
      <List value={value}/>
      <Button text="Add number" onClick={this.addNumber}/>
      <Button text="1,2,3...10" onClick={this.sortNumber} id="ascending"/>
      <Button text="10,9,8...1" onClick={this.sortNumber} id="waning"/>
      <Button text="alphabetSort" onClick={this.sortNumber} id="alphabet"/>
      <Button text="Reset" onClick={this.resetNumber}/>
    </>)
  }
}

export default App;
