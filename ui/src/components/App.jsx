import React from 'react'
import axios from 'axios'

// We are using bootstrap as the UI library
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component {
  constructor () {
    super()

    this.client = axios.create({
      baseURL: `${window.location.href}api`
    })

    this.state = {
      about: 'loading'
    }
  }

  componentDidMount () {
    this.client.get('/about').then((response) => {
      this.setState({
        about: response.data
      })
    })
  }

  handleSubmit (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div className="container">
        <div className="py-5 text-center">
          <h1>Welcome to CEIT Registerator</h1>
          <h2>{this.state.about}</h2>
          <p className="lead">
            Please fill the following form with your information
            currectly.
          </p>
        </div>
        <div className="row">
          <div className="col-8">
            <form className="needs-validation" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-6 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="" required></input>
                  <div className="invalid-feedback" style={{width: "100%"}}>
                    Your First name is required.
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="" required></input>
                  <div className="invalid-feedback" style={{width: "100%"}}>
                    Your Last name is required.
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="studentID">Username</label>
                <input type="text" className="form-control" id="stduentID" placeholder="9231058" required></input>
                <div className="invalid-feedback" style={{width: "100%"}}>
                  Your StudentID is required.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" required></input>
                <div className="invalid-feedback" style={{width: "100%"}}>
                  Your Email is required.
                </div>
              </div>
            </form>
            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">Submit</button>
          </div>
          <div className="col-4">
          </div>
        </div>
        <footer className="my-5 pt-5 text-muted text-center text-small">
          <p className="mb-1">&copy; 2018 AUT-CEIT</p>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="https://github.com/AUT-CEIT/Registerator">Github</a></li>
            <li className="list-inline-item"><a href="mailto:parham.alvani@gmail.com">Support</a></li>
          </ul>
        </footer>
      </div>
    )
  }
}

export default App
