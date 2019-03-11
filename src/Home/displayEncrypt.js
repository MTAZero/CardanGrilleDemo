import React, {Component} from 'react';

import {Row, Col} from 'reactstrap';

//component
import Matrix from './matrix';
import DisplayMatrix from './maxtrixDisplay';

class DisplayEncrypt extends Component {
    render(){
        const {matrixs, text} = this.props;
        return (
            <div className="displayDecrypt">
                <h3>Display Encrypt</h3>
                <Row>
                    <Col xs="3" sm="3" md="3">
                        <div className="ContainMatrix">
                            <DisplayMatrix matrix={matrixs[0]}/>
                        </div>
                    </Col>
                    <Col xs="3" sm="3" md="3">
                        <div className="ContainMatrix">
                            <DisplayMatrix matrix={matrixs[1]}/>
                        </div>
                    </Col>
                    <Col xs="3" sm="3" md="3">
                        <div className="ContainMatrix">
                            <Matrix matrix={matrixs[2]}/>
                        </div>
                    </Col>
                    <Col xs="3" sm="3" md="3">
                        <div className="ContainMatrix">
                            <Matrix matrix={matrixs[3]}/>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DisplayEncrypt;