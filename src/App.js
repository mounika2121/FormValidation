import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {
    name: '',
    nameError: '',
    password: '',
    passwordError: '',
    errormsg: false,
    loginSuccess: false,
  }

  onChangeName = event => {
    const {value} = event.target
    this.setState({
      name: value,
      nameError: value.length < 3 ? 'Name must be at least 3 characters' : '',
    })
  }

  onChangePassword = event => {
    const {value} = event.target
    this.setState({
      password: value,
      passwordError:
        value.length < 6 ? 'Password must be at least 6 characters' : '',
    })
  }

  onSubmit = event => {
    const {name, password} = this.state
    event.preventDefault()
    if (name === '' || password === '') {
      this.setState(preState => ({errormsg: !preState.errormsg}))
    } else {
      this.setState({loginSuccess: true, errormsg: false})
    }
  }

  render() {
    const {
      name,
      password,
      nameError,
      passwordError,
      errormsg,
      loginSuccess,
    } = this.state
    return (
      <div className="bg-container">
        <form onSubmit={this.onSubmit}>
          <label htmlFor="name">User Name:</label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={this.onChangeName}
          />
          <br />
          <span>{nameError}</span>
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={this.onChangePassword}
          />
          <div>
            <br />
            <span>{passwordError}</span>
            <br />
            <button type="submit">Login</button>
          </div>
          {errormsg ? <p className="error">Name and Password Required</p> : ''}
          {loginSuccess ? <p className="success">Login Successfully</p> : ''}
        </form>
      </div>
    )
  }
}

export default App
