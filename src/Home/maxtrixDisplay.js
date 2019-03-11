import React, {Component} from 'react';

import {Row, Col, Container} from 'reactstrap';

class MatrixDisplay extends Component {

    constructor(props){
        super(props);
        this.state = {
            h: 4,
            w: 4,
            data: [
                [0, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 1, 0],
                [1, 1, 0, 0]
            ],
            textTable: 
            [
                [0, 'T', 0, 0],
                ['U', 'Z', 0, 'K'],
                [0, 'M', 'H', 0],
                ['U', 'Y', 0, 0]
            ]
        }
    }

    drawTable = () => {
        const {h, w, data} =  this.state;
        const textTable = this.state.textTable;
        let ans = [];

        for(var i = 0; i < h; i++){
            let row = [];

            for(var j = 0; j < w; j++){
                let stylez = {
                    border: "1px solid black", 
                    textAlign: "center"
                }

                if (data[i][j] == 1) 
                    stylez = {
                        ...stylez,
                        ...{
                            backgroundColor: 'lightgreen'
                        }
                    };

                if (data[i][j] == 0 && textTable[i][j] != 0){
                    stylez = {
                        ...stylez,
                        ...{
                            backgroundColor: 'lightgray'
                        }
                    }
                }

                row.push(
                    <Col md="3" sm="3" xs="3" style={stylez}>
                        {
                            (data[i][j] == 1)
                            ?
                            <div style={{height: 25, width: 25, borderRadius: "50%", border: "1px solid black", marginLeft: 'auto', marginRight: 'auto'}}>
                                {textTable[i][j]}
                            </div>
                            :
                            textTable[i][j]
                        }
                        
                    </Col>
                )
            }
            
            ans.push(<Row>{row}</Row>);
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

export default MatrixDisplay;