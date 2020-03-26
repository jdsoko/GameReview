import React, { Component } from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom'
import history from '../../history'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service';

export default class LoginForm extends Component{

    state = { 
        error: null,
        user_name: '',
        password: '',

    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        
        AuthApiService.postLogin({
            user_name: this.state.user_name,
            password: this.state.password,
        })
            .then(res => {
                this.setState({user_name: ''})
                this.setState({password: ''})
                TokenService.saveAuthToken(res.authToken)
                history.push('/games')
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    
    }
    
    render() {
        const { error } = this.state
    return(
        <form 
            className="loginForm"
            onSubmit={this.handleSubmitJwtAuth}
        >
            <fieldset>
                <legend className="legend">
                    Sign-in to Get Started
                </legend>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                
                <label htmlFor="Login__user_name" id="userLabel">
                    Username 
                </label>
                <input 
                    type="text" 
                    name='user_name' 
                    id="Login__user_name" 
                    placeholder="demo-user" 
                    required
                    onChange={e => this.setState({ user_name: e.target.value})}
                />
                
               
                <label htmlFor="Login__password" id="passLabel">
                    Password 
                </label>
                <input 
                    type="password" 
                    name='password' 
                    id="Login__password" 
                    placeholder="ex. Pass123!" 
                    required
                    onChange={e => this.setState({ password: e.target.value})}
                />
               
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