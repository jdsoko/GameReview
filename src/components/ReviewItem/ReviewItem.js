import React, { Component } from 'react';
import './ReviewItem.css'

export default class ReviewItem extends Component {
    render() {
        return (
        <div className="review">
            <p>Rating: {this.props.rating}/5</p>
            <h4>{this.props.reviewTitle}</h4>
            <p className="review_username">{this.props.username}</p>
            <fieldset className="reviewContent">
                 {this.props.content}
            </fieldset>
        </div>
        )
    }
}