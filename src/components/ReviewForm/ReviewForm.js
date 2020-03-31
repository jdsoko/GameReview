import React, { Component } from 'react';
import './ReviewForm.css';
import config from '../../config'
import TokenService from '../../services/token-service'
import history from '../../history'

export default class ReviewForm extends Component {
    state = {
        error: null,
        title: '',
        content: '',
        rating: null,

    }
   
    handleSubmit = e => {
        e.preventDefault()
        const reqBody = {
            review_title: this.state.title,
            content: this.state.content,
            rating: Number(this.state.rating),
            game_id: this.props.game_id
        }
        
        fetch(`${config.API_BASE_URL}/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(reqBody)
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
            
        )
        .then(e => 
            setTimeout(() => history.push('/games'), 200)
        )
        .catch(res => {
            this.setState({ error: res.error })
        })
       
    }
    
    render() {
        const { error } = this.state
        return(
        <form 
            className="reviewForm"
            onSubmit={this.handleSubmit}>
            <fieldset className="reviewField">
                <div className="reviewHead">
                <h4 className="writeReview">Write a Review</h4>
                <div role='alert' id='gamePageError'>
                {error && <p className='red'>{error}</p>}
                </div>
                <input 
                    type="text" 
                    className="reviewTitle" 
                    placeholder="Review Title" 
                    required
                    onChange={e => this.setState({title: e.target.value})}
                />
                <div className="rating">
                    <label htmlFor="reviewRate"className="rateLabel">Rating: </label>
                    <input 
                        id="reviewRate" 
                        type="number" 
                        max="5" 
                        min="1" 
                        required
                        onChange={e => this.setState({rating: e.target.value})}
                    /><span>/5</span>
                </div>
                </div>
                <textarea 
                    className="contentField"
                    rows="10" 
                    cols="70" 
                    placeholder="Type your review here..."
                    required
                    onChange={e => this.setState({content: e.target.value})}
                >    
                </textarea>
                <div className="postButton">
                    <button type="submit" className="postReview">Post</button>
                </div>
            </fieldset>
        </form>
        )
    }
}