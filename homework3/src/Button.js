import {Component} from "react";

class Button extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.style.backgroundColor === 'yellow') {
      alert("Color = YELLOW");
      return false
    }
    return true
  };

  render() {
    const {text, onClick, style} = this.props;
    return (
      <button onClick={onClick} style={style}>{text}</button>
    );
  };
}

export default Button;