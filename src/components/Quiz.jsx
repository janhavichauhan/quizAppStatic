import React, { Component } from 'react'

class Quiz extends Component {
  render() {
    return (
      <div>
            <div className="Body">
            <h1 className='hhh'>Questions</h1>
            <p className="question">1 of 15</p>
            <h2 className='hh'>Which is the only mammal that can jump?</h2>
            <div className="option">
                <div className="choice">Dog</div>
                <div className="choice">Elephant</div>
                <div className="choice">Goat</div>
                <div className="choice">Lion</div>
            </div>
            <div className="btna">
                <button className="p">Previous</button>
                <button className="n">Next</button>
                <button className="q">Quit</button>
            </div>
        </div>
  </div>
    )
  }
}

export default Quiz