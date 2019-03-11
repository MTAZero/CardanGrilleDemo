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
            text: "",
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
            
        };

        
    }

    componentDidMount = () => {
        const matrix = this.state.matrix;
        let matrix1 = this._rotateMatrix(matrix);
        let matrix2 = this._rotateMatrix(matrix1);
        let matrix3 = this._rotateMatrix(matrix2);
        
        this.setState({matrixs: [matrix, matrix1, matrix2, matrix3]});
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

    _handleGenMatrixAction = () => {
        let matrix = this._genMaxtrix();
        let matrix1 = this._rotateMatrix(matrix);
        let matrix2 = this._rotateMatrix(matrix1);
        let matrix3 = this._rotateMatrix(matrix2);
        
        this.setState({matrix: matrix, matrixs: [matrix, matrix1, matrix2, matrix3]});
    }

    _handleChangeText = (text) => {
        this.setState({text: text});
    }

    render(){

        return (
            <div className="HomePage">
                <GenMatrix matrix={this.state.matrix} genMatrixAction = {() => this._handleGenMatrixAction()}/>
                <hr />
                <TextInput onChange={(text) => this._handleChangeText(text)} />
                <hr />
                <DisplayEncrypt text={this.state.text} matrixs={this.state.matrixs} />
                <hr />
                <Result text={this.state.text}/>
                <hr />
                <DisplayDecrypt text={this.state.text} matrixs={this.state.matrixs} />
                <hr />
                <Result />
                <hr />
            </div>
        )
    }
}

export default HomePage;