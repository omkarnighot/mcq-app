import React from 'react';
import './Login.css';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email : "user@test.com",
      password : "password@123",
      enteredEmail :"",
      enteredPassword :"",
      loginSucess : false,
    }
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateEmail(e){
    this.setState({
      enteredEmail : e.target.value
    })
  }

  updatePassword(e){
    this.setState({
      enteredPassword : e.target.value
    })
  }

  handleSubmit(){
    // console.log(this.props.history.push(`/l`))
    if(this.state.email === this.state.enteredEmail && this.state.password === this.state.enteredPassword)
    window.location.href = '/mcq'
    else {
      alert("Wrong Credentials!")
    }
  }

  render(){
    return(
      <div>
        {this.state.loginSucess === false ? (
          <div className="form-container">
            <h1>Login</h1>
            <input type="email" value={this.state.enteredEmail} placeholder="Enter Email" onChange={(e)=>this.updateEmail(e)}></input><br />
            <input type="password" value={this.state.enteredPassword} placeholder="Enter Password" onChange={(e)=>this.updatePassword(e)}></input><br />
            <button onClick={this.handleSubmit} className="login-btn">Login</button><br />
            <small>*Please login to start the quiz.</small>
          </div>
        ):(
          <div>Logged in successfully!!!!</div>
        )}
      </div>
    )
  }

}

export default Login;
