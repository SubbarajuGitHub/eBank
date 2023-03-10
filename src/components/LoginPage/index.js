import {Component} from 'react'

import './index.css'

class LoginPage extends Component {
  state = {userid: '', pin: ''}

  GetuserName = event => {
    this.setState({userid: event.target.value})
  }

  GetuserPin = event => {
    this.setState({pin: event.target.value})
  }

  getUserDetails = async event => {
    event.preventDefault()
    const {userid, pin} = this.state
    const userDetails = {userid, pin}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      body: JSON.stringify(userDetails),
      method: 'POST',
    }
    const response = await fetch(url, options)
  }

  render() {
    const {userid, pin} = this.state
    return (
      <div className="login-div">
        <div className="image-input-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website logo"
            className="logo"
          />
          <div className="form-div">
            <h1>Welcome Back!</h1>
            <form onSubmit={this.getUserDetails}>
              <label htmlFor="username">User ID</label>
              <br />
              <input
                type="username"
                id="username"
                placeholder="Enter User ID"
                onChange={this.GetuserName}
              />
              <br />
              <label htmlFor="pin">PIN</label>
              <br />
              <input
                type="username"
                id="pin"
                placeholder="Enter PIN"
                onChange={this.GetuserPin}
              />
              <br />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default LoginPage
