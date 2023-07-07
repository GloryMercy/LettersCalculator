import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {letterCount: 0}

  onEnteringLetters = event => {
    this.setState({letterCount: event.target.value.length})
  }

  render() {
    const {letterCount} = this.state

    return (
      <div className="app-container">
        <div className="letter-calculator-container">
          <div className="calculate-txt-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="enter-text" htmlFor="input-element">
              Enter the phrase
            </label>
            <input
              type="text"
              className="input-tab"
              id="input-element"
              placeholder="Enter the phrase"
              onChange={this.onEnteringLetters}
            />
            <p className="count-text">No.of letters: {letterCount}</p>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="calculator-img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
