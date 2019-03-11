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

const zeroMatrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

class HomePage extends Component {

    constructor(props){
        super(props);

        this.state = {
            text: "BuiXuanThuyATK50",
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
        const matrix = this.state.matrix;
        let matrix1 = this._rotateMatrix(matrix);
        let matrix2 = this._rotateMatrix(matrix1);
        let matrix3 = this._rotateMatrix(matrix2);
        
        await this.setState({matrixs: [matrix, matrix1, matrix2, matrix3]});

        this._encrypt();
    }

    _rotateMatrix = (matrix) => {
        let newMatrix = {
            w: matrix.w,
            h: matrix.h,
            data: [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ]
        };

        for(var i=0; i < matrix.h; i++)
            for(var j=0; j<matrix.w; j++)
                newMatrix.data[j][matrix.w-i-1] = matrix.data[i][j];

        return newMatrix;
    }

    _rotatePoint = (src, w) => {
        let ans = {
            x: src.x,
            y: src.y
        }

        ans.x = src.y;
        ans.y = w - src.x - 1;

        return ans;
    }

    _genMaxtrix = () => {
        let ans = {
            w: matrix.w,
            h: matrix.h,
            data: [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ]
        };

        for(let i = 0; i < 2; i++)
            for(let j = 0; j < 2; j++){
                let k = Math.floor(Math.random()*3) + 1; 
                let point = {
                    x: i,
                    y: j
                };

                for(let idk = 1; idk <= k; idk++)
                    point = this._rotatePoint(point, 4);

                ans.data[point.x][point.y] = 1;
            }

        return ans;
    }

    _handleGenMatrixAction = async() => {
        let matrix = this._genMaxtrix();
        let matrix1 = this._rotateMatrix(matrix);
        let matrix2 = this._rotateMatrix(matrix1);
        let matrix3 = this._rotateMatrix(matrix2);
        
        await this.setState({matrix: matrix, matrixs: [matrix, matrix1, matrix2, matrix3]});
        this._encrypt();
    }

    _handleChangeText = async (text) => {
        await this.setState({text: text});

        // encrypt
        this._encrypt();

    }

    _encrypt = async() => {
        const text = this.state.text;
        var textTables = [
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
        ];

        var tempTable = [
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
            [-1, -1, -1, -1]
        ];

        let idText = 0;
        for(let ix = 0; ix < 4; ix++){
            let _matrix = this.state.matrixs[ix].data;

            if (idText >= text.length) break;

            for(let i = 0; i < 4; i++){
                for(let j = 0; j < 4; j++)
                    if (_matrix[i][j] == 1){
                        
                        tempTable[i][j] = text[idText];
                        idText++;
                        if (idText >= text.length) break;
                    }
                
                if (idText >= text.length) break;
            }

            for(let i = 0; i < 4; i++)
                for(let j = 0; j < 4; j++)
                    textTables[ix][i][j] = tempTable[i][j];
          
        }

        let result = "";
        for(let i = 0; i<4; i++)
            for(let j = 0; j<4; j++)
                if (tempTable[i][j] != -1)
                    result = result + tempTable[i][j];
                else 
                    result = result + '@';

        await this.setState({textTables: textTables, result: result});

        this._decrypt();
    }

    _decrypt = () => {
        const text = this.state.result;

        var tempTable = [
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
            [-1, -1, -1, -1]
        ];

        let idText = 0;
        for(let i = 0; i < 4; i++)
            for(let j = 0; j < 4; j++){
                tempTable[i][j] = text[idText];
                idText++;
                if (idText >= text.length) break;
            }

        // get text
        let ans = [];
        const matrixs = this.state.matrixs;

        for(let ix = 0; ix < 4; ix++){
            let text = "{";

            for(let i = 0; i < 4; i++)
                for(let j = 0; j < 4; j++)
                    if (matrixs[ix].data[i][j] == 1)
                        text = text + tempTable[i][j];

            text = text + "}";

            ans = ans.concat(text)
        }

        this.setState({decryptTextTable: tempTable, decryptTexts: ans});
    }

    render(){

        return (
            <div className="HomePage">
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