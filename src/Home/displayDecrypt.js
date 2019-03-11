import React, {Component} from 'react';

import {Row, Col} from 'reactstrap';

//component
import Matrix from './matrix';

class DisplayDecrypt extends Component {
    render(){
        const {matrixs} = this.props;
        return (
            <div className="displayDecrypt">
                <h3>Display Decrypt</h3>
                <Row>
                    <Col xs="3" sm="3" md="3">
                        <div className="ContainMatrix">
                            <Matrix matrix={matrixs[0]} />
                        </div>
                    </Col>
                    <Col xs="3" sm="3" md="3">
                        <div className="ContainMatrix">
                            <Matrix matrix={matrixs[1]} />
                        </div>
                    </Col>
                    <Col xs="3" sm="3" md="3">
                        <div className="ContainMatrix">
                            <Matrix matrix={matrixs[3]} />
                        </div>
                    </Col>
                    <Col xs="3" sm="3" md="3">
                        <div className="ContainMatrix">
                            <Matrix matrix={matrixs[3]} />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DisplayDecrypt;