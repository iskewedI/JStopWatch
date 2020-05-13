import React, {Component} from 'react';
import ReactToggle from "react-toggle";
import "react-toggle/style.css";
import "../styles/components.css";


class Toggle extends Component {
    render(){
        return(
            <ReactToggle 
            className={this.props.className}
            onChange={this.props.onChange}
            icons={{
                checked: this.props.icons[0],
                unchecked: this.props.icons[1]
            }}/>
        )
    }
}
export default Toggle;