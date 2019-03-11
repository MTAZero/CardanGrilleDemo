import React, {Component} from 'react';

import {Row, Col} from 'reactstrap';

//component
import Matrix from './matrix';
import DisplayMatrix from './maxtrixDisplay';

class DisplayDecrypt extends Component {
    render(){
        const {matrixs, decryptTextTables, decryptTexts} = this.props;
        return (
            <div className="displayDecrypt">
                <h3>Decrypt</h3>
                <Row>
                <Col xs="3" sm="3" md="3">
                        <div className="ContainMatrix">
                            <DisplayMatrix matrix={matrixs[0]} textTable={decryptTextTables}/>
                            <div className="decryptText">{decryptTexts[0]}</div>
                        </div>
                    </Col>
                    <Col xs="3" sm="3" md="3">
                        <div className="ContainMatrix">
                            <DisplayMatrix matrix={matrixs[1]} textTable={decryptTextTables}/>
                            <div className="decryptText">{decryptTexts[1]}</div>
                        </div>
                    </Col>
                    <Col xs="3" sm="3" md="3">
                        <div className="ContainMatrix">
                            <DisplayMatrix matrix={matrixs[2]} textTable={decryptTextTables}/>
                            <div className="decryptText">{decryptTexts[2]}</div>
                        </div>
                    </Col>
                    <Col xs="3" sm="3" md="3">
                        <div className="ContainMatrix">
                            <DisplayMatrix matrix={matrixs[3]} textTable={decryptTextTables}/>
                            <div className="decryptText">{decryptTexts[3]}</div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DisplayDecrypt;