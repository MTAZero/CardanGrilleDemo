import React, {Component} from 'react';

class Result extends Component{
    render(){
        return (
            <div className="Result">
                <span>
                    <h3>{this.props.title}: </h3> {this.props.text}
                </span>
            </div>
        )
    }
}

export default Result;