import React, { Component } from 'react'


class ResultComponent extends Component {
  render() {
    return (
      <div className="body">
    
                <h2 className="h">Result</h2>
                <div className="result">
                    <p className="quote"><b>You need more practise</b></p>
                    <p className="score">Your score is 20%</p>
                    <div className="results">
                        <p className="totalque"> Total no. of questions <span>15</span> </p>
                      
                        <p className="totalque"> Number of attempted questions <span>9</span> </p>
                    
                        <p className="totalque"> Number of correct answers <span>3</span> </p>
                    
                        <p className="totalque"> Number of wrong answers <span>6</span> </p>
                      
                    </div>
                    <div className="buttons">
                        <button className="btn1">Play Again</button>
                        <button className="btn2">Back to home</button>
                    </div>
                </div>
  

      </div>
    )
  }
}

export default ResultComponent