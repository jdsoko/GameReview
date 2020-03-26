import React, { Component } from 'react'
import './ReviewListPage.css'
import ReviewItem from '../../components/ReviewItem/ReviewItem'
import Header from '../../components/Header/Header'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import config from '../../config'
import TokenService from '../../services/token-service'

export default class ReviewListPage extends Component {
    state = {
        reviews: [],
        error: null,
    }
    
    componentDidMount(){
        this.fetchReviews()
    }

    fetchReviews(){
        fetch(`${config.API_BASE_URL}/games/${this.props.location.state.id}/reviews`,{
         headers:  { 
            'authorization': `bearer ${TokenService.getAuthToken()}`
        }
      })
      .then(res =>
         (!res.ok)
         ? res.json().then(e => Promise.reject(e))
         : res.json()
         )
         .then(resJson => this.setState({reviews: resJson})
         )
         .catch(res => {
             this.setState({ error: res.error })
         })
    }
  
    renderReviews(reviews){
       
       return reviews.map(review => 
           <ReviewItem
                reviewTitle={review.review_title}
                rating={review.rating}
                content={review.content}
                username={review.user_name}
           />
       )
   }
   
    render() {
        return (
            <div>
                <Header />
                <h3 id="gameTitle">{this.props.location.state.title}</h3>
                <h4 id="gameRating">Average Rating: {this.props.location.state.avgRating}/5</h4>
                <ReviewForm game_id = {this.props.location.state.id}/>
                {this.renderReviews(this.state.reviews)}
            </div>
        )
    }
}