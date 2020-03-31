import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import Header from '../../components/Header/Header'
import './LoginPage.css'


export default class LoginPage extends Component {
    render(){
        return (
         <div>
            <Header />
            <LoginForm />
         </div>
        )
    }
}