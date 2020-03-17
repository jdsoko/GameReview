import React, { Component } from 'react'
import './AddGame.css'

export default class AddGame extends Component {
    handleSubmit = e => {
        e.preventDefault()
    }
    render() {
        return(
            <form 
                className="addGameForm"
                onSubmit={this.handleSubmit}>
                <label htmlFor="addGame" className="addLabel">
                    Don't See a Game? Add it here:
                </label>
                <input type="text" className="addGameInput" required/>
                <button type="submit" className="addGameButton">Add</button>

            </form>
        )
    }
} 