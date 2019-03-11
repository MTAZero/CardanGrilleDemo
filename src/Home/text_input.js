import React, {Component} from 'react';

class TextInput extends Component {
    render(){
        return (
            <div className="textInput">
                <h3>Text Input </h3>
                <input type="text" maxlength={16} onChange={(e) => this.props.onChange(e.target.value)} value={this.props.text}/>
            </div>
        )
    }
}

export default TextInput;