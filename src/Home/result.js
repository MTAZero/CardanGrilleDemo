import React, {Component} from 'react';

class Result extends Component{
    render(){
        return (
            <div className="Result">
                <span>
                    <h3>Text Result: </h3> {this.props.text}
                </span>
            </div>
        )
    }
}

export default Result;