import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return(
            <Link className="header-link" to='/games'>
            <header><span className="header1">GameR</span><span className="header2">eview</span></header>
            </Link>
        )
    }
}