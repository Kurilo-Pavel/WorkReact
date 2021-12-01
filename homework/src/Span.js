import {Component} from "react";

class Span extends Component {

    handleMove = (event) => {
        const {text} = this.props;
        event.target.style.color = 'blue';
        alert(text);
    };

    render() {
        const colorStyle = {
            margin: '30px',
            padding: '50px',
            color: 'red'
        }

        const {text} = this.props;
        return (<span onMouseMove={this.handleMove} style={colorStyle}>{text}</span>);
    }
}

export default Span;
