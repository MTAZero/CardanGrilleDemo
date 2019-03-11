import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// component
import HomePage from './Home';
import './scss/home.scss';

class App extends Component {
    render(){
        return (
            <div className="App">
                <HomePage />
            </div>
        )
    }
}

export default HomePage;

// // Don’t cry because it’s over, smile because it happened.
// class App extends Component {

//   constructor(props){
//       super(props);
//       this.state = {
//           input: "Kim tu dien mau den",
//           grid:  "0011111110011110000",
//           result: "",
//           error: false
//       }
//   }

//   _calResult = () => {
//       const {input, grid} = this.state;
      
//       if (input.length != grid.length){
//         this.setState({error: true, result: "(Error) : Input and grid not same length!"});
//         return;
//       }

//       let ok = true;
//       for(let index = 0; index < grid.length; index++) 
//         if (grid[index] != '0' && grid[index] != '1'){
//             this.setState({error: true, result: "(Error) : Grid must have value is 0 or 1"});
//             return;
//         }

//       let res = "";
//       for(let index = 0; index < grid.length; index++)
//         if (grid[index] == '0')
//             res = res + input[index];

//       this.setState({error: false, result: res});
//   }

//   _handleKeyPress = (event) => {
//     if(event.key == 'Enter'){
//       this._calResult()
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p className="App-Header" style={{marginBottom: 5}}> 
//             Cardan Grille
//           </p>
//           <div style={{fontSize: 14, marginTop: 0}}>
//             Student demo: ThuyBX
//           </div>
//           <div className="MainContentDemo" style={{marginTop: 20, textAlign: "center"}}>
//               <div style={{fontSize: 15, marginBottom: 5}}>
//                   String: <input type="text"  value={this.state.input} onChange={(e)=>this.setState({input: e.target.value})} onKeyPress={(e)=>this._handleKeyPress(e)}/>
//               </div>
//               <div style={{fontSize: 13}}>
//                   Grid___: <input type="text" value={this.state.grid} onChange={(e)=>this.setState({grid: e.target.value})} onKeyPress={(e)=>this._handleKeyPress(e)}/>
//               </div>
//               <div style={{textAlign: "center"}} onClick={() => this._calResult()}>
//                   <button>Display</button>
//               </div>
//               <div style={{marginTop: 15}}>
//                    Result: 
//                     <div style={{fontSize: 14}}>
//                       { (!this.state.error) 
//                       ? 
//                       <div style={{color: "#fefffe"}}>{this.state.result}</div> 
//                       :
//                       <div style={{color: "red"}}>{this.state.result}</div>}
//                     </div>
//               </div>
//           </div>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
