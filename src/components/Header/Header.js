import React, { Component } from 'react';
import './Header.css';


export default class Header extends Component {
    render() {
        return(
            <header><a href className="header-link"><span className="header1">GameR</span><span className="header2">eview</span></a></header>
        )
    }
}