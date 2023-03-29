import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  subscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  btnTxt = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.btnTxt()

    return (
      <div className="container">
        <h1 className="main-head">Welcome</h1>
        <p className="head">Thank you! Happy Learning</p>
        <button type="button" onClick={this.subscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
