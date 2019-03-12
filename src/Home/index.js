import React, {Component} from 'react';

// component
import TextInput from './text_input';
import GenMatrix from './genMaxtrix';
import DisplayEncrypt from './displayEncrypt';
import DisplayDecrypt from './displayDecrypt';
import Matrix from './matrix';
import Result from './result';

const matrix = 
    {
        w: 4,
        h: 4,
        data: [
            [0, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [1, 1, 0, 0]
        ]
    };


class HomePage extends Component {

    constructor(props){
        super(props);

        this.state = {
            w: 4,
            h: 4,
            text: "BuiXuanThuy",
            result: "",
            matrix: {
                w: 4,
                h: 4,
                data: [
                    [0, 1, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 1, 0],
                    [1, 1, 0, 0]
                ]
            },
            matrixs: [matrix, matrix, matrix, matrix],
            textTables: [
                [
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1]
                ],
                [
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1]
                ],
                [
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1]
                ],
                [
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1]
                ]
            ],
            decryptTextTable:[
                [-1, -1, -1, -1],
                [-1, -1, -1, -1],
                [-1, -1, -1, -1],
                [-1, -1, -1, -1]
            ],
            decryptTexts:[
                "",
                "",
                "",
                ""
            ]
        };
    }

    componentDidMount = async() => {
        this._handleGenMatrixAction();
    }

    _rotateMatrix = (matrix) => {
        let newMatrix = {
            w: matrix.w,
            h: matrix.h,
            data: []
        };

        let data = [];
        let h = matrix.h;
        let w = matrix.w;

        for(let i = 0; i <h; i++){
            let row = [];

            for(let j = 0; j<w; j++){
                row = row.concat(0);
            }

            data = [
                ...data,
                ...[row]
            ]
        }
        newMatrix.data = data;

        for(var i=0; i < matrix.h; i++)
            for(var j=0; j<matrix.w; j++){
                newMatrix.data[j][matrix.w-i-1] = matrix.data[i][j];
            }

        return newMatrix;
    }

    _rotatePoint = (src, h, w) => {
        let ans = {
            x: src.x,
            y: src.y
        }

        ans.x = src.y;
        ans.y = w - src.x - 1;

        return ans;
    }

    _genMaxtrix = (h, w) => {
        let data = [];
        let flag = [];

        for(let i = 0; i <h; i++){
            let row = [];
            let rowFlag = [];

            for(let j = 0; j<w; j++){
                row = row.concat(0);
                rowFlag = rowFlag.concat(true);
            }

            data = [
                ...data,
                ...[row]
            ]
            flag = [
                ...flag,
                ...[rowFlag]
            ]
        }

        /// gen
        let cnt = 0;
        while (cnt < Math.floor(h/2)*Math.floor(w/2)){
            let x = Math.floor(Math.random() * h);
            let y = Math.floor(Math.random() * w);

            let x1 = x;
            let y1 = y;

            if (!flag[x][y]) continue;

            let ok = true;
            for(let round = 1; round <=3; round++){
                let src = {
                    x: x,
                    y: y
                }

                let point = this._rotatePoint(src, h, w);

                if (point.x == src.x && point.y == src.y){
                    ok = false;
                    break;
                }

                if (point.x<0 || point.x>=h || point.y<0 || point.y>=w){
                    ok = false;
                    break;
                }
                
                if (!flag[point.x][point.y]){
                    ok = false;
                    break;
                }

                x = point.x;
                y = point.y;
            }

            if (ok == false) continue;

            for(let round = 1; round <=4; round++){
                let src = {
                    x: x,
                    y: y
                }

                flag[x][y] = false;

                let point = this._rotatePoint(src);
                if (!flag[point.x][point.y])
                    continue;

                x = point.x;
                y = point.y;
            }

            data[x1][y1] = 1;
            cnt++;
        }
        
        return {
            w: w,
            h: h,
            data: data
        };
    }

    _handleGenMatrixAction = async() => {
        let matrix = this._genMaxtrix(this.state.h, this.state.w);

        let matrix1 = this._rotateMatrix(matrix);
        let matrix2 = this._rotateMatrix(matrix1);
        let matrix3 = this._rotateMatrix(matrix2);
        
        let textTables = this._makeMatrixAm1(matrix.h, matrix.w);
        let decryptTextTable = this._makeMatrixAm1(matrix.h, matrix.w);

        await this.setState({decryptTextTable: decryptTextTable ,textTables: textTables, matrix: matrix, matrixs: [matrix, matrix1, matrix2, matrix3]});
        this._encrypt();
    }

    _handleChangeText = async (text) => {
        await this.setState({text: text});

        // encrypt
        this._encrypt();
    }

    _makeMatrixAm1 = (h, w) => {
        let ans = [];
        for(let i = 0; i < h; i++){
            let row = [];
            for(let j = 0; j < w; j++)
                row = row.concat(-1);
            ans = [
                ...ans,
                ...[row]
            ]
        }

        return ans;
    }

    _encrypt = async() => {
        const text = this.state.text;
        const {w, h} = this.state.matrix;

        var textTables = [
            ...[this._makeMatrixAm1(h, w)],
            ...[this._makeMatrixAm1(h, w)],
            ...[this._makeMatrixAm1(h, w)],
            ...[this._makeMatrixAm1(h, w)]
        ];

        var tempTable = this._makeMatrixAm1(h, w);

        let idText = 0;
        for(let ix = 0; ix < 4; ix++){
            let _matrix = this.state.matrixs[ix].data;

            if (idText >= text.length){
                for(let i = 0; i < h; i++)
                    for(let j = 0; j < w; j++)
                        textTables[ix][i][j] = tempTable[i][j];
                break;
            }

            for(let i = 0; i < h; i++){
                for(let j = 0; j < w; j++)
                    if (_matrix[i][j] == 1){
                        
                        tempTable[i][j] = text[idText];
                        idText++;
                        if (idText >= text.length) break;
                    }
                
                if (idText >= text.length) break;
            }

            for(let i = 0; i < h; i++)
                for(let j = 0; j < w; j++)
                    textTables[ix][i][j] = tempTable[i][j];
          
        }

        let result = "";
        for(let i = 0; i<h; i++)
            for(let j = 0; j<w; j++)
                if (tempTable[i][j] != -1)
                    result = result + tempTable[i][j];
                else 
                    result = result + '@';

        await this.setState({textTables: textTables, result: result});
        console.log("TextTable : ", textTables);

        this._decrypt();
    }

    _decrypt = () => {
        const text = this.state.result;
        const {h, w} = this.state.matrix;

        var tempTable = this._makeMatrixAm1(h, w);

        let idText = 0;
        for(let i = 0; i < h; i++)
            for(let j = 0; j < w; j++){
                tempTable[i][j] = text[idText];
                idText++;
                if (idText >= text.length) break;
            }

        // get text
        let ans = [];
        const matrixs = this.state.matrixs;

        for(let ix = 0; ix < 4; ix++){
            let text = "{";

            for(let i = 0; i < h; i++)
                for(let j = 0; j < w; j++)
                    if (matrixs[ix].data[i][j] == 1)
                        text = text + tempTable[i][j];

            text = text + "}";

            ans = ans.concat(text)
        }

        this.setState({decryptTextTable: tempTable, decryptTexts: ans});
    }

    _changeHeight = (height) => {
        this.setState({h: height, w: height});
    }


    render(){
        console.log("State : ", this.state);
        return (
            <div className="HomePage">
                <div>
                    <h6>h</h6>
                    <input value={this.state.h} onChange={(e) => this._changeHeight(e.target.value)} />
                </div>
                <GenMatrix matrix={this.state.matrix} genMatrixAction = {() => this._handleGenMatrixAction()}/>
                <hr />
                <TextInput onChange={(text) => this._handleChangeText(text)} text={this.state.text}/>
                <hr />
                <DisplayEncrypt matrixs={this.state.matrixs} textTables={this.state.textTables} />
                <hr />
                <Result text={this.state.result} title="Text Encrypt"/>
                <hr />
                <DisplayDecrypt matrixs={this.state.matrixs} decryptTextTables={this.state.decryptTextTable} decryptTexts={this.state.decryptTexts}/>
                <hr />
                <Result text={this.state.text} title="Text Decrypt"/>
                <hr />
            </div>
        )
    }
}

export default HomePage;