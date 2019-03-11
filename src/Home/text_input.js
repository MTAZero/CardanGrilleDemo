import React, {Component} from 'react';

class TextInput extends Component {
    render(){
        return (
            <div className="textInput">
                Text Input <input type="text" maxlength={16} onChange={(e) => this.props.onChange(e.target.value)}/>
            </div>
        )
    }
}

export default TextInput;