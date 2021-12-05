import {Component} from "react";
import NumbersList from "./NumbersList";
import List from "./List";
import Button from "./Button";

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: this.randomArray()
    };
  };

  oneRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  };

  randomArray = () => {
    const arrayNumber = [];
    const random = this.oneRandomNumber();
    for (let i = 0; i <= random; i++) {
      arrayNumber.push(this.oneRandomNumber());
    }
    return arrayNumber
  };

  addNumber = () => {
    const {value} = this.state;
    this.setState({
      value: [...value, this.oneRandomNumber()],
    });
  };

  sortNumber = (event) => {
    const {value} = this.state;
    const {id} = event.target;
    switch (id) {
      case "ascending":
        value.sort((a, b) => {
          return a - b;
        });
        break
      case "descending":
        value.sort((a, b) => {
          return b - a;
        });
        break
      case "alphabet":
        value.sort();
        break
    }
    this.setState({
      value: value,
    });
  };

  resetNumber = () => {
    this.setState({
      value: this.randomArray()
    });
  };

  render() {
    const {value} = this.state;

    return (<>
      <NumbersList value={value.length}/>
      <List value={value}/>
      <Button text="Add number" onClick={this.addNumber}/>
      <Button text="1,2,3...10" onClick={this.sortNumber} id="ascending"/>
      <Button text="10,9,8...1" onClick={this.sortNumber} id="descending"/>
      <Button text="alphabetSort" onClick={this.sortNumber} id="alphabet"/>
      <Button text="Reset" onClick={this.resetNumber}/>
    </>)
  };
}

export default App;
