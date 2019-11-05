import React from 'react';
import axios from 'axios';

export default class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      email:  '',
      phone:  '',
      username: '',
      password: '', 
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
   
  handleSubmit = event => {
    event.preventDefault()
    const { email, phone, username, password } = this.state


    axios({
      method: 'post',
      url: 'http://localhost/lumen_api/register',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        email: {email},
        phone: {phone},
        username: {username},
        password: {password}
      }
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="btn btn-secondary" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <button 
        className="btn btn-primary float-right" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  return null;
}
  
  render() {    
    return (
      <React.Fragment>
        <div className="container">
          <h1>React Wizard Form 🧙‍♂️</h1>
            <p>Step {this.state.currentStep} </p> 

            <form onSubmit={this.handleSubmit}>
            {/* 
              render the form steps and pass required props in
            */}
              <Step1 
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                email={this.state.email}
                phone={this.state.phone}
              />
              <Step2 
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                username={this.state.username}
              />
              <Step3 
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                password={this.state.password}
              />
              {this.previousButton()}
              {this.nextButton()}

            </form>
        </div>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          className="form-control"
          autoComplete="OFF"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          />
      </div>

      <div className="form-group">
        <label htmlFor="email">Phone number</label>
        <input
          className="form-control"
          autoComplete="OFF"
          id="phone"
          name="phone"
          type="text"
          placeholder="Enter Phone"
          value={props.phone}
          onChange={props.handleChange}
          />
      </div>
    </React.Fragment>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input
        className="form-control"
        autoComplete="OFF"
        id="username"
        name="username"
        type="text"
        placeholder="Enter username"
        value={props.username}
        onChange={props.handleChange}
        />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          autoComplete="OFF"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
          />      
      </div>
      <button className="btn btn-success btn-block">Sign up</button>
    </React.Fragment>
  );
}

