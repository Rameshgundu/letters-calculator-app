// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  countLetters = event => {
    if (event.target.value !== '') {
      this.setState({
        count: event.target.value.length,
      })
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="countText">Enter the phrase</label>
          <input
            type="text"
            placeholder="Enter the phrase"
            id="countText"
            onChange={this.countLetters}
          />
          <p className="button1">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
