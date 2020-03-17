import React, { Component } from 'react';
import './RegistrationForm.css';
import history from '../../history'

export default class RegistrationForm extends Component{
    handleSubmit = e => {
        e.preventDefault()
        history.push('/games')
    }
    render(){
        return(
            <div>
                <form 
                    className="regForm"
                    onSubmit={this.handleSubmit}
                > 
                    <fieldset className="regField">
                        <legend className="registerHeader">
                            Register for New Account
                        </legend>
                        <label htmlFor="fullName" id="regFull">
                            Name: 
                        </label>
                        <input type="text" className="fullName" placeholder="John Doe" required/>
                        <label htmlFor="username" id="regUser">
                            Username: 
                        </label>
                        <input type="text" className="username" placeholder="demo-user" required/>
                        <label htmlFor="password" id="regPass">
                            Password: 
                        </label>
                        <input type="password" className="password" placeholder="ex. Pass123" required/>
                        <div className="loginButton">
                            <button type="submit" id="loginButton">
                                Register
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}