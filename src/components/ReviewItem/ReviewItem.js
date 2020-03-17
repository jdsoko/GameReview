import React, { Component } from 'react';
import './ReviewItem.css'

export default class ReviewItem extends Component {
    render() {
        return (
        <div className="review">
            <h3>{this.props.reviewTitle}</h3> <p>Rating: {this.props.rating}</p>
            <fieldset className="reviewContent">
                 {this.props.content}
            </fieldset>
        </div>
        )
    }
}