import React, { Component } from 'react'
import './AddGame.css'
import config from '../../config'
import TokenService from '../../services/token-service'

export default class AddGame extends Component {
    state = {
        error: null,
        title: ''
        
    }

    handleSubmit = e => {
        e.preventDefault()
        const reqBody = {title: this.state.title}
        fetch(`${config.API_ENDPOINT}/games`, {
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
        .catch(res => {
            this.setState({ error: res.error})
            
        })
        setTimeout(() => window.location.reload(), 200)
    }
    render() {
        const { error } = this.state
        return(
            <form 
                className="addGameForm"
                onSubmit={this.handleSubmit}>
                <div role='alert' id='gamePageError'>
                {error && <p className='red'>{error}</p>}
                </div>
                <label htmlFor="addGame" className="addLabel">
                    Don't See a Game? Add it here:
                </label>
                <input 
                    type="text" 
                    className="addGameInput" 
                    required
                    onChange={e => this.setState({title: e.target.value})}
                />
                <button type="submit" className="addGameButton">Add</button>

            </form>
        )
    }
} 