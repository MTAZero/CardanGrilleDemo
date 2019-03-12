import React, {Component} from 'react';

import {Row, Col, Container} from 'reactstrap';

class Matrix extends Component {

    constructor(props){
        super(props);
        this.state = {
            h: 4,
            w: 4,
            data: [
                [1, 0, 0, 1],
                [0, 0, 0, 0],
                [0, 1, 0, 0],
                [1, 0, 0, 0]
            ]
        }
    }

    drawTable = () => {
        const {h, w, data} =  this.props.matrix;
        let ans = [];

        for(var i = 0; i < h; i++){
            let row = [];

            for(var j = 0; j < w; j++)
                row.push(<Col style={{border: "1px solid gray", textAlign: "center", height: "30px", width: "30px"}}>{data[i][j]}</Col>)
            
            ans.push(
            <Row style={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}}>
                
                    {row}
                
            </Row>);
        }

        return ans;
    }

    render(){
        return (
            <div className="Matrix">
                { 
                    this.drawTable()
                }
            </div>
        )
    }
}

export default Matrix;