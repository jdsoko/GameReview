import React, { Component } from 'react';
import './GameItem.css'
import { Link } from 'react-router-dom'
import { GameStarRating } from '../GameStarRating/GameStarRating'

export default class GameItem extends Component {
    
    render(){
        return (
        <div className="game">
            <h3 className="gameTitle">{this.props.title}</h3>
            <GameStarRating rating={this.props.avgRating} />
            <Link to ={{pathname: '/reviews', state: {title: this.props.title, avgRating: this.props.avgRating, id: this.props.id}}}>
                <div className="buttonCont">
            <button className="reviewButton">See Reviews</button>
                </div>
            </Link>
        </div>
        )
    }
}