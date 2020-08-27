import React, { Component } from 'react';

import './app.css'

import KeyPadComponent from './components/keyPadComponent'
import ResultComponent from './components/resultComponent'

class App extends Component {

  constructor() {
    super()

    this.state = {
      result: ''
    }
  }


  onClick = button => {

    if(button === '=') {

      this.calculate()
    }

    else if(button === 'C') {
      
      this.resetAllOperation()
    }

    else if(button === 'CE') {

      this.resetLastTyped()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  }



    calculate = () => {

      try {

          this.setState({
            result: (eval(this.state.result) || '') + ''
          })        

      } catch(event) {

        this.setState({
            result: 'error'
        })
      }
    }

    resetAllOperation = () => {

      this.setState({
        result: ''
      })
    }

    resetLastTyped = () => {
      
        this.setState({
          result: this.state.result.slice(0, -1)
        })
    }


    render() {
    
      return (
        
        <>
          <div className="calculator-body">

            <h1> Calculator  </h1>

            <KeyPadComponent  onClick={ this.onClick } />
            <ResultComponent result={ this.state.result } />
          </div>
        </>
      )
  }
}

export default App;
