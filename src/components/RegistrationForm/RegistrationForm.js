import React, { Component } from 'react';
import './RegistrationForm.css';
import history from '../../history'
import config from '../../config'
import AuthApiService from '../../services/auth-api-service';

export default class RegistrationForm extends Component{
    
    state = { 
        error: null,
        full_name: '',
        user_name: '',
        password: '',
    }
    handleSubmit = ev => {
        ev.preventDefault()
        
        
        this.setState({ error: null })
        AuthApiService.postUser({
            user_name: this.state.user_name,
            password: this.state.password,
            full_name: this.state.full_name,
        })
        .then(user => {
            this.setState({full_name: ''})
            this.setState({user_name: ''})
            this.setState({password: ''})
            history.push('/')
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }
        

    render(){
        const { error } = this.state
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
                        <div role='alert'>
                            {error && <p className="red">{error}</p>}
                        </div>
                        <div className="full_name">
                        <label htmlFor="Registration__full_name" id="regFull">
                            Name 
                        </label>
                        <input 
                            name="full_name"
                            type="text" 
                            id="Registration__full_name" 
                            placeholder="John Doe" 
                            required
                            onChange={e => this.setState({ full_name: e.target.value })}
                        />
                        </div>
                        <div className="user_name">
                        <label htmlFor="Registration__user_name" id="regUser">
                            Username 
                        </label>
                        <input 
                            name="user_name"
                            type="text" 
                            id="Registration__user_name" 
                            placeholder="demo-user" 
                            required
                            onChange={e => this.setState({ user_name: e.target.value})}
                        />
                        </div>
                        <div className="password">
                        <label htmlFor="Registration__password" id="regPass">
                            Password 
                        </label>
                        <input 
                            name="password"
                            type="password" 
                            id="Registration__password" 
                            placeholder="ex. Pass123" 
                            required
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        </div>
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