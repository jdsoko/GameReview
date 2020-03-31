import React, { Component } from 'react';
import './ReviewItem.css'
import { GameStarRating } from '../../components/GameStarRating/GameStarRating'

export default class ReviewItem extends Component {
    
    
    render() {
        return (
        <div className="review">
            <GameStarRating className="starRating" rating={this.props.rating} />
            <h4 className="review_title">{this.props.reviewTitle}</h4>
            <p className="review_username">-{this.props.username}</p>
            <fieldset className="reviewContent">
                 {this.props.content}
            </fieldset>
        </div>
        )
    }
}