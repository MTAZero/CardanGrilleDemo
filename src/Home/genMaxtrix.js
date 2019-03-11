import React, {Component} from 'react';

// component
import Matrix from './matrix';

class GenMatrix extends Component {

    // must have length input

    
    render(){
        return (
            <div className="GenMatrix">
                <h3>Matrix</h3>  
                <Matrix matrix={this.props.matrix}/>
                <button onClick={() => this.props.genMatrixAction()}>Generate New Matrix</button>
            </div>
        )
    }
}

export default GenMatrix;