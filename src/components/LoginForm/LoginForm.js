import React, { Component } from 'react';
import './LoginForm.css';
import { Link, Redirect } from 'react-router-dom'
import history from '../../history'

export default class LoginForm extends Component{
    
    handleSubmit = e => {
        e.preventDefault()
        history.push('/games');
    }
    
    render() {
    return(
        <form 
            className="loginForm"
            onSubmit={this.handleSubmit}
        >
            <fieldset>
                <legend className="legend">
                    Sign-in to Get Started
                </legend>
                <label htmlFor="username" id="userLabel">
                    Username 
                </label>
                <input type="text" className="username" placeholder="demo-user" required/>
                <label htmlFor="password" id="passLabel">
                    Password 
                </label>
                <input type="password" className="password" placeholder="ex. Pass123" required/>
                
                <div className="loginButton">
                    <button type="submit" id="loginButton">
                        Sign-in
                    </button>
                </div>
                <p className="register">
                    Don't have account?
                <Link to='/registration' id="regLink">
                    Register
                </Link>
                </p>
            </fieldset>
        </form>
        )
    }




}