import {Component} from "react";
import Button from "./Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "", text: "Start"
    };
  };

  randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min - 1) + min);
  }
  arrayColor = ['green', 'red', 'blue', 'yellow', 'grey', 'pink', 'purple', 'orange'];

  changeColor = () => {
    const colorNumber = this.randomNumber(0, this.arrayColor.length);
    this.setState({
      color: this.arrayColor[colorNumber],
    });
  };

  startChangeColor = () => {
    switch (this.state.text) {
      case 'Start': {
        this.intervalId = setInterval(this.changeColor, 1000);
        this.setState({
          text: "Pause",
        });
        break;
      }
      case 'Pause': {
        clearInterval(this.intervalId);
        this.setState({
          text: "Start"
        });
        break;
      }
    }
  };

  render() {
    const {color, text} = this.state;

    return (<Button text={text} style={{backgroundColor: color}} onClick={this.startChangeColor}/>);
  };
}

export default App;
