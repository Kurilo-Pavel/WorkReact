import {Component} from "react";

class Button extends Component {
  array = [...this.props.array];

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.style.backgroundColor === 'yellow') {
      alert("Color = YELLOW");
      return false
    }
    if (nextProps.style.backgroundColor !== this.props.style.backgroundColor) {
      this.array = [...this.array, nextProps.style.backgroundColor];
      return true
    }
    return true
  };

  render() {
    const {text, onClick, style} = this.props;
    const items = this.array.map((item,index)=><li key={{index}}>{item}</li>);
    return(
      <>
        <button style={style} onClick={onClick}>{text}</button>
        <ol>{items}</ol>
      </>
    );
  };
}
export default Button;

