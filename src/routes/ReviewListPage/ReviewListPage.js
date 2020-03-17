import React, { Component } from 'react'
import './ReviewListPage.css'
import ReviewItem from '../../components/ReviewItem/ReviewItem'
import Header from '../../components/Header/Header'
import ReviewForm from '../../components/ReviewForm/ReviewForm'

export default class ReviewListPage extends Component {
   renderReviews(){
       const Reviews = this.props.STORE.Reviews
       return Reviews.map(review => 
           <ReviewItem
                reviewTitle={review.reviewTitle}
                rating={review.rating}
                content={review.content}
           />
       )
   }
   
    render() {
        return (
            <div>
                <Header />
                <h3 id="gameTitle">{this.props.location.state.title}</h3>
                <h4 id="gameRating">Average Rating: {this.props.location.state.avgRating}</h4>
                <ReviewForm />
                {this.renderReviews()}
            </div>
        )
    }
}