import React, { Component } from 'react';
import './ReviewForm.css';

export default class ReviewForm extends Component {
    handleSubmit = e => {
        e.preventDefault()
    }
    
    render() {
        return(
        <form 
            className="reviewForm"
            onSubmit={this.handleSubmit}>
            <fieldset className="reviewField">
                <div className="reviewHead">
                <h4>Write a Review</h4>
                <input 
                    type="text" 
                    className="reviewTitle" 
                    placeholder="Review Title" 
                    required
                />
                <div className="rating">
                <label htmlFor="reviewRate"className="rateLabel">Rating: </label>
                <input id="reviewRate" type="number" max="5" min="1" required/><span>/5</span></div>
                </div>
                <textarea 
                    className="contentField"
                    rows="10" 
                    cols="70" 
                    placeholder="Type your review here..."
                    required>    
                </textarea>
                <div className="postButton">
                    <button type="submit" className="postReview">Post</button>
                </div>
            </fieldset>
        </form>
        )
    }
}