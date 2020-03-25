import React, { Component } from 'react';
import './GameItem.css'
import { Link } from 'react-router-dom'

export default class GameItem extends Component {
    
    render(){
        return (
        <div className="game">
            <h3 className="gameTitle">{this.props.title}</h3>
            <h4 className="gameRating">Average Rating: {this.props.avgRating}/5</h4>
            <Link to ={{pathname: '/reviews', state: {title: this.props.title, avgRating: this.props.avgRating, id: this.props.id}}}>
            <button className="reviewButton">See Reviews</button>
            </Link>
        </div>
        )
    }
}