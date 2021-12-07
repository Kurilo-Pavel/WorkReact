import {Component} from "react";

class Button extends Component {
  render() {
    const {text, onClick, style} = this.props;
    return (
      <button onClick={onClick} style={style}>{text}</button>
    );
  };
}

export default Button;