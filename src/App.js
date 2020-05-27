import React from "react"
import UIfx from "uifx"
import plopSound from "./pop.mp3"
import plipSound from "./pip.mp3"

class App extends React.Component {
  state = {
    count: 0,
    sound: true,
  }
  plop = new UIfx(plopSound, {
    volume: 1, // number between 0.0 ~ 1.0
    throttleMs: 100,
  })
  plip = new UIfx(plipSound, {
    volume: 0.7, // number between 0.0 ~ 1.0
    throttleMs: 100,
  })

  up = () => {
    if (this.state.sound) {
      this.plip.play()
    }

    this.setState({
      count: this.state.count + 1,
    })
  }
  down = () => {
    if (this.state.sound) {
      this.plop.play()
    }
    this.setState({
      count: this.state.count - 1,
    })
  }

  toggleSound = () => {
    this.setState({
      sound: !this.state.sound,
    })
  }

  componentDidMount() {
    document.addEventListener("keydown", ({ key }) => {
      switch (key) {
        case "ArrowLeft":
          this.down()
          break
        case "ArrowRight":
          this.up()
          break
        default:
          break
      }
    })
  }

  render = () => {
    const { count } = this.state

    return (
      <div className="main">
        <div className="buttons">
          <div
            className="left button"
            onClick={() => {
              this.down()
            }}
          >
            -1
          </div>
          <div
            className="right button"
            onClick={() => {
              this.up()
            }}
          >
            +1
          </div>
        </div>
        <div className="count">
          {count > 0 ? "+" + count.toString() : count}
        </div>
        <div
          className="audio"
          onClick={this.toggleSound}
          style={{ opacity: this.state.sound ? 1 : 0.2 }}
        >
          {this.state.sound ? (
            <i className="fas fa-volume-up"></i>
          ) : (
            <i className="fas fa-volume-off"></i>
          )}
        </div>
      </div>
    )
  }
}

export default App
